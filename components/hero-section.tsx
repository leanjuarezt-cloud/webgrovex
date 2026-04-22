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
      {/* Animated background with geometric particles */}
      <div className="absolute inset-0">
        {/* Interactive gradient following mouse */}
        <div 
          className="absolute inset-0 opacity-15 transition-all duration-500"
          style={{
            background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(35, 176, 186, 0.3), transparent 70%)`
          }}
        />
        
        {/* Animated geometric particles */}
        {[...Array(25)].map((_, i) => {
          const shapeType = i % 4; // 4 tipos de formas
          const size = Math.random() * 60 + 30;
          
          return (
            <div
              key={i}
              className="absolute animate-float-dynamic"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 8 + 10}s`,
                opacity: 0.15 + Math.random() * 0.1,
              }}
            >
              {shapeType === 0 && (
                // Círculos con borde
                <div
                  className="border-2 border-secondary/40 rounded-full animate-pulse-slow"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                />
              )}
              {shapeType === 1 && (
                // Cuadrados rotados (diamantes)
                <div
                  className="bg-white/10 backdrop-blur-sm animate-spin-slow"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: 'rotate(45deg)',
                    borderRadius: '8px',
                  }}
                />
              )}
              {shapeType === 2 && (
                // Hexágonos (simulados con clip-path)
                <div
                  className="bg-secondary/20"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                />
              )}
              {shapeType === 3 && (
                // Círculos rellenos con gradiente
                <div
                  className="rounded-full animate-pulse-slow"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: i % 2 === 0 
                      ? 'radial-gradient(circle, rgba(35, 176, 186, 0.3), transparent)'
                      : 'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent)',
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Líneas decorativas animadas */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-slide-horizontal"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}

        {/* Círculos concéntricos que pulsan */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute border border-white/10 rounded-full animate-ping-slow"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 1}s`,
              animationDuration: '8s',
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black/15"></div>
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
            Ordenamos tu información, mejoramos tus procesos y prevenimos riesgos. Más claridad, mejores decisiones, crecimiento sostenible.
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
