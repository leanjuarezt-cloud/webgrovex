"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send, CheckCircle, AlertCircle, MessageCircle, Instagram, Linkedin } from "lucide-react"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres' : ''
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? 'Ingresa un email válido' : ''
      case 'message':
        return value.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : ''
      default:
        return ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Validate all fields
    const newErrors: FormErrors = {}
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'company') {
        const error = validateField(key, value)
        if (error) newErrors[key as keyof FormErrors] = error
      }
    })
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      try {
        // Intentar enviar email a través del API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          // Éxito: email enviado por el servidor
          console.log('Email enviado exitosamente por el servidor')
          setSubmitted(true)
          setFormData({ name: "", email: "", company: "", message: "" })
        } else {
          // Error del servidor: usar fallback mailto
          console.log('Error del servidor, usando fallback mailto')
          const errorData = await response.json().catch(() => ({ error: 'Error desconocido' }))
          console.error('Error del API:', errorData)
          
          // Fallback a mailto
          const subject = `Consulta desde web - ${formData.company || formData.name}`
          const body = `Nombre: ${formData.name}%0D%0AEmpresa: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`
          window.open(`mailto:consulta@grovex.com.ar?subject=${subject}&body=${body}`)
          
          // Mostrar mensaje de enviado de todas formas
          setSubmitted(true)
          setFormData({ name: "", email: "", company: "", message: "" })
        }
      } catch (error) {
        // Error de conexión: usar fallback mailto
        console.log('Error de conexión, usando fallback mailto')
        console.error('Error de fetch:', error)
        
        // Fallback a mailto
        const subject = `Consulta desde web - ${formData.company || formData.name}`
        const body = `Nombre: ${formData.name}%0D%0AEmpresa: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`
        window.open(`mailto:consulta@grovex.com.ar?subject=${subject}&body=${body}`)
        
        // Mostrar mensaje de enviado de todas formas
        setSubmitted(true)
        setFormData({ name: "", email: "", company: "", message: "" })
      }
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contacto" className="py-12 lg:py-16 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 right-20 w-56 h-56 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ¿Listo para llevar tu empresa al siguiente nivel?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Conversemos sobre los desafíos de tu empresa. La primera consulta es gratuita y sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className={`border-0 shadow-xl glass hover-lift transition-all duration-700 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                Agenda tu consulta estratégica
                {submitted && <CheckCircle className="h-6 w-6 text-green-500" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className={`transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className={`transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Cuéntanos sobre tu desafío
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe brevemente el principal desafío que enfrenta tu empresa..."
                      className={`transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar consulta
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
          }`} style={{ animationDelay: '200ms' }}>
            <Card className="border-0 shadow-lg glass hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Información de contacto</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "consulta@grovex.com.ar", href: "mailto:consulta@grovex.com.ar", color: "secondary" },
                    { icon: Phone, label: "Teléfono", value: "+54 351 2453599", href: "tel:+543512453599", color: "primary" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+54 351 2453599", href: "https://wa.me/543512453599?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20consultoría", color: "secondary" },
                    { icon: Instagram, label: "Instagram", value: "@grovexconsulting", href: "https://www.instagram.com/grovexconsulting/", color: "primary" },
                    { icon: Linkedin, label: "LinkedIn", value: "Grovex Consulting", href: "https://www.linkedin.com/company/grovex-consulting", color: "secondary" }
                  ].map(({ icon: Icon, label, value, href, color }, index) => (
                    <div key={index} className="flex items-center space-x-4 group hover:bg-white/5 rounded-lg p-3 transition-all duration-300">
                      <div className={`bg-${color}/10 rounded-full p-3 group-hover:bg-${color}/20 group-hover:scale-110 transition-all duration-300`}>
                        <Icon className={`h-5 w-5 text-${color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">{label}</p>
                        <a 
                          href={href} 
                          className={`text-${color} hover:underline font-medium transition-colors duration-200`}
                          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
