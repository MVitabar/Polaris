"use client"

import { Button } from "@/components/ui/button"
import { ConstellationBackground } from "./constellation-background"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useAdvancedParallax } from "@/hooks/use-parallax"

export function HeroSection() {
  const { t } = useLanguage()
  const { scrollY } = useAdvancedParallax()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-16">
      <ParallaxBackground speed={0.2} className="opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      </ParallaxBackground>

      <ParallaxBackground speed={0.4}>
        <ConstellationBackground />
      </ParallaxBackground>

      <ParallaxBackground speed={0.1} className="opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </ParallaxBackground>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollReveal direction="scale" delay={0} duration={1200}>
              <div className="flex items-center space-x-3 mb-8">
                <div
                  className="transform transition-all duration-700 hover:scale-110 hover:rotate-12"
                  style={{
                    transform: `translateY(${scrollY * 0.02}px) rotate(${scrollY * 0.01}deg)`,
                  }}
                >
                  <Image
                    src="/images/logo-polaris.png"
                    alt="Polaris Studio"
                    width={48}
                    height={48}
                    className="w-24 h-24"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-sans font-bold text-foreground">Polaris Studio</h1>
                  <p className="text-sm text-primary font-medium">{t("hero.tagline")}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={300} distance={150} duration={1400}>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-sans font-bold text-foreground leading-tight text-balance transform hover:scale-105 transition-transform duration-500">
                  {t("hero.title")}
                </h2>
                <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-2xl">
                  {t("hero.subtitle")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600} distance={120} duration={1200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-8 py-4 text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25"
                  onClick={() => scrollToSection("portfolio")}
                >
                  {t("hero.cta")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans font-semibold px-8 py-4 text-lg bg-transparent transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
                  onClick={() => scrollToSection("contact")}
                >
                  {t("hero.learn_more")}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={400} distance={120} duration={1300}>
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-700 hover:shadow-3xl"
                style={{
                  transform: `translateY(${Math.sin(scrollY * 0.005) * 10}px) translateX(${Math.cos(scrollY * 0.003) * 5}px)`,
                }}
              >
                <Image
                  src="/dashboard-application-interface-with-charts-and-da.jpg"
                  alt="Dashboard tecnológico"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
