import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { ThemeService } from '../../core/services/theme.service';
import { TaskbarComponent } from '../taskbar/taskbar.component';
import { WindowContainerComponent } from '../window-container/window-container.component';
import { TerminalComponent } from '../../apps/terminal/terminal.component';
import { BrowserComponent } from '../../apps/browser/browser.component';
import { FileExplorerComponent } from '../../apps/file-explorer/file-explorer.component';
import { AboutComponent } from '../../apps/about/about.component';
import { I18nService } from '../../core/services/i18n.service';

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
      // 1. Abrimos las aplicaciones secundarias
      this.windowManager.openWindow('browser-main', this.i18n.translations()['app_browser'], BrowserComponent, 'pi pi-globe');
      this.windowManager.openWindow('files-main', this.i18n.translations()['app_file_explorer'], FileExplorerComponent, 'pi pi-folder');
      this.windowManager.openWindow('about-main', this.i18n.translations()['app_about'], AboutComponent, 'pi pi-user');

      // 2. Recorremos todas las ventanas abiertas hasta ahora y las minimizamos
      this.windowManager.windows().forEach(win => win.isMinimized = true);

      // 3. Abrimos la terminal al final para que quede en primer plano y con foco
      this.openTerminal();
    }, 500);
  }

  openTerminal() {
    const translatedTitle = this.i18n.translations()['app_terminal'];
    this.windowManager.openWindow('terminal-main', translatedTitle, TerminalComponent, 'pi pi-code');
  }
}
