# RƎVELA · CODEX SYSTEM

Versión: 1.0

Estado: Activo

---

# Propósito

Este documento define las reglas permanentes que deben seguir todas las personas y todas las inteligencias artificiales que desarrollen RƎVELA.

Es la constitución técnica del proyecto.

Si cualquier decisión contradice este documento, prevalece este documento.

---

# Visión

RƎVELA es un laboratorio creativo para descubrir conocimiento, construir criterio y transformar ideas en sistemas de comunicación.

No es una colección de pantallas.

No es un conjunto de herramientas independientes.

Es un único sistema compuesto por varios dominios que evolucionan juntos.

---

# Objetivo de la arquitectura

Toda decisión técnica debe aumentar:

- claridad
- coherencia
- reutilización
- mantenibilidad
- escalabilidad
- legibilidad

Nunca aumentar complejidad sin aportar valor.

---

# Principios

## Una responsabilidad

Cada carpeta tiene una única responsabilidad.

Cada archivo tiene una única responsabilidad.

Cada función tiene una única responsabilidad.

Cada componente tiene una única responsabilidad.

---

## Reutilización

Antes de crear cualquier elemento nuevo comprobar:

- ¿ya existe?
- ¿puede reutilizarse?
- ¿puede ampliarse?

Duplicar código está prohibido.

---

## Arquitectura

La arquitectura dirige el desarrollo.

Nunca al contrario.

---

## Dominio

El dominio representa el conocimiento.

El dominio nunca depende de React.

El dominio nunca depende de la interfaz.

---

## UI

La interfaz únicamente comunica.

Nunca toma decisiones de negocio.

Nunca modifica conocimiento directamente.

---

## Estado

Todo estado importante pertenece al dominio.

La interfaz solamente lo representa.

---

# Reglas obligatorias

## Regla 1

No utilizar any.

Todo debe estar tipado.

---

## Regla 2

No crear carpetas nuevas sin justificarlo arquitectónicamente.

---

## Regla 3

No crear tipos duplicados.

Buscar primero en:

types/

---

## Regla 4

Antes de crear un componente comprobar si ya existe otro reutilizable.

---

## Regla 5

Los nombres describen responsabilidades.

Nunca tecnologías.

Ejemplo correcto:

ObservationEngine

Ejemplo incorrecto:

ObservationHelper2

---

## Regla 6

Separar siempre:

UI

Dominio

Persistencia

Casos de uso

Estado

---

## Regla 7

Los casos de uso viven exclusivamente en:

useCases/

---

## Regla 8

Las entidades viven en:

core/

---

## Regla 9

Los tipos compartidos viven en:

types/

---

## Regla 10

Todo componente debe poder eliminarse sin romper el resto del sistema.

---

# Organización del repositorio

app/

Enrutado.

---

components/

Interfaz.

Nunca reglas de negocio.

---

context/

Contexto React cuando sea realmente necesario.

---

core/

Motores del sistema.

Entidades.

Reglas.

Procesos.

---

director/

Director Creativo.

Coordina especialistas.

Nunca genera interfaz.

---

knowledge/

Conocimiento del laboratorio.

---

decision/

Registro de decisiones.

---

laboratory/

Estado del laboratorio.

---

storage/

Persistencia.

---

services/

Integraciones.

Servicios externos.

---

stores/

Estado de aplicación.

---

types/

Modelos compartidos.

---

styles/

Sistema visual.

---

utils/

Funciones puras.

---

data/

Datos estáticos.

---

useCases/

Flujos completos.

---

docs/

Documentación.

---

# Legacy

La carpeta:

legacy/

es únicamente una referencia histórica.

Todo desarrollo nuevo debe producirse fuera de legacy.

Legacy únicamente podrá modificarse cuando sea imprescindible para una migración.

---

# Componentes

Los componentes React:

- muestran información
- capturan interacción
- delegan decisiones

Nunca contienen reglas de negocio complejas.

---

# TypeScript

Siempre strict.

No usar:

any

unknown sin justificar

cast innecesarios

---

# React

Preferir componentes funcionales.

Hooks pequeños.

Responsabilidad única.

---

# Estado

Cada modificación importante debe poder reconstruirse posteriormente.

El estado representa conocimiento.

No únicamente interfaz.

---

# Persistencia

Toda persistencia debe pasar por storage.

Nunca acceder directamente desde componentes.

---

# Errores

Los errores forman parte del dominio.

No ocultarlos.

No ignorarlos.

Registrarlos.

---

# Calidad

Antes de hacer commit comprobar:

Compila.

No rompe arquitectura.

No duplica código.

No crea dependencias circulares.

No introduce deuda técnica innecesaria.

---

# Definition of Done

Una tarea termina únicamente cuando:

✓ Compila

✓ Está tipada

✓ Respeta la arquitectura

✓ Respeta este documento

✓ No rompe funcionalidades

✓ Tiene nombres claros

✓ Está documentada cuando procede

---

# Método de trabajo

Siempre:

Analizar.

Diseñar.

Implementar.

Probar.

Documentar.

Commit.

Nunca cambiar el orden.

---

# Objetivo final

Construir un laboratorio creativo capaz de evolucionar durante muchos años manteniendo una arquitectura clara, estable y comprensible.