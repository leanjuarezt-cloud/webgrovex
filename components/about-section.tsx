import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Nuestra propuesta de valor</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            Grovex es una consultora especializada en planeamiento estratégico que aborda los desafíos de gestión y
            crecimiento desde una visión sistémica: concebimos la empresa como un todo interdependiente y diseñamos
            soluciones aplicables que alinean lo estratégico con lo operativo.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mirada Externa</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Perspectiva fresca y no sesgada que ayuda a ver lo invisible
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
