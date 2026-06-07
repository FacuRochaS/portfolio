import {Component, HostListener, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowManagerService } from './core/services/window-manager.service';
import { LoginComponent } from './components/login/login.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import {LogService} from './core/services/log.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, DesktopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  windowManager = inject(WindowManagerService);
  logService = inject(LogService);


  @HostListener('window:load')
  onLoad() {
    this.logService.logEvent('Usuario entró al sitio');
  }

  @HostListener('window:beforeunload')
  onUnload() {
    const buffer = this.logService.getRawBuffer();
    if (buffer.length > 0) {
      const data = new FormData();
      data.append('type', 'event');
      data.append('message', 'Sesión finalizada (Cierre inesperado):\n' + buffer.join('\n'));

      // sendBeacon es la forma más segura de enviar datos al cerrar la pestaña
      navigator.sendBeacon('/api/send-message', data);
    }
  }
}





