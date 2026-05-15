# Polaris Studio

Sitio web corporativo de agencia digital desarrollado con Next.js, TypeScript, Tailwind CSS y shadcn/ui.

## 🚀 Características

- **Sitio web corporativo moderno** para agencia digital Polaris Studio
- **Soporte multilingüe**: Español, Inglés y Portugués
- **Diseño responsive** con animaciones fluidas
- **Formulario de contacto funcional** con envío de correos
- **SEO optimizado** con metadata completa y sitemap
- **Tema personalizado** con colores azul oscuro y dorado
- **Componentes UI reutilizables** de shadcn/ui

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14.2.16 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4.1.9
- **Componentes UI**: shadcn/ui (Radix UI)
- **Formularios**: React Hook Form + Zod
- **Email**: Nodemailer (Gmail SMTP)
- **Fuentes**: Poppins, Lora, Geist Mono

## 📋 Requisitos Previos

- Node.js 18+ 
- pnpm (recomendado) o bun

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd Polaris
```

2. Instalar pnpm (si no lo tienes):
```bash
npm install -g pnpm
```

3. Instalar dependencias:
```bash
pnpm install
```

4. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

5. Editar `.env.local` con tus credenciales:
```env
GMAIL_USER=tu-correo@gmail.com
GMAIL_APP_PASSWORD=tu-contraseña-de-aplicación
EMAIL_FROM=Polaris Studio <noreply@polarisstudio.com>
EMAIL_TO=tu-correo@destino.com
```

## 📧 Configuración de Gmail SMTP

Para que el formulario de contacto funcione, necesitas configurar Gmail SMTP:

1. Ve a [Cuentas de Google](https://myaccount.google.com/)
2. Activa la **Verificación en dos pasos**
3. Ve a [Contraseñas de aplicación](https://myaccount.google.com/apppasswords)
4. Crea una nueva contraseña de aplicación para "Correo"
5. Usa esa contraseña en `GMAIL_APP_PASSWORD`

## 🚀 Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Linting
pnpm lint
```

## 📁 Estructura del Proyecto

```
Polaris/
├── app/                    # App Router de Next.js
│   ├── api/               # API routes
│   │   └── send-email/    # Endpoint para envío de correos
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── portfolio-section.tsx
│   └── ...
├── contexts/             # Contextos React
│   └── language-context.tsx
├── hooks/                # Custom hooks
├── lib/                  # Utilidades
│   └── email/           # Configuración de email
├── public/              # Archivos estáticos
└── styles/              # Estilos adicionales
```

## 🌍 Internacionalización

El proyecto soporta 3 idiomas: Español (ES), Inglés (EN) y Portugués (PT).

Las traducciones se encuentran en `contexts/language-context.tsx`. Para agregar nuevas traducciones:

1. Agrega las keys en el objeto `translations` para cada idioma
2. Usa el hook `useLanguage()` en tus componentes:
```typescript
const { t } = useLanguage()
<h1>{t("hero.title")}</h1>
```

## 🎨 Personalización

### Colores del Tema

Los colores se configuran en `app/globals.css`:

```css
:root {
  --background: #071b2a;  /* Azul oscuro */
  --primary: #e8c77f;     /* Dorado */
  /* ... */
}
```

### Fuentes

Las fuentes se configuran en `app/layout.tsx`:
- **Poppins**: Títulos (sans-serif)
- **Lora**: Cuerpo de texto (serif)
- **Geist Mono**: Código (monoespaciada)

## 📱 Deploy

### Vercel (Recomendado)

1. Push el código a GitHub
2. Importar el proyecto en [Vercel](https://vercel.com)
3. Configurar las variables de entorno en el dashboard de Vercel
4. Deploy automático

### Variables de Entorno en Vercel

Configura estas variables en Settings > Environment Variables:
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `EMAIL_FROM`
- `EMAIL_TO`

## 🔒 Seguridad

- **Nunca** commits archivos `.env.local` con credenciales reales
- Usa `.env.example` como plantilla
- Las credenciales de Gmail están protegidas con variables de entorno
- Validación de variables en producción para evitar errores

## 🐛 Troubleshooting

### El formulario de contacto no funciona

1. Verifica que las variables de entorno estén configuradas correctamente
2. Asegúrate de haber generado una contraseña de aplicación de Gmail válida
3. Revisa los logs del servidor para errores de autenticación

### Errores de build

1. Limpia la caché: `rm -rf .next`
2. Reinstala dependencias: `rm -rf node_modules && pnpm install`
3. Verifica que Node.js sea versión 18+

## 📄 Licencia

Este proyecto es propiedad de Polaris Studio. Todos los derechos reservados.

## 👥 Contacto

- **Email**: hola@polarisstudio.com
- **Sitio web**: https://polaris-studio.vercel.app
