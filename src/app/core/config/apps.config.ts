import { Type } from '@angular/core';
import { TerminalComponent } from '../../apps/terminal/terminal.component';
import { FileExplorerComponent } from '../../apps/file-explorer/file-explorer.component';
import { CodeEditorComponent } from '../../apps/code-editor/code-editor.component';
import {DockerComponent} from '../../apps/docker-component/docker.component';
import {SqlClientComponent} from '../../apps/sql-client/sql-client.component';
import {BrowserComponent} from '../../apps/browser/browser.component';
import {SuikaGameComponent} from '../../apps/suika-game/suika-game.component';
import {SettingsComponent} from '../../apps/settings/settings.component';
import {AboutComponent} from '../../apps/about/about.component';
import {MessengerComponent} from '../../apps/messenger/messenger.component';

// Interfaz que define la estructura de una aplicación en nuestro OS
export interface AppDefinition {
  id: string;
  titleKey: string; // Clave de traducción en lugar de título estático
  icon: string;
  component: Type<any>;
}

// Registro centralizado de aplicaciones
export const APPS: AppDefinition[] = [
  {
    id: 'terminal',
    titleKey: 'app_terminal',
    icon: 'pi pi-code',
    component: TerminalComponent
  },
  {
    id: 'file-explorer',
    titleKey: 'app_file_explorer',
    icon: 'pi pi-folder',
    component: FileExplorerComponent
  },
  {
    id: 'code-editor',
    titleKey: 'app_code_editor',
    icon: 'devicon-vscode-plain',
    component: CodeEditorComponent
  },
  {
    id: 'browser',
    titleKey: 'app_browser',
    icon: 'pi pi-globe',
    component: BrowserComponent
  },

  {
    id: 'docker',
    titleKey: 'app_docker',
    icon: 'devicon-docker-plain',
    component: DockerComponent
  },
  {
    id: 'sql-client',
    titleKey: 'app_sql',
    icon: 'pi pi-database',
    component: SqlClientComponent
  },
  {
    id: 'suika-dev',
    titleKey: 'app_suika',
    icon: 'pi pi-face-smile',
    component: SuikaGameComponent
  },
  {
    id: 'about',
    titleKey: 'app_about',
    icon: 'pi pi-user',
    component: AboutComponent
  },
  {
    id: 'messenger',
    titleKey: 'app_messenger',
    icon: 'pi pi-telegram', // Icono de Telegram
    component: MessengerComponent
  },
  {
    id: 'settings',
    titleKey: 'app_settings',
    icon: 'pi pi-cog',
    component: SettingsComponent
  }
];
