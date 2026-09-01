"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export type Language = "es" | "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ 
  children, 
  initialLanguage 
}: { 
  children: React.ReactNode
  initialLanguage?: Language 
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage || "es")
  const router = useRouter()
  const pathname = usePathname()

  // Detect language from URL on mount (only if no initialLanguage provided)
  useEffect(() => {
    if (initialLanguage) return // Skip if initialLanguage is provided
    
    const pathLocale = pathname.split('/')[1] as Language
    const validLocales = ['es', 'en', 'pt']
    
    if (validLocales.includes(pathLocale)) {
      setLanguage(pathLocale)
      localStorage.setItem("polaris-language", pathLocale)
    } else {
      // Load saved language preference if no locale in URL
      const saved = localStorage.getItem("polaris-language") as Language
      if (saved && validLocales.includes(saved)) {
        setLanguage(saved)
      }
    }
  }, [pathname, initialLanguage])

  // Save language preference and update URL when language changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("polaris-language", lang)
    
    // Update URL to reflect new language
    const currentPath = pathname
    const pathLocale = currentPath.split('/')[1]
    const validLocales = ['es', 'en', 'pt']
    
    if (validLocales.includes(pathLocale)) {
      // Replace current locale with new locale
      const newPath = currentPath.replace(`/${pathLocale}`, `/${lang}`)
      router.push(newPath)
    } else {
      // If no locale in URL, redirect to new locale
      router.push(`/${lang}`)
    }
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.es[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation & General
    "nav.inicio": "Inicio",
    "nav.servicios": "Servicios",
    "nav.portafolio": "Portafolio",
    "nav.proceso": "Proceso",
    "nav.contacto": "Contacto",
    "button.contactar": "Contactar",
    "button.ver_mas": "Ver más",
    "button.comenzar": "Comenzar proyecto",

    // Hero Section
    "hero.tagline": "Creamos la próxima dimensión visual",
    "hero.badge": "Estudio de 3D y CGI",
    "hero.title": "Elevamos tu marca a la tercera dimensión",
    "hero.subtitle":
      "Somos Polaris Studio, tu brújula en el universo visual 3D. Creamos renders fotorrealistas, animaciones y composiciones CGI que hacen brillar a tu marca en cualquier pantalla.",
    "hero.cta": "Iniciar mi proyecto 3D",
    "hero.learn_more": "Conocer más",
    "hero.trust.projects": "Proyectos",
    "hero.trust.rating": "Rating",
    "hero.trust.experience": "Años exp.",

    // Services Section
    "services.tag": "Servicios 3D & CGI",
    "services.title": "Arte 3D y CGI que convierte",
    "services.subtitle": "Del modelado al render final, un estudio completo de visualización tridimensional para tu marca.",
    "services.complement.tag": "También ofrecemos",
    "services.web_dev.title": "Desarrollo Web",
    "services.web_dev.desc": "Sitios web modernos, rápidos y optimizados que convierten visitantes en clientes.",
    "services.mobile_dev.title": "Aplicaciones Móviles",
    "services.mobile_dev.desc":
      "Apps nativas e híbridas que ofrecen experiencias excepcionales en cualquier dispositivo.",
    "services.ecommerce.title": "E-commerce",
    "services.ecommerce.desc": "Tiendas online completas con sistemas de pago seguros y gestión integral.",
    "services.branding.title": "Branding Digital",
    "services.branding.desc": "Identidad visual coherente que refleja la esencia de tu marca en el mundo digital.",
    "services.seo.title": "SEO & Marketing",
    "services.seo.desc": "Estrategias de posicionamiento que aumentan tu visibilidad y atraen más clientes.",
    "services.maintenance.title": "Mantenimiento",
    "services.maintenance.desc": "Soporte técnico continuo para mantener tu presencia digital siempre actualizada.",

    // Portfolio Section
    "portfolio.tag": "Portafolio",
    "portfolio.title": "Nuestro Portafolio",
    "portfolio.subtitle": "Proyectos 3D que inspiran y conectan",
    "portfolio.view_site": "Ver Sitio",
    "portfolio.more_works": "¿Querés ver más trabajos? Hablamos",
    "portfolio.view_details": "Ver detalles",
    "portfolio.view_3d_site": "Ver todos en el portfolio 3D",
    "portfolio.loading": "Cargando proyectos…",
    "portfolio.error": "No pudimos cargar los proyectos. Intentalo de nuevo.",
    "portfolio.retry": "Reintentar",
    "portfolio.empty": "Aún no hay proyectos publicados.",
    "portfolio.close": "Cerrar",
    "portfolio.gallery": "Galería",
    "portfolio.videos": "Videos",
    "portfolio.featured": "Destacado",
    "portfolio.project1.title": "M Vitabar | 3D Artist",
    "portfolio.project1.desc": "Portfolio profesional de artista 3D especializado en visualización de productos y CGI fotorealista",
    "portfolio.project2.title": "TOP SECRET TATTOO",
    "portfolio.project2.desc": "Estudio de tatuajes con galería de trabajos, servicios de tatuaje realista y sistema de agendamiento",
    "portfolio.project3.title": "Delicias da Rafa",
    "portfolio.project3.desc": "E-commerce de cestas de café da mañana y lanches con sistema de pedidos y catálogo de productos",
    "portfolio.project4.title": "Era de Prata",
    "portfolio.project4.desc": "Sitio artístico abstracto con experiencia inmersiva, tienda de merch y contenido musical exclusivo",
    "portfolio.project5.title": "Comandero",
    "portfolio.project5.desc": "Sistema de gestión de pedidos para restaurantes con panel administrativo y seguimiento en tiempo real",
    "portfolio.project6.title": "Multi-Tech",
    "portfolio.project6.desc": "Asistencia técnica especializada en celulares y computadores con servicio de excelencia en Siderópolis, Brasil",
    "portfolio.webdev.tag": "Desarrollo Web",
    "portfolio.webdev.title": "Nuestros Proyectos Web",
    "portfolio.webdev.subtitle": "Soluciones digitales que impulsan negocios",

    // Process Section
    "process.tag": "Metodología",
    "process.title": "Nuestro Proceso",
    "process.subtitle": "Del concepto al render final, paso a paso",
    "process.discovery.title": "Briefing y Concepto",
    "process.discovery.desc": "Entendemos tu marca y definimos el concepto visual que guiará todo el proyecto.",
    "process.design.title": "Diseño y Modelado",
    "process.design.desc": "Creamos el modelo 3D y los materiales con precisión artística.",
    "process.development.title": "Iluminación y Render",
    "process.development.desc": "Iluminamos la escena, aplicamos texturas y renderizamos cada detalle con fotorrealismo.",
    "process.launch.title": "Entrega y Ajustes",
    "process.launch.desc": "Entregamos los visuales finales y ajustamos cada detalle según tu necesidad.",

    // Testimonials Section
    "testimonials.tag": "Testimonios",
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.subtitle": "Historias de éxito que nos inspiran",
    "testimonials.client1.name": "Marina Costa",
    "testimonials.client1.role": "Directora de Marketing, NovaLine",
    "testimonials.client1.text":
      "Los renders de producto de Polaris Studio elevaron nuestra campaña a otro nivel. Todo se ve tan real que parece fotografiado en un estudio profesional.",
    "testimonials.client2.name": "Ricardo Almeida",
    "testimonials.client2.role": "Fundador, StudioAra",
    "testimonials.client2.text":
      "Polaris construyó la identidad 3D de nuestra marca. Cada textura, cada luz, cada ángulo fue cuidado al detalle. Un trabajo impecable.",
    "testimonials.client3.name": "Valentina Ríos",
    "testimonials.client3.role": "CMO, PixelHouse",
    "testimonials.client3.text":
      "Las animaciones 3D que crearon para nuestros productos triplicaron la interacción en redes sociales. Sin dudas, el mejor equipo de CGI de la región.",

    // CTA Section
    "cta.title": "¿Listo para darle dimensión a tu marca?",
    "cta.subtitle": "Contanos tu idea y transformala en arte 3D",
    "cta.button": "Iniciar conversación",
    "cta.form.title": "Contáctanos",
    "cta.form.subtitle": "Completa el formulario y nos pondremos en contacto contigo a la brevedad.",
    "cta.form.name": "Nombre completo",
    "cta.form.name.placeholder": "Tu nombre",
    "cta.form.name.required": "El nombre es requerido",
    "cta.form.name.minlength": "El nombre debe tener al menos 2 caracteres",
    "cta.form.name.empty": "El nombre no puede estar vacío",
    "cta.form.email": "Correo electrónico",
    "cta.form.email.placeholder": "tucorreo@ejemplo.com",
    "cta.form.email.required": "El correo es requerido",
    "cta.form.email.invalid": "Correo electrónico no válido",
    "cta.form.email.empty": "El correo es requerido",
    "cta.form.phone": "Teléfono (opcional)",
    "cta.form.phone.placeholder": "+55 48 1234-5678",
    "cta.form.message": "Mensaje",
    "cta.form.message.placeholder": "Contanos qué querés crear en 3D...",
    "cta.form.message.required": "El mensaje es requerido",
    "cta.form.message.minlength": "El mensaje debe tener al menos 10 caracteres",
    "cta.form.message.empty": "El mensaje debe tener al menos 10 caracteres",
    "cta.form.consent": "Me gustaría recibir actualizaciones y ofertas por correo electrónico o SMS",
    "cta.form.submit": "Enviar mensaje",
    "cta.form.submitting": "Enviando...",
    "cta.form.success.title": "¡Gracias por contactarnos!",
    "cta.form.success.message": "Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.",
    "cta.form.success.button": "Enviar otro mensaje",
    "cta.form.error.general": "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
    "cta.form.error.auth": "Error de autenticación. Por favor, verifica la configuración del servidor de correo.",
    "cta.form.error.connection": "Error de conexión segura. Por favor, inténtalo de nuevo más tarde.",

    // Footer
    "footer.tagline": "Creamos la próxima dimensión visual",
    "footer.description":
      "Creamos arte 3D y CGI fotorrealistas que elevan tu marca, desde la visualización de productos hasta la animación y composición CGI.",
    "footer.services.title": "Servicios",
    "footer.company.title": "Empresa",
    "footer.company.about": "Acerca de",
    "footer.company.team": "Equipo",
    "footer.company.careers": "Carreras",
    "footer.company.contact": "Contacto",
    "footer.legal.title": "Legal",
    "footer.legal.privacy": "Privacidad",
    "footer.legal.terms": "Términos",
    "footer.legal.cookies": "Cookies",
    "footer.rights": "Todos los derechos reservados.",
    "footer.location": "Siderópolis, SC, Brasil",
    "footer.back_to_top": "Volver arriba",

    // Stats Band
    "stats.projects": "Proyectos entregados",
    "stats.clients": "Clientes satisfechos",
    "stats.rating": "Rating promedio",
    "stats.response": "Tiempo de respuesta",

    // CTA Section
    "cta.availability": "Disponibilidad: 2 cupos para proyectos este mes",
    "cta.bullet1.title": "Respuesta en < 24hs",
    "cta.bullet1.desc": "Atención ágil y directa sin intermediarios.",
    "cta.bullet2.title": "Pipeline 3D completo",
    "cta.bullet2.desc": "Modelado, texturizado, iluminación y render en un solo equipo.",
    "cta.bullet3.title": "Soporte post-entrega",
    "cta.bullet3.desc": "Ajustes y seguimiento garantizados tras la entrega de tus visuales.",

    // 3D & CGI Section
    "services3d.tag": "Servicios 3D & CGI",
    "services3d.title": "Arte 3D y Visualización CGI",
    "services3d.subtitle": "Visuals fotorrealistas y arte 3D que elevan el storytelling de tu marca.",
    "services3d.badge": "Especialistas en 3D y CGI",
    "services3d.description":
      "En Polaris Studio, el 3D es el corazón de lo que hacemos. Creamos experiencias 3D inmersivas, renders fotorrealistas y composiciones CGI. Ya sea visualización de productos para e-commerce, animación 3D o branding tridimensional, combinamos precisión técnica con visión artística para entregar visuales que cautivan y convierten.",
    "services3d.cta": "Explorar servicios 3D",
    "services3d.interactive.title": "Viewer 3D Interactivo",
    "services3d.interactive.desc": "Arrastrá para rotar, scroll para hacer zoom. Así de inmersivos pueden ser tus productos.",
    "services3d.capability.products.title": "Visualización de Productos",
    "services3d.capability.products.desc": "Renders fotorrealistas que hacen que tus productos destaquen en e-commerce y publicidad.",
    "services3d.capability.animation.title": "Animación 3D",
    "services3d.capability.animation.desc": "Animaciones y motion graphics 3D que dan vida a tu marca.",
    "services3d.capability.branding.title": "Branding 3D",
    "services3d.capability.branding.desc": "Identidad visual tridimensional coherente que refleja la esencia de tu marca.",
    "services3d.capability.cgi.title": "Composición CGI",
    "services3d.capability.cgi.desc": "Composición y post-producción para campañas publicitarias impactantes.",
  },

  en: {
    // Navigation & General
    "nav.inicio": "Home",
    "nav.servicios": "Services",
    "nav.portafolio": "Portfolio",
    "nav.proceso": "Process",
    "nav.contacto": "Contact",
    "button.contactar": "Contact",
    "button.ver_mas": "Learn more",
    "button.comenzar": "Start project",

    // Hero Section
    "hero.tagline": "Crafting the next visual dimension",
    "hero.badge": "3D & CGI Studio",
    "hero.title": "We elevate your brand to the third dimension",
    "hero.subtitle":
      "We are Polaris Studio, your compass in the 3D visual universe. We create photorealistic renders, animations and CGI compositions that make your brand shine on any screen.",
    "hero.cta": "Start my 3D project",
    "hero.learn_more": "Learn more",
    "hero.trust.projects": "Projects",
    "hero.trust.rating": "Rating",
    "hero.trust.experience": "Years exp.",

    // Services Section
    "services.tag": "3D & CGI Services",
    "services.title": "3D art and CGI that converts",
    "services.subtitle": "From modeling to the final render, a complete 3D visualization studio for your brand.",
    "services.complement.tag": "We also offer",
    "services.web_dev.title": "Web Development",
    "services.web_dev.desc": "Modern, fast and optimized websites that convert visitors into customers.",
    "services.mobile_dev.title": "Mobile Applications",
    "services.mobile_dev.desc": "Native and hybrid apps that deliver exceptional experiences on any device.",
    "services.ecommerce.title": "E-commerce",
    "services.ecommerce.desc": "Complete online stores with secure payment systems and comprehensive management.",
    "services.branding.title": "Digital Branding",
    "services.branding.desc": "Coherent visual identity that reflects your brand's essence in the digital world.",
    "services.seo.title": "SEO & Marketing",
    "services.seo.desc": "Positioning strategies that increase your visibility and attract more customers.",
    "services.maintenance.title": "Maintenance",
    "services.maintenance.desc": "Continuous technical support to keep your digital presence always updated.",

    // Portfolio Section
    "portfolio.tag": "Portfolio",
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "3D projects that inspire and connect",
    "portfolio.view_site": "View Site",
    "portfolio.more_works": "Want to see more work? Let's talk",
    "portfolio.view_details": "View details",
    "portfolio.view_3d_site": "View all on the 3D portfolio",
    "portfolio.loading": "Loading projects…",
    "portfolio.error": "We couldn't load the projects. Try again.",
    "portfolio.retry": "Retry",
    "portfolio.empty": "No projects published yet.",
    "portfolio.close": "Close",
    "portfolio.gallery": "Gallery",
    "portfolio.videos": "Videos",
    "portfolio.featured": "Featured",
    "portfolio.project1.title": "M Vitabar | 3D Artist",
    "portfolio.project1.desc": "Professional 3D artist portfolio specializing in product visualization and photorealistic CGI",
    "portfolio.project2.title": "TOP SECRET TATTOO",
    "portfolio.project2.desc": "Tattoo studio with work gallery, realistic tattoo services, and appointment scheduling system",
    "portfolio.project3.title": "Delicias da Rafa",
    "portfolio.project3.desc": "E-commerce for breakfast baskets and snacks with ordering system and product catalog",
    "portfolio.project4.title": "Era de Prata",
    "portfolio.project4.desc": "Abstract artistic site with immersive experience, merch store, and exclusive music content",
    "portfolio.project5.title": "Comandero",
    "portfolio.project5.desc": "Restaurant order management system with admin panel and real-time tracking",
    "portfolio.project6.title": "Multi-Tech",
    "portfolio.project6.desc": "Specialized technical assistance for cell phones and computers with excellent service in Siderópolis, Brazil",
    "portfolio.webdev.tag": "Web Development",
    "portfolio.webdev.title": "Our Web Projects",
    "portfolio.webdev.subtitle": "Digital solutions that drive businesses",

    // Process Section
    "process.tag": "Methodology",
    "process.title": "Our Process",
    "process.subtitle": "From concept to the final render, step by step",
    "process.discovery.title": "Briefing & Concept",
    "process.discovery.desc": "We understand your brand and define the visual concept that guides the whole project.",
    "process.design.title": "Design & Modeling",
    "process.design.desc": "We craft the 3D model and materials with artistic precision.",
    "process.development.title": "Lighting & Rendering",
    "process.development.desc": "We light the scene, apply textures and render every detail with photorealism.",
    "process.launch.title": "Delivery & Refinement",
    "process.launch.desc": "We deliver the final visuals and refine every detail to your needs.",

    // Testimonials Section
    "testimonials.tag": "Testimonials",
    "testimonials.title": "What our clients say",
    "testimonials.subtitle": "Success stories that inspire us",
    "testimonials.client1.name": "Marina Costa",
    "testimonials.client1.role": "Marketing Director, NovaLine",
    "testimonials.client1.text":
      "Polaris Studio's product renders took our campaign to another level. Everything looks so real it seems shot in a professional studio.",
    "testimonials.client2.name": "Ricardo Almeida",
    "testimonials.client2.role": "Founder, StudioAra",
    "testimonials.client2.text":
      "Polaris built our brand's 3D identity. Every texture, every light, every angle was carefully crafted. Flawless work.",
    "testimonials.client3.name": "Valentina Ríos",
    "testimonials.client3.role": "CMO, PixelHouse",
    "testimonials.client3.text":
      "The 3D animations they created for our products tripled social media engagement. Hands down, the best CGI team in the region.",

    // CTA Section
    "cta.title": "Ready to give your brand a new dimension?",
    "cta.subtitle": "Tell us your idea and turn it into 3D art",
    "cta.button": "Start conversation",
    "cta.form.title": "Contact Us",
    "cta.form.subtitle": "Fill out the form and we'll get back to you shortly.",
    "cta.form.name": "Full Name",
    "cta.form.name.placeholder": "Your name",
    "cta.form.name.required": "Name is required",
    "cta.form.name.minlength": "Name must be at least 2 characters",
    "cta.form.name.empty": "Name cannot be empty",
    "cta.form.email": "Email Address",
    "cta.form.email.placeholder": "youremail@example.com",
    "cta.form.email.required": "Email is required",
    "cta.form.email.invalid": "Invalid email address",
    "cta.form.email.empty": "Email is required",
    "cta.form.phone": "Phone (optional)",
    "cta.form.phone.placeholder": "+55 48 1234-5678",
    "cta.form.message": "Message",
    "cta.form.message.placeholder": "Tell us what you want to create in 3D...",
    "cta.form.message.required": "Message is required",
    "cta.form.message.minlength": "Message must be at least 10 characters",
    "cta.form.message.empty": "Message must be at least 10 characters",
    "cta.form.consent": "I would like to receive updates and offers via email or SMS",
    "cta.form.submit": "Send Message",
    "cta.form.submitting": "Sending...",
    "cta.form.success.title": "Thank you for contacting us!",
    "cta.form.success.message": "We have received your message and will get back to you shortly.",
    "cta.form.success.button": "Send another message",
    "cta.form.error.general": "There was an error sending the message. Please try again later.",
    "cta.form.error.auth": "Authentication error. Please verify the email server configuration.",
    "cta.form.error.connection": "Secure connection error. Please try again later.",

    // Footer
    "footer.tagline": "Crafting the next visual dimension",
    "footer.description":
      "We craft photorealistic 3D art and CGI that elevate your brand, from product visualization to animation and CGI compositing.",
    "footer.services.title": "Services",
    "footer.company.title": "Company",
    "footer.company.about": "About",
    "footer.company.team": "Team",
    "footer.company.careers": "Careers",
    "footer.company.contact": "Contact",
    "footer.legal.title": "Legal",
    "footer.legal.privacy": "Privacy",
    "footer.legal.terms": "Terms",
    "footer.legal.cookies": "Cookies",
    "footer.rights": "All rights reserved.",
    "footer.location": "Siderópolis, SC, Brasil",
    "footer.back_to_top": "Back to top",

    // Stats Band
    "stats.projects": "Projects delivered",
    "stats.clients": "Satisfied clients",
    "stats.rating": "Average rating",
    "stats.response": "Response time",

    // CTA Section
    "cta.availability": "Availability: 2 slots open for projects this month",
    "cta.bullet1.title": "Response under 24 hours",
    "cta.bullet1.desc": "Agile, direct communication with no middlemen.",
    "cta.bullet2.title": "Complete 3D pipeline",
    "cta.bullet2.desc": "Modeling, texturing, lighting and rendering in a single team.",
    "cta.bullet3.title": "Post-delivery support",
    "cta.bullet3.desc": "Guaranteed adjustments and follow-up after your visuals are delivered.",

    // 3D & CGI Section
    "services3d.tag": "3D & CGI Services",
    "services3d.title": "3D Art and CGI Visualization",
    "services3d.subtitle": "Photorealistic visuals and 3D art that elevate your brand storytelling.",
    "services3d.badge": "3D & CGI Specialists",
    "services3d.description":
      "At Polaris Studio, 3D is at the heart of what we do. We create immersive 3D experiences, photorealistic renders and CGI compositions. Whether it's product visualization for e-commerce, 3D animation or three-dimensional branding, we combine technical precision with artistic vision to deliver visuals that captivate and convert.",
    "services3d.cta": "Explore 3D Services",
    "services3d.interactive.title": "Interactive 3D Viewer",
    "services3d.interactive.desc": "Drag to rotate, scroll to zoom. This is how immersive your products can be.",
    "services3d.capability.products.title": "Product Visualization",
    "services3d.capability.products.desc": "Photorealistic renders that make your products stand out in e-commerce and advertising.",
    "services3d.capability.animation.title": "3D Animation",
    "services3d.capability.animation.desc": "3D animations and motion graphics that bring your brand to life.",
    "services3d.capability.branding.title": "3D Branding",
    "services3d.capability.branding.desc": "Coherent three-dimensional visual identity that reflects your brand's essence.",
    "services3d.capability.cgi.title": "CGI Compositing",
    "services3d.capability.cgi.desc": "Compositing and post-production for impactful advertising campaigns.",
  },

  pt: {
    // Navigation & General
    "nav.inicio": "Início",
    "nav.servicios": "Serviços",
    "nav.portafolio": "Portfólio",
    "nav.proceso": "Processo",
    "nav.contacto": "Contato",
    "button.contactar": "Contatar",
    "button.ver_mas": "Saiba mais",
    "button.comenzar": "Iniciar projeto",

    // Hero Section
    "hero.tagline": "Criamos a próxima dimensão visual",
    "hero.badge": "Estúdio de 3D e CGI",
    "hero.title": "Elevamos sua marca à terceira dimensão",
    "hero.subtitle":
      "Somos o Polaris Studio, sua bússola no universo visual 3D. Criamos renders fotorrealistas, animações e composições CGI que fazem sua marca brilhar em qualquer tela.",
    "hero.cta": "Iniciar meu projeto 3D",
    "hero.learn_more": "Saiba mais",
    "hero.trust.projects": "Projetos",
    "hero.trust.rating": "Avaliação",
    "hero.trust.experience": "Anos exp.",

    // Services Section
    "services.tag": "Serviços 3D & CGI",
    "services.title": "Arte 3D e CGI que converte",
    "services.subtitle": "Da modelagem ao render final, um estúdio completo de visualização tridimensional para sua marca.",
    "services.complement.tag": "Também oferecemos",
    "services.web_dev.title": "Desenvolvimento Web",
    "services.web_dev.desc": "Sites modernos, rápidos e otimizados que convertem visitantes em clientes.",
    "services.mobile_dev.title": "Aplicações Móveis",
    "services.mobile_dev.desc":
      "Apps nativos e híbridos que oferecem experiências excepcionais em qualquer dispositivo.",
    "services.ecommerce.title": "E-commerce",
    "services.ecommerce.desc": "Lojas online completas com sistemas de pagamento seguros e gestão integral.",
    "services.branding.title": "Branding Digital",
    "services.branding.desc": "Identidade visual coerente que reflete a essência da sua marca no mundo digital.",
    "services.seo.title": "SEO & Marketing",
    "services.seo.desc": "Estratégias de posicionamento que aumentam sua visibilidade e atraem mais clientes.",
    "services.maintenance.title": "Manutenção",
    "services.maintenance.desc": "Suporte técnico contínuo para manter sua presença digital sempre atualizada.",

    // Portfolio Section
    "portfolio.tag": "Portfólio",
    "portfolio.title": "Nosso Portfólio",
    "portfolio.subtitle": "Projetos 3D que inspiram e conectam",
    "portfolio.view_site": "Ver Site",
    "portfolio.more_works": "Quer ver mais trabalhos? Vamos conversar",
    "portfolio.view_details": "Ver detalhes",
    "portfolio.view_3d_site": "Ver todos no portfólio 3D",
    "portfolio.loading": "Carregando projetos…",
    "portfolio.error": "Não conseguimos carregar os projetos. Tente novamente.",
    "portfolio.retry": "Tentar novamente",
    "portfolio.empty": "Ainda não há projetos publicados.",
    "portfolio.close": "Fechar",
    "portfolio.gallery": "Galeria",
    "portfolio.videos": "Vídeos",
    "portfolio.featured": "Destaque",
    "portfolio.project1.title": "M Vitabar | 3D Artist",
    "portfolio.project1.desc": "Portfólio profissional de artista 3D especializado em visualização de produtos e CGI fotorealista",
    "portfolio.project2.title": "TOP SECRET TATTOO",
    "portfolio.project2.desc": "Estúdio de tatuagens com galeria de trabalhos, serviços de tatuagem realista e sistema de agendamento",
    "portfolio.project3.title": "Delicias da Rafa",
    "portfolio.project3.desc": "E-commerce de cestas de café da manhã e lanches com sistema de pedidos e catálogo de produtos",
    "portfolio.project4.title": "Era de Prata",
    "portfolio.project4.desc": "Site artístico abstrato com experiência imersiva, loja de merch e conteúdo musical exclusivo",
    "portfolio.project5.title": "Comandero",
    "portfolio.project5.desc": "Sistema de gestão de pedidos para restaurantes com painel administrativo e rastreamento em tempo real",
    "portfolio.project6.title": "Multi-Tech",
    "portfolio.project6.desc": "Assistência técnica especializada em celulares e computadores com atendimento de excelência em Siderópolis, Brasil",
    "portfolio.webdev.tag": "Desenvolvimento Web",
    "portfolio.webdev.title": "Nossos Projetos Web",
    "portfolio.webdev.subtitle": "Soluções digitais que impulsionam negócios",

    // Process Section
    "process.tag": "Metodologia",
    "process.title": "Nosso Processo",
    "process.subtitle": "Do conceito ao render final, passo a passo",
    "process.discovery.title": "Briefing e Conceito",
    "process.discovery.desc": "Entendemos sua marca e definimos o conceito visual que guiará todo o projeto.",
    "process.design.title": "Design e Modelagem",
    "process.design.desc": "Criamos o modelo 3D e os materiais com precisão artística.",
    "process.development.title": "Iluminação e Render",
    "process.development.desc": "Iluminamos a cena, aplicamos texturas e renderizamos cada detalhe com fotorrealismo.",
    "process.launch.title": "Entrega e Ajustes",
    "process.launch.desc": "Entregamos os visuais finais e ajustamos cada detalhe conforme sua necessidade.",

    // Testimonials Section
    "testimonials.tag": "Depoimentos",
    "testimonials.title": "O que dizem nossos clientes",
    "testimonials.subtitle": "Histórias de sucesso que nos inspiram",
    "testimonials.client1.name": "Marina Costa",
    "testimonials.client1.role": "Diretora de Marketing, NovaLine",
    "testimonials.client1.text":
      "Os renders de produto do Polaris Studio elevaram nossa campanha a outro nível. Tudo parece tão real que parece fotografado em um estúdio profissional.",
    "testimonials.client2.name": "Ricardo Almeida",
    "testimonials.client2.role": "Fundador, StudioAra",
    "testimonials.client2.text":
      "O Polaris construiu a identidade 3D da nossa marca. Cada textura, cada luz, cada ângulo foi cuidado ao detalhe. Um trabalho impecável.",
    "testimonials.client3.name": "Valentina Ríos",
    "testimonials.client3.role": "CMO, PixelHouse",
    "testimonials.client3.text":
      "As animações 3D que criaram para nossos produtos triplicaram a interação nas redes sociais. Sem dúvida, a melhor equipe de CGI da região.",

    // CTA Section
    "cta.title": "Pronto para dar dimensão à sua marca?",
    "cta.subtitle": "Conte-nos sua ideia e transforme-a em arte 3D",
    "cta.button": "Iniciar conversa",
    "cta.form.title": "Entre em Contato",
    "cta.form.subtitle": "Preencha o formulário e entraremos em contato com você em breve.",
    "cta.form.name": "Nome Completo",
    "cta.form.name.placeholder": "Seu nome",
    "cta.form.name.required": "Nome é obrigatório",
    "cta.form.name.minlength": "Nome deve ter pelo menos 2 caracteres",
    "cta.form.name.empty": "Nome não pode estar vazio",
    "cta.form.email": "Endereço de E-mail",
    "cta.form.email.placeholder": "seuemail@exemplo.com",
    "cta.form.email.required": "E-mail é obrigatório",
    "cta.form.email.invalid": "Endereço de e-mail inválido",
    "cta.form.email.empty": "E-mail é obrigatório",
    "cta.form.phone": "Telefone (opcional)",
    "cta.form.phone.placeholder": "+55 48 1234-5678",
    "cta.form.message": "Mensagem",
    "cta.form.message.placeholder": "Conte-nos o que você quer criar em 3D...",
    "cta.form.message.required": "Mensagem é obrigatória",
    "cta.form.message.minlength": "Mensagem deve ter pelo menos 10 caracteres",
    "cta.form.message.empty": "Mensagem deve ter pelo menos 10 caracteres",
    "cta.form.consent": "Gostaria de receber atualizações e ofertas por e-mail ou SMS",
    "cta.form.submit": "Enviar Mensagem",
    "cta.form.submitting": "Enviando...",
    "cta.form.success.title": "Obrigado por entrar em contato!",
    "cta.form.success.message": "Recebemos sua mensagem e entraremos em contato com você em breve.",
    "cta.form.success.button": "Enviar outra mensagem",
    "cta.form.error.general": "Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.",
    "cta.form.error.auth": "Erro de autenticação. Por favor, verifique a configuração do servidor de e-mail.",
    "cta.form.error.connection": "Erro de conexão segura. Por favor, tente novamente mais tarde.",

    // Footer
    "footer.tagline": "Criamos a próxima dimensão visual",
    "footer.description":
      "Criamos arte 3D e CGI fotorrealistas que elevam sua marca, desde a visualização de produtos até a animação e composição CGI.",
    "footer.services.title": "Serviços",
    "footer.company.title": "Empresa",
    "footer.company.about": "Sobre",
    "footer.company.team": "Equipe",
    "footer.company.careers": "Carreiras",
    "footer.company.contact": "Contato",
    "footer.legal.title": "Legal",
    "footer.legal.privacy": "Privacidade",
    "footer.legal.terms": "Termos",
    "footer.legal.cookies": "Cookies",
    "footer.rights": "Todos os direitos reservados.",
    "footer.location": "Siderópolis, SC, Brasil",
    "footer.back_to_top": "Voltar ao topo",

    // Stats Band
    "stats.projects": "Projetos entregues",
    "stats.clients": "Clientes satisfeitos",
    "stats.rating": "Avaliação média",
    "stats.response": "Tempo de resposta",

    // CTA Section
    "cta.availability": "Disponibilidade: 2 vagas para projetos este mês",
    "cta.bullet1.title": "Resposta em < 24h",
    "cta.bullet1.desc": "Atendimento ágil e direto sem intermediários.",
    "cta.bullet2.title": "Pipeline 3D completo",
    "cta.bullet2.desc": "Modelagem, texturização, iluminação e render em uma única equipe.",
    "cta.bullet3.title": "Suporte pós-entrega",
    "cta.bullet3.desc": "Ajustes e acompanhamento garantidos após a entrega dos seus visuais.",

    // 3D & CGI Section
    "services3d.tag": "Serviços 3D & CGI",
    "services3d.title": "Arte 3D e Visualização CGI",
    "services3d.subtitle": "Visuais fotorrealistas e arte 3D que elevam o storytelling da sua marca.",
    "services3d.badge": "Especialistas em 3D e CGI",
    "services3d.description":
      "No Polaris Studio, o 3D é o coração do que fazemos. Criamos experiências 3D imersivas, renders fotorrealistas e composições CGI. Seja visualização de produtos para e-commerce, animação 3D ou branding tridimensional, combinamos precisão técnica com visão artística para entregar visuais que cativam e convertem.",
    "services3d.cta": "Explorar serviços 3D",
    "services3d.interactive.title": "Visualizador 3D Interativo",
    "services3d.interactive.desc": "Arraste para girar, role para dar zoom. Assim de imersivos seus produtos podem ser.",
    "services3d.capability.products.title": "Visualização de Produtos",
    "services3d.capability.products.desc": "Renders fotorrealistas que fazem seus produtos se destacarem no e-commerce e na publicidade.",
    "services3d.capability.animation.title": "Animação 3D",
    "services3d.capability.animation.desc": "Animações e motion graphics 3D que dão vida à sua marca.",
    "services3d.capability.branding.title": "Branding 3D",
    "services3d.capability.branding.desc": "Identidade visual tridimensional coerente que reflete a essência da sua marca.",
    "services3d.capability.cgi.title": "Composição CGI",
    "services3d.capability.cgi.desc": "Composição e pós-produção para campanhas publicitárias impactantes.",
  },
}
