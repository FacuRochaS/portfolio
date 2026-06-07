import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LogService {
  private http = inject(HttpClient);
  private eventBuffer: string[] = [];

  logEvent(action: string, appName?: string) {
    const timestamp = new Date().toLocaleTimeString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
    this.eventBuffer.push(`[${timestamp}] ${action} ${appName ? '(' + appName + ')' : ''}`);

    // Si la acción incluye "salió" o "entró", enviamos el mensaje al instante
    if (action.includes('salió') || action.includes('entró') || this.eventBuffer.length >= 5) {
      this.flushBuffer();
    }
  }

  getRawBuffer(): string[] {
    return [...this.eventBuffer];
  }

  flushBuffer() {
    if (this.eventBuffer.length === 0) return;
    const message = this.eventBuffer.join('\n');

    // Usamos la URL absoluta si estás en producción, o relativa
    this.http.post('/api/send-message', {
      type: 'event',
      message: `Resumen de actividad:\n${message}`
    }).subscribe();

    this.eventBuffer = [];
  }
}
