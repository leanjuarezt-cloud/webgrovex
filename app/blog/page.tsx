import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Grovex | Artículos sobre Gestión y Estrategia Empresarial",
  description: "Insights, análisis y reflexiones sobre gestión empresarial, estrategia y profesionalización de PyMEs.",
  openGraph: {
    title: "Blog - Grovex",
    description: "Artículos sobre gestión y estrategia empresarial",
  }
}

const blogPosts = [
  {
    title: "Cuando el producto habla, el ruido baja.",
    excerpt: "Vivimos rodeados de estímulos. Hay campañas masivas, influencers que promocionan sin saber qué venden, bots generando interacciones y estrategias personalizadas en cada canal. Pero todo eso se cae si en el momento en que el usuario prueba el producto, no funciona.",
    author: "Leandro Juarez Teitelman",
    date: "20 de abril, 2025",
    slug: "cuando-el-producto-habla",
    readTime: "6 min"
  },
  {
    title: "Decidir antes de ejecutar. La estrategia detrás de una transición tecnológica",
    excerpt: "En los últimos años, con la irrupción de nuevas tecnologías y producto de un entorno cambiante e incierto, muchas organizaciones comenzaron a enfrentar un desafío común. La necesidad de modernizar herramientas y procesos se volvió evidente.",
    author: "Ignacio Gregorat",
    date: "17 de diciembre, 2025",
    slug: "decidir-antes-de-ejecutar",
    readTime: "8 min"
  },
  {
    title: "La gestión preventiva como condición para la competitividad PyME",
    excerpt: "En los últimos años se volvió habitual comparar la toma de decisiones empresariales con situaciones de la vida cotidiana. Se dice que, así como una persona acude al médico cuando aparece un dolor o llama a un abogado cuando surge un conflicto, una PyME también debería buscar ordenarse cuando detecta un problema interno evidente.",
    author: "Ignacio Gregorat",
    date: "26 de noviembre, 2025",
    slug: "gestion-preventiva-competitividad-pyme",
    readTime: "9 min"
  },
  {
    title: "Cuando la urgencia desplaza a la estrategia en la gestión PyME argentina",
    excerpt: "El 2025 se está convirtiendo en un año que obliga a revisar las formas en que se conduce una empresa en Argentina. La información que circula en distintos informes deja en evidencia que la gestión tradicional, basada en la intuición, la reacción permanente y las decisiones aisladas, empieza a mostrar sus límites.",
    author: "Ignacio Gregorat",
    date: "17 de noviembre, 2025",
    slug: "urgencia-estrategia-gestion-pyme",
    readTime: "10 min"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Artículos y Reflexiones
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ideas, análisis y perspectivas sobre gestión empresarial, estrategia y profesionalización de PyMEs
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                slug={post.slug}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

