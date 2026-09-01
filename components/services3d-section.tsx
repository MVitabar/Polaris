"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import type React from "react"
import { Package, Clapperboard, Palette, Layers, Box, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

// Lazy-load the Three.js viewer so it doesn't bloat the initial bundle
const Model3DViewer = dynamic(() =>
  import("./model3d-viewer").then((mod) => mod.Model3DViewer),
  { ssr: false, loading: () => <div className="w-full h-full min-h-[380px] flex items-center justify-center text-muted-foreground">Loading 3D...</div> }
)

export function Services3DSection() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const capabilities = [
    { icon: Package, titleKey: "services3d.capability.products.title", descKey: "services3d.capability.products.desc" },
    { icon: Clapperboard, titleKey: "services3d.capability.animation.title", descKey: "services3d.capability.animation.desc" },
    { icon: Palette, titleKey: "services3d.capability.branding.title", descKey: "services3d.capability.branding.desc" },
    { icon: Layers, titleKey: "services3d.capability.cgi.title", descKey: "services3d.capability.cgi.desc" },
  ]

  return (
    <section id="services-3d" className="relative py-28 bg-muted/10 overflow-hidden">
      {/* Decorative 3D art background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <Image
          src="/3d-art/hero-art.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <ParallaxBackground speed={0.3} className="opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      </ParallaxBackground>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal direction="scale" delay={0} duration={1200}>
          <div className="text-center mb-16">
            <span className="section-tag mb-4">
              <Box className="w-3.5 h-3.5" />
              {t("services3d.tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance tracking-tight">
              {t("services3d.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
              {t("services3d.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive viewer + description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal direction="left" delay={0} duration={1200}>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary">
                <Sparkles className="w-4 h-4" />
                {t("services3d.badge")}
              </span>
              <p className="text-muted-foreground font-serif leading-relaxed text-lg">
                {t("services3d.description")}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {capabilities.map((cap) => {
                  const Icon = cap.icon
                  return (
                    <div
                      key={cap.titleKey}
                      className="glass-card-hover rounded-xl p-4 flex items-start gap-3 w-full sm:w-[calc(50%-0.375rem)]"
                    >
                      <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-foreground text-sm">{t(cap.titleKey)}</h4>
                        <p className="text-muted-foreground font-serif text-xs mt-1 leading-relaxed">{t(cap.descKey)}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Button
                size="lg"
                className="font-sans font-semibold px-8 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                  color: "var(--navy-mid)",
                  boxShadow: "0 4px 20px var(--gold-glow)",
                }}
                onClick={scrollToContact}
              >
                {t("services3d.cta")}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150} duration={1300}>
            <div className="glass-card rounded-2xl overflow-hidden border border-primary/15 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "var(--navy-elevated)", borderColor: "var(--glass-border)" }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div className="flex-1 mx-4 py-1 px-3 rounded-md text-xs font-mono text-center" style={{ background: "var(--navy-card)", color: "var(--muted-foreground)", border: "1px solid var(--navy-border)" }}>
                  viewer.polarisstudio.com
                </div>
                <div className="w-8" />
              </div>
              <Model3DViewer className="min-h-[380px]" />
              <div className="px-4 py-3 text-center border-t" style={{ borderColor: "var(--glass-border)" }}>
                <p className="text-xs text-muted-foreground font-serif">
                  {t("services3d.interactive.desc")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
