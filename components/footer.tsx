"use client"

import Image from "next/image"
import { Mail, MessageCircle, MapPin, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-background border-t border-border/80 pt-20 pb-12 overflow-hidden">
      {/* Decorative subtle top glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold-border), var(--gold), var(--gold-border), transparent)" }}
      />
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "var(--gold-glow)" }} />
                <Image 
                  src="/images/logo-polaris.png" 
                  alt="Polaris Studio" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 relative z-10 transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-foreground">Polaris Studio</h3>
                <p className="text-xs text-primary font-medium tracking-wide">{t("footer.tagline")}</p>
              </div>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed text-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Column 2: Services Links */}
          <div>
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider mb-6 relative">
              {t("footer.services.title")}
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3 font-serif text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors duration-200">
                  {t("services3d.capability.products.title")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors duration-200">
                  {t("services3d.capability.animation.title")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors duration-200">
                  {t("services3d.capability.cgi.title")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors duration-200">
                  {t("services3d.capability.branding.title")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Info */}
          <div>
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider mb-6 relative">
              {t("footer.company.title")}
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3 font-serif text-sm text-muted-foreground">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors duration-200">
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors duration-200">
                  {t("nav.proceso")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors duration-200">
                  {t("footer.company.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider mb-2 relative">
              {t("nav.contacto")}
              <span className="absolute bottom-[-8px] left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <div className="space-y-4 font-serif text-sm pt-4">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@polaristudio.com.br" className="truncate">
                  contato@polaristudio.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-200">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://wa.me/5548996209954" target="_blank" rel="noopener noreferrer">
                  +55 (48) 99620-9954
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{t("footer.location")}</span>
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/polaris.studio.3d/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-card border border-border/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-card border border-border/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-md"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-serif text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Polaris Studio. {t("footer.rights")}
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-xs font-sans text-muted-foreground hover:text-primary flex items-center gap-1.5"
          >
            <span>{t("footer.back_to_top")}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </Button>
        </div>

      </div>
    </footer>
  )
}
