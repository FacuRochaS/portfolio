import { Type } from '@angular/core';

export interface WindowDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface AppWindow {
  id: string;
  titleKey: string;     // Clave de traducción para el título de la ventana
  titleExtra?: string;  // Texto extra estático (ej: " - main.ts")
  component: Type<any>;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  dimensions: WindowDimensions;
  zIndex: number;
  icon?: string;
  data?: any;
}
