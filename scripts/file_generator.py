import os
import json


# Rutas locales de los proyectos que quieres escanear (pueden ser absolutas o relativas)
PROJECTS_TO_SCAN = [
    r"C:\Users\facur\OneDrive\Escritorio\STUDER",



]

# Carpetas que el script va a ignorar por completo
IGNORE_DIRS = {'.git', 'node_modules', '.idea', 'dist', '__pycache__', '.angular', 'target'}

# El ID del padre raíz donde irán estos proyectos (según tu TypeScript, es 'projects')
ROOT_PARENT_ID = 'projects'

# Diccionario de íconos según la extensión del archivo
ICON_MAP = {
    # --- Web & Frontend ---
    '.html': 'devicon-html5-plain colored',
    '.css': 'devicon-css3-plain colored',
    '.scss': 'devicon-sass-original colored',
    '.sass': 'devicon-sass-original colored',
    '.less': 'devicon-less-plain-wordmark colored',
    '.js': 'devicon-javascript-plain colored',
    '.jsx': 'devicon-react-original colored',
    '.ts': 'devicon-typescript-plain colored',
    '.tsx': 'devicon-react-original colored',
    '.vue': 'devicon-vuejs-plain colored',
    '.svelte': 'devicon-svelte-plain colored',

    # --- Backend & Lenguajes Compilados ---
    '.py': 'devicon-python-plain colored',
    '.pyw': 'devicon-python-plain colored',
    '.java': 'devicon-java-plain colored',
    '.class': 'devicon-java-plain colored',
    '.jar': 'devicon-java-plain colored',
    '.cs': 'devicon-csharp-plain colored',       # C#
    '.c': 'devicon-c-plain colored',             # C
    '.cpp': 'devicon-cplusplus-plain colored',   # C++
    '.h': 'devicon-c-plain colored',             # Headers de C
    '.hpp': 'devicon-cplusplus-plain colored',   # Headers de C++
    '.go': 'devicon-go-plain colored',
    '.rs': 'devicon-rust-plain colored',         # Rust
    '.php': 'devicon-php-plain colored',
    '.rb': 'devicon-ruby-plain colored',         # Ruby
    '.swift': 'devicon-swift-plain colored',
    '.kt': 'devicon-kotlin-plain colored',       # Kotlin
    '.dart': 'devicon-dart-plain colored',
    '.scala': 'devicon-scala-plain colored',

    # --- Bases de Datos ---
    '.sql': 'pi pi-database',                    # PrimeIcons para BD genérica
    '.mongodb': 'devicon-mongodb-plain colored',

    # --- Shell & Scripts ---
    '.sh': 'devicon-bash-plain colored',
    '.bat': 'devicon-windows8-original colored',
    '.ps1': 'devicon-windows8-original colored', # PowerShell

    # --- Configuración, DevOps y Contenedores ---
    'dockerfile': 'devicon-docker-plain colored', # (Sin punto, es el nombre exacto)
    '.dockerignore': 'devicon-docker-plain colored',
    '.yaml': 'pi pi-list',
    '.yml': 'pi pi-list',
    '.json': 'pi pi-code',
    '.xml': 'pi pi-code',
    '.env': 'pi pi-cog',                         # Archivos de entorno
    '.gitignore': 'devicon-git-plain colored',
    '.gitattributes': 'devicon-git-plain colored',

    # --- Documentación y Datos ---
    '.md': 'pi pi-file-edit',                    # Markdown
    '.txt': 'pi pi-align-justify',
    '.pdf': 'pi pi-file-pdf',
    '.csv': 'pi pi-file-excel',
    '.xlsx': 'pi pi-file-excel',

    # --- Imágenes y Media ---
    '.svg': 'pi pi-image',
    '.png': 'pi pi-image',
    '.jpg': 'pi pi-image',
    '.jpeg': 'pi pi-image',
    '.gif': 'pi pi-image',
    '.ico': 'pi pi-image'
}

def to_typescript_format(obj, indent_level=1):
    """Convierte un objeto de Python a un string con formato TypeScript nativo."""
    indent = "  " * indent_level
    next_indent = "  " * (indent_level + 1)

    if isinstance(obj, bool):
        return "true" if obj else "false"
    elif obj is None:
        return "null"
    elif isinstance(obj, (int, float)):
        return str(obj)
    elif isinstance(obj, str):
        # Escapamos comillas simples internas por si algún archivo se llama así
        escaped_str = obj.replace("'", "\\'")
        return f"'{escaped_str}'"
    elif isinstance(obj, list):
        items = [f"{next_indent}{to_typescript_format(item, indent_level + 1)}" for item in obj]
        return "[\n" + ",\n".join(items) + f"\n{indent}]"
    elif isinstance(obj, dict):
        items = []
        for key, value in obj.items():
            val_str = to_typescript_format(value, indent_level + 1)
            items.append(f"{next_indent}{key}: {val_str}")
        # ACÁ ESTÁ LA CORRECCIÓN: usamos }}} al final
        return "{\n" + ",\n".join(items) + f"\n{indent}}}"
    else:
        return "null"

def get_icon(filename):
    """Devuelve el ícono correspondiente basado en la extensión."""
    _, ext = os.path.splitext(filename)
    return ICON_MAP.get(ext.lower(), 'pi pi-file')

def generate_safe_id(path):
    """Genera un ID seguro sin caracteres especiales para usar en Angular."""
    return path.replace('\\', '_').replace('/', '_').replace(' ', '_').replace('.', '_')


def scan_project(base_path, project_name):
    nodes = []

    # Generar un ID único para la carpeta raíz de este proyecto
    project_id = f"proj_{generate_safe_id(project_name)}"

    # 1. Crear el nodo principal del proyecto (el que aparece en la carpeta 'projects')
    project_node = {
        "id": project_id,
        "nameKey": project_name,
        "isStaticName": True,
        "type": "project",
        "icon": "pi pi-folder-open",
        "parentId": ROOT_PARENT_ID,
        "action": "openCodeEditor",
        "data": { "projectPath": project_id }
    }
    nodes.append(project_node)

    # 2. Recorrer todo el árbol de directorios internamente
    for root, dirs, files in os.walk(base_path):
        # Modificar la lista 'dirs' in-place para que os.walk ignore las carpetas no deseadas
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        # Determinar el ID del padre actual
        rel_root = os.path.relpath(root, base_path)
        if rel_root == '.':
            current_parent_id = project_id
        else:
            current_parent_id = project_id + "_" + generate_safe_id(rel_root)

        # 3. Agregar subcarpetas
        for d in dirs:
            dir_rel_path = os.path.relpath(os.path.join(root, d), base_path)
            dir_id = project_id + "_" + generate_safe_id(dir_rel_path)
            nodes.append({
                "id": dir_id,
                "nameKey": d,
                "isStaticName": True,
                "type": "folder",
                "icon": "pi pi-folder",
                "parentId": current_parent_id
            })

        # 4. Agregar archivos
        for f in files:
            file_rel_path = os.path.relpath(os.path.join(root, f), base_path)
            file_id = project_id + "_" + generate_safe_id(file_rel_path)
            nodes.append({
                "id": file_id,
                "nameKey": f,
                "isStaticName": True,
                "type": "file",
                "icon": get_icon(f),
                "parentId": current_parent_id,
                "data": {
                    "extension": os.path.splitext(f)[1]

                }
            })

    return nodes



all_nodes = []

print("Escaneando proyectos...")
print("Escaneando proyectos...")
for path in PROJECTS_TO_SCAN:
    if os.path.exists(path):
        proj_name = os.path.basename(os.path.normpath(path))
        print(f" -> Procesando: {proj_name}")
        all_nodes.extend(scan_project(path, proj_name))
    else:
        print(f" [ERROR] Ruta no encontrada: {path}")

# Exportar directamente a un archivo TypeScript (.ts)
output_file = 'proyectos_generados.data.ts'

with open(output_file, 'w', encoding='utf-8') as f:
    # Escribimos un pequeño encabezado opcional
    f.write("// Archivo autogenerado por Python\n")
    # Formateamos los datos
    ts_content = to_typescript_format(all_nodes, indent_level=0)
    # Lo guardamos como una constante exportable
    f.write(f"export const GENERATED_PROJECTS = {ts_content};\n")

print(f"\n¡Éxito! Se generaron {len(all_nodes)} elementos en '{output_file}'.")




