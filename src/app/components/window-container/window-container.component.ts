import { Component, Input, inject, HostListener, ElementRef, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppWindow } from '../../models/window.model';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-window-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window-container.component.html',
  styleUrl: './window-container.component.css'
})
export class WindowContainerComponent implements OnInit, OnChanges {
  @Input({ required: true }) windowData!: AppWindow;

  windowManager = inject(WindowManagerService);
  i18n = inject(I18nService);

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  // Drag state
  isDragging = false;
  isResizing = false;

  private dragStartX = 0;
  private dragStartY = 0;
  private initialX = 0;
  private initialY = 0;
  private resizeDir = '';
  private initialWidth = 0;
  private initialHeight = 0;

  // Propiedades públicas para el HTML
  currentX = 0;
  currentY = 0;
  currentWidth = 0;
  currentHeight = 0;

  ngOnInit() {
    this.syncDimensions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['windowData'] && !this.isDragging && !this.isResizing) {
      this.syncDimensions();
    }
  }

  // Prepara los inputs dinámicos para el ngComponentOutlet
  getComponentInputs() {
    return this.windowData.data ? { data: this.windowData.data } : {};
  }

  private syncDimensions() {
    this.currentX = this.windowData.dimensions.x;
    this.currentY = this.windowData.dimensions.y;
    this.currentWidth = this.windowData.dimensions.width;
    this.currentHeight = this.windowData.dimensions.height;
  }

  focusWindow() {
    this.windowManager.focusWindow(this.windowData.id);
  }

  minimize(event: Event) {
    event.stopPropagation();
    this.windowManager.toggleMinimize(this.windowData.id);
  }

  toggleMaximize(event?: Event) {
    if (event) event.stopPropagation();
    this.windowManager.toggleMaximize(this.windowData.id);
  }

  close(event: Event) {
    event.stopPropagation();
    this.windowManager.closeWindow(this.windowData.id);
  }

  // Drag logic
  startDrag(event: MouseEvent) {
    if (this.windowData.isMaximized) return;
    if ((event.target as HTMLElement).closest('.controls')) return;

    this.focusWindow();
    this.isDragging = true;

    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.initialX = this.currentX;
    this.initialY = this.currentY;

    event.preventDefault();
  }

  // Resize logic
  startResize(event: MouseEvent, dir: string) {
    if (this.windowData.isMaximized) return;
    this.focusWindow();
    this.isResizing = true;
    this.resizeDir = dir;

    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.initialWidth = this.currentWidth;
    this.initialHeight = this.currentHeight;

    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dx = event.clientX - this.dragStartX;
      const dy = event.clientY - this.dragStartY;

      this.currentX = this.initialX + dx;
      this.currentY = this.initialY + dy;

      const windowElement = this.el.nativeElement.querySelector('.window');
      if (windowElement && !this.windowData.isMaximized) {
        this.renderer.setStyle(windowElement, 'left', `${this.currentX}px`);
        this.renderer.setStyle(windowElement, 'top', `${this.currentY}px`);
      }

    } else if (this.isResizing) {
      if (this.resizeDir.includes('r')) {
        this.currentWidth = Math.max(250, this.initialWidth + (event.clientX - this.dragStartX));
      }
      if (this.resizeDir.includes('b')) {
        this.currentHeight = Math.max(150, this.initialHeight + (event.clientY - this.dragStartY));
      }

      const windowElement = this.el.nativeElement.querySelector('.window');
      if (windowElement && !this.windowData.isMaximized) {
        this.renderer.setStyle(windowElement, 'width', `${this.currentWidth}px`);
        this.renderer.setStyle(windowElement, 'height', `${this.currentHeight}px`);
      }
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.isDragging || this.isResizing) {
      this.windowManager.updateWindowDimensions(this.windowData.id, {
        x: this.currentX,
        y: this.currentY,
        width: this.currentWidth,
        height: this.currentHeight
      });
    }

    this.isDragging = false;
    this.isResizing = false;
  }
}
