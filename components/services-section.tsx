"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, ShoppingCart, Palette, Search, Wrench } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal, StaggeredReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"
import { useAdvancedParallax } from "@/hooks/use-parallax"

export function ServicesSection() {
  const { t } = useLanguage()
  const { scrollY } = useAdvancedParallax()

  const services = [
    {
      icon: Code,
      titleKey: "services.web_dev.title",
      descKey: "services.web_dev.desc",
    },
    {
      icon: Smartphone,
      titleKey: "services.mobile_dev.title",
      descKey: "services.mobile_dev.desc",
    },
    {
      icon: ShoppingCart,
      titleKey: "services.ecommerce.title",
      descKey: "services.ecommerce.desc",
    },
    {
      icon: Palette,
      titleKey: "services.branding.title",
      descKey: "services.branding.desc",
    },
    {
      icon: Search,
      titleKey: "services.seo.title",
      descKey: "services.seo.desc",
    },
    {
      icon: Wrench,
      titleKey: "services.maintenance.title",
      descKey: "services.maintenance.desc",
    },
  ]

  return (
    <section className="relative py-24 bg-muted/10 overflow-hidden">
      <ParallaxBackground speed={0.3} className="opacity-10">
        <div
          className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.03}px) scale(${1 + scrollY * 0.0001})`,
          }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${-scrollY * 0.01}px, ${-scrollY * 0.02}px) scale(${1 + scrollY * 0.0001})`,
          }}
        />
      </ParallaxBackground>

      <ParallaxBackground speed={0.15} className="opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      </ParallaxBackground>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale" delay={0} duration={1200}>
          <div className="text-center mb-20">
            <span className="section-tag mb-4">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance tracking-tight">
              {t("services.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <StaggeredReveal staggerDelay={100} direction="up" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group glass-card-hover hover:border-primary/40 relative overflow-hidden transition-all duration-700 bg-card border-border"
              style={{
                transform: `translateY(${Math.sin((scrollY + index * 100) * 0.002) * 5}px)`,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Big number index decoration */}
              <span className="number-bg right-4 top-2 text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <CardContent className="p-8 text-left relative z-10 flex flex-col h-full justify-between min-h-[250px]">
                <div>
                  <div className="mb-6 flex">
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110">
                      <service.icon className="w-7 h-7 text-primary transition-all duration-500 group-hover:scale-105" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-sans font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {t(service.titleKey)}
                  </h3>
                  
                  <p className="text-muted-foreground font-serif leading-relaxed text-sm">
                    {t(service.descKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  )
}
