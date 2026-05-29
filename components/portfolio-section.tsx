"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, ArrowRight, Grid3X3, Layers, Eye } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"
import { useState } from "react"

export function PortfolioSection() {
  const { t } = useLanguage()
  const parallaxGrid = useParallax()
  const parallaxShapes = useParallax()
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const projects = [
    {
      titleKey: "portfolio.project1.title",
      descKey: "portfolio.project1.desc",
      image: "/portfolio-images/3dartist.png",
      fallbackImage: "/placeholder.svg",
      category: "3D Portfolio",
      tech: "Next.js / Three.js / Tailwind",
      url: "https://portfolio3d-seven-alpha.vercel.app/",
    },
    {
      titleKey: "portfolio.project2.title",
      descKey: "portfolio.project2.desc",
      image: "/portfolio-images/tattoo.png",
      fallbackImage: "/placeholder.svg",
      category: "Tattoo Studio",
      tech: "React / Framer Motion / CSS",
      url: "https://my-tattoo-page-one.vercel.app/",
    },
    {
      titleKey: "portfolio.project3.title",
      descKey: "portfolio.project3.desc",
      image: "/portfolio-images/cestas.png",
      fallbackImage: "/placeholder.svg",
      category: "E-commerce",
      tech: "Next.js / Shopify API / Tailwind",
      url: "https://deliciasrafa.vercel.app/",
    },
    {
      titleKey: "portfolio.project4.title",
      descKey: "portfolio.project4.desc",
      image: "/portfolio-images/eradeprata.png",
      fallbackImage: "/placeholder.svg",
      category: "Artistic Site",
      tech: "HTML5 / Vanilla JS / GLSL",
      url: "https://eradeprata-site.vercel.app/",
    },
    {
      titleKey: "portfolio.project5.title",
      descKey: "portfolio.project5.desc",
      image: "/portfolio-images/comandero.png",
      fallbackImage: "/placeholder.svg",
      category: "SaaS",
      tech: "Next.js / TypeScript / Prisma",
      url: "https://www.comanderoweb.shop/",
    },
  ]

  return (
    <section id="portfolio" className="relative py-28 bg-background overflow-hidden">
      {/* Decorative Parallax Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ transform: `translateY(${parallaxGrid * 0.3}px)` }}>
        <div className="absolute top-20 left-20">
          <Grid3X3 className="h-40 w-40 text-primary" />
        </div>
        <div className="absolute bottom-40 right-10">
          <Layers className="h-28 w-28 text-primary animate-float" />
        </div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ transform: `translateY(${parallaxShapes * 0.15}px)` }}>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/30 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="section-tag mb-4">{t("portfolio.tag")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-sans mb-6 tracking-tight">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif leading-relaxed">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Dynamic & Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.titleKey}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-700 animate-fade-in-up cursor-pointer hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => window.open(project.url, '_blank')}
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden w-full bg-muted/20">
                <Image
                  src={imageErrors[index] ? project.fallbackImage : project.image}
                  alt={t(project.titleKey)}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                  onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                />

                {/* Category Badge - Always visible on top left of image */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-background/80 text-primary rounded-full font-sans backdrop-blur-md border border-primary/20 shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Overlay with details visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 transform scale-75 group-hover:scale-100 transition-all duration-500">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.url, '_blank')
                    }}
                    className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/30 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </button>
                </div>
              </div>

              {/* Info Container - Always Visible underneath/integrated */}
              <div className="p-6 bg-card flex-1 flex flex-col justify-between border-t border-border/40">
                <div>
                  <h3 className="text-xl font-bold text-foreground font-sans mb-2 group-hover:text-primary transition-colors duration-300">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm font-serif mb-4 leading-relaxed line-clamp-2">
                    {t(project.descKey)}
                  </p>
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-border/30">
                  <span className="text-xs font-sans font-semibold text-primary group-hover:underline flex items-center gap-1">
                    {t("portfolio.view_site")} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="outline"
            size="lg"
            className="group font-sans font-semibold px-8 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            {t("portfolio.more_works")}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}
