"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"
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
    <section className="relative py-24 bg-background overflow-hidden">
      <ParallaxBackground speed={0.3} className="opacity-10">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-primary/20 rounded-full blur-2xl" />
      </ParallaxBackground>

      <ParallaxBackground speed={0.15} className="opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10" />
      </ParallaxBackground>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200}>
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-card border-border transform hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-primary fill-current transition-transform duration-300 group-hover:scale-110"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground font-serif leading-relaxed mb-6 italic group-hover:text-foreground transition-colors duration-300">
                    "{t(testimonial.textKey)}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={t(testimonial.nameKey)}
                        width={80}
                        height={80}
                        className="w-12 h-12 rounded-full object-cover mr-4 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 mr-4"></div>
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {t(testimonial.nameKey)}
                      </h4>
                      <p className="text-sm text-muted-foreground font-serif">{t(testimonial.roleKey)}</p>
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
