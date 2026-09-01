"use client"

import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useParallax } from "@/hooks/use-parallax"
import {
  ExternalLink,
  ArrowRight,
  Grid3X3,
  Layers,
  Eye,
  X,
  Calendar,
  Tag,
  Film,
  Box,
  RefreshCw,
} from "lucide-react"
import {
  fetchPortfolioProjects,
  getRenderImages,
  getThumbnailUrl,
  getVideoUrls,
  getModelUrls,
  type PortfolioProject,
} from "@/lib/portfolio"

export function PortfolioSection() {
  const { t, language } = useLanguage()
  const parallaxGrid = useParallax()
  const parallaxShapes = useParallax()

  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  const loadProjects = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const data = await fetchPortfolioProjects()
      setProjects(data)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  useEffect(() => {
    if (!selectedProject) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedProject])

  const openProject = (project: PortfolioProject) => {
    setActiveImage(0)
    setSelectedProject(project)
  }

  const renders = selectedProject ? getRenderImages(selectedProject) : []
  const videos = selectedProject ? getVideoUrls(selectedProject) : []
  const models = selectedProject ? getModelUrls(selectedProject) : []

  const webProjects = [
    {
      titleKey: "portfolio.project1.title",
      descKey: "portfolio.project1.desc",
      image: "/portfolio-images/3dartist.png",
      category: "3D Portfolio",
      tech: "Next.js / Three.js / Tailwind",
      url: "https://portfolio3d-seven-alpha.vercel.app/",
    },
    {
      titleKey: "portfolio.project2.title",
      descKey: "portfolio.project2.desc",
      image: "/portfolio-images/tattoo.png",
      category: "Tattoo Studio",
      tech: "React / Framer Motion / CSS",
      url: "https://my-tattoo-page-one.vercel.app/",
    },
    {
      titleKey: "portfolio.project3.title",
      descKey: "portfolio.project3.desc",
      image: "/portfolio-images/cestas.png",
      category: "E-commerce",
      tech: "Next.js / Shopify API / Tailwind",
      url: "https://deliciasrafa.vercel.app/",
    },
    {
      titleKey: "portfolio.project4.title",
      descKey: "portfolio.project4.desc",
      image: "/portfolio-images/eradeprata.png",
      category: "Artistic Site",
      tech: "HTML5 / Vanilla JS / GLSL",
      url: "https://eradeprata-site.vercel.app/",
    },
    {
      titleKey: "portfolio.project5.title",
      descKey: "portfolio.project5.desc",
      image: "/portfolio-images/comandero.png",
      category: "SaaS",
      tech: "Next.js / TypeScript / Prisma",
      url: "https://www.comanderoweb.shop/",
    },
    {
      titleKey: "portfolio.project6.title",
      descKey: "portfolio.project6.desc",
      image: "/portfolio-images/multitech.png",
      category: "Technical Service",
      tech: "Next.js / React / Tailwind",
      url: "https://multi-tech-coral.vercel.app/",
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

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-2xl bg-card border border-border/80 overflow-hidden animate-pulse">
                <div className="aspect-[16/10] bg-muted/30" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-muted/30 rounded-md w-2/3" />
                  <div className="h-3 bg-muted/30 rounded-md w-full" />
                  <div className="h-3 bg-muted/30 rounded-md w-4/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-center py-16 mb-16">
            <p className="text-muted-foreground font-serif text-lg mb-6">{t("portfolio.error")}</p>
            <Button
              variant="outline"
              className="font-sans font-semibold px-6 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={loadProjects}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              {t("portfolio.retry")}
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16 mb-16">
            <p className="text-muted-foreground font-serif text-lg">{t("portfolio.empty")}</p>
          </div>
        )}

        {/* 3D Projects Grid */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {projects.map((project, index) => {
              const hasModel = getModelUrls(project).length > 0
              const projectVideos = getVideoUrls(project)
              const isFeatured = project.featured
              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-700 animate-fade-in-up cursor-pointer hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => openProject(project)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden w-full bg-muted/20">
                    <Image
                      src={getThumbnailUrl(project)}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement
                        if (img.src !== "/placeholder.svg") img.src = "/placeholder.svg"
                      }}
                    />

                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-background/80 text-primary rounded-full font-sans backdrop-blur-md border border-primary/20 shadow-md capitalize">
                        {project.category.replace(/-/g, " ")}
                      </span>
                    </div>

                    {isFeatured && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="inline-block px-3 py-1.5 text-xs font-bold bg-yellow-500/90 text-black rounded-full font-sans backdrop-blur-md">
                          {t("portfolio.featured")}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                      <div className="p-4 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 transform scale-75 group-hover:scale-100 transition-all duration-500">
                        <Eye className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      {hasModel && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-primary/25 text-primary rounded-full backdrop-blur-md border border-primary/30">
                          <Box className="h-3 w-3" />
                          3D
                        </span>
                      )}
                      {projectVideos.length > 0 && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full backdrop-blur-md border border-red-500/30">
                          <Film className="h-3 w-3" />
                          {projectVideos.length}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 bg-card flex-1 flex flex-col justify-between border-t border-border/40">
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-sans mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-serif mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs text-primary bg-primary/10 rounded-full border border-primary/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <span className="text-xs font-sans font-semibold text-primary group-hover:underline flex items-center gap-1">
                        {t("portfolio.view_details")} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Web Development Projects Section */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="section-tag mb-4">{t("portfolio.webdev.tag")}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-sans mb-4 tracking-tight">
              {t("portfolio.webdev.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif leading-relaxed">
              {t("portfolio.webdev.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {webProjects.map((project, index) => (
              <div
                key={project.titleKey}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-700 animate-fade-in-up cursor-pointer hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => window.open(project.url, "_blank")}
              >
                <div className="relative aspect-[16/10] overflow-hidden w-full bg-muted/20">
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement
                      if (img.src !== "/placeholder.svg") img.src = "/placeholder.svg"
                    }}
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-background/80 text-primary rounded-full font-sans backdrop-blur-md border border-primary/20 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 transform scale-75 group-hover:scale-100 transition-all duration-500">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.url, "_blank")
                      }}
                      className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/30 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-card flex-1 flex flex-col justify-between border-t border-border/40">
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-sans mb-2 group-hover:text-primary transition-colors duration-300">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm font-serif mb-4 leading-relaxed line-clamp-2">
                      {t(project.descKey)}
                    </p>
                    <span className="inline-block text-xs font-sans text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                      {project.tech}
                    </span>
                  </div>

                  <div className="flex items-center justify-end pt-4 border-t border-border/30 mt-4">
                    <span className="text-xs font-sans font-semibold text-primary group-hover:underline flex items-center gap-1">
                      {t("portfolio.view_site")} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border/80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t("portfolio.close")}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/9] bg-muted/20">
              {renders.length > 0 ? (
                <Image
                  src={renders[activeImage % renders.length]}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              ) : (
                <Image
                  src={getThumbnailUrl(selectedProject)}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full capitalize">
                    {selectedProject.category.replace(/-/g, " ")}
                  </span>
                  {selectedProject.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-bold bg-yellow-500 text-black rounded-full">
                      {t("portfolio.featured")}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {new Date(selectedProject.created_at).toLocaleDateString(language)}
                  </span>
                  {models.length > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Box className="h-4 w-4" />3D
                    </span>
                  )}
                  {videos.length > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Film className="h-4 w-4" />
                      {videos.length}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-muted-foreground font-serif leading-relaxed text-base mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Tag className="h-4 w-4 text-primary" />
                  </span>
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-primary bg-primary/10 rounded-full border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {renders.length > 1 && (
                <div className="mb-8">
                  <h4 className="font-sans font-bold text-foreground mb-4">{t("portfolio.gallery")}</h4>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {renders.map((render, index) => (
                      <button
                        key={render}
                        onClick={() => setActiveImage(index)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                          activeImage % renders.length === index
                            ? "border-primary"
                            : "border-transparent hover:border-border"
                        }`}
                      >
                        <Image
                          src={render}
                          alt={`${selectedProject.title} ${index + 1}`}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {videos.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-sans font-bold text-foreground mb-4">{t("portfolio.videos")}</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {videos.map((video, index) => (
                      <video
                        key={video}
                        src={video}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full rounded-lg border border-border/60 bg-black"
                      />
                    ))}
                  </div>
                </div>
              )}

              <Button
                variant="outline"
                size="lg"
                className="w-full font-sans font-semibold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://portfolio3d-seven-alpha.vercel.app/", "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("portfolio.view_3d_site")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}