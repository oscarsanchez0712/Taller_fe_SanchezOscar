 # 🏋️‍♂️ GYM PODER

  **Una plataforma web moderna, receptiva y de alto rendimiento para la gestión y promoción de gimnasios.**

  [![Angular](https://img.shields.io/badge/Angular-17.3-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
  [![License](https://img.shields.io/badge/License-MIT-green.style=for-the-badge)](LICENSE)

  <br />

  [Explorar Funcionalidades](#-funcionalidades-clave) •
  [Instalación](#-instalación-rápida) •
  [Estructura](#-arquitectura-del-proyecto) •
  [Contacto](#-contacto)

</div>

---

## 📌 Visión General

**Gym Poder** es una aplicación SPA (*Single Page Application*) desarrollada con **Angular 17**, estructurada bajo una arquitectura modular limpia y escalable. Su diseño visualmente atractivo está orientado a maximizar la conversión de clientes a través de secciones informativas, promociones en tiempo real y una experiencia de usuario (UX) ágil y responsiva.

---

## ⚡ Funcionalidades Clave

| Módulo / Sección | Descripción |
| :--- | :--- |
| **🏠 Hero Section** | Banner principal con llamada a la acción (*CTA*) de alto impacto. |
| **🥊 Nos / Acerca** | Presentación institucional de la marca, filosofía y entrenadores. |
| **🏷️ Promociones** | Muestrario de ofertas especiales y planes de membresía. |
| **🛍️ Productos** | Catálogo interactivo de suplementos y equipamiento. |
| **📩 Contacto** | Formulario dinámico y canales directos de atención al cliente. |

---

## 🛠️ Stack Tecnológico

* **Core**: Angular 17.3+, TypeScript 5.x
* **Estructura HTML**: HTML5 Semántico
* **Estilos**: CSS3 Modular & Flexbox / Grid Layouts
* **Herramientas de Desarrollo**: Angular CLI, Node.js, Git, VS Code

---

## 📂 Arquitectura del Proyecto

El código sigue las mejores prácticas de Angular utilizando la metodología **Core / Features / Shared**:

```text
gym-poder/
 ├── 📄 angular.json
 ├── 📄 package.json
 └── 📁 src/
      ├── 📁 app/
      │    ├── 📁 core/                 # Servicios globales y guardias
      │    ├── 📁 features/             # Módulos de funcionalidades
      │    │    └── 📁 landing/
      │    │         ├── 📁 components/ # Hero, Navbar, Footer, Productos, Promo
      │    │         └── 📁 pages/      # Vistas completas (Inicio)
      │    └── 📁 shared/               # Componentes y pipes reutilizables
      ├── 📁 assets/                    # Recursos multimedias e imágenes
      └── 📄 styles.css                 # Estilos globales de la app

🚀 Instalación Rápida
Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Requisitos previos
Asegúrate de contar con Node.js en tu sistema:

node -v   # Versión >= 18.x recomendada
npm -v

2. Clonar el repositorio

git clone [https://github.com/oscarsanchez0712/Taller_fe_SanchezOscar.git](https://github.com/oscarsanchez0712/Taller_fe_SanchezOscar.git)

3. Instalar dependencias e Iniciar
Navega a la carpeta del proyecto Angular, instala los paquetes e inicia el servidor de desarrollo:

cd Taller_fe_SanchezOscar/gym-poder
npm install
ng serve -o

🌐 La aplicación se abrirá automáticamente en tu navegador en http://localhost:4200/.

👤 Contacto & Créditos
Desarrollado por Oscar Sánchez

📤 Para actualizarlo en GitHub:
Ejecuta estos comandos en tu terminal Git Bash:

git add README.md
git commit -m "docs: actualizar README con diseño profesional"
git push origin main
