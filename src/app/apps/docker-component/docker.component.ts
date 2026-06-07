import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';

interface DockerContainer {
  id: string;
  name: string;
  image: string;
  status: 'Running' | 'Exited';
  port: string;
  icon: string;
}

@Component({
  selector: 'app-docker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './docker.component.html',
  styleUrl: './docker.component.css'
})
export class DockerComponent {
  i18n = inject(I18nService);

  activeTab = 'containers';

  containers: DockerContainer[] = [
    { id: 'a1b2c3d4', name: 'studer-api-backend', image: 'java:spring-boot', status: 'Running', port: '8080:8080', icon: 'devicon-java-plain colored' },
    { id: 'e5f6g7h8', name: 'studer-ui-frontend', image: 'angular:17-alpine', status: 'Running', port: '4200:80', icon: 'devicon-angularjs-plain colored' },
    { id: 'i9j0k1l2', name: 'tupyme-stock-db', image: 'postgres:15', status: 'Exited', port: '5432:5432', icon: 'pi pi-database' },
    { id: 'm3n4o5p6', name: 'lab-management-sys', image: 'java:17-jdk', status: 'Running', port: '9000:9000', icon: 'devicon-java-plain colored' }
  ];

  toggleContainerStatus(container: DockerContainer) {
    container.status = container.status === 'Running' ? 'Exited' : 'Running';
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
