"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star, Check } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      nameKey: "testimonials.client1.name",
      roleKey: "testimonials.client1.role",
      textKey: "testimonials.client1.text",
      image: "/professional-woman-smiling-headshot.png",
      rating: 5,
    },
    {
      nameKey: "testimonials.client2.name",
      roleKey: "testimonials.client2.role",
      textKey: "testimonials.client2.text",
      image: "/professional-man-smiling-headshot.png",
      rating: 5,
    },
    {
      nameKey: "testimonials.client3.name",
      roleKey: "testimonials.client3.role",
      textKey: "testimonials.client3.text",
      image: "/creative-professional-woman-smiling-headshot.jpg",
      rating: 5,
    },
  ]

  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <ParallaxBackground speed={0.3} className="opacity-10">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-primary/20 rounded-full blur-2xl" />
      </ParallaxBackground>

      <ParallaxBackground speed={0.15} className="opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10" />
      </ParallaxBackground>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale" delay={0} duration={1200}>
          <div className="text-center mb-20">
            <span className="section-tag mb-4">{t("testimonials.tag")}</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance tracking-tight">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150} duration={1000}>
              <Card className="glass-card-hover group relative overflow-hidden transition-all duration-700 bg-card border-border min-h-[340px] flex flex-col justify-between">
                
                {/* Big decorative quote mark in the top right of the card */}
                <span className="absolute right-6 top-4 font-serif text-7xl text-primary/10 group-hover:text-primary/20 transition-colors duration-500 select-none pointer-events-none">
                  ”
                </span>

                <CardContent className="p-8 flex flex-col justify-between h-full flex-1">
                  <div>
                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-primary fill-current transition-transform duration-300 group-hover:scale-110"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content Quote */}
                    <blockquote className="text-muted-foreground font-serif text-[15px] leading-relaxed mb-8 italic group-hover:text-foreground transition-colors duration-300">
                      "{t(testimonial.textKey)}"
                    </blockquote>
                  </div>

                  {/* Profile info footer */}
                  <div className="flex items-center pt-6 border-t border-border/40">
                    <div className="relative mr-4">
                      {/* Ring border decoration with pulse/shimmer */}
                      <div className="absolute inset-[-3px] rounded-full border-2 border-primary/20 group-hover:border-primary/50 group-hover:scale-105 transition-all duration-500" />
                      
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={t(testimonial.nameKey)}
                        width={80}
                        height={80}
                        className="w-12 h-12 rounded-full object-cover relative z-10"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-sans font-bold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                          {t(testimonial.nameKey)}
                        </h4>
                        
                        {/* Verified badge */}
                        <div className="p-0.5 rounded-full bg-green-500/10 border border-green-500/30">
                          <Check className="w-2.5 h-2.5 text-green-500" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground font-serif mt-0.5">{t(testimonial.roleKey)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
