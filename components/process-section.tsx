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
    <section id="process" className="relative py-28 bg-muted/20 overflow-hidden">
      <ParallaxBackground speed={0.2} className="opacity-15">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-2xl" />
      </ParallaxBackground>

      {/* Decorative vertical center line in background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale" delay={0} duration={1200}>
          <div className="text-center mb-20">
            <span className="section-tag mb-4">{t("process.tag")}</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance tracking-tight">
              {t("process.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
              {t("process.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <ScrollReveal direction="up" delay={index * 150} duration={1000}>
                <Card className="glass-card-hover group relative overflow-hidden transition-all duration-700 bg-card border-border min-h-[340px] flex flex-col justify-between">
                  {/* XL Background Number Decore */}
                  <span className="absolute -left-2 -bottom-4 font-sans font-extrabold text-[8rem] text-primary/5 group-hover:text-primary/8 transition-colors duration-500 select-none pointer-events-none leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CardContent className="p-8 relative z-10 flex flex-col justify-between h-full flex-1">
                    <div>
                      {/* Step icon with animated ping circle */}
                      <div className="mb-8 flex justify-start">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-primary/10 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                          <div className="p-4 rounded-full bg-primary/5 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/45 transition-all duration-500 relative z-10">
                            <step.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-sans font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {t(step.titleKey)}
                      </h3>
                      
                      <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>

                    {/* Progress bar line segment inside the card */}
                    <div className="mt-8">
                      <div className="w-12 h-0.5 bg-primary/20 group-hover:w-full group-hover:bg-primary/40 transition-all duration-500" />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Connecting line between cards for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] -right-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent z-10 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
