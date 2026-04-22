import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grovex - Consultoría Estratégica Empresarial | Growing to the next level",
  description:
    "Transformamos PyMEs en empresas estratégicas y escalables. Consultoría con visión sistémica, datos y acompañamiento activo. Diseño estratégico empresarial y gobernanza en Córdoba, Argentina.",
  keywords: "consultoría empresarial, estrategia, PyMEs, crecimiento empresarial, planificación estratégica, Córdoba, Argentina, gobernanza, datos, visión sistémica",
  authors: [{ name: "Grovex" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Grovex - Growing to the next level",
    description: "Ayudamos a empresas a crecer y profesionalizarse con visión sistémica, datos y acompañamiento activo",
    url: "https://www.grovex.com.ar",
    siteName: "Grovex",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/grovex-logo.png",
        width: 1200,
        height: 630,
        alt: "Grovex - Consultoría Estratégica Empresarial"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Grovex - Growing to the next level",
    description: "Consultoría estratégica para PyMEs en Córdoba, Argentina"
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grovex",
    "description": "Consultoría estratégica especializada en transformar PyMEs en empresas escalables",
    "url": "https://www.grovex.com.ar",
    "logo": "https://www.grovex.com.ar/images/grovex-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-351-2453599",
      "contactType": "customer service",
      "email": "consulta@grovex.com.ar",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressCountry": "Argentina"
    },
    "sameAs": ["https://www.linkedin.com/company/grovex"],
    "founders": [
      {
        "@type": "Person",
        "name": "Ignacio Gregorat",
        "jobTitle": "Estrategia y Dirección"
      },
      {
        "@type": "Person", 
        "name": "Leandro Juarez Teitelman",
        "jobTitle": "Innovación y Procesos"
      },
      {
        "@type": "Person",
        "name": "Francisco Lucca", 
        "jobTitle": "Finanzas y Datos"
      }
    ]
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
