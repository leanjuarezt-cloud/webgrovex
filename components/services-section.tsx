"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Cog, ShieldCheck, HelpCircle, CheckCircle } from "lucide-react"

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
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cómo lo hacemos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Tres pilares fundamentales para ordenar, crecer y tomar mejores decisiones en tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Servicio 1 - Digitalización */}
          <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 glass hover-lift ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <CardHeader className="pb-3">
              <div className="bg-primary/20 rounded-full p-2 w-10 h-10 mb-3 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl lg:text-2xl text-balance transition-colors">
                Digitalización, datos e Inteligencia Artificial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground italic">¿Tenés un montón de excels y documentos y no sabés bien dónde está cada cosa?</p>
                </div>
                <div className="flex items-start space-x-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground italic">¿Escuchaste hablar de CRM, ERP, métricas, automatizaciones o IA, pero no sabés si realmente lo necesitás?</p>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                {[
                  "Te ayudamos a pensar si necesitás un sistema de gestión y cuál",
                  "Armamos métricas simples para entender cómo está funcionando el negocio",
                  "Definimos qué conviene digitalizar y qué no",
                  "Nos encargamos de la parte técnica así vos te podés encargar de decidir mejor"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Servicio 2 - Mejora de procesos */}
          <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 glass hover-lift ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            <CardHeader className="pb-3">
              <div className="bg-secondary/20 rounded-full p-2 w-10 h-10 mb-3 flex items-center justify-center hover:bg-secondary/30 transition-colors duration-300">
                <Cog className="h-5 w-5 text-secondary" />
              </div>
              <CardTitle className="text-xl lg:text-2xl text-balance transition-colors">
                Mejora de procesos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground italic">¿Las cosas dependen demasiado de personas puntuales?</p>
                </div>
                <div className="flex items-start space-x-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground italic">¿Hay tareas que se hacen "porque siempre fue así"?</p>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                {[
                  "Relevamos cómo se trabaja hoy",
                  "Detectamos ineficiencias, errores y retrabajos",
                  "Simplificamos y ordenamos los procesos",
                  "Dejamos una forma de trabajo clara y repetible"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Servicio 3 - Prevención de riesgos */}
          <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 glass hover-lift ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
          }`} style={{ animationDelay: '400ms' }}>
            <CardHeader className="pb-3">
              <div className="bg-primary/20 rounded-full p-2 w-10 h-10 mb-3 flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl lg:text-2xl text-balance transition-colors">
                Prevención de riesgos contables y legales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground italic">¿La contabilidad, los impuestos o los contratos te generan dudas o inseguridad?</p>
                </div>
                <div className="flex items-start space-x-2">
                  <HelpCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground italic">¿Sentís que todo funciona, pero no tenés del todo claro si está bien armado?</p>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                {[
                  "Revisamos cómo se están registrando las operaciones",
                  "Detectamos riesgos contables, fiscales y legales",
                  "Identificamos inconsistencias y puntos débiles",
                  "Proponemos controles simples y correcciones prácticas",
                  "Te ayudamos a ordenar la base para crecer con tranquilidad"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className={`bg-background rounded-2xl p-6 lg:p-8 shadow-xl glass hover-lift transition-shadow duration-300 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-lg lg:text-xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              No vendemos herramientas, resolvemos problemas reales
            </h3>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              Trabajamos junto a vos para ordenar lo que ya tenés, simplificar lo que está complicado y
              tomar decisiones con información clara. Sin soluciones enlatadas, con foco en lo que tu negocio necesita.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
