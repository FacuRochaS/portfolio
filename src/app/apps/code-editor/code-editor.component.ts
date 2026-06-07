import { Component, inject, OnInit, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';
import { FILE_SYSTEM, FileItem } from '../../core/config/file-system.config';

interface TreeNode {
  id: string;
  name: string;
  isFolder: boolean;
  icon: string;
  expanded?: boolean;
  level: number;
  children?: TreeNode[];
}

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent implements OnInit {
  @Input() data?: any;

  i18n = inject(I18nService);

  // Variables de estado puro (sin traducir)
  rawProjectName = '';
  isProjectNameStatic = false;

  // El getter reacciona al Signal de i18n
  get projectName() {
    if (this.rawProjectName === '') return this.i18n.translations()['editor_select_project'];
    return this.isProjectNameStatic ? this.rawProjectName : (this.i18n.translations()[this.rawProjectName] || this.rawProjectName);
  }

  fileTree: TreeNode[] = [];

  activeFileId = '';
  activeFileName = '';
  activeFileIcon = 'pi pi-file';

  codeContent = '';
  highlightedCode = '';
  lineNumbers: number[] = [1];

  consoleOutput: { time: string; text: string; isError: boolean }[] = [];

  showProjectDropdown = false;
  availableProjects: FileItem[] = [];

  private defaultCodes: Record<string, string> = {
    'java': `// Java Application\npackage com.portfolio.app;\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Running application...");\n    }\n}\n`,
    'typescript': `// Welcome to the Code Editor!\nimport { Injectable } from '@angular/core';\n\n@Injectable({ providedIn: 'root' })\nexport class AppService {\n  constructor() {\n    console.log("Loading modules...");\n  }\n}\n`,
    'python': `# Backend Service\ndef get_data() -> dict:\n    return {"status": "ok"}\n\nprint("Running...")\n`,
    'angularjs': `// Angular Component\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: '<h1>Hello</h1>'\n})\nexport class AppComponent { }\n`,
    'html5': `<!DOCTYPE html>\n<html>\n<head>\n  <title>App</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>`,
    'css3': `body {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n`,
    'cplusplus': `#include <iostream>\n\nint main() {\n    std::cout << "Hello C++" << std::endl;\n    return 0;\n}\n`,
    'dockerfile': `FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]\n`,
    'yaml': `version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - "3000:3000"\n  db:\n    image: postgres:13\n    environment:\n      POSTGRES_USER: root\n      POSTGRES_PASSWORD: root\n`
  };

  ngOnInit() {
    this.availableProjects = FILE_SYSTEM.filter(f => f.type === 'project');

    if (this.data && this.data.initialFile) {
      this.loadProject(this.data.initialFile);
    } else {
      this.rawProjectName = ''; // Dispara "Selecciona un Proyecto"
      this.setEmptyProjectCode();
    }

    // Suscribirse a cambios de idioma para actualizar el código genérico si no hay archivo abierto
    this.i18n.currentLang; // Registra la dependencia si se usa en un computed, pero aquí haremos algo más manual
  }

  // Getter para que el texto del editor vacío se actualice con el idioma
  get currentCodeContent() {
    if (!this.activeFileId) {
      return this.rawProjectName === '' ? this.i18n.translations()['editor_no_project_desc'] : this.i18n.translations()['editor_empty_project'];
    }
    return this.codeContent;
  }

  setEmptyProjectCode() {
    this.activeFileId = '';
    this.activeFileName = '';
    this.codeContent = '';
    this.updateLines();
  }

  toggleProjectDropdown(event: Event) {
    event.stopPropagation();
    this.showProjectDropdown = !this.showProjectDropdown;
  }

  closeDropdown() {
    this.showProjectDropdown = false;
  }

  loadProject(projectId: string) {
    this.showProjectDropdown = false;
    const project = FILE_SYSTEM.find(f => f.id === projectId);

    if (project) {
      this.isProjectNameStatic = !!project.isStaticName;
      this.rawProjectName = project.nameKey;

      this.fileTree = this.buildTreeRecursively(projectId, 0);

      const firstFile = this.findFirstFile(this.fileTree);
      if (firstFile) {
        this.handleNodeClick(firstFile);
      } else {
        this.setEmptyProjectCode();
      }
    } else {
      this.isProjectNameStatic = false;
      this.rawProjectName = 'editor_loose_file';
      this.fileTree = [];

      const file = FILE_SYSTEM.find(f => f.id === projectId);
      if (file) this.openCodeFile(file);
    }
  }

  private buildTreeRecursively(parentId: string, level: number): TreeNode[] {
    const children = FILE_SYSTEM.filter(f => f.parentId === parentId);

    const folders = children.filter(c => c.type === 'folder' || c.type === 'project').sort((a,b) => a.nameKey.localeCompare(b.nameKey));
    const files = children.filter(c => c.type !== 'folder' && c.type !== 'project').sort((a,b) => a.nameKey.localeCompare(b.nameKey));

    const sortedChildren = [...folders, ...files];

    return sortedChildren.map(child => {
      const node: TreeNode = {
        id: child.id,
        name: child.nameKey, // Lo guardamos en crudo, lo traducimos en el HTML
        isFolder: child.type === 'folder' || child.type === 'project',
        icon: child.icon,
        expanded: level < 2,
        level: level,
        children: []
      };

      if (node.isFolder) {
        node.children = this.buildTreeRecursively(child.id, level + 1);
      }

      return node;
    });
  }

  // Traductor en vivo para el árbol
  getTranslatedNodeName(nodeNameKey: string): string {
    // Si el nombre tiene punto, asumimos que es archivo estático y no se traduce (ej: main.ts)
    if (nodeNameKey.includes('.')) return nodeNameKey;
    return this.i18n.translations()[nodeNameKey] || nodeNameKey;
  }

  private findFirstFile(nodes: TreeNode[]): TreeNode | null {
    for (const node of nodes) {
      if (!node.isFolder) return node;
    }
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        const found = this.findFirstFile(node.children);
        if (found) return found;
      }
    }
    return null;
  }

  handleNodeClick(node: TreeNode) {
    if (node.isFolder) {
      node.expanded = !node.expanded;
    } else {
      this.activeFileId = node.id;
      this.activeFileName = this.getTranslatedNodeName(node.name);
      this.activeFileIcon = node.icon;
      this.loadFileContent(node.name);
    }
  }

  openCodeFile(file: FileItem) {
    this.activeFileId = file.id;
    this.activeFileName = file.isStaticName ? file.nameKey : (this.i18n.translations()[file.nameKey] || file.nameKey);
    this.activeFileIcon = file.icon;

    this.loadFileContent(this.activeFileName);
  }

  loadFileContent(filename: string) {
    let type = 'unknown';
    const lowerName = filename.toLowerCase();

    if (lowerName.endsWith('.ts')) type = 'typescript';
    else if (lowerName.endsWith('.py')) type = 'python';
    else if (lowerName.endsWith('.java')) type = 'java';
    else if (lowerName.endsWith('.cpp')) type = 'cplusplus';
    else if (lowerName.endsWith('.html')) type = 'html5';
    else if (lowerName.endsWith('.css')) type = 'css3';
    else if (lowerName.includes('dockerfile')) type = 'dockerfile';
    else if (lowerName.endsWith('.yml') || lowerName.endsWith('.yaml')) type = 'yaml';

    let code = this.defaultCodes[type];
    if (!code) {
      // Como esto es estático en el momento de cargar, el comentario no cambiará de idioma en vivo si ya está escrito.
      // Pero para simular que escriben código, lo dejamos como texto base.
      const fileComment = this.i18n.translations()['editor_file_comment'];
      const writeCode = this.i18n.translations()['editor_write_code'];
      code = `${fileComment} ${filename}\n${writeCode}\n`;
    }
    this.codeContent = code;
    this.updateLines();
  }

  updateLines() {
    const linesCount = this.currentCodeContent.split('\n').length;
    this.lineNumbers = Array.from({ length: linesCount }, (_, i) => i + 1);
    this.applySyntaxHighlighting();
  }

  applySyntaxHighlighting() {
    let html = this.currentCodeContent
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    if (!html) {
      this.highlightedCode = '';
      return;
    }

    // 1. Strings
    html = html.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span class="str">$&</span>');

    // 2. Keywords (Agregamos el lookahead al final de la regex)
    const keywords = ['import', 'from', 'export', 'class', 'const', 'let', 'var', 'def', 'if', 'else', 'return', 'throw', 'raise', 'print', 'console', 'public', 'private', 'static', 'void', 'int', 'package', 'FROM', 'WORKDIR', 'COPY', 'RUN', 'EXPOSE', 'CMD', 'version', 'services', 'image', 'environment'];

    // Explicación: (?![^<]*>) evita que coincida con la palabra 'class' dentro de <span class="...">
    const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b(?![^<]*>)`, 'gi');
    html = html.replace(kwRegex, '<span class="kw">$&</span>');

    // 3. Decoradores y Funciones (También le agregamos el lookahead por seguridad)
    html = html.replace(/(@[A-Za-z0-9_]+)(?![^<]*>)/g, '<span class="fun">$1</span>');
    html = html.replace(/\b([A-Za-z0-9_]+)(?=\()(?![^<]*>)/g, '<span class="fun">$1</span>');

    // 4. Números
    html = html.replace(/\b(\d+)\b(?![^<]*>)/g, '<span class="num">$1</span>');

    // 5. Comentarios (Al final de todo)
    html = html.replace(/(\/\/.*|#.*)(?![^<]*>)/g, '<span class="com">$1</span>');

    this.highlightedCode = html;
  }

  runCode() {
    if (this.consoleOutput.length > 50) {
      this.consoleOutput = [];
    }

    const time = new Date().toLocaleTimeString();
    const compilingStr = this.i18n.translations()['editor_compiling'];
    this.consoleOutput.push({ time, text: `${compilingStr} ${this.activeFileName || 'code'}...`, isError: false });

    setTimeout(() => {
      const jokeIndex = Math.floor(Math.random() * 28) + 1;
      const jokeText = this.i18n.translations()[`joke_${jokeIndex}`] || 'Unknown Fatal Error.';

      const errTime = new Date().toLocaleTimeString();
      this.consoleOutput.push({ time: errTime, text: jokeText, isError: true });

      setTimeout(() => {
        const consoleEl = document.querySelector('.console-output');
        if (consoleEl) consoleEl.scrollTop = consoleEl.scrollHeight;
      }, 50);
    }, 800);
  }
}
