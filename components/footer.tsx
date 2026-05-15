"use client"

import Image from "next/image"
import { Mail, MessageCircle, MapPin, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo-polaris.png" alt="Polaris Studio" width={40} height={40} className="w-10 h-10" />
              <div>
                <h3 className="text-lg font-sans font-bold text-foreground">Polaris Studio</h3>
                <p className="text-sm text-primary font-medium">{t("footer.tagline")}</p>
              </div>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed text-sm">{t("footer.description")}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">{t("nav.contacto")}</h4>
            <div className="space-y-3 font-serif text-sm">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>vitabarmartin@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/5548996209954" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +55 (48) 99620-9954
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Siderópolis, SC, Brasil</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/polaris.studio.3d/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-serif text-sm">© 2026 Polaris Studio. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
