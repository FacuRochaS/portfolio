export interface ProjectTech {
  name: string;
  icon: string; // Clases de Devicon o PrimeIcons
}

export interface ProjectGalleryItem {
  imageUrl: string;
  captionKey: string; // Clave para i18n
}

export interface PortfolioProject {
  id: string;
  domain: string; // La URL falsa que aparecerá en el navegador
  name: string;
  dateKey: string; // Ej: 'date_2026'
  shortDescKey: string;
  fullDescKey: string;
  mainImage: string;
  technologies: ProjectTech[];
  gallery: ProjectGalleryItem[];
  githubUrl?: string;
  liveUrl?: string;
}

// Tu "JSON" de proyectos
export const PROJECTS_DATABASE: PortfolioProject[] = [
  {
    id: 'studer',
    domain: 'https://studer.app/home',
    name: 'Studer',
    dateKey: 'project_date_studer',
    shortDescKey: 'studer_short_desc',
    fullDescKey: 'studer_full_desc',
    mainImage: 'assets/images/projects/studer-principal.png',
    technologies: [
      { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
      { name: 'Java Spring', icon: 'devicon-java-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' }
    ],
    gallery: [
      { imageUrl: 'assets/images/projects/studer-login.jpg', captionKey: 'studer_cap_1' },
      { imageUrl: 'assets/images/projects/studer-home.jpg', captionKey: 'studer_cap_2' }
    ],
    githubUrl: 'https://github.com/FacuRochaS/STUDER'
  },
  {
    id: 'tupyme',
    domain: 'https://tupyme-stock.com.ar',
    name: 'TuPyme',
    dateKey: 'project_date_tupyme',
    shortDescKey: 'tupyme_short_desc',
    fullDescKey: 'tupyme_full_desc',
    mainImage: 'assets/images/projects/tupyme-main.jpg',
    technologies: [
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' }
    ],
    gallery: [
      { imageUrl: 'assets/images/projects/tupyme-1.jpg', captionKey: 'tupyme_cap_1' }
    ],
    githubUrl: 'https://github.com/tu-usuario/tupyme'
  },
  {
    id: 'lab-sys',
    domain: 'https://lab-management.sys',
    name: 'Lab Management System',
    dateKey: 'project_date_lab',
    shortDescKey: 'lab_short_desc',
    fullDescKey: 'lab_full_desc',
    mainImage: 'assets/images/projects/lab-main.jpg',
    technologies: [
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'C#', icon: 'devicon-csharp-plain colored' }
    ],
    gallery: [],
    githubUrl: 'https://github.com/tu-usuario/lab-sys'
  }
];
