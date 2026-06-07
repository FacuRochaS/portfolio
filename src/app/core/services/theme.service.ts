import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // El fondo por defecto con el que inicia el sistema
  currentWallpaper = signal<string>('/assets/images/default.jpg');

  setWallpaper(url: string) {
    this.currentWallpaper.set(url);
  }
}
