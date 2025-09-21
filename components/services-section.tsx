"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Map, Rocket, Settings, Users, BarChart } from "lucide-react"

export function ServicesSection() {
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

  return (
    <section id="servicios" className="py-12 lg:py-16 gradient-section relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cómo lo hacemos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Nuestros servicios están diseñados para acompañarte en cada etapa del crecimiento empresarial con
            metodología probada y resultados concretos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Servicio 1 */}
          <Card className={`border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 glass-dark hover-lift ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <CardHeader className="pb-3">
              <div className="bg-primary/20 rounded-full p-2 w-10 h-10 mb-3 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 animate-pulse-glow">
                <Map className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl lg:text-2xl text-balance group-hover:text-primary transition-colors">
                Diseño Estratégico Empresarial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: Camera, title: "1. Diagnóstico Sistémico", desc: "Radiografía completa de la empresa y su entorno. La foto actual que necesitas para tomar mejores decisiones.", color: "secondary" },
                { icon: Map, title: "2. Diseño de Futuro", desc: "Plan Estratégico Integral que define objetivos claros y la hoja de ruta para alcanzarlos.", color: "primary" },
                { icon: Rocket, title: "3. Activación Estratégica", desc: "Primeras mejoras aplicadas en plazos cortos para mostrar movimiento y resultados iniciales.", color: "secondary" }
              ].map(({ icon: Icon, title, desc, color }, index) => (
                <div key={index} className="flex items-start space-x-3 group hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                  <div className={`bg-${color}/10 rounded-full p-1.5 mt-0.5 group-hover:bg-${color}/20 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`h-3.5 w-3.5 text-${color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1.5 text-sm group-hover:text-primary transition-colors">{title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Servicio 2 */}
          <Card className={`border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 glass-dark hover-lift ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
          }`} style={{ animationDelay: '200ms' }}>
            <CardHeader className="pb-3">
              <div className="bg-secondary/20 rounded-full p-2 w-10 h-10 mb-3 flex items-center justify-center hover:bg-secondary/30 transition-colors duration-300 animate-pulse-glow">
                <Settings className="h-5 w-5 text-secondary" />
              </div>
              <CardTitle className="text-xl lg:text-2xl text-balance group-hover:text-secondary transition-colors">
                Gobernanza Estratégica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: Users, title: "Acompañamiento Directivo", desc: "Espacios periódicos de mesa directiva para decisiones estratégicas con método y disciplina.", color: "primary" },
                { icon: BarChart, title: "KPIs y Métricas", desc: "Implementación de indicadores clave para medir impacto y ajustar el rumbo en tiempo real.", color: "secondary" },
                { icon: Settings, title: "Profesionalización", desc: "Instalamos prácticas de gobernanza que eleven la dirección sin perder la cercanía PyME.", color: "primary" }
              ].map(({ icon: Icon, title, desc, color }, index) => (
                <div key={index} className="flex items-start space-x-3 group hover:bg-white/5 rounded-lg p-2 transition-all duration-300">
                  <div className={`bg-${color}/10 rounded-full p-1.5 mt-0.5 group-hover:bg-${color}/20 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`h-3.5 w-3.5 text-${color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1.5 text-sm group-hover:text-secondary transition-colors">{title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className={`bg-background rounded-2xl p-6 lg:p-8 shadow-xl glass-dark hover-lift transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-lg lg:text-xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              No ofrecemos soluciones aisladas
            </h3>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              Alineamos lo estratégico con lo operativo y lo convertimos en resultados concretos. Nuestro enfoque
              integral asegura que cada decisión contribuya al crecimiento sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
