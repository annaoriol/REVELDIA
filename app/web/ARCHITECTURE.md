# REVELDIA · Arquitectura

Este documento define la arquitectura del proyecto y sirve como referencia para todas las decisiones de desarrollo.

Su objetivo es mantener un código claro, coherente y fácil de evolucionar.

---

# Principios

- Cada carpeta tiene una única responsabilidad.
- Cada archivo tiene una única responsabilidad.
- Cada función hace una única cosa.
- Cada clase tiene un único propósito.
- La complejidad surge de la colaboración entre piezas simples.
- La interfaz muestra.
- El dominio decide.
- El conocimiento evoluciona.

---

# Estructura del proyecto

## app

Responsabilidad:

Gestionar el enrutado de la aplicación y la composición de páginas.

---

## components

Responsabilidad:

Construir la interfaz de usuario.

Los componentes presentan información y capturan interacción.

No contienen reglas de negocio.

---

## context

Responsabilidad:

Compartir estado entre componentes cuando sea necesario.

---

## core

Responsabilidad:

Contener el modelo del dominio y la lógica principal del sistema.

Aquí viven las entidades y los motores que hacen funcionar RƎVELA.

---

## director

Responsabilidad:

Coordinar la inteligencia del laboratorio.

Decide qué especialistas participan, cuándo intervienen y con qué contexto.

---

## knowledge

Responsabilidad:

Organizar el conocimiento generado durante el trabajo.

Gestiona:

- Revelaciones
- Evidencias
- Relaciones
- Patrones
- Contexto

---

## laboratory

Responsabilidad:

Representar el estado del laboratorio.

Gestiona:

- Sesiones
- Estado
- Objetos del laboratorio
- Flujo de trabajo

---

## decision

Responsabilidad:

Registrar las decisiones que modifican el conocimiento o la evolución del laboratorio.

---

## data

Responsabilidad:

Contener datos iniciales, catálogos y recursos.

No contiene lógica.

---

## storage

Responsabilidad:

Persistir y recuperar el estado del laboratorio.

---

## styles

Responsabilidad:

Definir el sistema visual compartido.

---

## types

Responsabilidad:

Definir los tipos compartidos del proyecto.

---

## useCases

Responsabilidad:

Implementar los flujos completos del usuario.

Cada caso de uso representa una experiencia dentro de RƎVELA.

---

# Entidades del dominio

## Laboratory

Representa un laboratorio de trabajo.

Es el espacio donde evoluciona el conocimiento.

---

## Project

Representa un proyecto desarrollado dentro de un laboratorio.

Contiene su estado, sesiones y conocimiento asociado.

---

## Dossier

Representa la identidad consolidada del proyecto.

Su contenido evoluciona con el laboratorio.

---

## Revelation

Representa un descubrimiento respaldado por evidencias.

Conecta conocimiento, contexto y significado.

---

## Session

Representa una sesión de trabajo.

Permite reconstruir la evolución del laboratorio.

---

## Director

Coordina la inteligencia del sistema.

Analiza.

Pregunta.

Relaciona.

Propone.

Prioriza.

---

# Reglas de desarrollo

Antes de crear un archivo nuevo responderemos siempre estas preguntas:

1. ¿Qué responsabilidad tiene?
2. ¿Ya existe un lugar donde esa responsabilidad está cubierta?
3. ¿Este archivo hace una sola cosa?
4. ¿Su nombre describe claramente su función?

Si alguna respuesta genera dudas, primero revisamos la arquitectura y después escribimos código.

---

# Método de trabajo

Cada sesión sigue siempre el mismo orden:

1. Definir.
2. Implementar.
3. Probar.
4. Confirmar.
5. Commit.
6. Continuar.

Nunca avanzamos al siguiente paso mientras el anterior no esté completamente terminado.

---

# Objetivo

Construir un laboratorio creativo cuya arquitectura permanezca clara, escalable y mantenible a medida que evoluciona el producto.