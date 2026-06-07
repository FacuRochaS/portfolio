import {Injectable, signal, computed, Type, effect, PLATFORM_ID, Inject, inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppWindow, WindowDimensions } from '../../models/window.model';
import { SystemState, SystemData, SystemPhase } from '../../models/system.model';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class WindowManagerService {
  logService = inject(LogService);
  readonly windows = signal<AppWindow[]>([]);
  readonly systemState = signal<SystemState>({
    phase: 'login',
    language: 'es',
    theme: 'dark'
  });
  readonly systemData = signal<SystemData>({
    time: new Date(),
    batteryLevel: 404
  });

  readonly viewportSize = signal({ width: 0, height: 0 });
  readonly isMobile = computed(() => this.viewportSize().width <= 768);

  private zIndexCounter = 100;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.initTimeUpdates();
      this.initResizeListener();
      this.updateViewportSize();
    }
  }

  setPhase(phase: SystemPhase) {
    this.systemState.update(s => ({ ...s, phase }));
  }

  // Actualizado para separar titleKey (clave del i18n) de titleExtra (el nombre del archivo estático)
  openWindow(id: string, titleKey: string, component: Type<any>, icon?: string, data?: any, titleExtra?: string) {
    const existingWindow = this.windows().find(w => w.id === id);
    if (existingWindow) {
      this.focusWindow(id);
      if (existingWindow.isMinimized) {
        this.toggleMinimize(id);
      }

      // Actualizamos los datos y el subtítulo si cambian
      this.windows.update(wins => wins.map(w => w.id === id ? {
        ...w,
        data: data !== undefined ? data : w.data,
        titleExtra: titleExtra !== undefined ? titleExtra : w.titleExtra
      } : w));
      this.logService.logEvent('Abrió aplicación', id);
      return;
    }

    this.zIndexCounter++;
    const isMobileView = this.isMobile();

    const newWindow: AppWindow = {
      id,
      titleKey,
      titleExtra,
      component,
      isMinimized: false,
      isMaximized: isMobileView,
      isFocused: true,
      dimensions: {
        x: isMobileView ? 0 : 50 + (this.windows().length * 20),
        y: isMobileView ? 0 : 50 + (this.windows().length * 20),
        width: isMobileView ? this.viewportSize().width : 800,
        height: isMobileView ? this.viewportSize().height - 40 : 500
      },
      zIndex: this.zIndexCounter,
      icon: icon || 'pi pi-window-maximize',
      data
    };

    const updatedWindows = this.windows().map(w => ({ ...w, isFocused: false }));
    this.windows.set([...updatedWindows, newWindow]);
  }

  closeWindow(id: string) {
    this.windows.update(windows => windows.filter(w => w.id !== id));
  }

  toggleMinimize(id: string) {
    this.windows.update(windows => windows.map(w => {
      if (w.id === id) {
        return { ...w, isMinimized: !w.isMinimized, isFocused: !w.isMinimized };
      }
      return w;
    }));
    const activeWindow = this.windows().find(w => w.id === id);
    if (activeWindow && activeWindow.isMinimized) {
      this.focusTopWindow();
    }
  }

  toggleMaximize(id: string) {
    this.windows.update(windows => windows.map(w => {
      if (w.id === id) {
        return { ...w, isMaximized: !w.isMaximized };
      }
      return w;
    }));
  }

  focusWindow(id: string) {
    this.zIndexCounter++;
    this.windows.update(windows => windows.map(w => ({
      ...w,
      isFocused: w.id === id,
      zIndex: w.id === id ? this.zIndexCounter : w.zIndex
    })));
  }

  updateWindowDimensions(id: string, dimensions: Partial<WindowDimensions>) {
    this.windows.update(windows => windows.map(w => {
      if (w.id === id) {
        return { ...w, dimensions: { ...w.dimensions, ...dimensions } };
      }
      return w;
    }));
  }

  private focusTopWindow() {
    const visibleWindows = this.windows().filter(w => !w.isMinimized);
    if (visibleWindows.length > 0) {
      const topWindow = visibleWindows.reduce((prev, current) =>
        (prev.zIndex > current.zIndex) ? prev : current
      );
      this.focusWindow(topWindow.id);
    }
  }

  private initResizeListener() {
    window.addEventListener('resize', () => this.updateViewportSize());
  }

  private updateViewportSize() {
    this.viewportSize.set({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  private initTimeUpdates() {
    setInterval(() => {
      this.systemData.update(d => ({ ...d, time: new Date() }));
    }, 1000);
  }
}
