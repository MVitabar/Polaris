"use client"

import type React from "react"

import { useParallax } from "@/hooks/use-parallax"

interface ParallaxBackgroundProps {
  speed?: number
  className?: string
  children?: React.ReactNode
}

export function ParallaxBackground({ speed = 0.5, className = "", children }: ParallaxBackgroundProps) {
  const scrollY = useParallax()

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
