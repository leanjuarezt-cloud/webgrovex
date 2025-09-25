"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center pt-20 gradient-hero overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-radial opacity-10"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(35, 176, 186, 0.15), transparent 70%)`
          }}
        />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-secondary animate-pulse">
              Tu aliado estratégico para crecer
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl mb-8 text-white/90 text-pretty max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Ayudamos a empresas a crecer y profesionalizarse con visión sistémica, datos y acompañamiento activo. Del
            ruido a la claridad.
          </p>

          <div className={`flex justify-center mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button
              size="lg"
              onClick={() => scrollToSection("servicios")}
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 text-lg px-8 py-4 h-auto transition-all duration-300 transform hover:shadow-2xl backdrop-blur-sm font-semibold"
            >
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
