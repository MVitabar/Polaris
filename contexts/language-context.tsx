"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  // Load saved language preference
  useEffect(() => {
    const saved = localStorage.getItem("polaris-language") as Language
    if (saved && ["es", "en", "pt"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  // Save language preference
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("polaris-language", lang)
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
    "hero.tagline": "Guiamos tu rumbo digital",
    "hero.title": "Transformamos ideas en experiencias digitales extraordinarias",
    "hero.subtitle":
      "Somos Polaris Studio, tu brújula en el vasto océano digital. Creamos sitios web y aplicaciones que no solo funcionan, sino que inspiran y conectan con tu audiencia.",
    "hero.cta": "Iniciar mi proyecto",
    "hero.learn_more": "Conocer más",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Navegamos juntos hacia el éxito digital",
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
    "portfolio.title": "Nuestro Portafolio",
    "portfolio.subtitle": "Proyectos que marcan el rumbo",
    "portfolio.project1.title": "M Vitabar | 3D Artist",
    "portfolio.project1.desc": "Portfolio profesional de artista 3D especializado en visualización de productos y CGI fotorealista",
    "portfolio.project2.title": "TOP SECRET TATTOO",
    "portfolio.project2.desc": "Estudio de tatuajes con galería de trabajos, servicios de tatuaje realista y sistema de agendamiento",
    "portfolio.project3.title": "Delicias da Rafa",
    "portfolio.project3.desc": "E-commerce de cestas de café da mañana y lanches con sistema de pedidos y catálogo de productos",
    "portfolio.project4.title": "Era de Prata",
    "portfolio.project4.desc": "Sitio artístico abstracto con experiencia inmersiva, tienda de merch y contenido musical exclusivo",

    // Process Section
    "process.title": "Nuestro Proceso",
    "process.subtitle": "Un viaje estructurado hacia el éxito",
    "process.discovery.title": "Descubrimiento",
    "process.discovery.desc": "Analizamos tus necesidades y objetivos para trazar la ruta perfecta.",
    "process.design.title": "Diseño",
    "process.design.desc": "Creamos prototipos y diseños que reflejan tu visión y atraen a tu audiencia.",
    "process.development.title": "Desarrollo",
    "process.development.desc": "Construimos tu solución digital con las mejores tecnologías y prácticas.",
    "process.launch.title": "Lanzamiento",
    "process.launch.desc": "Desplegamos tu proyecto y te acompañamos en cada paso del camino.",

    // Testimonials Section
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.subtitle": "Historias de éxito que nos inspiran",
    "testimonials.client1.name": "María González",
    "testimonials.client1.role": "CEO, TechStart",
    "testimonials.client1.text":
      "Polaris Studio transformó completamente nuestra presencia digital. Su enfoque profesional y atención al detalle superaron nuestras expectativas.",
    "testimonials.client2.name": "Carlos Mendoza",
    "testimonials.client2.role": "Director, InnovaShop",
    "testimonials.client2.text":
      "El equipo de Polaris nos guió desde la idea inicial hasta el lanzamiento exitoso. Su experiencia fue fundamental para nuestro crecimiento.",
    "testimonials.client3.name": "Ana Rodríguez",
    "testimonials.client3.role": "Fundadora, EduTech",
    "testimonials.client3.text":
      "Profesionales excepcionales que entienden las necesidades del mercado actual. Recomiendo Polaris Studio sin dudarlo.",

    // CTA Section
    "cta.title": "¿Listo para navegar hacia el éxito?",
    "cta.subtitle": "Comencemos juntos tu próximo proyecto digital",
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
    "cta.form.message.placeholder": "Cuéntanos cómo podemos ayudarte...",
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
    "footer.tagline": "Guiamos tu rumbo digital",
    "footer.description":
      "Transformamos ideas en experiencias digitales extraordinarias que conectan, inspiran y generan resultados.",
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
    "hero.tagline": "We guide your digital course",
    "hero.title": "We transform ideas into extraordinary digital experiences",
    "hero.subtitle":
      "We are Polaris Studio, your compass in the vast digital ocean. We create websites and applications that don't just work, but inspire and connect with your audience.",
    "hero.cta": "Start my project",
    "hero.learn_more": "Learn more",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Navigating together towards digital success",
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
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Projects that set the course",
    "portfolio.project1.title": "M Vitabar | 3D Artist",
    "portfolio.project1.desc": "Professional 3D artist portfolio specializing in product visualization and photorealistic CGI",
    "portfolio.project2.title": "TOP SECRET TATTOO",
    "portfolio.project2.desc": "Tattoo studio with work gallery, realistic tattoo services, and appointment scheduling system",
    "portfolio.project3.title": "Delicias da Rafa",
    "portfolio.project3.desc": "E-commerce for breakfast baskets and snacks with ordering system and product catalog",
    "portfolio.project4.title": "Era de Prata",
    "portfolio.project4.desc": "Abstract artistic site with immersive experience, merch store, and exclusive music content",

    // Process Section
    "process.title": "Our Process",
    "process.subtitle": "A structured journey to success",
    "process.discovery.title": "Discovery",
    "process.discovery.desc": "We analyze your needs and objectives to chart the perfect route.",
    "process.design.title": "Design",
    "process.design.desc": "We create prototypes and designs that reflect your vision and attract your audience.",
    "process.development.title": "Development",
    "process.development.desc": "We build your digital solution with the best technologies and practices.",
    "process.launch.title": "Launch",
    "process.launch.desc": "We deploy your project and accompany you every step of the way.",

    // Testimonials Section
    "testimonials.title": "What our clients say",
    "testimonials.subtitle": "Success stories that inspire us",
    "testimonials.client1.name": "Maria González",
    "testimonials.client1.role": "CEO, TechStart",
    "testimonials.client1.text":
      "Polaris Studio completely transformed our digital presence. Their professional approach and attention to detail exceeded our expectations.",
    "testimonials.client2.name": "Carlos Mendoza",
    "testimonials.client2.role": "Director, InnovaShop",
    "testimonials.client2.text":
      "The Polaris team guided us from the initial idea to successful launch. Their experience was fundamental to our growth.",
    "testimonials.client3.name": "Ana Rodriguez",
    "testimonials.client3.role": "Founder, EduTech",
    "testimonials.client3.text":
      "Exceptional professionals who understand current market needs. I recommend Polaris Studio without hesitation.",

    // CTA Section
    "cta.title": "Ready to navigate towards success?",
    "cta.subtitle": "Let's start your next digital project together",
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
    "cta.form.message.placeholder": "Tell us how we can help you...",
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
    "footer.tagline": "We guide your digital course",
    "footer.description":
      "We transform ideas into extraordinary digital experiences that connect, inspire and generate results.",
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
    "hero.tagline": "Guiamos seu rumo digital",
    "hero.title": "Transformamos ideias em experiências digitais extraordinárias",
    "hero.subtitle":
      "Somos o Polaris Studio, sua bússola no vasto oceano digital. Criamos sites e aplicações que não apenas funcionam, mas inspiram e conectam com sua audiência.",
    "hero.cta": "Iniciar meu projeto",
    "hero.learn_more": "Saiba mais",

    // Services Section
    "services.title": "Nossos Serviços",
    "services.subtitle": "Navegamos juntos rumo ao sucesso digital",
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
    "portfolio.title": "Nosso Portfólio",
    "portfolio.subtitle": "Projetos que marcam o rumo",
    "portfolio.project1.title": "M Vitabar | 3D Artist",
    "portfolio.project1.desc": "Portfólio profissional de artista 3D especializado em visualização de produtos e CGI fotorealista",
    "portfolio.project2.title": "TOP SECRET TATTOO",
    "portfolio.project2.desc": "Estúdio de tatuagem com galeria de trabalhos, serviços de tatuagem realista e sistema de agendamento",
    "portfolio.project3.title": "Delicias da Rafa",
    "portfolio.project3.desc": "E-commerce de cestas de café da manhã e lanches com sistema de pedidos e catálogo de produtos",
    "portfolio.project4.title": "Era de Prata",
    "portfolio.project4.desc": "Site artístico abstrato com experiência imersiva, loja de merch e conteúdo musical exclusivo",

    // Process Section
    "process.title": "Nosso Processo",
    "process.subtitle": "Uma jornada estruturada rumo ao sucesso",
    "process.discovery.title": "Descoberta",
    "process.discovery.desc": "Analisamos suas necessidades e objetivos para traçar a rota perfeita.",
    "process.design.title": "Design",
    "process.design.desc": "Criamos protótipos e designs que refletem sua visão e atraem sua audiência.",
    "process.development.title": "Desenvolvimento",
    "process.development.desc": "Construímos sua solução digital com as melhores tecnologias e práticas.",
    "process.launch.title": "Lançamento",
    "process.launch.desc": "Implantamos seu projeto e o acompanhamos em cada passo do caminho.",

    // Testimonials Section
    "testimonials.title": "O que dizem nossos clientes",
    "testimonials.subtitle": "Histórias de sucesso que nos inspiram",
    "testimonials.client1.name": "Maria González",
    "testimonials.client1.role": "CEO, TechStart",
    "testimonials.client1.text":
      "O Polaris Studio transformou completamente nossa presença digital. Sua abordagem profissional e atenção aos detalhes superaram nossas expectativas.",
    "testimonials.client2.name": "Carlos Mendoza",
    "testimonials.client2.role": "Diretor, InnovaShop",
    "testimonials.client2.text":
      "A equipe do Polaris nos guiou desde a ideia inicial até o lançamento bem-sucedido. Sua experiência foi fundamental para nosso crescimento.",
    "testimonials.client3.name": "Ana Rodriguez",
    "testimonials.client3.role": "Fundadora, EduTech",
    "testimonials.client3.text":
      "Profissionais excepcionais que entendem as necessidades do mercado atual. Recomendo o Polaris Studio sem hesitação.",

    // CTA Section
    "cta.title": "Pronto para navegar rumo ao sucesso?",
    "cta.subtitle": "Vamos começar juntos seu próximo projeto digital",
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
    "cta.form.message.placeholder": "Conte-nos como podemos ajudá-lo...",
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
    "footer.tagline": "Guiamos seu rumo digital",
    "footer.description":
      "Transformamos ideias em experiências digitais extraordinárias que conectam, inspiram e geram resultados.",
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
  },
}
