import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class TelegramService {
  private http = inject(HttpClient);

  sendMessage(name: string, message: string) {
    return this.http.post('/api/send-message', { name, message });
  }
}
