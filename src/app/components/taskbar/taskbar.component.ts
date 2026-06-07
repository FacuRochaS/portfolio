import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { I18nService } from '../../core/services/i18n.service';
import { APPS, AppDefinition } from '../../core/config/apps.config';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent {
  windowManager = inject(WindowManagerService);
  i18n = inject(I18nService);

  isStartMenuOpen = false;
  appsList = APPS;

  toggleWindow(id: string) {
    const win = this.windowManager.windows().find(w => w.id === id);
    if (win) {
      if (win.isFocused) {
        this.windowManager.toggleMinimize(id);
      } else {
        if (win.isMinimized) {
          this.windowManager.toggleMinimize(id);
        }
        this.windowManager.focusWindow(id);
      }
    }
  }

  toggleStartMenu(event: Event) {
    event.stopPropagation();
    this.isStartMenuOpen = !this.isStartMenuOpen;
  }

  openApp(app: AppDefinition) {
    this.windowManager.openWindow(app.id, app.titleKey, app.component, app.icon);
    this.isStartMenuOpen = false;
  }

  toggleLanguage() {
    this.i18n.toggleLanguage();
  }

  @HostListener('document:click')
  closeStartMenu() {
    if (this.isStartMenuOpen) {
      this.isStartMenuOpen = false;
    }
  }
}
