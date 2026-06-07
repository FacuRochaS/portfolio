import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TelegramService } from '../../core/services/telegram.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-messenger',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.css'
})
export class MessengerComponent {
  telegramService = inject(TelegramService);
  i18n = inject(I18nService);

  senderName = '';
  messageText = '';

  isSending = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  sendMessage() {
    if (!this.messageText.trim()) return;

    this.isSending = true;
    this.status = 'idle';

    this.telegramService.sendMessage(this.senderName, this.messageText).subscribe({
      next: () => {
        this.isSending = false;
        this.status = 'success';
        this.messageText = ''; // Limpiamos el mensaje pero dejamos el nombre

        // Volver al estado normal después de 3 segundos
        setTimeout(() => this.status = 'idle', 3000);
      },
      error: (err) => {
        console.error('Error al enviar mensaje:', err);
        this.isSending = false;
        this.status = 'error';
      }
    });
  }
}
