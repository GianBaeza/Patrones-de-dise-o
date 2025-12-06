import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code2, Layers, Zap } from "lucide-react"

const patterns = [
  {
    id: "singleton",
    title: "Singleton",
    category: "Creacional",
    description: "Asegura que una clase tenga solo una instancia y proporciona un punto de acceso global",
    difficulty: "Básico",
    icon: "🔒",
  },
  {
    id: "factory",
    title: "Factory",
    category: "Creacional",
    description: "Crea objetos sin especificar la clase exacta del objeto que será creado",
    difficulty: "Básico",
    icon: "🏭",
  },
  {
    id: "observer",
    title: "Observer",
    category: "Comportamiento",
    description: "Define una dependencia uno-a-muchos para notificar cambios automáticamente",
    difficulty: "Intermedio",
    icon: "👁️",
  },
  {
    id: "module",
    title: "Module",
    category: "Estructural",
    description: "Encapsula código relacionado en una unidad organizada y reutilizable",
    difficulty: "Básico",
    icon: "📦",
  },
  {
    id: "decorator",
    title: "Decorator",
    category: "Estructural",
    description: "Añade funcionalidad a objetos de manera dinámica sin modificar su estructura",
    difficulty: "Intermedio",
    icon: "🎨",
  },
  {
    id: "strategy",
    title: "Strategy",
    category: "Comportamiento",
    description: "Define una familia de algoritmos y los hace intercambiables",
    difficulty: "Intermedio",
    icon: "🎯",
  },
]

const features = [
  {
    icon: Code2,
    title: "Ejemplos Prácticos",
    description: "Código real en JavaScript moderno y Next.js con casos de uso del mundo real",
  },
  {
    icon: BookOpen,
    title: "Explicaciones Detalladas",
    description: "Cada patrón incluye teoría, ventajas, desventajas y cuándo usarlo",
  },
  {
    icon: Layers,
    title: "Implementaciones Completas",
    description: "Desde JavaScript vanilla hasta integración completa en aplicaciones Next.js",
  },
  {
    icon: Zap,
    title: "Mejores Prácticas",
    description: "Aprende no solo cómo, sino por qué usar cada patrón en situaciones específicas",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Curso Completo 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Patrones de Diseño en JavaScript & Next.js
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Domina los patrones de diseño más importantes con ejemplos prácticos, explicaciones detalladas y
              aplicaciones reales en el ecosistema moderno de JavaScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#patrones">Explorar Patrones</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/introduccion">¿Qué son los patrones?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns Grid */}
      <section id="patrones" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Catálogo de Patrones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Cada patrón incluye teoría, ejemplos en JavaScript vanilla y aplicaciones prácticas en Next.js con
              explicaciones paso a paso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {patterns.map((pattern) => (
              <Link key={pattern.id} href={`/patrones/${pattern.id}`}>
                <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">{pattern.icon}</span>
                      <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded">
                        {pattern.difficulty}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{pattern.title}</CardTitle>
                    <CardDescription className="text-xs font-medium text-primary">{pattern.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pattern.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Curso de Patrones de Diseño • JavaScript & Next.js • 2025</p>
        </div>
      </footer>
    </div>
  )
}
