import {Component, HostListener, inject, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit {
  windowManager = inject(WindowManagerService);
  logService = inject(LogService);



  ngOnInit() {
    // Esto se ejecuta apenas Angular carga, es 100% seguro.
    this.logService.logEvent('Usuario entró al sitio');
  }

  @HostListener('window:beforeunload')
  onUnload() {
    const buffer = this.logService.getRawBuffer();

    // Si quedaron eventos en el buffer (por ejemplo, el usuario navegó pero no llegó a 5)
    if (buffer.length > 0) {
      // 1. Creamos el objeto JSON
      const payload = JSON.stringify({
        type: 'event',
        message: 'Sesión finalizada (Cierre de pestaña):\n' + buffer.join('\n')
      });

      // 2. Lo convertimos en un Blob especificando que es un JSON
      const blob = new Blob([payload], { type: 'application/json' });

      // 3. sendBeacon lo enviará correctamente a Vercel
      navigator.sendBeacon('/api/send-message', blob);
    }
  }
}





