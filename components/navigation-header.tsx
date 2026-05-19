"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function NavigationHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0)

      // Active section detection
      const sections = ["hero", "services", "portfolio", "process", "contact"]
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "hero", labelKey: "nav.inicio" },
    { id: "services", labelKey: "nav.servicios" },
    { id: "portfolio", labelKey: "nav.portafolio" },
    { id: "process", labelKey: "nav.proceso" },
    { id: "contact", labelKey: "nav.contacto" },
  ]

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          borderBottomColor: isScrolled ? "var(--glass-border)" : "transparent",
          boxShadow: isScrolled ? "0 4px 40px rgba(0,0,0,0.4), 0 1px 0 rgba(232,199,127,0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "var(--gold-glow)" }} />
                <Image
                  src="/images/logo-polaris.png"
                  alt="Polaris Studio"
                  width={36}
                  height={36}
                  className="w-9 h-9 relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-lg font-sans font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Polaris Studio
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                  style={{
                    color: activeSection === item.id ? "var(--gold)" : undefined,
                  }}
                >
                  {t(item.labelKey)}
                  {activeSection === item.id && (
                    <span
                      className="absolute bottom-[-2px] left-0 w-full h-[1.5px] rounded-full"
                      style={{ background: "var(--gold)" }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              <LanguageSelector />
              <Button
                size="sm"
                className="hidden sm:inline-flex font-sans font-semibold px-5 transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                  color: "var(--navy-mid)",
                  boxShadow: "0 2px 12px var(--gold-glow)",
                }}
                onClick={() => scrollToSection("contact")}
              >
                {t("button.contactar")}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                style={{ color: "var(--gold)" }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div
              className="md:hidden border-t"
              style={{
                borderColor: "var(--glass-border)",
                background: "rgba(7, 27, 42, 0.97)",
                backdropFilter: "blur(20px)",
              }}
            >
              <nav className="py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium font-sans transition-all duration-200 rounded-lg"
                    style={{
                      color: activeSection === item.id ? "var(--gold)" : "var(--muted-foreground)",
                      background: activeSection === item.id ? "rgba(232,199,127,0.07)" : "transparent",
                    }}
                  >
                    {t(item.labelKey)}
                  </button>
                ))}
                <div className="px-4 pt-3 border-t mt-2" style={{ borderColor: "var(--glass-border)" }}>
                  <Button
                    size="sm"
                    className="w-full font-sans font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                      color: "var(--navy-mid)",
                    }}
                    onClick={() => scrollToSection("contact")}
                  >
                    {t("button.contactar")}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
