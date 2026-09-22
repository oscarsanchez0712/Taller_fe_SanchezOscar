# 🏋️‍♂️ Gym Poder - Aplicación Web Angular

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.style=for-the-badge)

**Gym Poder** es una aplicación web moderna orientada a la gestión y presentación de un gimnasio. Desarrollada con Angular, cuenta con una arquitectura modular enfocada en componentes reutilizables, secciones informativas de alto impacto (*Landing Page*) y soporte para una óptima experiencia de usuario.

---

## 🚀 Características Principales

- **Landing Page Interactiva**: Sección inicial (*Hero*), presentación (*Nosotros*), galería de *Productos* y promociones destacadas.
- **Formulario de Contacto**: Canales directos de comunicación e interacción con el cliente.
- **Navegación Fluida**: Barra de navegación (*Navbar*) y pie de página (*Footer*) dinámicos con el enrutador de Angular.
- **Estructura Escalable**: Organización por módulos y componentes utilizando la metodología de arquitectura *Core* y *Features*.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Angular 17+](https://angular.io/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: CSS3 / Responsive Web Design
- **Gestor de Paquetes**: Node Package Manager (npm)

---

## 📁 Estructura del Proyecto

```text
gym-poder/
├── src/
│   ├── app/
│   │   ├── core/                  # Módulos y servicios globales
│   │   ├── features/              # Funcionalidades principales
│   │   │   └── landing/           # Landing page del gimnasio
│   │   │       ├── components/    # Navbar, Hero, Productos, etc.
│   │   │       └── pages/         # Páginas principales (Inicio)
│   │   └── shared/                # Componentes y pipes compartidos
│   ├── assets/                    # Imágenes y recursos estáticos
│   ├── index.html
│   ├── main.ts
│   └── styles.css                 # Estilos globales
├── angular.json
└── package.json

💻 Instalación y Configuración Local
Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

Pre-requisitos
Asegúrate de contar con Node.js y Angular CLI instalados en tu sistema.

Bash
node -v
npm -v
npm install -g @angular/cli
Pasos para iniciar el entorno
Clonar el repositorio:

Bash
git clone [https://github.com/oscarsanchez0712/Taller_fe_SanchezOscar.git](https://github.com/oscarsanchez0712/Taller_fe_SanchezOscar.git)
Acceder a la carpeta del proyecto:

Bash
cd Taller_fe_SanchezOscar/gym-poder
Instalar dependencias de Node:

Bash
npm install
Levantar el servidor de desarrollo:

Bash
ng serve
Abre tu navegador y navega a http://localhost:4200/. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.

🧪 Pruebas y Construcción
Ejecutar pruebas unitarias
Bash
ng test
Compilar para Producción
Bash
ng build --configuration production
Los archivos compilados se generarán en la carpeta dist/.

👤 Autor
Oscar Sánchez - @oscarsanchez0712


---

### Instrucciones para subirlo a GitHub:

1. Crea o reemplaza el archivo `README.md` en la carpeta raíz.
2. Abre la terminal en Git Bash y ejecuta:
   ```bash
   git add README.md
   git commit -m "docs: agregar README profesional"
   git push origin main
