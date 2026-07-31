NEO — Sitio web oficial

Sitio web oficial de **NEO**, una banda de rock alternativo. Reúne la identidad visual de la banda, su último lanzamiento, fechas de shows y enlaces a sus plataformas y redes sociales.

[English version](#neo--official-website)

## Características

- Presentación visual de la banda mediante una portada con imágenes.
- Sección dedicada al último lanzamiento, con reproductor de Spotify.
- Información destacada sobre shows y acceso a indicaciones del lugar.
- Enlaces centralizados a Instagram, Spotify, YouTube, TikTok y contacto para contrataciones.
- Diseño adaptable a dispositivos móviles y de escritorio.

## Tecnologías

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Iconify](https://iconify.design/) mediante `astro-icon`

## Ejecutar el proyecto localmente

**Requisitos:** Node.js 22.12 o superior y npm.

```bash
npm install
npm run dev
```

El sitio estará disponible en la dirección que indique Astro, normalmente `http://localhost:4321`.

Otros comandos disponibles:

```bash
npm run build    # Genera la versión de producción en dist/
npm run preview  # Previsualiza la versión de producción localmente
```

## Estructura del proyecto

```text
src/
├── components/  # Secciones y componentes reutilizables
├── config/      # Datos centralizados de la banda, música y shows
├── layouts/     # Estructura general de las páginas
├── pages/       # Rutas de Astro
└── styles/      # Estilos globales
public/
└── images/      # Logotipo, portadas y recursos visuales
```

La información que cambia con mayor frecuencia —redes, lanzamiento y show destacado— se mantiene en `src/config/band.config.ts`, para actualizarla sin tener que modificar los componentes visuales.

## Decisiones del proyecto

Astro permite crear un sitio rápido y principalmente estático, una buena opción para una web de presentación con contenido editorial. La primera versión no necesita backend: las novedades, los enlaces y las fechas se actualizan desde la configuración del proyecto.

---

# NEO — Official website

The official website for **NEO**, an alternative rock band. It brings together the band’s visual identity, latest release, show dates, and links to streaming platforms and social media.

[Versión en español](#neo--sitio-web-oficial)

## Features

- Visual band introduction with an image-based hero section.
- Latest-release section with an embedded Spotify player.
- Featured show details and venue directions.
- Centralized links to Instagram, Spotify, YouTube, TikTok, and booking contact.
- Responsive layout for mobile and desktop screens.

## Tech stack

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Iconify](https://iconify.design/) through `astro-icon`

## Run locally

**Requirements:** Node.js 22.12 or later, and npm.

```bash
npm install
npm run dev
```

Astro will print the local address in the terminal, usually `http://localhost:4321`.

Additional commands:

```bash
npm run build    # Builds the production site into dist/
npm run preview  # Previews the production build locally
```

## Project structure

```text
src/
├── components/  # Reusable components and site sections
├── config/      # Centralized band, music, and show information
├── layouts/     # Shared page layout
├── pages/       # Astro routes
└── styles/      # Global styles
public/
└── images/      # Logo, cover art, and visual assets
```

Frequently updated content —social links, latest release, and featured show— lives in `src/config/band.config.ts`, keeping content updates separate from the visual components.

## Project decisions

Astro provides a fast, mostly static site well suited to a band’s promotional presence and editorial content. The first version does not require a backend: announcements, links, and event details are maintained in the project configuration.