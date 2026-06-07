export type FileType = 'file' | 'folder' | 'pdf' | 'project' | 'image' | 'link' | 'markdown' | 'code';

export interface FileItem {
  id: string;
  nameKey: string;
  isStaticName?: boolean;
  type: FileType;
  icon: string;
  parentId: string | null;
  action?: string;
  data?: any;
  isPinned?: boolean;
}

export const FILE_SYSTEM: FileItem[] = [
  // --- CARPETAS PRINCIPALES ---
  { id: 'root', nameKey: 'fs_root', type: 'folder', icon: 'pi pi-desktop', parentId: null, isPinned: true },
  { id: 'facundo', nameKey: 'fs_facundo', type: 'folder', icon: 'pi pi-folder-open', parentId: 'root', isPinned: true },
  { id: 'projects', nameKey: 'fs_projects', type: 'folder', icon: 'pi pi-folder', parentId: 'root', isPinned: true },

  // NUEVAS CARPETAS
  { id: 'technologies', nameKey: 'fs_technologies', type: 'folder', icon: 'pi pi-code', parentId: 'root', isPinned: true },
  { id: 'interests', nameKey: 'fs_interests', type: 'folder', icon: 'pi pi-heart', parentId: 'root', isPinned: true },
  { id: 'information', nameKey: 'fs_information', type: 'folder', icon: 'pi pi-info-circle', parentId: 'root', isPinned: true },

  // --- CONTENIDO DE CARPETA FACUNDO ROCHA SERET ---
  {
    id: 'cv_real',
    nameKey: 'CV-FacundoRochaSeret.pdf',
    isStaticName: true,
    type: 'pdf',
    icon: 'pi pi-file-pdf',
    parentId: 'facundo',
    action: 'openPDF',
    data: { url: 'assets/pdfs/CV-FacundoRochaSeret.pdf' }
  },
  { id: 'folder_google', nameKey: 'fs_google', type: 'folder', icon: 'pi pi-folder', parentId: 'facundo' },
  { id: 'folder_utn', nameKey: 'fs_utn', type: 'folder', icon: 'pi pi-folder', parentId: 'facundo' },
  { id: 'folder_famaf', nameKey: 'fs_famaf', type: 'folder', icon: 'pi pi-folder', parentId: 'facundo' },

  // --- DENTRO DE UNC-GOOGLE ---
  {
    id: 'pdf_google_ia',
    nameKey: 'ia-unc-google.pdf',
    isStaticName: true,
    type: 'pdf',
    icon: 'pi pi-file-pdf',
    parentId: 'folder_google',
    action: 'openPDF',
    data: { url: 'assets/pdfs/ia-unc-google.pdf' }
  },
  {
    id: 'pdf_google_data',
    nameKey: 'data-unc-google.pdf',
    isStaticName: true,
    type: 'pdf',
    icon: 'pi pi-file-pdf',
    parentId: 'folder_google',
    action: 'openPDF',
    data: { url: 'assets/pdfs/data-unc-google.pdf' }
  },


  // --- CONTENIDO DE TECNOLOGÍAS ---
  // No tienen acción, solo sirven para mostrar el ícono y saber que las manejas.
  { id: 'tech_angular', nameKey: 'Angular', isStaticName: true, type: 'image', icon: 'devicon-angularjs-plain colored', parentId: 'technologies' },
  { id: 'tech_typescript', nameKey: 'TypeScript', isStaticName: true, type: 'image', icon: 'devicon-typescript-plain colored', parentId: 'technologies' },
  { id: 'tech_python', nameKey: 'Python', isStaticName: true, type: 'image', icon: 'devicon-python-plain colored', parentId: 'technologies' },
  { id: 'tech_docker', nameKey: 'Docker', isStaticName: true, type: 'image', icon: 'devicon-docker-plain colored', parentId: 'technologies' },
  { id: 'tech_nodejs', nameKey: 'Node.js', isStaticName: true, type: 'image', icon: 'devicon-nodejs-plain colored', parentId: 'technologies' },
  { id: 'tech_git', nameKey: 'Git', isStaticName: true, type: 'image', icon: 'devicon-git-plain colored', parentId: 'technologies' },
  { id: 'tech_sql', nameKey: 'SQL', isStaticName: true, type: 'image', icon: 'devicon-azuresqldatabase-plain colored', parentId: 'technologies' },

  // --- CONTENIDO DE INTERESES (.md) ---
  {
    id: 'int_hobbies',
    nameKey: 'hobbies.md',
    isStaticName: true,
    type: 'markdown',
    icon: 'devicon-markdown-original',
    parentId: 'interests',
    action: 'openMarkdown',
    data: {
      content: `# Mis Pasatiempos\n\nMe encanta explorar nuevas áreas de la tecnología.\n\n- **Lectura**: Especialmente ciencia ficción y tecnología.\n- **Deportes**: Salir a correr y mantenerme activo.\n- **Desarrollo**: Aprender nuevos frameworks y lenguajes en mi tiempo libre.`
    }
  },

  // --- CONTENIDO DE INFORMACIÓN (.md) ---
  {
    id: 'info_contact',
    nameKey: 'contacto.md',
    isStaticName: true,
    type: 'markdown',
    icon: 'devicon-markdown-original',
    parentId: 'information',
    action: 'openMarkdown',
    data: {
      content: `# Contacto\n\nSi deseas comunicarte conmigo para una oportunidad laboral o proyecto:\n\n- **Email**: tuemail@ejemplo.com\n- **LinkedIn**: [Facundo Rocha Seret](https://linkedin.com)\n- **GitHub**: [Mi Perfil](https://github.com)`
    }
  },
  {
    id: 'info_bio',
    nameKey: 'sobre_mi.md',
    isStaticName: true,
    type: 'markdown',
    icon: 'devicon-markdown-original',
    parentId: 'information',
    action: 'openMarkdown',
    data: {
      content: `# Sobre Mí\n\n¡Hola! Soy Facundo.\n\nSoy un desarrollador apasionado por el código limpio, la arquitectura de software y la resolución de problemas complejos. Me adapto rápidamente a nuevas tecnologías y disfruto trabajando en equipo.`
    }
  },


  {
    id: 'proj_STUDER',
    nameKey: 'STUDER',
    isStaticName: true,
    type: 'project',
    icon: 'pi pi-folder-open',
    parentId: 'projects',
    action: 'openCodeEditor',
    data: {
      projectPath: 'proj_STUDER'
    }
  },
  {
    id: 'proj_STUDER_Backend',
    nameKey: 'Backend',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER'
  },
  {
    id: 'proj_STUDER_Docker',
    nameKey: 'Docker',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER'
  },
  {
    id: 'proj_STUDER_Documentation',
    nameKey: 'Documentation',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER'
  },
  {
    id: 'proj_STUDER_Frontend',
    nameKey: 'Frontend',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER'
  },
  {
    id: 'proj_STUDER__gitignore',
    nameKey: '.gitignore',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_README_md',
    nameKey: 'README.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_STUDER',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER',
    nameKey: 'STUDER',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend'
  },
  {
    id: 'proj_STUDER_Backend_STUDER-MEDIA',
    nameKey: 'STUDER-MEDIA',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend'
  },
  {
    id: 'proj_STUDER_Backend_STUDER__mvn',
    nameKey: '.mvn',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src',
    nameKey: 'src',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER'
  },
  {
    id: 'proj_STUDER_Backend_STUDER__gitattributes',
    nameKey: '.gitattributes',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER__gitignore',
    nameKey: '.gitignore',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_Dockerfile',
    nameKey: 'Dockerfile',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_HELP_md',
    nameKey: 'HELP.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_STUDER_Backend_STUDER',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_mvnw',
    nameKey: 'mvnw',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_mvnw_cmd',
    nameKey: 'mvnw.cmd',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER',
    data: {
      extension: '.cmd'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_pom_xml',
    nameKey: 'pom.xml',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Backend_STUDER',
    data: {
      extension: '.xml'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER__mvn_wrapper',
    nameKey: 'wrapper',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER__mvn'
  },
  {
    id: 'proj_STUDER_Backend_STUDER__mvn_wrapper_maven-wrapper_properties',
    nameKey: 'maven-wrapper.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER__mvn_wrapper',
    data: {
      extension: '.properties'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main',
    nameKey: 'main',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_test',
    nameKey: 'test',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java',
    nameKey: 'java',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_resources',
    nameKey: 'resources',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu',
    nameKey: 'facu',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer',
    nameKey: 'studer',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config',
    nameKey: 'config',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers',
    nameKey: 'controllers',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs',
    nameKey: 'DTOs',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities',
    nameKey: 'entities',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    nameKey: 'exceptions',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_factories',
    nameKey: 'factories',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers',
    nameKey: 'mappers',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_models',
    nameKey: 'models',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    nameKey: 'repositories',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security',
    nameKey: 'security',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    nameKey: 'services',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_StuderApplication_java',
    nameKey: 'StuderApplication.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config_AppConfig_java',
    nameKey: 'AppConfig.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config_ApplicationStart_java',
    nameKey: 'ApplicationStart.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config_I18nConfig_java',
    nameKey: 'I18nConfig.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config_RequestLoggingFilter_java',
    nameKey: 'RequestLoggingFilter.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config_WebClientConfig_java',
    nameKey: 'WebClientConfig.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_config',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers_AuthController_java',
    nameKey: 'AuthController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers_DirectMessageController_java',
    nameKey: 'DirectMessageController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers_DiscussionController_java',
    nameKey: 'DiscussionController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers_FriendController_java',
    nameKey: 'FriendController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers_NotificationController_java',
    nameKey: 'NotificationController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers_UserController_java',
    nameKey: 'UserController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_auth',
    nameKey: 'auth',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    nameKey: 'discussions',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_media',
    nameKey: 'media',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages',
    nameKey: 'messages',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification',
    nameKey: 'notification',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    nameKey: 'user',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_auth_LoginRequestDTO_java',
    nameKey: 'LoginRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_auth',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_auth_LoginResponseDTO_java',
    nameKey: 'LoginResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_auth',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_auth_RefreshResponseDTO_java',
    nameKey: 'RefreshResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_auth',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions_DiscussionCreateRequestDTO_java',
    nameKey: 'DiscussionCreateRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions_DiscussionMessageCreateRequestDTO_java',
    nameKey: 'DiscussionMessageCreateRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions_DiscussionMessagePageResponseDTO_java',
    nameKey: 'DiscussionMessagePageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions_DiscussionMessageResponseDTO_java',
    nameKey: 'DiscussionMessageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions_DiscussionPageResponseDTO_java',
    nameKey: 'DiscussionPageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions_DiscussionResponseDTO_java',
    nameKey: 'DiscussionResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions_MessageResponseDTO_java',
    nameKey: 'MessageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_media_ImageUploadResponseDTO_java',
    nameKey: 'ImageUploadResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_media',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages_ChatListPageResponseDTO_java',
    nameKey: 'ChatListPageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages_ChatPreviewDTO_java',
    nameKey: 'ChatPreviewDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages_DirectMessagePageResponseDTO_java',
    nameKey: 'DirectMessagePageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages_DirectMessageRequestDTO_java',
    nameKey: 'DirectMessageRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages_DirectMessageResponseDTO_java',
    nameKey: 'DirectMessageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_messages',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification_NotificationDeleteRequestDTO_java',
    nameKey: 'NotificationDeleteRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification_NotificationPageResponseDTO_java',
    nameKey: 'NotificationPageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification_NotificationResponseDTO_java',
    nameKey: 'NotificationResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification_UserNotificationResponseDTO_java',
    nameKey: 'UserNotificationResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_notification',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_FollowRequestDTO_java',
    nameKey: 'FollowRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_FriendResponseDTO_java',
    nameKey: 'FriendResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_FriendsListResponseDTO_java',
    nameKey: 'FriendsListResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_FriendStatusResponseDTO_java',
    nameKey: 'FriendStatusResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_UserCreateRequestDTO_java',
    nameKey: 'UserCreateRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_UserPublicResponseDTO_java',
    nameKey: 'UserPublicResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_UserResponseDTO_java',
    nameKey: 'UserResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_UserSearchPageResponseDTO_java',
    nameKey: 'UserSearchPageResponseDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user_UserUpdateRequestDTO_java',
    nameKey: 'UserUpdateRequestDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_DTOs_user',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_curses',
    nameKey: 'curses',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions',
    nameKey: 'discussions',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_events',
    nameKey: 'events',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_messages',
    nameKey: 'messages',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_notifications',
    nameKey: 'notifications',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_BaseEntity_java',
    nameKey: 'BaseEntity.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_Friend_java',
    nameKey: 'Friend.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_LinkedType_java',
    nameKey: 'LinkedType.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_RefreshToken_java',
    nameKey: 'RefreshToken.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_Tag_java',
    nameKey: 'Tag.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_User_java',
    nameKey: 'User.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_curses_Course_java',
    nameKey: 'Course.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_curses',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions_Discussion_java',
    nameKey: 'Discussion.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions_DiscussionMessage_java',
    nameKey: 'DiscussionMessage.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions_MessageLike_java',
    nameKey: 'MessageLike.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions_UserDiscussionFav_java',
    nameKey: 'UserDiscussionFav.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_discussions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_events_Event_java',
    nameKey: 'Event.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_events',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_events_EventType_java',
    nameKey: 'EventType.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_events',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_events_UserEvent_java',
    nameKey: 'UserEvent.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_events',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_messages_DirectMessage_java',
    nameKey: 'DirectMessage.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_messages',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_notifications_Notification_java',
    nameKey: 'Notification.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_notifications',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_notifications_UserNotification_java',
    nameKey: 'UserNotification.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_entities_notifications',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_ApiError_java',
    nameKey: 'ApiError.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_DiscussionClosedException_java',
    nameKey: 'DiscussionClosedException.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_GlobalExceptionHandler_java',
    nameKey: 'GlobalExceptionHandler.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_InvalidLoginException_java',
    nameKey: 'InvalidLoginException.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_InvalidRefreshTokenException_java',
    nameKey: 'InvalidRefreshTokenException.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_ResourceNotFoundException_java',
    nameKey: 'ResourceNotFoundException.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_TokenReuseDetectedException_java',
    nameKey: 'TokenReuseDetectedException.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions_UnauthorizedOperationException_java',
    nameKey: 'UnauthorizedOperationException.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_exceptions',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_factories_NotificationFactory_java',
    nameKey: 'NotificationFactory.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_factories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers_DirectMessageMapper_java',
    nameKey: 'DirectMessageMapper.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers_DiscussionMapper_java',
    nameKey: 'DiscussionMapper.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers_DiscussionMessageMapper_java',
    nameKey: 'DiscussionMessageMapper.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers_FriendMapper_java',
    nameKey: 'FriendMapper.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers_NotificationMapper_java',
    nameKey: 'NotificationMapper.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers_UserMapper_java',
    nameKey: 'UserMapper.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_mappers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_models_LinkedAtModel_java',
    nameKey: 'LinkedAtModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_DirectMessageRepository_java',
    nameKey: 'DirectMessageRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_DiscussionMessageRepository_java',
    nameKey: 'DiscussionMessageRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_DiscussionRepository_java',
    nameKey: 'DiscussionRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_FriendRepository_java',
    nameKey: 'FriendRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_MessageLikeRepository_java',
    nameKey: 'MessageLikeRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_NotificationRepository_java',
    nameKey: 'NotificationRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_RefreshTokenRepository_java',
    nameKey: 'RefreshTokenRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_TagRepository_java',
    nameKey: 'TagRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_UserDiscussionFavRepository_java',
    nameKey: 'UserDiscussionFavRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_UserNotificationRepository_java',
    nameKey: 'UserNotificationRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories_UserRepository_java',
    nameKey: 'UserRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security_JwtAuthenticationFilter_java',
    nameKey: 'JwtAuthenticationFilter.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security_JwtUtil_java',
    nameKey: 'JwtUtil.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security_LoginRateLimiter_java',
    nameKey: 'LoginRateLimiter.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security_SecurityConfig_java',
    nameKey: 'SecurityConfig.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security_SecurityUtils_java',
    nameKey: 'SecurityUtils.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_security',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    nameKey: 'implementation',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_AuthService_java',
    nameKey: 'AuthService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_DirectMessageService_java',
    nameKey: 'DirectMessageService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_DiscussionMessageService_java',
    nameKey: 'DiscussionMessageService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_DiscussionService_java',
    nameKey: 'DiscussionService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_FriendService_java',
    nameKey: 'FriendService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_GenericService_java',
    nameKey: 'GenericService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_LinkedAtResolverService_java',
    nameKey: 'LinkedAtResolverService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_MessageLikeService_java',
    nameKey: 'MessageLikeService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_NotificationService_java',
    nameKey: 'NotificationService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_RefreshTokenService_java',
    nameKey: 'RefreshTokenService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_TagService_java',
    nameKey: 'TagService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_UserDiscussionFavService_java',
    nameKey: 'UserDiscussionFavService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_UserService_java',
    nameKey: 'UserService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_AuthServiceImpl_java',
    nameKey: 'AuthServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_DirectMessageServiceImpl_java',
    nameKey: 'DirectMessageServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_DiscussionMessageServiceImpl_java',
    nameKey: 'DiscussionMessageServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_DiscussionServiceImpl_java',
    nameKey: 'DiscussionServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_FriendServiceImpl_java',
    nameKey: 'FriendServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_GenericServiceImpl_java',
    nameKey: 'GenericServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_LinkedAtResolverServiceImpl_java',
    nameKey: 'LinkedAtResolverServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_MessageLikeServiceImpl_java',
    nameKey: 'MessageLikeServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_NotificationServiceImpl_java',
    nameKey: 'NotificationServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_RefreshTokenServiceImpl_java',
    nameKey: 'RefreshTokenServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_TagServiceImpl_java',
    nameKey: 'TagServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_UserDiscussionFavServiceImpl_java',
    nameKey: 'UserDiscussionFavServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation_UserServiceImpl_java',
    nameKey: 'UserServiceImpl.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_java_facu_studer_services_implementation',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_resources_application-dev_properties',
    nameKey: 'application-dev.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_resources',
    data: {
      extension: '.properties'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_resources_application-prod_properties',
    nameKey: 'application-prod.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_resources',
    data: {
      extension: '.properties'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_resources_application_properties',
    nameKey: 'application.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_resources',
    data: {
      extension: '.properties'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_resources_messages_properties',
    nameKey: 'messages.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_resources',
    data: {
      extension: '.properties'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_main_resources_messages_es_properties',
    nameKey: 'messages_es.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER_src_main_resources',
    data: {
      extension: '.properties'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_test_java',
    nameKey: 'java',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_test'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_test_java_facu',
    nameKey: 'facu',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_test_java'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_test_java_facu_studer',
    nameKey: 'studer',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Backend_STUDER_src_test_java_facu'
  },
  {
    id: 'proj_STUDER_Backend_STUDER_src_test_java_facu_studer_StuderApplicationTests_java',
    nameKey: 'StuderApplicationTests.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER_src_test_java_facu_studer',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER-MEDIA_Dockerfile',
    nameKey: 'Dockerfile',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Backend_STUDER-MEDIA',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER-MEDIA_main_py',
    nameKey: 'main.py',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-python-plain colored',
    parentId: 'proj_STUDER_Backend_STUDER-MEDIA',
    data: {
      extension: '.py'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER-MEDIA_placeholder_txt',
    nameKey: 'placeholder.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_STUDER_Backend_STUDER-MEDIA',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_STUDER_Backend_STUDER-MEDIA_requirements_txt',
    nameKey: 'requirements.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_STUDER_Backend_STUDER-MEDIA',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_STUDER_Docker__env',
    nameKey: '.env',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Docker',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Docker_docker-compose_yml',
    nameKey: 'docker-compose.yml',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-list',
    parentId: 'proj_STUDER_Docker',
    data: {
      extension: '.yml'
    }
  },
  {
    id: 'proj_STUDER_Docker_nginx_conf',
    nameKey: 'nginx.conf',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Docker',
    data: {
      extension: '.conf'
    }
  },
  {
    id: 'proj_STUDER_Documentation_NetworkArchitecture_jpeg',
    nameKey: 'NetworkArchitecture.jpeg',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_STUDER_Documentation',
    data: {
      extension: '.jpeg'
    }
  },
  {
    id: 'proj_STUDER_Documentation_README_DEPLOYMENT_md',
    nameKey: 'README_DEPLOYMENT.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_STUDER_Documentation',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER',
    nameKey: 'STUDER',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER__vscode',
    nameKey: '.vscode',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_public',
    nameKey: 'public',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src',
    nameKey: 'src',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER__editorconfig',
    nameKey: '.editorconfig',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER__gitignore',
    nameKey: '.gitignore',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_angular_json',
    nameKey: 'angular.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_Dockerfile',
    nameKey: 'Dockerfile',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_nginx-spa_conf',
    nameKey: 'nginx-spa.conf',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.conf'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_package-lock_json',
    nameKey: 'package-lock.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_package_json',
    nameKey: 'package.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_PROJECT_DOCUMENTATION_md',
    nameKey: 'PROJECT_DOCUMENTATION.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_README_md',
    nameKey: 'README.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_tsconfig_app_json',
    nameKey: 'tsconfig.app.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_tsconfig_json',
    nameKey: 'tsconfig.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_tsconfig_spec_json',
    nameKey: 'tsconfig.spec.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER__vscode_extensions_json',
    nameKey: 'extensions.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER__vscode',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER__vscode_launch_json',
    nameKey: 'launch.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER__vscode',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER__vscode_tasks_json',
    nameKey: 'tasks.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER__vscode',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_public_favicon_ico',
    nameKey: 'favicon.ico',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_STUDER_Frontend_STUDER_public',
    data: {
      extension: '.ico'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app',
    nameKey: 'app',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_assets',
    nameKey: 'assets',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_index_html',
    nameKey: 'index.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_main_ts',
    nameKey: 'main.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_styles_css',
    nameKey: 'styles.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_config',
    nameKey: 'config',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core',
    nameKey: 'core',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features',
    nameKey: 'features',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared',
    nameKey: 'shared',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_app_component_css',
    nameKey: 'app.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_app_component_html',
    nameKey: 'app.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_app_component_spec_ts',
    nameKey: 'app.component.spec.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_app_component_ts',
    nameKey: 'app.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_app_config_ts',
    nameKey: 'app.config.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_app_routes_ts',
    nameKey: 'app.routes.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_config_api_config_ts',
    nameKey: 'api.config.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_config',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    nameKey: 'auth',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_http',
    nameKey: 'http',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_i18n',
    nameKey: 'i18n',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_theme',
    nameKey: 'theme',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth_auth-api_service_ts',
    nameKey: 'auth-api.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth_auth-state_service_ts',
    nameKey: 'auth-state.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth_auth_guard_ts',
    nameKey: 'auth.guard.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth_auth_interceptor_ts',
    nameKey: 'auth.interceptor.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth_public_guard_ts',
    nameKey: 'public.guard.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth_refresh_interceptor_ts',
    nameKey: 'refresh.interceptor.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_auth_token-storage_service_ts',
    nameKey: 'token-storage.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_auth',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_http_case-converter_interceptor_ts',
    nameKey: 'case-converter.interceptor.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_http',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_i18n_i18n_provider_ts',
    nameKey: 'i18n.provider.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_i18n',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_i18n_language_interceptor_ts',
    nameKey: 'language.interceptor.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_i18n',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_i18n_language_service_ts',
    nameKey: 'language.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_i18n',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_core_theme_theme_service_ts',
    nameKey: 'theme.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_core_theme',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions',
    nameKey: 'discussions',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_home',
    nameKey: 'home',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing',
    nameKey: 'landing',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages',
    nameKey: 'messages',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_notifications',
    nameKey: 'notifications',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_search',
    nameKey: 'search',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_test',
    nameKey: 'test',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users',
    nameKey: 'users',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components',
    nameKey: 'components',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_discussion_model_ts',
    nameKey: 'discussion.model.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_discussion_service_ts',
    nameKey: 'discussion.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-detail',
    nameKey: 'discussion-detail',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-list',
    nameKey: 'discussion-list',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-detail_discussion-detail_component_css',
    nameKey: 'discussion-detail.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-detail',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-detail_discussion-detail_component_html',
    nameKey: 'discussion-detail.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-detail',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-detail_discussion-detail_component_ts',
    nameKey: 'discussion-detail.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-detail',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-list_discussion-list_component_css',
    nameKey: 'discussion-list.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-list',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-list_discussion-list_component_html',
    nameKey: 'discussion-list.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-list',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-list_discussion-list_component_ts',
    nameKey: 'discussion-list.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_discussions_components_discussion-list',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_home_home_component_css',
    nameKey: 'home.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_home',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_home_home_component_html',
    nameKey: 'home.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_home',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_home_home_component_ts',
    nameKey: 'home.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_home',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_phrases',
    nameKey: 'phrases',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_landing'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_landing_component_css',
    nameKey: 'landing.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_landing',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_landing_component_html',
    nameKey: 'landing.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_landing',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_landing_component_ts',
    nameKey: 'landing.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_landing',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_phrases_phrases_component_css',
    nameKey: 'phrases.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_phrases',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_phrases_phrases_component_html',
    nameKey: 'phrases.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_phrases',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_phrases_phrases_component_ts',
    nameKey: 'phrases.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_landing_phrases',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components',
    nameKey: 'components',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_messages'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_messages_model_ts',
    nameKey: 'messages.model.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_messages',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_messages_service_ts',
    nameKey: 'messages.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_messages',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components_messages',
    nameKey: 'messages',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components_messages_messages_component_css',
    nameKey: 'messages.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components_messages',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components_messages_messages_component_html',
    nameKey: 'messages.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components_messages',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components_messages_messages_component_ts',
    nameKey: 'messages.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_messages_components_messages',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_notifications_notification_model_ts',
    nameKey: 'notification.model.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_notifications',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_notifications_notification_service_ts',
    nameKey: 'notification.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_notifications',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_search_search_component_css',
    nameKey: 'search.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_search',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_search_search_component_html',
    nameKey: 'search.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_search',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_search_search_component_ts',
    nameKey: 'search.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_search',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_test_test_component_css',
    nameKey: 'test.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_test',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_test_test_component_html',
    nameKey: 'test.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_test',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_test_test_component_ts',
    nameKey: 'test.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_test',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components',
    nameKey: 'components',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_friend_model_ts',
    nameKey: 'friend.model.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_friend_service_ts',
    nameKey: 'friend.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_user_model_ts',
    nameKey: 'user.model.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_user_service_ts',
    nameKey: 'user.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_login-register',
    nameKey: 'login-register',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_user-profile',
    nameKey: 'user-profile',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_login-register_login-register_component_css',
    nameKey: 'login-register.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_login-register',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_login-register_login-register_component_html',
    nameKey: 'login-register.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_login-register',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_login-register_login-register_component_ts',
    nameKey: 'login-register.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_login-register',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_user-profile_user-profile_component_css',
    nameKey: 'user-profile.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_user-profile',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_user-profile_user-profile_component_html',
    nameKey: 'user-profile.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_user-profile',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_user-profile_user-profile_component_ts',
    nameKey: 'user-profile.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_features_users_components_user-profile',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components',
    nameKey: 'components',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_pipes',
    nameKey: 'pipes',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_services',
    nameKey: 'services',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_rich-text_index_ts',
    nameKey: 'rich-text.index.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_footer',
    nameKey: 'footer',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_header',
    nameKey: 'header',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_layout',
    nameKey: 'layout',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_loader',
    nameKey: 'loader',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_logo',
    nameKey: 'logo',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_modal',
    nameKey: 'modal',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_notification-panel',
    nameKey: 'notification-panel',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_overlay',
    nameKey: 'overlay',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text',
    nameKey: 'rich-text',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_sidebar',
    nameKey: 'sidebar',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag',
    nameKey: 'tag',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag-input',
    nameKey: 'tag-input',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_username',
    nameKey: 'username',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_footer_footer_component_css',
    nameKey: 'footer.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_footer',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_footer_footer_component_html',
    nameKey: 'footer.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_footer',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_footer_footer_component_ts',
    nameKey: 'footer.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_footer',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_header_header_component_css',
    nameKey: 'header.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_header',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_header_header_component_html',
    nameKey: 'header.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_header',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_header_header_component_ts',
    nameKey: 'header.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_header',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_layout_layout_component_css',
    nameKey: 'layout.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_layout',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_layout_layout_component_html',
    nameKey: 'layout.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_layout',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_layout_layout_component_ts',
    nameKey: 'layout.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_layout',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_loader_loader_component_css',
    nameKey: 'loader.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_loader',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_loader_loader_component_html',
    nameKey: 'loader.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_loader',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_loader_loader_component_ts',
    nameKey: 'loader.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_loader',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_logo_logo_component_css',
    nameKey: 'logo.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_logo',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_logo_logo_component_html',
    nameKey: 'logo.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_logo',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_logo_logo_component_ts',
    nameKey: 'logo.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_logo',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_modal_modal_component_css',
    nameKey: 'modal.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_modal',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_modal_modal_component_html',
    nameKey: 'modal.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_modal',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_modal_modal_component_ts',
    nameKey: 'modal.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_modal',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_notification-panel_notification-panel_component_css',
    nameKey: 'notification-panel.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_notification-panel',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_notification-panel_notification-panel_component_html',
    nameKey: 'notification-panel.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_notification-panel',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_notification-panel_notification-panel_component_ts',
    nameKey: 'notification-panel.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_notification-panel',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_overlay_overlay_component_css',
    nameKey: 'overlay.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_overlay',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_overlay_overlay_component_html',
    nameKey: 'overlay.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_overlay',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_overlay_overlay_component_ts',
    nameKey: 'overlay.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_overlay',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_entity-popover',
    nameKey: 'entity-popover',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_manual-entity',
    nameKey: 'manual-entity',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_rich-text_component_css',
    nameKey: 'rich-text.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_rich-text_component_html',
    nameKey: 'rich-text.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_rich-text_component_ts',
    nameKey: 'rich-text.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_entity-popover_entity-popover_component_css',
    nameKey: 'entity-popover.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_entity-popover',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_entity-popover_entity-popover_component_html',
    nameKey: 'entity-popover.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_entity-popover',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_entity-popover_entity-popover_component_ts',
    nameKey: 'entity-popover.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_entity-popover',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_manual-entity_manual-entity_component_css',
    nameKey: 'manual-entity.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_manual-entity',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_manual-entity_manual-entity_component_html',
    nameKey: 'manual-entity.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_manual-entity',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_manual-entity_manual-entity_component_ts',
    nameKey: 'manual-entity.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_rich-text_manual-entity',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_sidebar_sidebar_component_css',
    nameKey: 'sidebar.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_sidebar',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_sidebar_sidebar_component_html',
    nameKey: 'sidebar.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_sidebar',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_sidebar_sidebar_component_ts',
    nameKey: 'sidebar.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_sidebar',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag_tag_component_ts',
    nameKey: 'tag.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag-input_tag-input_component_css',
    nameKey: 'tag-input.component.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag-input',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag-input_tag-input_component_html',
    nameKey: 'tag-input.component.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag-input',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag-input_tag-input_component_ts',
    nameKey: 'tag-input.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_tag-input',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_username_username_component_ts',
    nameKey: 'username.component.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_components_username',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_pipes_relative-time_pipe_ts',
    nameKey: 'relative-time.pipe.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_pipes',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_services_entity-cache_service_ts',
    nameKey: 'entity-cache.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_services',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_app_shared_services_rich-text-parser_service_ts',
    nameKey: 'rich-text-parser.service.ts',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-typescript-plain colored',
    parentId: 'proj_STUDER_Frontend_STUDER_src_app_shared_services',
    data: {
      extension: '.ts'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_assets_i18n',
    nameKey: 'i18n',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_assets'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_assets_images',
    nameKey: 'images',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_STUDER_Frontend_STUDER_src_assets'
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_assets_i18n_en_json',
    nameKey: 'en.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER_src_assets_i18n',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_assets_i18n_es_json',
    nameKey: 'es.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_STUDER_Frontend_STUDER_src_assets_i18n',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_assets_images_back-dark_png',
    nameKey: 'back-dark.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_STUDER_Frontend_STUDER_src_assets_images',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_STUDER_Frontend_STUDER_src_assets_images_back-light_png',
    nameKey: 'back-light.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_STUDER_Frontend_STUDER_src_assets_images',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_Competitive-Programing',
    nameKey: 'Competitive-Programing',
    isStaticName: true,
    type: 'project',
    icon: 'pi pi-folder-open',
    parentId: 'projects',
    action: 'openCodeEditor',
    data: {
      projectPath: 'proj_Competitive-Programing'
    }
  },
  {
    id: 'proj_Competitive-Programing_base',
    nameKey: 'base',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing'
  },
  {
    id: 'proj_Competitive-Programing_contest',
    nameKey: 'contest',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing'
  },
  {
    id: 'proj_Competitive-Programing_exercices',
    nameKey: 'exercices',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing'
  },
  {
    id: 'proj_Competitive-Programing_README_md',
    nameKey: 'README.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_Competitive-Programing',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_Competitive-Programing_base_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_base',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_base_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_base',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_2227',
    nameKey: '2227',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest'
  },
  {
    id: 'proj_Competitive-Programing_contest_520377',
    nameKey: '520377',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest'
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1',
    nameKey: 'contest_1',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest'
  },
  {
    id: 'proj_Competitive-Programing_contest_2227_D',
    nameKey: 'D',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_2227'
  },
  {
    id: 'proj_Competitive-Programing_contest_2227_D_a_exe',
    nameKey: 'a.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_contest_2227_D',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_2227_D_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_2227_D',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_2227_D_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_contest_2227_D',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_520377_A',
    nameKey: 'A',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_520377'
  },
  {
    id: 'proj_Competitive-Programing_contest_520377_B',
    nameKey: 'B',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_520377'
  },
  {
    id: 'proj_Competitive-Programing_contest_520377_C',
    nameKey: 'C',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_520377'
  },
  {
    id: 'proj_Competitive-Programing_contest_520377_A_a_exe',
    nameKey: 'a.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_contest_520377_A',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_520377_A_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_520377_A',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_A',
    nameKey: 'A',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_contest_1'
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_B',
    nameKey: 'B',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_contest_1'
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_C',
    nameKey: 'C',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_contest_1'
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_D',
    nameKey: 'D',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_contest_1'
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_E',
    nameKey: 'E',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_contest_1'
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_F',
    nameKey: 'F',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_contest_contest_1'
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_A_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_contest_1_A',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_A_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_contest_contest_1_A',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_B_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_contest_1_B',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_B_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_contest_contest_1_B',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_C_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_contest_1_C',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_C_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_contest_contest_1_C',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_D_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_contest_1_D',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_D_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_contest_contest_1_D',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_E_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_contest_1_E',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_E_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_contest_contest_1_E',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_F_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_contest_contest_1_F',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_contest_contest_1_F_base_txt',
    nameKey: 'base.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_contest_contest_1_F',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A',
    nameKey: '1A',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A_copy_2',
    nameKey: '1A copy 2',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_231A',
    nameKey: '231A',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_282A',
    nameKey: '282A',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_665D',
    nameKey: '665D',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_c2175_pA',
    nameKey: 'c2175_pA',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_C283911_pD',
    nameKey: 'C283911_pD',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_c363_pB',
    nameKey: 'c363_pB',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_example',
    nameKey: 'example',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_Competitive-Programing_exercices'
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A_1A_cpp',
    nameKey: '1A.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_1A',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A_1A_exe',
    nameKey: '1A.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_exercices_1A',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A_1A_txt',
    nameKey: '1A.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_1A',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A_copy_2_1A_cpp',
    nameKey: '1A.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_1A_copy_2',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A_copy_2_1A_exe',
    nameKey: '1A.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_exercices_1A_copy_2',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_1A_copy_2_1A_txt',
    nameKey: '1A.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_1A_copy_2',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_231A_231A_cpp',
    nameKey: '231A.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_231A',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_231A_231A_exe',
    nameKey: '231A.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_exercices_231A',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_231A_231A_txt',
    nameKey: '231A.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_231A',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_282A_282A_cpp',
    nameKey: '282A.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_282A',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_282A_282A_exe',
    nameKey: '282A.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_exercices_282A',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_282A_282A_txt',
    nameKey: '282A.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_282A',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_665D_665D_cpp',
    nameKey: '665D.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_665D',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_665D_665D_txt',
    nameKey: '665D.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_665D',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_665D_a_exe',
    nameKey: 'a.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_exercices_665D',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_c2175_pA_c2175_pA_cpp',
    nameKey: 'c2175_pA.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_c2175_pA',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_c2175_pA_c2175_pA_txt',
    nameKey: 'c2175_pA.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_c2175_pA',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_C283911_pD_a_exe',
    nameKey: 'a.exe',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_Competitive-Programing_exercices_C283911_pD',
    data: {
      extension: '.exe'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_C283911_pD_C283911_pD_cpp',
    nameKey: 'C283911_pD.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_C283911_pD',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_C283911_pD_C283911_pD_txt',
    nameKey: 'C283911_pD.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_C283911_pD',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_c363_pB_c363_pB_cpp',
    nameKey: 'c363_pB.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_c363_pB',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_c363_pB_c363_pB_txt',
    nameKey: 'c363_pB.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_Competitive-Programing_exercices_c363_pB',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_Competitive-Programing_exercices_example_base_cpp',
    nameKey: 'base.cpp',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-cplusplus-plain colored',
    parentId: 'proj_Competitive-Programing_exercices_example',
    data: {
      extension: '.cpp'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19',
    nameKey: 'tpi-teg-grupo-19',
    isStaticName: true,
    type: 'project',
    icon: 'pi pi-folder-open',
    parentId: 'projects',
    action: 'openCodeEditor',
    data: {
      projectPath: 'proj_tpi-teg-grupo-19'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19__github',
    nameKey: '.github',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs',
    nameKey: 'docs',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19'
  },
  {
    id: 'proj_tpi-teg-grupo-19_otros',
    nameKey: 'otros',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src',
    nameKey: 'src',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19'
  },
  {
    id: 'proj_tpi-teg-grupo-19__gitignore',
    nameKey: '.gitignore',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_et_--hard_a1e12ea',
    nameKey: 'et --hard a1e12ea',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_mvnw',
    nameKey: 'mvnw',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_mvnw_cmd',
    nameKey: 'mvnw.cmd',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19',
    data: {
      extension: '.cmd'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_pom_xml',
    nameKey: 'pom.xml',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_tpi-teg-grupo-19',
    data: {
      extension: '.xml'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_README_md',
    nameKey: 'README.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19__github__keep',
    nameKey: '.keep',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19__github',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_api_doc',
    nameKey: 'api_doc',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc',
    nameKey: 'app_doc',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_assets',
    nameKey: 'assets',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc',
    nameKey: 'java_doc',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs__nojekyll',
    nameKey: '.nojekyll',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_diagramaBase_png',
    nameKey: 'diagramaBase.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_Diseños_front_pdf',
    nameKey: 'Diseños_front.pdf',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-pdf',
    parentId: 'proj_tpi-teg-grupo-19_docs',
    data: {
      extension: '.pdf'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_index_html',
    nameKey: 'index.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_api_doc_index_html',
    nameKey: 'index.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_api_doc',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_api_doc_swagger_json',
    nameKey: 'swagger.json',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-code',
    parentId: 'proj_tpi-teg-grupo-19_docs_api_doc',
    data: {
      extension: '.json'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams',
    nameKey: 'diagrams',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc__media',
    nameKey: '_media',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc__nojekyll',
    nameKey: '.nojekyll',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_index_html',
    nameKey: 'index.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_README_md',
    nameKey: 'README.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc__navbar_md',
    nameKey: '_navbar.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc__sidebar_md',
    nameKey: '_sidebar.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams_class_puml',
    nameKey: 'class.puml',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams',
    data: {
      extension: '.puml'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams_class_diagram_md',
    nameKey: 'class_diagram.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams_components_puml',
    nameKey: 'components.puml',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams',
    data: {
      extension: '.puml'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams_components_diagram_md',
    nameKey: 'components_diagram.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams_sequences_puml',
    nameKey: 'sequences.puml',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams',
    data: {
      extension: '.puml'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams_sequences_diagram_md',
    nameKey: 'sequences_diagram.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc_diagrams',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_app_doc__media_logo_png',
    nameKey: 'logo.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs_app_doc__media',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_assets_images',
    nameKey: 'images',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_assets'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_assets_TEG_pdf',
    nameKey: 'TEG.pdf',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-pdf',
    parentId: 'proj_tpi-teg-grupo-19_docs_assets',
    data: {
      extension: '.pdf'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_assets_images_img_png',
    nameKey: 'img.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs_assets_images',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_assets_images_Tup_completo_negro_transparente_png',
    nameKey: 'Tup_completo_negro_transparente.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs_assets_images',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_assets_images_UTN-FRC_logo_png',
    nameKey: 'UTN-FRC_logo.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs_assets_images',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    nameKey: 'apidocs',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar',
    nameKey: 'ar',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal',
    nameKey: 'legal',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_resources',
    nameKey: 'resources',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script-dir',
    nameKey: 'script-dir',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_allclasses-index_html',
    nameKey: 'allclasses-index.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_allpackages-index_html',
    nameKey: 'allpackages-index.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_copy_svg',
    nameKey: 'copy.svg',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.svg'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_element-list',
    nameKey: 'element-list',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_help-doc_html',
    nameKey: 'help-doc.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_index-all_html',
    nameKey: 'index-all.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_index_html',
    nameKey: 'index.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_member-search-index_js',
    nameKey: 'member-search-index.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_module-search-index_js',
    nameKey: 'module-search-index.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_overview-summary_html',
    nameKey: 'overview-summary.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_overview-tree_html',
    nameKey: 'overview-tree.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_package-search-index_js',
    nameKey: 'package-search-index.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script_js',
    nameKey: 'script.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_search-page_js',
    nameKey: 'search-page.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_search_html',
    nameKey: 'search.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_search_js',
    nameKey: 'search.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_stylesheet_css',
    nameKey: 'stylesheet.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_tag-search-index_js',
    nameKey: 'tag-search-index.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_type-search-index_js',
    nameKey: 'type-search-index.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu',
    nameKey: 'edu',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn',
    nameKey: 'utn',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc',
    nameKey: 'frc',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup',
    nameKey: 'tup',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc',
    nameKey: 'lc',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv',
    nameKey: 'iv',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_class-use',
    nameKey: 'class-use',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs',
    nameKey: 'configs',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers',
    nameKey: 'controllers',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos',
    nameKey: 'dtos',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_Application_html',
    nameKey: 'Application.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_package-summary_html',
    nameKey: 'package-summary.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_package-tree_html',
    nameKey: 'package-tree.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_package-use_html',
    nameKey: 'package-use.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_class-use_Application_html',
    nameKey: 'Application.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_class-use',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_class-use',
    nameKey: 'class-use',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_MappersConfig_html',
    nameKey: 'MappersConfig.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_package-summary_html',
    nameKey: 'package-summary.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_package-tree_html',
    nameKey: 'package-tree.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_package-use_html',
    nameKey: 'package-use.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_SpringDocConfig_html',
    nameKey: 'SpringDocConfig.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_class-use_MappersConfig_html',
    nameKey: 'MappersConfig.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_class-use',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_class-use_SpringDocConfig_html',
    nameKey: 'SpringDocConfig.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_configs_class-use',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers_class-use',
    nameKey: 'class-use',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers_package-summary_html',
    nameKey: 'package-summary.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers_package-tree_html',
    nameKey: 'package-tree.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers_package-use_html',
    nameKey: 'package-use.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers_PingController_html',
    nameKey: 'PingController.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers_class-use_PingController_html',
    nameKey: 'PingController.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_controllers_class-use',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common',
    nameKey: 'common',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common_class-use',
    nameKey: 'class-use',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common'
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common_ErrorApi_html',
    nameKey: 'ErrorApi.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common_package-summary_html',
    nameKey: 'package-summary.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common_package-tree_html',
    nameKey: 'package-tree.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common_package-use_html',
    nameKey: 'package-use.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common_class-use_ErrorApi_html',
    nameKey: 'ErrorApi.html',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-html5-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_ar_edu_utn_frc_tup_lc_iv_dtos_common_class-use',
    data: {
      extension: '.html'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal_ADDITIONAL_LICENSE_INFO',
    nameKey: 'ADDITIONAL_LICENSE_INFO',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal_ASSEMBLY_EXCEPTION',
    nameKey: 'ASSEMBLY_EXCEPTION',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal_jquery_md',
    nameKey: 'jquery.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal_jqueryUI_md',
    nameKey: 'jqueryUI.md',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file-edit',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal',
    data: {
      extension: '.md'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal_LICENSE',
    nameKey: 'LICENSE',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_legal',
    data: {
      extension: ''
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_resources_glass_png',
    nameKey: 'glass.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_resources',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_resources_x_png',
    nameKey: 'x.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_resources',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script-dir_jquery-3_6_1_min_js',
    nameKey: 'jquery-3.6.1.min.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script-dir',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script-dir_jquery-ui_min_css',
    nameKey: 'jquery-ui.min.css',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-css3-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script-dir',
    data: {
      extension: '.css'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script-dir_jquery-ui_min_js',
    nameKey: 'jquery-ui.min.js',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-javascript-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_docs_java_doc_apidocs_script-dir',
    data: {
      extension: '.js'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_otros_dudas_txt',
    nameKey: 'dudas.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_tpi-teg-grupo-19_otros',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_otros_Links_txt',
    nameKey: 'Links.txt',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-align-justify',
    parentId: 'proj_tpi-teg-grupo-19_otros',
    data: {
      extension: '.txt'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_otros_package_png',
    nameKey: 'package.png',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-image',
    parentId: 'proj_tpi-teg-grupo-19_otros',
    data: {
      extension: '.png'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main',
    nameKey: 'main',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test',
    nameKey: 'test',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java',
    nameKey: 'java',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_resources',
    nameKey: 'resources',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar',
    nameKey: 'ar',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu',
    nameKey: 'edu',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn',
    nameKey: 'utn',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc',
    nameKey: 'frc',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup',
    nameKey: 'tup',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii',
    nameKey: 'piii',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_configs',
    nameKey: 'configs',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    nameKey: 'controllers',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_Cors',
    nameKey: 'Cors',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos',
    nameKey: 'dtos',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    nameKey: 'entities',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    nameKey: 'enums',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    nameKey: 'models',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    nameKey: 'repositories',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    nameKey: 'services',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_Application_java',
    nameKey: 'Application.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_LoginResponseDto_java',
    nameKey: 'LoginResponseDto.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_configs_MappersConfig_java',
    nameKey: 'MappersConfig.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_configs',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_configs_SpringDocConfig_java',
    nameKey: 'SpringDocConfig.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_configs',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_AutenticacionController_java',
    nameKey: 'AutenticacionController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_ControllerExceptionHandler_java',
    nameKey: 'ControllerExceptionHandler.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_EstadisticasController_java',
    nameKey: 'EstadisticasController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_MensajesController_java',
    nameKey: 'MensajesController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_ObjetivosController_java',
    nameKey: 'ObjetivosController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_PaisesController_java',
    nameKey: 'PaisesController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_PaisesJugadoresController_java',
    nameKey: 'PaisesJugadoresController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_PartidasController_java',
    nameKey: 'PartidasController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_PingController_java',
    nameKey: 'PingController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers_TarjetasController_java',
    nameKey: 'TarjetasController.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_Cors_ConfiCors_java',
    nameKey: 'ConfiCors.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_Cors',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_Cors_ConfiguracionSeguridad_java',
    nameKey: 'ConfiguracionSeguridad.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_Cors',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    nameKey: 'common',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_AccionCombatePostDTO_java',
    nameKey: 'AccionCombatePostDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_AccionReagrupacionPostDTO_java',
    nameKey: 'AccionReagrupacionPostDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_ErrorApi_java',
    nameKey: 'ErrorApi.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_FichasDTO_java',
    nameKey: 'FichasDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_FronteraJugadorDto_java',
    nameKey: 'FronteraJugadorDto.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_GanadorDTO_java',
    nameKey: 'GanadorDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_JugadorDTO_java',
    nameKey: 'JugadorDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_MensajeDto_java',
    nameKey: 'MensajeDto.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_PaisJugadorDto_java',
    nameKey: 'PaisJugadorDto.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_PartidaConfigDTO_java',
    nameKey: 'PartidaConfigDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_RefuerzoDTO_java',
    nameKey: 'RefuerzoDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common_RefuerzoPostDTO_java',
    nameKey: 'RefuerzoPostDTO.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_dtos_common',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Acciones_java',
    nameKey: 'Acciones.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Canjes_java',
    nameKey: 'Canjes.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Colores_java',
    nameKey: 'Colores.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Combates_java',
    nameKey: 'Combates.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Continentes_java',
    nameKey: 'Continentes.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Fronteras_java',
    nameKey: 'Fronteras.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Jugadores_java',
    nameKey: 'Jugadores.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Mensajes_java',
    nameKey: 'Mensajes.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Objetivos_java',
    nameKey: 'Objetivos.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_ObjetivosCantidadPaises_java',
    nameKey: 'ObjetivosCantidadPaises.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_ObjetivosConts_java',
    nameKey: 'ObjetivosConts.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Pactos_java',
    nameKey: 'Pactos.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Paises_java',
    nameKey: 'Paises.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_PaisesJugadores_java',
    nameKey: 'PaisesJugadores.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Partidas_java',
    nameKey: 'Partidas.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_PilasTarjetas_java',
    nameKey: 'PilasTarjetas.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Reagrupaciones_java',
    nameKey: 'Reagrupaciones.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Refuerzos_java',
    nameKey: 'Refuerzos.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Rondas_java',
    nameKey: 'Rondas.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Tarjetas_java',
    nameKey: 'Tarjetas.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_TarjetasJugadores_java',
    nameKey: 'TarjetasJugadores.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_TurnosAtaques_java',
    nameKey: 'TurnosAtaques.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_TurnosRefuerzos_java',
    nameKey: 'TurnosRefuerzos.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities_Usuarios_java',
    nameKey: 'Usuarios.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_entities',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums_Estado_java',
    nameKey: 'Estado.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums_EstadoJugador_java',
    nameKey: 'EstadoJugador.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums_Simbolo_java',
    nameKey: 'Simbolo.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums_TipoFicha_java',
    nameKey: 'TipoFicha.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums_TipoJugador_java',
    nameKey: 'TipoJugador.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums_TipoPacto_java',
    nameKey: 'TipoPacto.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums_TipoPartida_java',
    nameKey: 'TipoPartida.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_enums',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_AccionModel_java',
    nameKey: 'AccionModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_CanjeModel_java',
    nameKey: 'CanjeModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_ColorModel_java',
    nameKey: 'ColorModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_CombateModel_java',
    nameKey: 'CombateModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_ContinenteModel_java',
    nameKey: 'ContinenteModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_FronteraModel_java',
    nameKey: 'FronteraModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_JugadorModel_java',
    nameKey: 'JugadorModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_MensajeModel_java',
    nameKey: 'MensajeModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_ObjetivoCantidadPaisesModel_java',
    nameKey: 'ObjetivoCantidadPaisesModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_ObjetivoContModel_java',
    nameKey: 'ObjetivoContModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_ObjetivoModel_java',
    nameKey: 'ObjetivoModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_PactoModel_java',
    nameKey: 'PactoModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_PaisJugadorModel_java',
    nameKey: 'PaisJugadorModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_PaisModel_java',
    nameKey: 'PaisModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_PartidaModel_java',
    nameKey: 'PartidaModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_PilaTarjetaModel_java',
    nameKey: 'PilaTarjetaModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_ReagrupacionModel_java',
    nameKey: 'ReagrupacionModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_RefuerzoModel_java',
    nameKey: 'RefuerzoModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_RegistroRequest_java',
    nameKey: 'RegistroRequest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_RondaModel_java',
    nameKey: 'RondaModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_TarjetaJugadorModel_java',
    nameKey: 'TarjetaJugadorModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_TarjetaModel_java',
    nameKey: 'TarjetaModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_TurnoAtaqueModel_java',
    nameKey: 'TurnoAtaqueModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_TurnoRefuerzoModel_java',
    nameKey: 'TurnoRefuerzoModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models_UsuarioModel_java',
    nameKey: 'UsuarioModel.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_AccionesRepository_java',
    nameKey: 'AccionesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_CanjesRepository_java',
    nameKey: 'CanjesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_ColoresRepository_java',
    nameKey: 'ColoresRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_CombatesRepository_java',
    nameKey: 'CombatesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_FronterasRepository_java',
    nameKey: 'FronterasRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_JugadoresRepository_java',
    nameKey: 'JugadoresRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_MensajesRepository_java',
    nameKey: 'MensajesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_ObjetivosCantidadPaisesRepository_java',
    nameKey: 'ObjetivosCantidadPaisesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_ObjetivosContsRepository_java',
    nameKey: 'ObjetivosContsRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_ObjetivosRepository_java',
    nameKey: 'ObjetivosRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_PaisesJugadoresRepository_java',
    nameKey: 'PaisesJugadoresRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_PaisesRepository_java',
    nameKey: 'PaisesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_PartidasRepository_java',
    nameKey: 'PartidasRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_PilasTarjetasRepository_java',
    nameKey: 'PilasTarjetasRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_ReagrupacionesRepository_java',
    nameKey: 'ReagrupacionesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_RefuerzosRepository_java',
    nameKey: 'RefuerzosRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_RondasRepository_java',
    nameKey: 'RondasRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_TarjetasJugadoresRepository_java',
    nameKey: 'TarjetasJugadoresRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_TarjetasRepository_java',
    nameKey: 'TarjetasRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_TurnosAtaquesRepository_java',
    nameKey: 'TurnosAtaquesRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_TurnosRefuerzosRepository_java',
    nameKey: 'TurnosRefuerzosRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories_UsuarioRepository_java',
    nameKey: 'UsuarioRepository.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    nameKey: 'interfaces',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_AccionesService_java',
    nameKey: 'AccionesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_AutenticacionService_java',
    nameKey: 'AutenticacionService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_BotService_java',
    nameKey: 'BotService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_CanjesService_java',
    nameKey: 'CanjesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_ColoresService_java',
    nameKey: 'ColoresService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_CombatesService_java',
    nameKey: 'CombatesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_EstadisticasService_java',
    nameKey: 'EstadisticasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_FronterasService_java',
    nameKey: 'FronterasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_JugadoresService_java',
    nameKey: 'JugadoresService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_MensajesService_java',
    nameKey: 'MensajesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_ObjetivosCantPaisesService_java',
    nameKey: 'ObjetivosCantPaisesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_ObjetivosContsService_java',
    nameKey: 'ObjetivosContsService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_ObjetivosService_java',
    nameKey: 'ObjetivosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_PaisesJugadoresService_java',
    nameKey: 'PaisesJugadoresService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_PaisesService_java',
    nameKey: 'PaisesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_PartidasService_java',
    nameKey: 'PartidasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_PilasTarjetasService_java',
    nameKey: 'PilasTarjetasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_ReagrupacionService_java',
    nameKey: 'ReagrupacionService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_RefuerzosService_java',
    nameKey: 'RefuerzosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_RondasService_java',
    nameKey: 'RondasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_TarjetasJugadoresService_java',
    nameKey: 'TarjetasJugadoresService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_TarjetasService_java',
    nameKey: 'TarjetasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_TurnosAtaquesService_java',
    nameKey: 'TurnosAtaquesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_TurnosRefuerzosService_java',
    nameKey: 'TurnosRefuerzosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_UsuariosService_java',
    nameKey: 'UsuariosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IAutenticacionService_java',
    nameKey: 'IAutenticacionService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_ICanjesService_java',
    nameKey: 'ICanjesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IColoresService_java',
    nameKey: 'IColoresService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IEstadisticasService_java',
    nameKey: 'IEstadisticasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IFronterasService_java',
    nameKey: 'IFronterasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IJugadoresService_java',
    nameKey: 'IJugadoresService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IMensajesService_java',
    nameKey: 'IMensajesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IObjetivosCantPaisesService_java',
    nameKey: 'IObjetivosCantPaisesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IObjetivosContsService_java',
    nameKey: 'IObjetivosContsService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IObjetivosService_java',
    nameKey: 'IObjetivosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IPaisesJugadoresService_java',
    nameKey: 'IPaisesJugadoresService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IPaisesService_java',
    nameKey: 'IPaisesService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IPartidasService_java',
    nameKey: 'IPartidasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IPilasTarjetasService_java',
    nameKey: 'IPilasTarjetasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IRefuerzosService_java',
    nameKey: 'IRefuerzosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IRondasService_java',
    nameKey: 'IRondasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_ITarjetasService_java',
    nameKey: 'ITarjetasService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_ITurnosRefuerzosService_java',
    nameKey: 'ITurnosRefuerzosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces_IUsuariosService_java',
    nameKey: 'IUsuariosService.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_main_java_ar_edu_utn_frc_tup_piii_services_interfaces',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_resources_SQL',
    nameKey: 'SQL',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_main_resources'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_resources_application_properties',
    nameKey: 'application.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_src_main_resources',
    data: {
      extension: '.properties'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_resources_SQL_BD-Teg_sql',
    nameKey: 'BD-Teg.sql',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-database',
    parentId: 'proj_tpi-teg-grupo-19_src_main_resources_SQL',
    data: {
      extension: '.sql'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_main_resources_SQL_INSERTS_sql',
    nameKey: 'INSERTS.sql',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-database',
    parentId: 'proj_tpi-teg-grupo-19_src_main_resources_SQL',
    data: {
      extension: '.sql'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java',
    nameKey: 'java',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_resources',
    nameKey: 'resources',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar',
    nameKey: 'ar',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu',
    nameKey: 'edu',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn',
    nameKey: 'utn',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc',
    nameKey: 'frc',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup',
    nameKey: 'tup',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii',
    nameKey: 'piii',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_configs',
    nameKey: 'configs',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    nameKey: 'controllers',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    nameKey: 'models',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    nameKey: 'repositories',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    nameKey: 'services',
    isStaticName: true,
    type: 'folder',
    icon: 'pi pi-folder',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii'
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_ApplicationTests_java',
    nameKey: 'ApplicationTests.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_configs_SpringDocConfigTest_java',
    nameKey: 'SpringDocConfigTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_configs',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_configs_TestSecurityConfig_java',
    nameKey: 'TestSecurityConfig.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_configs',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_AutenticacionControllerTest_java',
    nameKey: 'AutenticacionControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_EstadisticasControllerTest_java',
    nameKey: 'EstadisticasControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_MensajesControllerTest_java',
    nameKey: 'MensajesControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_ObjetivosControllerTest_java',
    nameKey: 'ObjetivosControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_PaisesControllerTest_java',
    nameKey: 'PaisesControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_PaisesJugadoresControllerTest_java',
    nameKey: 'PaisesJugadoresControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_PartidasControllerTest_java',
    nameKey: 'PartidasControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_PingControllerTest_java',
    nameKey: 'PingControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers_TarjetasControllerTest_java',
    nameKey: 'TarjetasControllerTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_controllers',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_CanjeModelTest_java',
    nameKey: 'CanjeModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_ColorModelTest_java',
    nameKey: 'ColorModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_CombateModelTest_java',
    nameKey: 'CombateModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_ContinenteModelTest_java',
    nameKey: 'ContinenteModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_FronteraModelTest_java',
    nameKey: 'FronteraModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_MensajeModelTest_java',
    nameKey: 'MensajeModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_ObjetivoCantidadPaisesModelTest_java',
    nameKey: 'ObjetivoCantidadPaisesModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_ObjetivoContModelTest_java',
    nameKey: 'ObjetivoContModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_ObjetivoModelTest_java',
    nameKey: 'ObjetivoModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_PaisJugadorModelTest_java',
    nameKey: 'PaisJugadorModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_PaisModelTest_java',
    nameKey: 'PaisModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_PartidaModelTest_java',
    nameKey: 'PartidaModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_PilaTarjetaModelTest_java',
    nameKey: 'PilaTarjetaModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_ReagrupacionModelTest_java',
    nameKey: 'ReagrupacionModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_RefuerzoModelTest_java',
    nameKey: 'RefuerzoModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_RegistroRequestTest_java',
    nameKey: 'RegistroRequestTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_RondaModelTest_java',
    nameKey: 'RondaModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_TarjetaJugadorModelTest_java',
    nameKey: 'TarjetaJugadorModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_TurnoAtaqueModelTest_java',
    nameKey: 'TurnoAtaqueModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_TurnoRefuerzoModelTest_java',
    nameKey: 'TurnoRefuerzoModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models_UsuarioModelTest_java',
    nameKey: 'UsuarioModelTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_models',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories_FronterasRepositoryTest_java',
    nameKey: 'FronterasRepositoryTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories_JugadoresRepositoryTest_java',
    nameKey: 'JugadoresRepositoryTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories_ObjetivosCantidadPaisesRepositoryTest_java',
    nameKey: 'ObjetivosCantidadPaisesRepositoryTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories_PaisesJugadoresRepositoryTest_java',
    nameKey: 'PaisesJugadoresRepositoryTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories_PaisesRepositoryTest_java',
    nameKey: 'PaisesRepositoryTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories_PartidasRepositoryTest_java',
    nameKey: 'PartidasRepositoryTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories_UsuarioRepositoryTest_java',
    nameKey: 'UsuarioRepositoryTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_repositories',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_AccionesServiceTest_java',
    nameKey: 'AccionesServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_AutenticacionServiceTest_java',
    nameKey: 'AutenticacionServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_BotServiceTest_java',
    nameKey: 'BotServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_CanjesServiceTest_java',
    nameKey: 'CanjesServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_ColoresServiceTest_java',
    nameKey: 'ColoresServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_CombatesServiceTest_java',
    nameKey: 'CombatesServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_EstadisticasServiceTest_java',
    nameKey: 'EstadisticasServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_FronterasServiceTest_java',
    nameKey: 'FronterasServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_JugadoresServiceTest_java',
    nameKey: 'JugadoresServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_MensajesServiceTest_java',
    nameKey: 'MensajesServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_ObjetivosCantidadPaisesServiceTest_java',
    nameKey: 'ObjetivosCantidadPaisesServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_ObjetivosContsServiceTest_java',
    nameKey: 'ObjetivosContsServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_ObjetivosServiceTest_java',
    nameKey: 'ObjetivosServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_PaisesJugadoresServiceTest_java',
    nameKey: 'PaisesJugadoresServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_PaisesServiceTest_java',
    nameKey: 'PaisesServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_PartidasServiceTest_java',
    nameKey: 'PartidasServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_RefuerzosServiceTest_java',
    nameKey: 'RefuerzosServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_RondasServiceTest_java',
    nameKey: 'RondasServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_TarjetasServiceTest_java',
    nameKey: 'TarjetasServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_TurnoAtaqueServiceTest_java',
    nameKey: 'TurnoAtaqueServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_TurnosRefuerzosServiceTest_java',
    nameKey: 'TurnosRefuerzosServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services_UsuariosServiceTest_java',
    nameKey: 'UsuariosServiceTest.java',
    isStaticName: true,
    type: 'file',
    icon: 'devicon-java-plain colored',
    parentId: 'proj_tpi-teg-grupo-19_src_test_java_ar_edu_utn_frc_tup_piii_services',
    data: {
      extension: '.java'
    }
  },
  {
    id: 'proj_tpi-teg-grupo-19_src_test_resources_application_properties',
    nameKey: 'application.properties',
    isStaticName: true,
    type: 'file',
    icon: 'pi pi-file',
    parentId: 'proj_tpi-teg-grupo-19_src_test_resources',
    data: {
      extension: '.properties'
    }
  }


];
