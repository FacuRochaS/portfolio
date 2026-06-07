import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LogService {
  private http = inject(HttpClient);
  private eventBuffer: string[] = []; // Nuestro "depósito" de eventos

  logEvent(action: string, appName?: string) {
    const timestamp = new Date().toLocaleTimeString();
    const event = `[${timestamp}] ${action} ${appName ? '(' + appName + ')' : ''}`;

    this.eventBuffer.push(event);


    if (action.includes('salió')) {
      this.flushBuffer();
    }
    // O si acumulamos 5 eventos, enviamos para no perder datos si la página se cuelga
    else if (this.eventBuffer.length >= 5) {
      this.flushBuffer();
    }
  }

  getRawBuffer(): string[] {
    return [...this.eventBuffer];
  }

  private flushBuffer() {
    if (this.eventBuffer.length === 0) return;

    const message = this.eventBuffer.join('\n');
    this.http.post('/api/send-message', {
      type: 'event',
      message: `Resumen de sesión:\n${message}`
    }).subscribe(() => {
      this.eventBuffer = [];
    });
  }
}
