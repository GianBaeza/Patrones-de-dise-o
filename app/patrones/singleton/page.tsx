import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Patrón Singleton - Curso de Patrones de Diseño",
  description: "Aprende el patrón Singleton con ejemplos en JavaScript y Next.js",
}

export default function SingletonPage() {
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
            <span className="text-5xl">🔒</span>
            <div>
              <h1 className="text-4xl font-bold">Singleton</h1>
              <p className="text-sm text-primary font-medium">Patrón Creacional • Dificultad: Básico</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-12">
          {/* Concepto */}
          <section>
            <h2 className="text-3xl font-bold mb-4">¿Qué es Singleton?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El patrón Singleton es uno de los patrones más simples y comunes. Su objetivo es
              <strong> garantizar que una clase tenga solo una instancia</strong> durante toda la vida de la aplicación
              y proporcionar un punto de acceso global a esa instancia.
            </p>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>💡 Analogía del Mundo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed mb-3">
                  Imagina el <strong>gobierno de un país</strong>. Solo puede haber un gobierno oficial al mismo tiempo.
                  Diferentes departamentos pueden acceder y comunicarse con este gobierno único, pero no pueden crear
                  gobiernos alternativos.
                </p>
                <p className="leading-relaxed">
                  De manera similar, en aplicaciones web: solo necesitas una instancia de configuración, un manejador de
                  caché, o una conexión a base de datos compartida por toda la app.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Por qué usar este patrón */}
          <section>
            <h2 className="text-3xl font-bold mb-4">¿Por qué usar Singleton?</h2>

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
                    <p className="font-semibold mb-1">Control de instancia única</p>
                    <p className="text-muted-foreground">
                      Garantiza que solo exista una instancia, evitando conflictos
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Acceso global</p>
                    <p className="text-muted-foreground">
                      Punto de acceso consistente desde cualquier parte del código
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Inicialización perezosa</p>
                    <p className="text-muted-foreground">Se crea solo cuando realmente se necesita</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ahorro de recursos</p>
                    <p className="text-muted-foreground">Evita crear múltiples instancias costosas</p>
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
                    <p className="font-semibold mb-1">Viola el principio de responsabilidad única</p>
                    <p className="text-muted-foreground">Maneja su lógica y su propia creación</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Dificulta las pruebas</p>
                    <p className="text-muted-foreground">El estado global puede causar problemas en tests unitarios</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Acoplamiento</p>
                    <p className="text-muted-foreground">Puede crear dependencias ocultas en toda la aplicación</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Problemas con concurrencia</p>
                    <p className="text-muted-foreground">Requiere cuidado especial en entornos multi-hilo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementación */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Implementación en JavaScript</h2>

            <Tabs defaultValue="es6" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="es6">ES6 Clase</TabsTrigger>
                <TabsTrigger value="closure">Closure</TabsTrigger>
                <TabsTrigger value="object">Objeto Literal</TabsTrigger>
              </TabsList>

              <TabsContent value="es6" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Implementación con Clases ES6</CardTitle>
                    <CardDescription>La forma más moderna y recomendada en JavaScript actual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs md:text-sm">{`class DatabaseConnection {
  // Variable estática privada para almacenar la única instancia
  static #instance = null;
  
  // Array para simular datos
  #data = [];
  
  constructor() {
    // Si ya existe una instancia, retornarla en lugar de crear nueva
    if (DatabaseConnection.#instance) {
      return DatabaseConnection.#instance;
    }
    
    // Inicialización de la conexión (simulada)
    this.#connect();
    
    // Guardar esta instancia como la única
    DatabaseConnection.#instance = this;
  }
  
  #connect() {
    console.log('🔌 Conectando a la base de datos...');
    // Simular conexión a DB
  }
  
  query(sql) {
    console.log(\`📝 Ejecutando query: \${sql}\`);
    return this.#data;
  }
  
  insert(record) {
    this.#data.push(record);
    console.log('✅ Registro insertado:', record);
  }
  
  // Método estático para obtener la instancia
  static getInstance() {
    if (!DatabaseConnection.#instance) {
      DatabaseConnection.#instance = new DatabaseConnection();
    }
    return DatabaseConnection.#instance;
  }
}

// Uso del patrón
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
const db3 = DatabaseConnection.getInstance();

console.log(db1 === db2); // true - ¡Misma instancia!
console.log(db2 === db3); // true - ¡Misma instancia!

db1.insert({ id: 1, name: 'Usuario 1' });
db2.insert({ id: 2, name: 'Usuario 2' });

// Ambas instancias comparten los mismos datos
console.log(db3.query('SELECT * FROM users')); 
// Resultado: [{ id: 1, name: 'Usuario 1' }, { id: 2, name: 'Usuario 2' }]`}</pre>
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
                        <code>#instance</code> es privada y estática: solo la clase puede acceder a ella
                      </li>
                      <li>El constructor comprueba si ya existe una instancia antes de crear una nueva</li>
                      <li>
                        Usar <code>static getInstance()</code> es más explícito y claro en las intenciones
                      </li>
                      <li>Los campos privados (#) evitan que se modifiquen desde fuera de la clase</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="closure" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Implementación con Closures (IIFE)</CardTitle>
                    <CardDescription>Patrón clásico de JavaScript que encapsula completamente</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs md:text-sm">{`const Logger = (function() {
  // Variable privada que almacena la única instancia
  let instance;
  
  // Constructor privado
  function createInstance() {
    const logs = [];
    
    return {
      log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        const logEntry = \`[\${timestamp}] [\${level}] \${message}\`;
        logs.push(logEntry);
        console.log(logEntry);
      },
      
      error(message) {
        this.log(message, 'ERROR');
      },
      
      warn(message) {
        this.log(message, 'WARN');
      },
      
      getLogs() {
        return [...logs]; // Retornar copia para evitar mutación
      },
      
      clear() {
        logs.length = 0;
        console.log('🗑️ Logs limpiados');
      }
    };
  }
  
  // Retornar objeto público con método getInstance
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
        console.log('✨ Nueva instancia de Logger creada');
      }
      return instance;
    }
  };
})();

// Uso del patrón
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2); // true

logger1.log('Aplicación iniciada');
logger1.error('Error de conexión');
logger2.warn('Memoria baja');

// Todos comparten el mismo historial de logs
console.log(logger1.getLogs()); 
// Muestra todos los 3 logs, demostrando que es la misma instancia`}</pre>
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
                        <strong>IIFE</strong> (Immediately Invoked Function Expression) crea un scope privado
                      </li>
                      <li>Las variables dentro del closure son completamente privadas e inaccesibles</li>
                      <li>No depende de características de ES6, funciona en navegadores antiguos</li>
                      <li>Perfecto para cuando necesitas encapsulación total sin clases</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="object" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Implementación con Objeto Literal</CardTitle>
                    <CardDescription>La forma más simple cuando no necesitas inicialización compleja</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs md:text-sm">{`// En JavaScript, los objetos literales son inherentemente singletons
const AppConfig = {
  apiUrl: 'https://api.example.com',
  apiKey: null,
  theme: 'light',
  language: 'es',
  
  // Estado privado usando WeakMap
  _cache: new Map(),
  
  setApiKey(key) {
    this.apiKey = key;
    console.log('🔑 API Key configurada');
  },
  
  getApiUrl() {
    return this.apiUrl;
  },
  
  setTheme(theme) {
    if (!['light', 'dark'].includes(theme)) {
      throw new Error('Tema inválido');
    }
    this.theme = theme;
    console.log(\`🎨 Tema cambiado a: \${theme}\`);
  },
  
  // Caché simple
  getCached(key) {
    return this._cache.get(key);
  },
  
  setCached(key, value) {
    this._cache.set(key, value);
  }
};

// Prevenir modificaciones no deseadas
Object.seal(AppConfig);

// Uso
AppConfig.setApiKey('abc123');
AppConfig.setTheme('dark');

// Intentar crear una "nueva instancia" simplemente referencia al mismo objeto
const config1 = AppConfig;
const config2 = AppConfig;

console.log(config1 === config2); // true

config1.setTheme('light');
console.log(config2.theme); // 'light' - mismo objeto`}</pre>
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
                      <li>Más simple y directo para configuraciones estáticas</li>
                      <li>
                        <code>Object.seal()</code> previene agregar/eliminar propiedades
                      </li>
                      <li>Perfecto para configuración de app, constantes, o utilidades simples</li>
                      <li>No necesita instanciación: el objeto ya existe</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Aplicación en Next.js */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Aplicación en Next.js</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Next.js tiene comportamientos especiales con módulos debido a Fast Refresh en desarrollo. Veamos cómo
              implementar Singleton correctamente en este entorno.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ejemplo: Cliente API Singleton</CardTitle>
                  <CardDescription>lib/api-client.ts</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs md:text-sm">{`// lib/api-client.ts
class ApiClient {
  private static instance: ApiClient | null = null;
  private baseURL: string;
  private headers: Record<string, string>;
  
  private constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';
    this.headers = {
      'Content-Type': 'application/json',
    };
    console.log('🚀 ApiClient inicializado');
  }
  
  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }
  
  setAuthToken(token: string) {
    this.headers['Authorization'] = \`Bearer \${token}\`;
  }
  
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
      method: 'GET',
      headers: this.headers,
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    return response.json();
  }
  
  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    return response.json();
  }
}

// Exportar la instancia singleton
export const apiClient = ApiClient.getInstance();`}</pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uso en Componentes de Next.js</CardTitle>
                  <CardDescription>app/dashboard/page.tsx</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs md:text-sm">{`// app/dashboard/page.tsx
import { apiClient } from '@/lib/api-client';

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function DashboardPage() {
  // Usar el cliente singleton en Server Component
  const users = await apiClient.get<User[]>('/users');
  
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

// app/login/actions.ts - Server Action
'use server'
import { apiClient } from '@/lib/api-client';
import { cookies } from 'next/headers';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  try {
    const response = await apiClient.post('/auth/login', { 
      email, 
      password 
    });
    
    // El token se mantiene en la misma instancia singleton
    apiClient.setAuthToken(response.token);
    
    // Guardar token en cookie
    (await cookies()).set('auth-token', response.token);
    
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Login failed' };
  }
}`}</pre>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-500/50 bg-amber-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    ⚠️ Consideración Importante en Next.js
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="leading-relaxed">
                    En desarrollo, el <strong>Fast Refresh</strong> puede reiniciar módulos, potencialmente creando
                    múltiples instancias. Para casos críticos:
                  </p>
                  <pre className="text-xs bg-code-bg text-code-text p-3 rounded">{`// Para preservar estado entre hot-reloads
declare global {
  var apiClientInstance: ApiClient | undefined;
}

static getInstance(): ApiClient {
  if (process.env.NODE_ENV === 'development') {
    if (!global.apiClientInstance) {
      global.apiClientInstance = new ApiClient();
    }
    return global.apiClientInstance;
  }
  
  if (!ApiClient.instance) {
    ApiClient.instance = new ApiClient();
  }
  return ApiClient.instance;
}`}</pre>
                  <p className="text-muted-foreground">
                    Esto asegura que la instancia persista durante hot-reloads en desarrollo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Casos de Uso */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Casos de Uso Comunes</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ Cuándo usar Singleton</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                    <li>Configuración global de la aplicación</li>
                    <li>Sistema de logging/auditoría</li>
                    <li>Gestión de caché compartida</li>
                    <li>Pool de conexiones a DB</li>
                    <li>Gestión de estado global (alternativa a Context)</li>
                    <li>Cliente API con autenticación</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ Cuándo NO usar Singleton</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                    <li>Necesitas múltiples instancias configurables</li>
                    <li>El estado debe ser independiente por usuario</li>
                    <li>Requieres paralelismo/concurrencia real</li>
                    <li>Dificulta testing (considera inyección de dependencias)</li>
                    <li>Puede lograrse con módulos ES6 simples</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Resumen */}
          <Card className="bg-primary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">📚 Resumen del Patrón Singleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold mb-1">🎯 Propósito</p>
                <p className="text-sm text-muted-foreground">
                  Garantizar una única instancia de una clase con acceso global
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">⚙️ Implementación</p>
                <p className="text-sm text-muted-foreground">
                  Constructor privado + variable estática + método getInstance()
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">✨ Cuándo usar</p>
                <p className="text-sm text-muted-foreground">Configuración, logging, caché, conexiones compartidas</p>
              </div>
              <div>
                <p className="font-semibold mb-1">⚠️ Cuidado con</p>
                <p className="text-sm text-muted-foreground">
                  Testing complejo, acoplamiento global, problemas de concurrencia
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navegación */}
          <div className="flex justify-between items-center pt-8 border-t">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Link>
            </Button>
            <Button asChild>
              <Link href="/patrones/factory">
                Siguiente: Factory
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
