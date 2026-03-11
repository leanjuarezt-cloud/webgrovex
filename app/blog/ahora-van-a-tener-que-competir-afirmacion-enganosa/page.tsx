import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "\"Ahora van a tener que competir\". Una afirmación engañosa | Blog Grovex",
  description: "Reflexión sobre competencia y estrategia empresarial. Artículo de Ignacio Gregorat.",
  openGraph: {
    title: "\"Ahora van a tener que competir\". Una afirmación engañosa",
    description: "Reflexión sobre competencia y estrategia empresarial.",
  }
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              &quot;Ahora van a tener que competir&quot;. Una afirmación engañosa
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Ignacio Gregorat</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>27 de febrero, 2026</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="lead text-xl text-muted-foreground mb-8">
              Este artículo está disponible en formato PDF. Podés descargarlo o abrirlo en una nueva pestaña para leerlo completo.
            </p>

            <div className="not-prose my-10">
              <a
                href="/articles/ahora-van-a-tener-que-competir-afirmacion-enganosa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-primary bg-primary/5 px-8 py-4 text-lg font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                <FileText className="h-6 w-6" />
                Ver o descargar PDF
              </a>
            </div>
          </div>

          {/* Back Button Bottom */}
          <div className="mt-12 pt-8 border-t">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Blog
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
