import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  themeService = inject(ThemeService);
  i18n = inject(I18nService);

  // Lista de fondos disponibles. Deberás agregar estas imágenes en tu carpeta assets.
  wallpapers = [
    { id: 'default', nameKey: 'settings_wp_default', url: '/assets/images/default.jpg' },
    { id: 'java', nameKey: 'settings_wp_java', url: '/assets/images/code.jpeg' },
    { id: 'linux', nameKey: 'settings_wp_linux', url: '/assets/images/linux.jpg' },
    { id: 'windows', nameKey: 'settings_wp_windows', url: '/assets/images/windows.jpg' }
  ];

  changeWallpaper(url: string) {
    this.themeService.setWallpaper(url);
  }
}
