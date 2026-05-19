"use client"

import { useLanguage } from "@/contexts/language-context"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

export function StatsBand() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: TrendingUp,
      value: "+40",
      label: "Proyectos entregados",
    },
    {
      icon: Users,
      value: "100%",
      label: "Clientes satisfechos",
    },
    {
      icon: Award,
      value: "5★",
      label: "Rating promedio",
    },
    {
      icon: Clock,
      value: "< 24h",
      label: "Tiempo de respuesta",
    },
  ]

  return (
    <section
      className="relative py-8 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, rgba(232,199,127,0.04) 0%, rgba(232,199,127,0.08) 50%, rgba(232,199,127,0.04) 100%)",
        borderTop: "1px solid var(--glass-border)",
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      {/* Gold shimmer line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold-border), var(--gold), var(--gold-border), transparent)" }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center md:border-r last:border-r-0"
                style={{ borderColor: "var(--glass-border)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4" style={{ color: "var(--gold)" }} />
                  <span
                    className="text-2xl md:text-3xl font-sans font-bold gradient-text"
                  >
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-sans">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Gold shimmer line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold-border), var(--gold), var(--gold-border), transparent)" }}
      />
    </section>
  )
}
