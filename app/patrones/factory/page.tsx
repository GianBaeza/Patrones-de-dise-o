import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Patrón Factory - Curso de Patrones de Diseño",
  description: "Aprende el patrón Factory con ejemplos en JavaScript y Next.js",
}

export default function FactoryPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al catálogo
            </Link>
          </Button>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl">🏭</span>
            <div>
              <h1 className="text-4xl font-bold">Factory (Fábrica)</h1>
              <p className="text-sm text-primary font-medium">Patrón Creacional • Dificultad: Básico</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Define una interfaz para crear objetos, pero permite que las subclases decidan qué clase instanciar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">¿Qué es el Patrón Factory?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El patrón Factory proporciona una <strong>forma de crear objetos sin especificar la clase exacta</strong>{" "}
              del objeto que será creado. En lugar de llamar directamente al constructor con <code>new</code>, delegas
              la creación del objeto a un método o clase "fábrica".
            </p>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>💡 Analogía del Mundo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed mb-3">
                  Imagina que vas a un <strong>concesionario de autos</strong>. No entras directamente a la línea de
                  producción especificando cada pieza. En su lugar, le dices al vendedor: "Quiero un SUV deportivo" y la
                  fábrica del concesionario decide qué modelo exacto crear basándose en tus requisitos.
                </p>
                <p className="leading-relaxed">
                  En programación: no instancias directamente clases concretas, sino que pides objetos a una fábrica que
                  decide qué clase exacta crear basándose en parámetros o contexto.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">¿Por qué usar Factory?</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Ventajas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Desacoplamiento</p>
                    <p className="text-muted-foreground">El código no depende de clases concretas específicas</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Flexibilidad</p>
                    <p className="text-muted-foreground">Fácil agregar nuevos tipos sin modificar código existente</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Encapsulación</p>
                    <p className="text-muted-foreground">La lógica de creación está centralizada en un lugar</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Código más limpio</p>
                    <p className="text-muted-foreground">Elimina condicionales complejos para instanciar objetos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    Desventajas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Complejidad adicional</p>
                    <p className="text-muted-foreground">Añade una capa extra de abstracción</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Más código</p>
                    <p className="text-muted-foreground">Requiere crear clases/funciones factory adicionales</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Puede ser excesivo</p>
                    <p className="text-muted-foreground">
                      Para casos simples, usar <code>new</code> directamente es mejor
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Implementación en JavaScript</h2>

            <Tabs defaultValue="simple" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="simple">Factory Simple</TabsTrigger>
                <TabsTrigger value="abstract">Factory Abstracta</TabsTrigger>
              </TabsList>

              <TabsContent value="simple" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Simple Factory Pattern</CardTitle>
                    <CardDescription>La implementación más básica y común en JavaScript</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs md:text-sm">{`// Clases de productos concretos
class Car {
  constructor(model) {
    this.type = 'car';
    this.model = model;
    this.wheels = 4;
    this.doors = 4;
  }
  
  drive() {
    console.log(\`🚗 Conduciendo \${this.model} por la carretera\`);
  }
  
  getInfo() {
    return \`\${this.type}: \${this.model}, \${this.wheels} ruedas, \${this.doors} puertas\`;
  }
}

class Motorcycle {
  constructor(model) {
    this.type = 'motorcycle';
    this.model = model;
    this.wheels = 2;
    this.doors = 0;
  }
  
  drive() {
    console.log(\`🏍️ Acelerando \${this.model} en la autopista\`);
  }
  
  getInfo() {
    return \`\${this.type}: \${this.model}, \${this.wheels} ruedas\`;
  }
}

class Truck {
  constructor(model) {
    this.type = 'truck';
    this.model = model;
    this.wheels = 6;
    this.doors = 2;
    this.capacity = '10 toneladas';
  }
  
  drive() {
    console.log(\`🚛 Transportando carga en \${this.model}\`);
  }
  
  getInfo() {
    return \`\${this.type}: \${this.model}, capacidad: \${this.capacity}\`;
  }
}

// FACTORY: Clase que encapsula la lógica de creación
class VehicleFactory {
  createVehicle(type, model) {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car(model);
      case 'motorcycle':
        return new Motorcycle(model);
      case 'truck':
        return new Truck(model);
      default:
        throw new Error(\`Tipo de vehículo "\${type}" no soportado\`);
    }
  }
}

// USO DEL PATRÓN
const factory = new VehicleFactory();

// Crear diferentes vehículos sin conocer las clases concretas
const myCar = factory.createVehicle('car', 'Toyota Camry');
const myBike = factory.createVehicle('motorcycle', 'Harley Davidson');
const myTruck = factory.createVehicle('truck', 'Volvo FH16');

// Todos tienen la misma interfaz
myCar.drive();    // 🚗 Conduciendo Toyota Camry por la carretera
myBike.drive();   // 🏍️ Acelerando Harley Davidson en la autopista
myTruck.drive();  // 🚛 Transportando carga en Volvo FH16

console.log(myCar.getInfo());   // car: Toyota Camry, 4 ruedas, 4 puertas
console.log(myBike.getInfo());  // motorcycle: Harley Davidson, 2 ruedas
console.log(myTruck.getInfo()); // truck: Volvo FH16, capacidad: 10 toneladas`}</pre>
                  </CardContent>
                </Card>

                <Card className="bg-accent/50">
                  <CardHeader>
                    <CardTitle className="text-lg">🎯 Explicación del Enfoque</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p>
                      <strong>¿Por qué este enfoque?</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                      <li>
                        <strong>Centralización:</strong> Toda la lógica de creación está en un solo lugar
                      </li>
                      <li>
                        <strong>Flexibilidad:</strong> Para agregar un nuevo vehículo, solo modificas la factory
                      </li>
                      <li>
                        <strong>Interfaz común:</strong> Todos los vehículos tienen métodos <code>drive()</code> y{" "}
                        <code>getInfo()</code>
                      </li>
                      <li>
                        <strong>El cliente no necesita conocer</strong> las clases concretas (Car, Motorcycle, Truck)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Versión con Función Factory (Más JavaScript)</CardTitle>
                    <CardDescription>Enfoque funcional sin necesidad de clases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs md:text-sm">{`// Factory como función simple
function createVehicle(type, model) {
  const vehicles = {
    car: {
      type: 'car',
      model,
      wheels: 4,
      drive() {
        console.log(\`🚗 Conduciendo \${this.model}\`);
      }
    },
    motorcycle: {
      type: 'motorcycle',
      model,
      wheels: 2,
      drive() {
        console.log(\`🏍️ Acelerando \${this.model}\`);
      }
    },
    truck: {
      type: 'truck',
      model,
      wheels: 6,
      capacity: '10 toneladas',
      drive() {
        console.log(\`🚛 Transportando en \${this.model}\`);
      }
    }
  };
  
  const vehicle = vehicles[type.toLowerCase()];
  
  if (!vehicle) {
    throw new Error(\`Tipo "\${type}" no válido\`);
  }
  
  return { ...vehicle }; // Retornar copia del objeto
}

// Uso
const car = createVehicle('car', 'Honda Civic');
const bike = createVehicle('motorcycle', 'Yamaha R1');

car.drive();  // 🚗 Conduciendo Honda Civic
bike.drive(); // 🏍️ Acelerando Yamaha R1`}</pre>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="abstract" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Abstract Factory Pattern</CardTitle>
                    <CardDescription>Para crear familias de objetos relacionados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs md:text-sm">{`// Productos concretos: Botones
class WindowsButton {
  render() {
    return '<button class="windows-btn">Click me (Windows)</button>';
  }
  onClick(callback) {
    console.log('Windows button clicked');
    callback();
  }
}

class MacButton {
  render() {
    return '<button class="mac-btn">Click me (Mac)</button>';
  }
  onClick(callback) {
    console.log('Mac button clicked');
    callback();
  }
}

// Productos concretos: Checkboxes
class WindowsCheckbox {
  render() {
    return '<input type="checkbox" class="windows-cb" />';
  }
  check() {
    console.log('Windows checkbox checked ✓');
  }
}

class MacCheckbox {
  render() {
    return '<input type="checkbox" class="mac-cb" />';
  }
  check() {
    console.log('Mac checkbox checked ✓');
  }
}

// ABSTRACT FACTORY: Interfaz para crear familias de productos
class WindowsFactory {
  createButton() {
    return new WindowsButton();
  }
  
  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class MacFactory {
  createButton() {
    return new MacButton();
  }
  
  createCheckbox() {
    return new MacCheckbox();
  }
}

// Función para obtener la factory según el OS
function getUIFactory(os) {
  const factories = {
    windows: new WindowsFactory(),
    mac: new MacFactory()
  };
  
  return factories[os.toLowerCase()] || factories.windows;
}

// USO: El cliente trabaja con la interfaz abstracta
class Application {
  constructor(factory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }
  
  renderUI() {
    console.log('Renderizando UI:');
    console.log(this.button.render());
    console.log(this.checkbox.render());
  }
  
  interact() {
    this.button.onClick(() => console.log('¡Acción ejecutada!'));
    this.checkbox.check();
  }
}

// Detectar OS y usar la factory apropiada
const userOS = 'mac'; // o 'windows'
const factory = getUIFactory(userOS);
const app = new Application(factory);

app.renderUI();
// Renderizando UI:
// <button class="mac-btn">Click me (Mac)</button>
// <input type="checkbox" class="mac-cb" />

app.interact();
// Mac button clicked
// ¡Acción ejecutada!
// Mac checkbox checked ✓`}</pre>
                  </CardContent>
                </Card>

                <Card className="bg-accent/50">
                  <CardHeader>
                    <CardTitle className="text-lg">🎯 Explicación del Enfoque</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p>
                      <strong>¿Cuándo usar Abstract Factory?</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                      <li>
                        Necesitas crear <strong>familias de productos relacionados</strong> (botones + checkboxes +
                        inputs)
                      </li>
                      <li>
                        Los productos deben ser <strong>consistentes entre sí</strong> (todos estilo Windows o todos
                        Mac)
                      </li>
                      <li>Quieres asegurar que los productos de diferentes familias no se mezclen</li>
                      <li>Común en sistemas de UI con múltiples temas o plataformas</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Aplicación en Next.js</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ejemplo Real: Factory de Notificaciones</CardTitle>
                  <CardDescription>lib/notifications/notification-factory.ts</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs md:text-sm">{`// lib/notifications/types.ts
export interface Notification {
  send(message: string, recipient: string): Promise<void>;
  getType(): string;
}

// lib/notifications/email-notification.ts
import { Notification } from './types';

export class EmailNotification implements Notification {
  private apiKey: string;
  
  constructor() {
    this.apiKey = process.env.EMAIL_API_KEY || '';
  }
  
  async send(message: string, recipient: string): Promise<void> {
    console.log(\`📧 Enviando email a \${recipient}\`);
    // Simular envío de email
    await fetch('https://api.emailservice.com/send', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${this.apiKey}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: recipient,
        subject: 'Notificación',
        body: message
      })
    });
  }
  
  getType(): string {
    return 'email';
  }
}

// lib/notifications/sms-notification.ts
import { Notification } from './types';

export class SMSNotification implements Notification {
  private apiKey: string;
  
  constructor() {
    this.apiKey = process.env.SMS_API_KEY || '';
  }
  
  async send(message: string, recipient: string): Promise<void> {
    console.log(\`📱 Enviando SMS a \${recipient}\`);
    // Simular envío de SMS
    await fetch('https://api.smsservice.com/send', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${this.apiKey}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: recipient,
        message: message
      })
    });
  }
  
  getType(): string {
    return 'sms';
  }
}

// lib/notifications/push-notification.ts
import { Notification } from './types';

export class PushNotification implements Notification {
  async send(message: string, recipient: string): Promise<void> {
    console.log(\`🔔 Enviando push notification a \${recipient}\`);
    // Simular push notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Nueva notificación', {
        body: message
      });
    }
  }
  
  getType(): string {
    return 'push';
  }
}

// lib/notifications/notification-factory.ts
import { Notification } from './types';
import { EmailNotification } from './email-notification';
import { SMSNotification } from './sms-notification';
import { PushNotification } from './push-notification';

type NotificationType = 'email' | 'sms' | 'push';

export class NotificationFactory {
  static create(type: NotificationType): Notification {
    switch (type) {
      case 'email':
        return new EmailNotification();
      case 'sms':
        return new SMSNotification();
      case 'push':
        return new PushNotification();
      default:
        throw new Error(\`Tipo de notificación no soportado: \${type}\`);
    }
  }
  
  // Método auxiliar para crear múltiples notificadores
  static createMultiple(types: NotificationType[]): Notification[] {
    return types.map(type => this.create(type));
  }
}`}</pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uso en Server Actions</CardTitle>
                  <CardDescription>app/actions/notify.ts</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs md:text-sm">{`'use server'

import { NotificationFactory } from '@/lib/notifications/notification-factory';

export async function notifyUser(
  userId: string,
  message: string,
  methods: ('email' | 'sms' | 'push')[]
) {
  try {
    // Obtener datos del usuario (simulado)
    const user = await getUserById(userId);
    
    // Crear notificadores usando la factory
    const notifiers = NotificationFactory.createMultiple(methods);
    
    // Enviar por todos los métodos en paralelo
    await Promise.all(
      notifiers.map(notifier => {
        const recipient = notifier.getType() === 'email' 
          ? user.email 
          : user.phone;
        return notifier.send(message, recipient);
      })
    );
    
    return { success: true, message: 'Notificaciones enviadas' };
  } catch (error) {
    console.error('Error enviando notificaciones:', error);
    return { success: false, error: 'Error al enviar notificaciones' };
  }
}

async function getUserById(id: string) {
  // Simulación - en realidad consultarías la DB
  return {
    id,
    email: 'user@example.com',
    phone: '+1234567890'
  };
}

// app/dashboard/page.tsx - Uso en componente
import { notifyUser } from '@/app/actions/notify';

export default function DashboardPage() {
  async function handleNotify() {
    'use server'
    await notifyUser(
      'user-123',
      '¡Tu pedido ha sido enviado!',
      ['email', 'sms', 'push']
    );
  }
  
  return (
    <form action={handleNotify}>
      <button type="submit">
        Enviar Notificaciones
      </button>
    </form>
  );
}`}</pre>
                </CardContent>
              </Card>

              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-lg">💡 Ventajas en Next.js</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>¿Por qué usar Factory aquí?</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Fácil agregar nuevos canales de notificación (WhatsApp, Slack, etc.)</li>
                    <li>El código cliente no conoce las implementaciones concretas</li>
                    <li>Centraliza la lógica de creación y configuración</li>
                    <li>Facilita testing con mocks de notificadores</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Casos de Uso Comunes</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ Cuándo usar Factory</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                    <li>Creación de componentes UI dinámicos</li>
                    <li>Sistemas de notificaciones multi-canal</li>
                    <li>Generación de diferentes tipos de reportes</li>
                    <li>Procesadores de pagos múltiples (Stripe, PayPal, etc.)</li>
                    <li>Adaptadores para diferentes APIs</li>
                    <li>Estrategias de autenticación (OAuth, JWT, API Key)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ Cuándo NO usar Factory</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                    <li>Solo tienes una clase o tipo de objeto</li>
                    <li>
                      La creación es trivial (<code>new MiClase()</code> es suficiente)
                    </li>
                    <li>No hay lógica condicional en la creación</li>
                    <li>Añade complejidad sin beneficios claros</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Card className="bg-primary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">📚 Resumen del Patrón Factory</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold mb-1">🎯 Propósito</p>
                <p className="text-sm text-muted-foreground">
                  Crear objetos sin especificar la clase exacta a instanciar
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">⚙️ Implementación</p>
                <p className="text-sm text-muted-foreground">
                  Método o clase que encapsula la lógica de creación con condicionales
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">✨ Cuándo usar</p>
                <p className="text-sm text-muted-foreground">
                  Múltiples tipos de objetos similares, lógica de creación compleja
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">🔄 Diferencia con Singleton</p>
                <p className="text-sm text-muted-foreground">
                  Singleton garantiza una sola instancia; Factory crea múltiples instancias de diferentes tipos
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/patrones/singleton">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior: Singleton
              </Link>
            </Button>
            <Button asChild>
              <Link href="/patrones/observer">
                Siguiente: Observer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
