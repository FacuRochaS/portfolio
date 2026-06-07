import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';
import { WindowManagerService } from '../../core/services/window-manager.service';

interface TerminalLine {
  text: string;
  isCommand: boolean;
  isHtml?: boolean;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent implements OnInit, AfterViewChecked {
  i18n = inject(I18nService);
  windowManager = inject(WindowManagerService);

  @ViewChild('terminalInput') terminalInput!: ElementRef<HTMLInputElement>;
  @ViewChild('terminalBody') terminalBody!: ElementRef<HTMLDivElement>;

  static hasShownWelcome = false;

  currentInput = '';
  history: TerminalLine[] = [];
  prompt = 'facundo@portfolio:~$ ';

  ngOnInit() {
    // Escuchar cambios de idioma para que no quede la consola vieja desactualizada
    // Aunque en la terminal real de Linux el historial no cambia de idioma mágicamente,
    // lo dejamos así por simplicidad.
    if (!TerminalComponent.hasShownWelcome) {
      this.showWelcomeMessage();
      TerminalComponent.hasShownWelcome = true;
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  calculateAge(): number {
    const birthDate = new Date(2004, 3, 30); // 30 de abril de 2004 (Meses: 0 = Enero, 3 = Abril)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  showWelcomeMessage() {
    const age = this.calculateAge().toString();
    const t = this.i18n.translations();

    // Inyectamos la edad dinámicamente en el texto traducido
    const subtitle = t['term_welcome_sub'].replace('{age}', age);

    const welcomeHtml = `
      <div style="color: #4CAF50; font-weight: bold;">${t['term_welcome_title']}</div>
      <br>
      ${subtitle}
      <br><br>
      📁 <b>${t['term_files_title']}:</b> ${t['term_files_desc']}<br>
      🌐 <b>${t['term_browser_title']}:</b> ${t['term_browser_desc']}<br>
      💬 <b>${t['term_chat_title']}:</b> ${t['term_chat_desc']}<br>
      🎮 ${t['term_secret']}<br>
      <br>
      💡 <i>${t['term_help_hint']}</i>
    `;

    this.history.push({ text: welcomeHtml, isCommand: false, isHtml: true });
  }

  handleCommand() {
    const cmd = this.currentInput.trim();
    if (!cmd) return;

    this.history.push({ text: this.prompt + cmd, isCommand: true });
    this.processCommand(cmd.toLowerCase());
    this.currentInput = '';
  }

  processCommand(cmd: string) {
    const args = cmd.split(' ');
    const mainCmd = args[0];
    const t = this.i18n.translations();

    switch (mainCmd) {
      case 'help':
        this.history.push({ text: t['term_cmd_help'], isCommand: false });
        break;
      case 'clear':
        this.history = [];
        break;
      case 'date':
        this.history.push({ text: new Date().toString(), isCommand: false });
        break;
      case 'whoami':
        this.history.push({ text: 'facundo_rocha - admin', isCommand: false });
        break;
      case 'echo':
        this.history.push({ text: args.slice(1).join(' '), isCommand: false });
        break;
      case 'sudo':
        this.history.push({ text: t['term_cmd_sudo'], isCommand: false });
        break;
      default:
        // Inyectamos el comando fallido en la traducción
        const notFoundMsg = t['term_cmd_notfound'].replace('{cmd}', mainCmd);
        this.history.push({ text: notFoundMsg, isCommand: false });
    }
  }

  focusInput() {
    if (this.terminalInput) {
      this.terminalInput.nativeElement.focus();
    }
  }

  private scrollToBottom() {
    if (this.terminalBody) {
      this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
    }
  }
}
