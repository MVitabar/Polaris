"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo-polaris.png" alt="Polaris Studio" width={40} height={40} className="w-10 h-10" />
              <div>
                <h3 className="text-lg font-sans font-bold text-foreground">Polaris Studio</h3>
                <p className="text-sm text-primary font-medium">{t("footer.tagline")}</p>
              </div>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2 font-serif">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.web_dev.title")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.mobile_dev.title")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.ecommerce.title")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.branding.title")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.seo.title")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">{t("footer.company.title")}</h4>
            <ul className="space-y-2 font-serif">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.portafolio")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.careers")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.company.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">{t("nav.contacto")}</h4>
            <div className="space-y-3 font-serif">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hola@polarisstudio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ciudad de México, México</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-serif text-sm">© 2025 Polaris Studio. {t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-serif text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {t("footer.legal.privacy")}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {t("footer.legal.terms")}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {t("footer.legal.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
