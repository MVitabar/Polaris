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
    <section className="relative py-24 bg-muted/30 overflow-hidden">
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
        <ScrollReveal direction="rotate" delay={0} duration={1400}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance transform hover:scale-105 transition-transform duration-500">
              {t("services.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <StaggeredReveal staggerDelay={200} direction="up" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 bg-card border-border transform hover:scale-110 hover:rotate-1 hover:shadow-primary/10"
              style={{
                transform: `translateY(${Math.sin((scrollY + index * 100) * 0.002) * 5}px)`,
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/30 transition-all duration-700 group-hover:scale-125 group-hover:rotate-360">
                    <service.icon className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground font-serif leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {t(service.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  )
}
