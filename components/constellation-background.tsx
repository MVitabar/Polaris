"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  alphaDirection: number
}

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 65 // Clean, not overcrowded
    const connectionDistance = 120
    const goldColor = "232, 199, 127" // Matches #e8c77f

    const resizeCanvas = () => {
      if (!canvas) return
      const rect = canvas.parentElement?.getBoundingClientRect()
      canvas.width = rect?.width || window.innerWidth
      canvas.height = rect?.height || window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35, // Slow, sophisticated drifting
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 1.2,
          alpha: Math.random() * 0.5 + 0.2,
          alphaDirection: Math.random() > 0.5 ? 0.005 : -0.005,
        })
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${goldColor}, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        // Move
        p.x += p.x + p.vx < 0 || p.x + p.vx > canvas.width ? -p.vx : p.vx
        p.y += p.y + p.vy < 0 || p.y + p.vy > canvas.height ? -p.vy : p.vy

        // Keep inside bounds softly (bounce)
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Twinkle effect (alpha modulation)
        p.alpha += p.alphaDirection
        if (p.alpha > 0.8 || p.alpha < 0.15) {
          p.alphaDirection *= -1
        }

        // Mouse interaction (soft pull + line draw)
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const mouseDist = Math.sqrt(dx * dx + dy * dy)

        if (mouseDist < mouseRef.current.radius) {
          // Softly draw lines to mouse
          const lineAlpha = (1 - mouseDist / mouseRef.current.radius) * 0.2
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(${goldColor}, ${lineAlpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
          
          // Soft pull attraction
          p.x -= dx * 0.01
          p.y -= dy * 0.01
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${goldColor}, ${p.alpha})`
        ctx.shadowColor = `rgba(${goldColor}, ${p.alpha * 0.5})`
        ctx.shadowBlur = 4
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    // Initialize
    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (canvas) {
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block opacity-70"
      />
    </div>
  )
}
