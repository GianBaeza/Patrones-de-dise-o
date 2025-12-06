import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Introducción a Patrones de Diseño",
  description: "Aprende qué son los patrones de diseño y por qué son fundamentales",
}

export default function IntroduccionPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-3">Introducción a los Patrones de Diseño</h1>
          <p className="text-lg text-muted-foreground">Fundamentos y conceptos esenciales antes de comenzar</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">¿Qué son los Patrones de Diseño?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los patrones de diseño son <strong>soluciones reutilizables</strong> a problemas comunes que ocurren en el
              desarrollo de software. No son código que puedas copiar y pegar, sino más bien{" "}
              <strong>plantillas conceptuales</strong> que describen cómo resolver un problema en diferentes
              situaciones.
            </p>
          </section>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">💡 Analogía del Mundo Real</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="leading-relaxed">
                Piensa en los patrones de diseño como <strong>planos arquitectónicos</strong>. Cuando un arquitecto
                diseña una casa, no inventa desde cero cómo construir escaleras, ventanas o puertas. Usa patrones
                establecidos y probados que funcionan bien.
              </p>
              <p className="leading-relaxed">
                De la misma manera, los patrones de diseño en software son soluciones probadas que generaciones de
                desarrolladores han refinado y documentado.
              </p>
            </CardContent>
          </Card>

          <section>
            <h2 className="text-3xl font-bold mb-4">¿Por qué usar Patrones de Diseño?</h2>
            <div className="grid gap-4 mt-6">
              {[
                {
                  title: "Código más mantenible",
                  desc: "Facilita que otros desarrolladores (y tu yo del futuro) entiendan el código",
                },
                {
                  title: "Soluciones probadas",
                  desc: "Evitas errores comunes usando soluciones que ya han sido validadas",
                },
                {
                  title: "Comunicación efectiva",
                  desc: "Vocabulario común para discutir soluciones con otros desarrolladores",
                },
                {
                  title: "Escalabilidad",
                  desc: "Estructuras que facilitan el crecimiento y evolución del código",
                },
                {
                  title: "Mejores prácticas",
                  desc: "Aprende de la experiencia colectiva de miles de desarrolladores",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Categorías de Patrones</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Los patrones de diseño se clasifican en tres categorías principales, cada una resuelve un tipo diferente
              de problema:
            </p>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🏗️</span>
                    Patrones Creacionales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Se enfocan en la <strong>creación de objetos</strong> de manera flexible y eficiente.
                  </p>
                  <p className="text-sm text-muted-foreground">Ejemplos: Singleton, Factory, Builder, Prototype</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔧</span>
                    Patrones Estructurales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Se centran en cómo <strong>componer objetos y clases</strong> para formar estructuras más grandes.
                  </p>
                  <p className="text-sm text-muted-foreground">Ejemplos: Module, Decorator, Adapter, Facade, Proxy</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    Patrones de Comportamiento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Tratan sobre la <strong>comunicación entre objetos</strong> y cómo distribuyen responsabilidades.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ejemplos: Observer, Strategy, Command, Iterator, State
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">¿Cuándo usar Patrones?</h2>

            <Card className="border-l-4 border-l-secondary mb-4">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">✅ Usa patrones cuando:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Identificas un problema recurrente en tu código</li>
                  <li>Necesitas hacer tu código más flexible y mantenible</li>
                  <li>Trabajas en equipo y necesitas comunicar soluciones claramente</li>
                  <li>El patrón realmente simplifica tu diseño</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">❌ Evita patrones cuando:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Estás forzando un patrón solo porque "deberías usarlo"</li>
                  <li>Una solución simple funciona perfectamente bien</li>
                  <li>El patrón añade complejidad innecesaria</li>
                  <li>No entiendes completamente el patrón que intentas usar</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Card className="bg-accent/50 border-2">
            <CardContent className="pt-6">
              <p className="text-lg font-semibold mb-2">🎯 Principio Clave: KISS (Keep It Simple, Stupid)</p>
              <p className="text-muted-foreground leading-relaxed">
                Los patrones son herramientas, no objetivos. El objetivo es escribir código claro, mantenible y que
                resuelva problemas reales. Usa patrones cuando mejoren tu código, no solo porque puedas.
              </p>
            </CardContent>
          </Card>

          <div className="flex gap-4 pt-8 border-t">
            <Button asChild size="lg">
              <Link href="/patrones/singleton">Comenzar con Singleton →</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">← Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
