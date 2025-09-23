"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, ArrowRight, Grid3X3, Layers, Eye } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export function PortfolioSection() {
  const { t } = useLanguage()
  const parallaxGrid = useParallax(0.3)
  const parallaxShapes = useParallax(0.15)

  const projects = [
    {
      titleKey: "portfolio.project1.title",
      descKey: "portfolio.project1.desc",
      image: "/modern-ecommerce-website-design-with-clean-layout.jpg",
      category: "E-commerce",
    },
    {
      titleKey: "portfolio.project2.title",
      descKey: "portfolio.project2.desc",
      image: "/dashboard-application-interface-with-charts-and-da.jpg",
      category: "Dashboard",
    },
    {
      titleKey: "portfolio.project3.title",
      descKey: "portfolio.project3.desc",
      image: "/corporate-landing-page-with-professional-design.jpg",
      category: "Corporate",
    },
  ]

  return (
    <section id="portfolio" className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ transform: parallaxGrid }}>
        <div className="absolute top-20 left-20">
          <Grid3X3 className="h-40 w-40 text-primary" />
        </div>
        <div className="absolute bottom-40 right-10">
          <Layers className="h-28 w-28 text-primary animate-float" />
        </div>
      </div>

      <div className="absolute inset-0 opacity-10" style={{ transform: parallaxShapes }}>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/30 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-sans mb-6">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">{t("portfolio.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.titleKey}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-700 animate-fade-in-up cursor-pointer hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={t(project.titleKey)}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-full">
                  <span className="inline-block px-4 py-2 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full mb-3 font-sans backdrop-blur-sm border border-primary/20">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground font-sans mb-2 drop-shadow-sm">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm font-serif mb-4 line-clamp-2 drop-shadow-sm">
                    {t(project.descKey)}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Ver Proyecto
                    <Eye className="ml-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                  </Button>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/30 transition-colors duration-300">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button variant="default" size="lg" className="group">
            Ver Todos los Proyectos
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
