"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

export function TeamSection() {
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

  const team = [
    {
      name: "Ignacio Gregorat",
      role: "Estrategia y Dirección",
      description:
        "Abogado con formación en dirección de empresas (MBA), especializado en análisis estratégico, planificación y acompañamiento en procesos de crecimiento empresarial.",
      image: "/images/team/ignacio.jpg",
      linkedin: "https://www.linkedin.com/in/ignacio-gregorat/",
      delay: 200
    },
    {
      name: "Leandro Juarez Teitelman",
      role: "Innovación y Procesos",
      description:
        "Ingeniero industrial especializado en innovación de negocios, procesos y gestión de proyectos. Trayectoria en industrias del software, telecomunicaciones y automotriz.",
      image: "/images/team/leandro.jpg",
      linkedin: "https://www.linkedin.com/in/leandro-teitelman/",
      delay: 400
    },
    {
      name: "Francisco Lucca",
      role: "Finanzas y Datos",
      description:
        "Contador Público, con trayectoria en finanzas e impuestos, orientado principalmente al análisis y optimización de procesos mediante el uso de datos.",
      image: "/images/team/francisco.jpg",
      linkedin: "https://www.linkedin.com/in/francisco-lucca-607ab1169/",
      delay: 600
    },
  ]

  return (
    <section id="equipo" className="py-12 lg:py-16 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-32 left-10 w-40 h-40 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-primary rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Quiénes somos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Un equipo interdisciplinario que combina miradas complementarias: ingeniería, derecho y finanzas trabajando
            en conjunto para potenciar tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden glass hover-lift ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${member.delay}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2 transition-colors duration-300">{member.name}</h3>
                <p className="text-secondary font-medium mb-3 text-sm">{member.role}</p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{member.description}</p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => window.open(member.linkedin, '_blank')}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-section rounded-2xl p-8 lg:p-12 text-center glass hover-lift transition-shadow duration-300 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '800ms' }}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nuestra ventaja competitiva
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="hover:bg-white/5 rounded-lg p-4 transition-colors duration-300">
                  <h4 className="font-semibold text-primary mb-3 transition-colors">Equipo Interdisciplinario</h4>
                  <p className="text-muted-foreground text-sm">
                    Miradas complementarias que abordan todos los aspectos del negocio
                  </p>
                </div>
                <div className="hover:bg-white/5 rounded-lg p-4 transition-colors duration-300">
                  <h4 className="font-semibold text-secondary mb-3 transition-colors">Arquitectura Empresarial</h4>
                  <p className="text-muted-foreground text-sm">Enfoque integral y sistémico como método propio</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="hover:bg-white/5 rounded-lg p-4 transition-colors duration-300">
                  <h4 className="font-semibold text-primary mb-3 transition-colors">Mirada Externa</h4>
                  <p className="text-muted-foreground text-sm">
                    Perspectiva fresca y no sesgada, sin inercias internas
                  </p>
                </div>
                <div className="hover:bg-white/5 rounded-lg p-4 transition-colors duration-300">
                  <h4 className="font-semibold text-secondary mb-3 transition-colors">Resultados Concretos</h4>
                  <p className="text-muted-foreground text-sm">
                    No informes que quedan en cajones, sino implementación real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
