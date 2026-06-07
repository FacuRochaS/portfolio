import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FILE_SYSTEM, FileItem } from '../../core/config/file-system.config';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { TerminalComponent } from '../terminal/terminal.component';
import { MarkdownReaderComponent } from '../markdown-reader/markdown-reader.component';
import { CodeEditorComponent } from '../code-editor/code-editor.component';
import { I18nService } from '../../core/services/i18n.service';
import {PdfReaderComponent} from '../../components/pdf-reader/PdfReaderComponent';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-explorer.component.html',
  styleUrl: './file-explorer.component.css'
})
export class FileExplorerComponent implements OnInit {
  windowManager = inject(WindowManagerService);
  i18n = inject(I18nService);

  // Todo el sistema de archivos
  files = signal<FileItem[]>(FILE_SYSTEM);

  // Carpeta actual
  currentFolderId = signal<string>('root');

  // Carpetas ancladas a la izquierda
  pinnedFolders = computed(() => this.files().filter(f => f.isPinned));

  // Archivos de la carpeta actual
  currentFiles = computed(() => {
    return this.files().filter(f => f.parentId === this.currentFolderId());
  });

  // Breadcrumbs (ruta de carpetas)
  breadcrumbs = computed(() => {
    const path: FileItem[] = [];
    let currentId: string | null = this.currentFolderId();

    while (currentId) {
      const folder = this.files().find(f => f.id === currentId);
      if (folder) {
        path.unshift(folder);
        currentId = folder.parentId;
      } else {
        currentId = null;
      }
    }
    return path;
  });

  ngOnInit() {
    // Iniciar en la carpeta personal de Facundo por defecto
    this.currentFolderId.set('facundo');
  }

  openFolder(folderId: string) {
    this.currentFolderId.set(folderId);
  }

  handleFileClick(file: FileItem) {
    if (file.type === 'folder') {
      this.openFolder(file.id);
    } else {
      this.executeFileAction(file);
    }
  }

  executeFileAction(file: FileItem) {
    if (!file.action) return;

    // Obtener nombre traducido si no es estático
    const fileName = file.isStaticName ? file.nameKey : (this.i18n.translations()[file.nameKey] || file.nameKey);

    switch (file.action) {
      case 'openCodeEditor':
        // Abrimos el nuevo Editor de Código
        this.windowManager.openWindow(`editor-main`, `Code Editor - Workspace`, CodeEditorComponent, 'pi pi-code', { initialFile: file.id });
        break;
        case 'openPDF':
        if (file.data && file.data.url) {
          // Abrimos el PDF dentro de nuestro "Sistema Operativo"
          this.windowManager.openWindow(
            `pdf-${file.id}`,
            `PDF Reader - ${fileName}`,
            PdfReaderComponent,
            file.icon,
            { pdfUrl: file.data.url }
          );
        } else {
          console.error('No se encontró la URL del PDF para el archivo:', file.nameKey);
        }
        break;
      case 'openBrowser':
        if (file.data && file.data.url) {
          window.open(file.data.url, '_blank');
        } else {
          this.windowManager.openWindow(`browser-${file.id}`, `Browser - ${fileName}`, TerminalComponent, 'pi pi-globe');
        }
        break;
      case 'openMarkdown':
        // Abre el lector de Markdown pasándole los datos (el contenido)
        this.windowManager.openWindow(`md-${file.id}`, fileName, MarkdownReaderComponent, file.icon, file.data);
        break;
      default:
        console.warn('Acción no reconocida:', file.action);
    }
  }

  goBack() {
    const current = this.files().find(f => f.id === this.currentFolderId());
    if (current && current.parentId) {
      this.openFolder(current.parentId);
    }
  }

  // Helper para template
  getTranslatedName(file: FileItem): string {
    if (file.isStaticName) {
      return file.nameKey;
    }
    return this.i18n.translations()[file.nameKey] || file.nameKey;
  }
}
