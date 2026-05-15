# Imágenes del Portafolio

Este directorio debe contener las imágenes de preview para cada proyecto del portafolio.

## Imágenes Requeridas

Renombra o agrega las siguientes imágenes con screenshots de los proyectos:

1. **project1-3d-portfolio.jpg** - Screenshot de https://portfolio3d-seven-alpha.vercel.app/
2. **project2-tattoo-studio.jpg** - Screenshot de https://my-tattoo-page-one.vercel.app/
3. **project3-delicias-rafa.jpg** - Screenshot de https://deliciasrafa.vercel.app/
4. **project4-era-de-prata.jpg** - Screenshot de https://eradeprata-site.vercel.app/

## Especificaciones

- **Dimensiones recomendadas**: 1200x900 px (aspect ratio 4:3)
- **Formato**: JPG o PNG
- **Calidad**: Alta calidad para visualización nítida
- **Tamaño máximo**: 500 KB por imagen

## Cómo Obtener Screenshots

### Opción 1: Herramientas Online
- https://www.screencapture.com/
- https://www.site-shot.com/
- https://screenshot.guru/

### Opción 2: Extensiones de Browser
- "Full Page Screen Capture" (Chrome)
- "GoFullPage" (Firefox)

### Opción 3: Manual
1. Abre cada sitio en tu browser
2. Usa la herramienta de captura de pantalla
3. Recorta a las dimensiones recomendadas
4. Guarda en este directorio con el nombre correspondiente

## Actualizar el Código

Después de agregar las imágenes, actualiza `components/portfolio-section.tsx`:

```typescript
const projects = [
  {
    titleKey: "portfolio.project1.title",
    descKey: "portfolio.project1.desc",
    image: "/portfolio-images/project1-3d-portfolio.jpg", // Actualizar esta ruta
    category: "3D Portfolio",
    url: "https://portfolio3d-seven-alpha.vercel.app/",
  },
  // ... resto de proyectos
]
```
