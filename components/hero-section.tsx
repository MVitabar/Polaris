"use client"

import { Button } from "@/components/ui/button"
import { ConstellationBackground } from "./constellation-background"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useAdvancedParallax } from "@/hooks/use-parallax"
import { ArrowRight, CheckCircle2, Star, Zap } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()
  const { scrollY } = useAdvancedParallax()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const trustMetrics = [
    { value: "+40", labelKey: "hero.trust.projects" },
    { value: "5★", labelKey: "hero.trust.rating" },
    { value: "2+", labelKey: "hero.trust.experience" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #040f1a 0%, #071b2a 50%, #0a2235 100%)" }}
    >
      {/* Background layers */}
      <ParallaxBackground speed={0.2} className="opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      </ParallaxBackground>

      <ParallaxBackground speed={0.4}>
        <ConstellationBackground />
      </ParallaxBackground>

      {/* Decorative blobs */}
      <ParallaxBackground speed={0.1} className="opacity-100">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(232,199,127,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(232,199,127,0.04) 0%, transparent 70%)" }}
        />
      </ParallaxBackground>

      {/* Geometric decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border border-primary/10 rotate-45 rounded-sm pointer-events-none animate-float-gentle" />
      <div className="absolute bottom-32 left-8 w-12 h-12 border border-primary/10 rotate-12 rounded-sm pointer-events-none animate-float-gentle" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 left-6 w-2 h-16 bg-gradient-to-b from-primary/20 to-transparent rounded-full pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Left Column — Content ── */}
          <div className="space-y-8">

            {/* Agency badge */}
            <ScrollReveal direction="scale" delay={0} duration={1000}>
              <div>
                <span className="section-tag">
                  <span style={{ color: "var(--gold)" }}>✦</span>
                  {t("hero.badge")}
                </span>
              </div>
            </ScrollReveal>

            {/* Logo + name */}
            <ScrollReveal direction="left" delay={150} distance={80} duration={1000}>
              <div className="flex items-center space-x-4">
                <div
                  className="relative transition-all duration-700 hover:scale-110"
                  style={{
                    transform: `translateY(${scrollY * 0.02}px) rotate(${scrollY * 0.01}deg)`,
                  }}
                >
                  <div className="absolute inset-0 rounded-full blur-xl opacity-60"
                    style={{ background: "var(--gold-glow)" }} />
                  <Image
                    src="/images/logo-polaris.png"
                    alt="Polaris Studio"
                    width={72}
                    height={72}
                    className="w-18 h-18 relative z-10"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-sans font-semibold" style={{ color: "var(--gold)" }}>
                    {t("hero.tagline")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Title */}
            <ScrollReveal direction="left" delay={300} distance={100} duration={1200}>
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-[1.08] tracking-tight">
                  <span className="text-foreground">{t("hero.title").split(" ").slice(0, -2).join(" ")}</span>
                  {" "}
                  <span className="gradient-text">{t("hero.title").split(" ").slice(-2).join(" ")}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-serif leading-relaxed max-w-xl">
                  {t("hero.subtitle")}
                </p>
              </div>
            </ScrollReveal>

            {/* Trust metrics */}
            <ScrollReveal direction="up" delay={450} distance={60} duration={1000}>
              <div className="flex items-center justify-center gap-4 sm:gap-6 py-2">
                {trustMetrics.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-4">
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-sans font-bold" style={{ color: "var(--gold)" }}>{m.value}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-sans uppercase tracking-wide">{t(m.labelKey)}</p>
                    </div>
                    {i < trustMetrics.length - 1 && <div className="stat-divider hidden sm:block" />}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={600} distance={60} duration={1000}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="font-sans font-semibold px-6 sm:px-8 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                  style={{
                    background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                    color: "var(--navy-mid)",
                    boxShadow: "0 4px 20px var(--gold-glow)",
                  }}
                  onClick={() => scrollToSection("portfolio")}
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-sans font-semibold px-6 sm:px-8 text-sm sm:text-base bg-transparent transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{
                    borderColor: "var(--gold-border)",
                    color: "var(--gold)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,199,127,0.1)"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent"
                  }}
                  onClick={() => scrollToSection("contact")}
                >
                  {t("hero.learn_more")}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column — Browser Mock ── */}
          <ScrollReveal direction="right" delay={400} distance={100} duration={1300}>
            <div className="relative hidden lg:block">
              {/* Browser frame */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  border: "1px solid var(--glass-border)",
                  boxShadow: "0 0 0 1px rgba(232,199,127,0.1), 0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(232,199,127,0.06)",
                  transform: `translateY(${Math.sin(scrollY * 0.005) * 8}px)`,
                }}
              >
                {/* Browser chrome bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ background: "var(--navy-elevated)", borderBottom: "1px solid var(--glass-border)" }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <div
                    className="flex-1 mx-4 py-1 px-3 rounded-md text-xs font-mono text-center"
                    style={{ background: "var(--navy-card)", color: "var(--muted-foreground)", border: "1px solid var(--navy-border)" }}
                  >
                    your-brand.com
                  </div>
                  <div className="w-8" />
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/3d-art/hero-art.png"
                    alt="Arte 3D creado por Polaris Studio"
                    width={800}
                    height={500}
                    priority
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                </div>
              </div>

              {/* Floating tech badges */}
              <div
                className="absolute -top-3 -right-4 glass-card rounded-full px-4 py-2 flex items-center gap-2 shadow-lg animate-float-gentle"
                style={{ animationDelay: "0.5s" }}
              >
                <Zap className="w-3.5 h-3.5" style={{ color: "var(--gold)" }} />
                <span className="text-xs font-sans font-semibold text-foreground">Blender</span>
              </div>

              <div
                className="absolute -bottom-3 -left-4 glass-card rounded-full px-4 py-2 flex items-center gap-2 shadow-lg animate-float-gentle"
                style={{ animationDelay: "1.5s" }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#22c55e" }} />
                <span className="text-xs font-sans font-semibold text-foreground">Render Fotorrealista</span>
              </div>

              <div
                className="absolute top-1/2 -left-5 glass-card rounded-full px-4 py-2 flex items-center gap-2 shadow-lg animate-float-gentle"
                style={{ animationDelay: "1s" }}
              >
                <Star className="w-3.5 h-3.5 fill-current" style={{ color: "var(--gold)" }} />
                <span className="text-xs font-sans font-semibold text-foreground">5.0 Rating</span>
              </div>

              {/* Glow behind the card */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(232,199,127,0.08) 0%, transparent 70%)" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
