"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Brain, Shield } from "lucide-react"

export function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const impacts = [
    {
      icon: Clock,
      title: "Más tiempo para lo importante",
      description: "Menos tiempo perdido en tareas manuales, búsquedas de información y retrabajos. Más foco en hacer crecer el negocio.",
      color: "primary",
      delay: 200
    },
    {
      icon: Brain,
      title: "Decisiones con información clara",
      description: "Datos ordenados, métricas simples y procesos claros. Sabés qué está pasando y podés decidir mejor.",
      color: "secondary",
      delay: 400
    },
    {
      icon: Shield,
      title: "Tranquilidad y control",
      description: "Operaciones registradas correctamente, riesgos identificados y controles en su lugar. Crecés con la base ordenada.",
      color: "primary",
      delay: 600
    }
  ]

  return (
    <section className="py-12 lg:py-16 gradient-section relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-20 w-48 h-48 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
            Resultados que obtenés
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Los beneficios concretos que vas a experimentar cuando ordenás la información, mejorás los procesos y reducís riesgos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {impacts.map(({ icon: Icon, title, description, color, delay }, index) => (
            <Card 
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center glass hover-lift ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${delay}ms` }}
            >
              <CardContent className="p-6 group">
                <div className={`bg-${color}/20 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:bg-${color}/30 transition-colors duration-300`}>
                  <Icon className={`h-6 w-6 text-${color}`} />
                </div>
                <h3 className="text-lg font-bold mb-3 transition-colors duration-300">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
