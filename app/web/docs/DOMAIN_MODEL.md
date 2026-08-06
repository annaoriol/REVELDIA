# RƎVELA

# Domain Model

> Este documento define el modelo conceptual del dominio de RƎVELA.
>
> No describe implementación.
> No describe interfaz.
>
> Describe únicamente el conocimiento que existe dentro del laboratorio.

---

# Principios

El dominio representa conocimiento.

Nunca representa pantallas.

Nunca representa tecnología.

Nunca representa modelos de IA concretos.

El dominio debe permanecer estable aunque cambie la interfaz, el proveedor de IA o la infraestructura.

---

# Entidades principales

## Project

El Project representa el proyecto creativo completo.

Es el agregado principal del sistema.

Contiene toda la información generada durante el proceso de revelado y positivado.

El Project nunca contiene lógica de interfaz.

---

## Mission

La Mission describe el reto creativo.

Toda sesión comienza con una misión.

La misión puede evolucionar durante el proceso si el Director Creativo detecta que todavía no existe suficiente claridad.

La misión responde a preguntas como:

- ¿Qué queremos descubrir?
- ¿Qué queremos comunicar?
- ¿Qué transformación buscamos?

---

## Creative Session

Representa el estado de trabajo del Director Creativo.

No pertenece al usuario.

Pertenece al laboratorio.

La sesión contiene:

- objetivo
- plan
- memoria
- preguntas
- pensamientos
- evidencias
- patrones
- claridad
- Creative DNA
- RƎVELACIÓN

La sesión desaparece cuando termina el proceso.

El conocimiento consolidado pasa al Project.

---

## Reference

Una Reference representa una fuente.

Puede ser:

- imagen
- vídeo
- libro
- web
- documento
- audio
- conversación
- objeto físico
- marca
- artista
- película
- cualquier fuente externa

Una referencia todavía no ha sido interpretada.

Solo existe como origen.

---

## Evidence

Una Evidence representa conocimiento útil para el proyecto.

Puede proceder de:

- una Reference
- investigación realizada por IA
- conversación con el usuario
- documentación
- archivos
- observaciones

La evidencia ya ha sido interpretada.

Una evidencia puede:

- ampliarse
- relacionarse
- clasificarse
- descartarse
- pasar a la Mesa de Luz

---

## Light Table

La Mesa de Luz representa el espacio de análisis.

No genera conocimiento.

Organiza conocimiento.

Permite:

- comparar
- ordenar
- agrupar
- relacionar
- observar conexiones

Las evidencias permanecen aquí mientras el Director Creativo construye criterio.

---

## Pattern

Un Pattern representa una relación significativa.

Nunca es una opinión.

Siempre está respaldado por varias evidencias.

Los patrones son la base del razonamiento.

---

## Clarity

La Clarity representa el conocimiento consolidado.

Resume lo aprendido.

Reduce incertidumbre.

Permite comenzar la construcción del Creative DNA.

---

## Creative DNA

Representa la identidad profunda del proyecto.

No describe piezas.

No describe campañas.

Describe principios.

Es estable.

Sirve como fuente para todas las decisiones posteriores.

---

## Revelation

La RƎVELACIÓN representa el descubrimiento central del proyecto.

Es el final del revelado.

No es una propuesta.

No es una campaña.

Es la comprensión de la esencia del proyecto.

---

# Flujo del conocimiento

Reference

↓

Evidence

↓

Light Table

↓

Pattern

↓

Clarity

↓

Creative DNA

↓

RƎVELACIÓN

---

# Agregados

## Project

Contiene:

- Mission
- References
- Evidence
- Light Table
- Creative Session
- Creative DNA
- RƎVELACIÓN

---

# Objetivo del dominio

El dominio existe para representar conocimiento.

Nunca para representar pantallas.

Nunca para representar implementación.

Nunca para representar proveedores tecnológicos.