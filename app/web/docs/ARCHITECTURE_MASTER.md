# RƎVELA

## Arquitectura Oficial

> Este documento define la arquitectura oficial de RƎVELA.

Toda decisión de diseño, desarrollo, dominio, UX o implementación deberá respetar este documento.

Si existe una contradicción entre este documento y cualquier conversación, prototipo o código anterior, prevalecerá este documento.
# 1. Filosofía

RƎVELA no es una herramienta de generación de contenido.

RƎVELA es un laboratorio creativo guiado por inteligencia artificial cuyo objetivo es ayudar a una persona a descubrir la esencia de un proyecto antes de crearlo.

El usuario nunca conversa directamente con múltiples agentes.

Existe un único interlocutor permanente:

**El Director Creativo.**

El Director Creativo piensa, investiga, propone, cuestiona, coordina especialistas y acompaña al usuario durante todo el proceso creativo.

La inteligencia artificial nunca sustituye al usuario.

La IA amplifica su capacidad de pensar, decidir y crear.

Toda la experiencia gira alrededor de la metáfora del laboratorio fotográfico:

- Revelado
- Mesa de Luz
- Ampliadora
- Positivado
# 2. Flujo del método

El método oficial de RƎVELA se divide en dos grandes fases:
# 3. El Director Creativo

El Director Creativo es el único interlocutor entre el usuario y el sistema.

No es una pantalla.

No es una fase del método.

No es un chatbot.

Es un agente de inteligencia artificial que acompaña permanentemente al usuario durante todo el proceso creativo.

Sus responsabilidades son:

- Comprender la misión.
- Investigar.
- Formular preguntas cuando sean necesarias.
- Buscar evidencias relevantes.
- Coordinar especialistas.
- Detectar patrones.
- Construir criterio.
- Generar la RƎVELACIÓN.
- Guiar el Positivado.

El usuario nunca interactúa directamente con los especialistas.

Toda la inteligencia del sistema se canaliza a través del Director Creativo.

# 4. Arquitectura funcional

El laboratorio se organiza alrededor de un flujo continuo.

```text
Usuario
      │
      ▼
Director Creativo
      │
      ├──────────────► Especialistas IA
      │                     │
      │                     ▼
      │               Análisis especializados
      │
      ▼
Evidencias
      │
      ▼
Ampliadora
      │
      ▼
Mesa de Luz
      │
      ▼
Patrones
      │
      ▼
Clarity
      │
      ▼
Creative DNA
      │
      ▼
RƎVELACIÓN
      │
      ▼
Positivado
      │
      ▼
Sistema Creativo
      │
      ▼
Creación
      │
      ▼
Producción
      │
      ▼
Adaptación
      │
      ▼
Exportación
```

Cada etapa produce conocimiento para la siguiente.

Ninguna etapa genera contenido sin haber consolidado la anterior.

El Director Creativo mantiene la continuidad durante todo el recorrido.

# 5. Modelo del dominio

El dominio de RƎVELA representa conocimiento, no interfaz.

Las entidades principales son:

## Project

Representa el proyecto creativo completo.

Contiene el estado del laboratorio, la memoria y el resultado del proceso.

---

## Creative Session

Representa la sesión activa del Director Creativo.

Mantiene el contexto de trabajo durante el revelado.

---

## Mission

Describe el reto creativo que el usuario quiere resolver.

Es el punto de partida de todo el proceso.

---

## Evidence

Una evidencia es cualquier información que puede aportar valor al proyecto.

Puede proceder de:

- referencias
- imágenes
- vídeos
- libros
- artículos
- conversaciones
- archivos
- investigación realizada por IA
- aportaciones del usuario

Las evidencias pueden examinarse mediante la Ampliadora y posteriormente incorporarse a la Mesa de Luz.

---

## Light Table

Es el espacio donde las evidencias se organizan, comparan y relacionan.

La Mesa de Luz no almacena conocimiento nuevo.

Organiza el conocimiento existente.

---

## Pattern

Representa una relación significativa entre varias evidencias.

Los patrones permiten construir criterio.

---

## Clarity

Resume el conocimiento consolidado obtenido tras analizar los patrones.

---

## Creative DNA

Representa la identidad profunda del proyecto.

Es la base del Sistema Creativo.

---

## Revelation

Es el resultado final del proceso de revelado.

Describe la esencia del proyecto antes de iniciar la producción.

# 6. Arquitectura del software

La implementación de RƎVELA sigue una arquitectura por capas.

```text
app/
│
├── UI
├── Escenas
├── Componentes
└── Estado

↓

src/application/

Casos de uso

↓

src/domain/

Modelo del dominio

↓

src/infrastructure/

Persistencia
IA
LLMs
Bases de datos
APIs
```

## Responsabilidades

### app/

Solo contiene interfaz y experiencia de usuario.

Nunca contiene reglas de negocio.

---

### src/application/

Coordina los casos de uso.

Orquesta el flujo del laboratorio.

No contiene conocimiento del dominio.

---

### src/domain/

Representa el conocimiento de RƎVELA.

Aquí viven:

- entidades
- value objects
- servicios de dominio
- motores de razonamiento
- reglas

Nunca depende de la interfaz.

---

### src/infrastructure/

Implementa los detalles técnicos.

Por ejemplo:

- OpenAI
- Anthropic
- Gemini
- almacenamiento
- bases de datos
- búsqueda
- embeddings
- APIs

# 7. Principios de evolución

Toda evolución de RƎVELA deberá respetar los siguientes principios.

## El método prevalece sobre la tecnología

Las decisiones de producto nacen del método RƎVELA.

La tecnología se adapta al método, nunca al contrario.

---

## Un único Director Creativo

El usuario siempre interactúa con un único Director Creativo.

Los especialistas trabajan de forma interna y nunca sustituyen esa relación.

---

## El conocimiento antes que la producción

El objetivo del laboratorio es construir comprensión.

La producción comienza únicamente cuando existe una RƎVELACIÓN consolidada.

---

## La interfaz refleja el método

La experiencia del usuario debe representar el proceso creativo.

No deben existir pantallas, pasos o elementos que no respondan a una fase del método.

---

## El dominio es independiente

El conocimiento de RƎVELA pertenece al dominio.

La interfaz, los modelos de IA y la infraestructura podrán cambiar sin modificar el método.

---

## Evolución incremental

Cada sprint debe dejar el sistema en un estado funcional.

Se priorizan cambios pequeños, verificables y compatibles con el resto de la arquitectura.

---

## Documento de referencia

Este documento constituye la referencia principal del proyecto.

Antes de introducir una nueva funcionalidad, modificar la arquitectura o incorporar una nueva tecnología, deberá comprobarse que la decisión es coherente con los principios aquí definidos.

## Fase I · RƎVELADO

El objetivo es descubrir la esencia del proyecto.

El recorrido es:

```text
Bienvenida

↓

Misión

↓

Director Creativo

↓

Evidencias

↓

Ampliadora

↓

Mesa de Luz

↓

Relaciones

↓

Patrones

↓

Clarity

↓

Creative DNA

↓

RƎVELACIÓN
```

La RƎVELACIÓN marca el final del proceso de descubrimiento.

---

## Fase II · POSITIVADO

El objetivo es transformar la revelación en un sistema creativo capaz de producir comunicación coherente.

El recorrido es:

```text
RƎVELACIÓN

↓

Positivado

↓

Sistema Creativo

↓

Creación

↓

Producción

↓

Adaptación

↓

Exportación
```