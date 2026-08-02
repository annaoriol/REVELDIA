# RƎVELA · ENGINEERING HANDBOOK

Versión: 1.0

---

# Objetivo

Este documento define cómo se desarrolla el software de RƎVELA.

No describe funcionalidades.

Describe la forma correcta de construirlas.

La prioridad siempre es mantener una arquitectura clara y una evolución sostenible.

---

# Principios de Ingeniería

## Simplicidad

La solución más simple que respete la arquitectura es la mejor solución.

La simplicidad no consiste en escribir menos código.

Consiste en reducir la complejidad del sistema.

---

## Cohesión

Cada módulo agrupa elementos relacionados.

No mezclar responsabilidades.

---

## Bajo acoplamiento

Los módulos deben conocerse lo mínimo posible.

Las dependencias deben ser explícitas.

Nunca ocultas.

---

## Escalabilidad

Toda decisión debe permitir añadir nuevas funcionalidades sin modificar las existentes.

---

## Legibilidad

El código se lee muchas más veces de las que se escribe.

Optimizar siempre para facilitar la lectura.

---

# Arquitectura en Capas

La aplicación se divide en capas.

## Presentación

Responsabilidad:

Mostrar información.

Capturar interacción.

Nunca contiene reglas de negocio.

Incluye:

components/

app/

---

## Casos de Uso

Responsabilidad:

Coordinar acciones completas.

Ejemplo:

Crear proyecto.

Registrar observación.

Construir revelación.

Actualizar dossier.

---

## Dominio

Responsabilidad:

Representar conocimiento.

Incluye:

core/

knowledge/

director/

decision/

laboratory/

---

## Persistencia

Responsabilidad:

Guardar.

Recuperar.

Versionar.

Incluye:

storage/

---

## Servicios

Responsabilidad:

Integraciones externas.

LLMs.

APIs.

Exportación.

Servicios IA.

---

# Flujo recomendado

Siempre:

Usuario

↓

Interfaz

↓

Caso de uso

↓

Dominio

↓

Persistencia

↓

Respuesta

Nunca:

Interfaz

↓

Storage

o

Interfaz

↓

Knowledge

---

# Reglas de React

Cada componente:

Una responsabilidad.

Props tipadas.

Sin lógica de negocio.

Hooks pequeños.

---

# Reglas TypeScript

Strict.

Interfaces claras.

Tipos reutilizables.

Nunca:

any

Nunca:

duplicar modelos.

---

# Reglas de Imports

Orden:

1. React
2. Librerías externas
3. Alias @/
4. Imports relativos
5. Tipos

Evitar dependencias circulares.

---

# Organización de Componentes

Cada componente tendrá:

Componente.tsx

index.ts

opcional:

styles.ts

types.ts

hooks.ts

tests.ts

Nunca componentes gigantes.

---

# Hooks

Un hook encapsula comportamiento.

Nunca representación visual.

Ejemplo:

useProject()

useLaboratory()

useObservation()

---

# Stores

Cada store representa un ámbito.

Ejemplos:

ProjectStore

SessionStore

NavigationStore

PreferencesStore

Nunca un store gigantesco con todo.

---

# Servicios

Los servicios conectan con el exterior.

Nunca contienen conocimiento del dominio.

Ejemplos:

OpenAI

Anthropic

Google

Storage

Filesystem

Export

---

# Logging

Toda operación importante debe poder registrarse.

Especialmente:

Creación de proyectos.

Observaciones.

Revelaciones.

Exportaciones.

Errores.

---

# Gestión de Errores

Los errores nunca se silencian.

Registrar.

Propagar cuando corresponda.

Mostrar mensajes comprensibles.

---

# Testing

Prioridad:

1. Casos de uso.
2. Motores.
3. Dominio.
4. Componentes críticos.

No es necesario probar componentes puramente visuales si no contienen lógica.

---

# Rendimiento

Evitar renders innecesarios.

Evitar cálculos repetidos.

Memoizar cuando aporte valor.

No optimizar prematuramente.

---

# Seguridad

Nunca almacenar claves en el código.

Usar variables de entorno.

Validar entradas.

Escapar contenido cuando corresponda.

---

# Git

Cada commit debe representar una unidad lógica.

Ejemplos:

feat: observation engine

refactor: project state

docs: update engineering handbook

Evitar commits mezclando múltiples objetivos.

---

# Revisión de Código

Antes de aceptar un cambio comprobar:

✓ Arquitectura respetada.

✓ Responsabilidad única.

✓ Tipado correcto.

✓ Sin duplicación.

✓ Nombres claros.

✓ Sin deuda técnica innecesaria.

---

# Definition of Ready

Antes de implementar una funcionalidad debe existir:

Objetivo claro.

Responsabilidad definida.

Ubicación correcta.

Tipos identificados.

Caso de uso definido.

---

# Definition of Done

Una funcionalidad termina cuando:

Compila.

Respeta CODEX_SYSTEM.

Respeta ARCHITECTURE.

Está documentada.

Puede mantenerse.

Puede evolucionar.

---

# Filosofía Final

RƎVELA no se desarrolla acumulando código.

Se desarrolla ampliando un sistema coherente.

Cada nueva pieza debe hacer que el conjunto sea más fuerte, más claro y más fácil de mantener.