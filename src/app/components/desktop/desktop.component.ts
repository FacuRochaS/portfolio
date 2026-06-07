import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { ThemeService } from '../../core/services/theme.service';
import { TaskbarComponent } from '../taskbar/taskbar.component';
import { WindowContainerComponent } from '../window-container/window-container.component';
import { I18nService } from '../../core/services/i18n.service';
import { APPS } from '../../core/config/apps.config'; // Importamos tu registro

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule, TaskbarComponent, WindowContainerComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent implements OnInit {
  windowManager = inject(WindowManagerService);
  themeService = inject(ThemeService);
  i18n = inject(I18nService);

  ngOnInit() {
    setTimeout(() => {
      // Lista de apps que queremos abrir al inicio
      const appsToOpen = ['browser', 'file-explorer', 'about'];

      appsToOpen.forEach(appId => {
        const app = APPS.find(a => a.id === appId);
        if (app) {
          const title = this.i18n.translations()[app.titleKey];
          this.windowManager.openWindow(app.id + '-main', title, app.component, app.icon);
        }
      });

      // Minimizar todas las recién abiertas
      this.windowManager.windows().forEach(win => win.isMinimized = true);

      // Abrir terminal al final
      this.openTerminal();
    }, 500);
  }

  openTerminal() {
    const terminalApp = APPS.find(a => a.id === 'terminal');
    if (terminalApp) {
      const title = this.i18n.translations()[terminalApp.titleKey];
      this.windowManager.openWindow('terminal-main', title, terminalApp.component, terminalApp.icon);
    }
  }

  protected readonly APPS = APPS;
}
