import { Component, inject, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { I18nService } from '../../core/services/i18n.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  windowManager = inject(WindowManagerService);
  i18n = inject(I18nService);
  themeService = inject(ThemeService); // Agregamos la inyección aquí

  typedName = '';
  showCursor = true;
  private fullName = 'Facundo';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      setTimeout(() => this.typeWriter(), 500);
    }
  }

  typeWriter(i: number = 0) {
    if (i < this.fullName.length) {
      this.typedName += this.fullName.charAt(i);
      setTimeout(() => this.typeWriter(i + 1), 150 + Math.random() * 100);
    } else {
      setTimeout(() => {
        this.windowManager.setPhase('desktop');
      }, 1000);
    }
  }
}
