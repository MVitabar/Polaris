"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Palette, Code2, Rocket } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export function ProcessSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Search,
      titleKey: "process.discovery.title",
      descKey: "process.discovery.desc",
    },
    {
      icon: Palette,
      titleKey: "process.design.title",
      descKey: "process.design.desc",
    },
    {
      icon: Code2,
      titleKey: "process.development.title",
      descKey: "process.development.desc",
    },
    {
      icon: Rocket,
      titleKey: "process.launch.title",
      descKey: "process.launch.desc",
    },
  ]

  return (
    <section className="relative py-24 bg-muted/30 overflow-hidden">
      <ParallaxBackground speed={0.2} className="opacity-15">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-2xl" />
      </ParallaxBackground>

      <ParallaxBackground speed={0.35} className="opacity-30">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        </div>
      </ParallaxBackground>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
              {t("process.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
              {t("process.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <ScrollReveal direction="up" delay={index * 200}>
                <Card className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-card border-border transform hover:scale-105 group">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="p-4 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                          <step.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-sans font-bold group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-sans font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground font-serif leading-relaxed">{t(step.descKey)}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-primary/60 transform -translate-y-1/2 z-10 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
