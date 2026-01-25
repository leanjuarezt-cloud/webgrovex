import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cuando el producto habla, el ruido baja | Blog Grovex",
  description: "La experiencia del producto es lo que realmente importa. Cuando un producto está bien hecho, no hace falta salir a gritarlo.",
  openGraph: {
    title: "Cuando el producto habla, el ruido baja",
    description: "La experiencia del producto es lo que realmente importa",
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
              Cuando el producto habla, el ruido baja.
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">Leandro Juarez Teitelman</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>20 de abril, 2025</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="lead text-xl text-muted-foreground mb-8">
              Vivimos rodeados de estímulos. Hay campañas masivas, influencers que promocionan sin saber qué venden, bots generando interacciones y estrategias personalizadas en cada canal. Pero todo eso se cae si en el momento en que el usuario prueba el producto, no funciona.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">La experiencia manda.</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Poner al producto en el centro también es comprender al cliente</h3>
            
            <p className="mb-6">
              En los últimos años las estrategias empresariales giran en torno al cliente: escucharlo, entenderlo y adaptarse a sus necesidades. Y aunque eso sigue siendo importante, hoy no alcanza con escuchar y prometer.
            </p>

            <p className="mb-6">
              En un mundo saturado de opciones, lo que termina diferenciando a una empresa no es solo lo que se dice, sino lo que se entrega.
            </p>

            <p className="mb-6">
              El lead o cliente ya no tiene paciencia para los relatos, quiere que las cosas funcionen. Y si el producto no cumple lo que promete, si es lento, confuso o no funciona, se termina todo antes de empezar.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Construir desde el producto</h3>
            
            <p className="mb-6">
              Un buen producto no es solo el que impacta en la presentación: es el que mantiene su valor en el tiempo y soporta el error y el uso cotidiano.
            </p>

            <p className="mb-6">
              Cuando un producto está bien hecho, no hace falta salir a gritarlo. El usuario es el que encarga de contarlo. Por eso, más que perseguir cada nueva tendencia, sirve más construir con criterio, foco e intención.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Algunas cosas que se pueden hacer</h3>
            
            <ul className="space-y-4 mb-6">
              <li>
                <strong>Diseñar pensando en el uso real, no en el escenario ideal:</strong> El producto tiene que funcionar incluso en condiciones imperfectas, no solo en la teoría.
              </li>
              <li>
                <strong>Asegurarse de que soporte el uso cotidiano:</strong> No todo va a salir como se espera. El producto tiene que soportar el uso real.
              </li>
              <li>
                <strong>Prometer menos, entregar más:</strong> La confianza no se gana con discursos vacios, se gana cumpliendo día a día.
              </li>
              <li>
                <strong>Mejorar en silencio:</strong> No todo cambio necesita ser anunciado. Lo importante es que el usuario lo note.
              </li>
            </ul>

            <p className="mb-6">
              No se trata de ir contra el marketing. Se trata de que el marketing y el producto estén alineados. Que el marketing sea una consecuencia natural de algo que ya este bien hecho. En definitiva lo que hace que el cliente se quede es el producto.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-lg">
              <p className="mb-2">
                "Growth hacks can get you initial traction, but only a great product can sustain long-term growth."
              </p>
              <footer className="text-sm text-muted-foreground">
                — Andrew Chen (head of growth Uber) en su libro The Cold Start Problem
              </footer>
            </blockquote>

            <p className="mb-6">
              Porque cuando el producto habla, el ruido baja. Y porque en un mundo de relato, entregar realidad es una ventaja competitiva.
            </p>
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

