"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate"
  distance?: number
  duration?: number
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 100,
  duration = 1000,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1) rotate(0deg)"

    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(0.8)`
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(0.8)`
      case "left":
        return `translate3d(${distance}px, 0, 0) scale(0.9)`
      case "right":
        return `translate3d(-${distance}px, 0, 0) scale(0.9)`
      case "scale":
        return "translate3d(0, 0, 0) scale(0.5)"
      case "rotate":
        return "translate3d(0, 50px, 0) scale(0.8) rotate(10deg)"
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.8)`
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}

interface StaggeredRevealProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function StaggeredReveal({
  children,
  className = "",
  staggerDelay = 150,
  direction = "up",
}: StaggeredRevealProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * staggerDelay)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [children.length, staggerDelay])

  const getTransform = (index: number) => {
    if (visibleItems[index]) return "translate3d(0, 0, 0) scale(1)"

    switch (direction) {
      case "up":
        return "translate3d(0, 80px, 0) scale(0.8)"
      case "down":
        return "translate3d(0, -80px, 0) scale(0.8)"
      case "left":
        return "translate3d(80px, 0, 0) scale(0.9)"
      case "right":
        return "translate3d(-80px, 0, 0) scale(0.9)"
      default:
        return "translate3d(0, 80px, 0) scale(0.8)"
    }
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            transform: getTransform(index),
            opacity: visibleItems[index] ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            willChange: "transform, opacity",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
