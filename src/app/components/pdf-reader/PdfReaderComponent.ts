import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-reader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pdf-container">
      @if (safeUrl) {
        <iframe [src]="safeUrl" width="100%" height="100%" frameborder="0"></iframe>
      } @else {
        <div class="error-msg">No se pudo cargar el documento.</div>
      }
    </div>
  `,
  styles: [`
    .pdf-container {
      width: 100%;
      height: 100%;
      background-color: #525659; /* Color de fondo típico de lectores PDF */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .error-msg {
      color: white;
      font-family: sans-serif;
    }
  `]
})
export class PdfReaderComponent implements OnInit {
  // El window-manager inyectará los datos aquí
  @Input() data?: { pdfUrl: string };

  sanitizer = inject(DomSanitizer);
  safeUrl?: SafeResourceUrl;

  ngOnInit() {
    if (this.data && this.data.pdfUrl) {
      // Le decimos a Angular que la URL es segura para usar en un iframe
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.pdfUrl);
    }
  }
}
