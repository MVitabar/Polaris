"use client"

import { useAdvancedParallax } from "@/hooks/use-parallax"

export function AnimatedBackground() {
  const { scrollY } = useAdvancedParallax()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        style={{
          transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.08}px) rotate(${scrollY * 0.02}deg)`,
        }}
      />

      <div
        className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        style={{
          transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.06}px) rotate(${-scrollY * 0.01}deg)`,
        }}
      />

      <div
        className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-xl"
        style={{
          transform: `translate(${scrollY * 0.04}px, ${-scrollY * 0.07}px) rotate(${scrollY * 0.03}deg)`,
        }}
      />

      <div
        className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-xl"
        style={{
          transform: `translate(${-scrollY * 0.06}px, ${-scrollY * 0.04}px) rotate(${-scrollY * 0.02}deg)`,
        }}
      />
    </div>
  )
}
