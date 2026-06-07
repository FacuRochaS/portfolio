import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-markdown-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markdown-reader.component.html',
  styleUrl: './markdown-reader.component.css',
  encapsulation: ViewEncapsulation.None // Para que los estilos se apliquen al HTML inyectado
})
export class MarkdownReaderComponent implements OnInit {
  @Input() data: any; // Recibiremos el { content: '...' } desde el file system

  parsedContent: string = '';

  ngOnInit() {
    if (this.data && this.data.content) {
      this.parsedContent = this.parseMarkdown(this.data.content);
    } else {
      this.parsedContent = '<i>(Archivo vacío)</i>';
    }
  }

  // Un parseador de Markdown súper liviano nativo con RegEx (H1, H2, listas, negritas, links)
  // Para proyectos más grandes, podrías instalar 'marked' (npm install marked)
  private parseMarkdown(md: string): string {
    let html = md;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Negritas
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');

    // Links [texto](url)
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2' target='_blank'>$1</a>");

    // Listas (saltos de línea y guiones)
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    // Envolver listas consecutivas en <ul> (simplificado)
    html = html.replace(/<\/li>\n<li>/gim, '</li><li>');
    html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');

    // Párrafos (cualquier cosa que no sea tag HTML y no esté vacío)
    html = html.split('\n').map(line => {
      const trimmed = line.trim();
      if (trimmed.length > 0 && !trimmed.startsWith('<')) {
        return `<p>${trimmed}</p>`;
      }
      return trimmed;
    }).join('\n');

    return html;
  }
}
