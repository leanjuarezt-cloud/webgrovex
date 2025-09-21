"use client"

import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/images/grovex-logo.png"
              alt="Grovex"
              width={160}
              height={45}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Consultora estratégica especializada en transformar PyMEs en empresas escalables con visión sistémica y
              acompañamiento activo.
            </p>
            <div className="text-secondary font-medium">Growing to the next level</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equipo")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Equipo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:consulta@grovex.com.ar"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  consulta@grovex.com.ar
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="tel:+543512453599"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +54 351 2453599
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Linkedin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2025 Grovex. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">Córdoba, Argentina</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
