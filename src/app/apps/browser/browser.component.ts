import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { I18nService } from '../../core/services/i18n.service';
import { PROJECTS_DATABASE, PortfolioProject } from '../../core/data/projects.data';

@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.css'
})
export class BrowserComponent {
  i18n = inject(I18nService);
  sanitizer = inject(DomSanitizer);

  projects = PROJECTS_DATABASE;

  homeUrl = 'https://facundo.search';
  currentUrl = this.homeUrl;
  searchQuery = '';

  activeProject: PortfolioProject | null = null;
  history: string[] = [this.homeUrl];

  // Nuevo estado para la página de error
  is404 = false;
  dinoGameUrl: SafeResourceUrl;

  constructor() {
    // Usamos un clon open-source súper estable del dino de Chrome
    this.dinoGameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://wayou.github.io/t-rex-runner/');
  }

  get filteredProjects() {
    if (!this.searchQuery.trim()) return this.projects;
    const query = this.searchQuery.toLowerCase();
    return this.projects.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.technologies.some(t => t.name.toLowerCase().includes(query))
    );
  }

  goHome() {
    this.activeProject = null;
    this.is404 = false;
    this.updateUrl(this.homeUrl);
  }

  openProject(project: PortfolioProject) {
    this.activeProject = project;
    this.is404 = false;
    this.updateUrl(project.domain);
    this.searchQuery = '';
  }

  // Nueva función: Se ejecuta al presionar ENTER en la barra de direcciones
  navigateToUserUrl() {
    const url = this.currentUrl.trim().toLowerCase();

    if (url === this.homeUrl) {
      this.goHome();
      return;
    }

    // Buscamos si la URL coincide con algún proyecto
    const project = this.projects.find(p => p.domain.toLowerCase() === url);

    if (project) {
      this.activeProject = project;
      this.is404 = false;
    } else {
      // Si no existe, activamos el juego del dinosaurio
      this.activeProject = null;
      this.is404 = true;
    }

    if (this.history[this.history.length - 1] !== url) {
      this.history.push(url);
    }
  }

  updateUrl(url: string) {
    this.currentUrl = url;
    if (this.history[this.history.length - 1] !== url) {
      this.history.push(url);
    }
  }

  goBack() {
    if (this.history.length > 1) {
      this.history.pop();
      const prevUrl = this.history[this.history.length - 1];
      this.currentUrl = prevUrl;

      if (prevUrl === this.homeUrl) {
        this.activeProject = null;
        this.is404 = false;
      } else {
        const project = this.projects.find(p => p.domain === prevUrl);
        if (project) {
          this.activeProject = project;
          this.is404 = false;
        } else {
          // Si volvimos a una página inventada que estaba en el historial
          this.activeProject = null;
          this.is404 = true;
        }
      }
    }
  }
}
