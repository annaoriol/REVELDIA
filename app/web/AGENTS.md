# RƎVELA · AGENTS

Versión: 2.0

Estado: Oficial

---

# Propósito

Este documento define cómo deben trabajar todos los agentes de IA dentro del proyecto RƎVELA.

No describe únicamente cómo escribir código.

Describe cómo pensar, cómo tomar decisiones y cómo mantener la coherencia del laboratorio.

Toda implementación debe respetar este documento.

---

# Filosofía

RƎVELA no es una aplicación.

Es un laboratorio creativo.

Cada módulo existe para ayudar al usuario a descubrir conocimiento, transformarlo en estrategia y convertirlo en comunicación.

La tecnología está al servicio del pensamiento.

Nunca al revés.

---

# Principios

## Pensar antes de construir

Antes de escribir código se comprende el problema.

Antes de crear componentes se entiende la experiencia.

Antes de optimizar se valida el comportamiento.

---

## Arquitectura primero

Todo cambio debe respetar la arquitectura definida en ARCHITECTURE.md.

No crear estructuras paralelas.

No duplicar responsabilidades.

No mover archivos sin necesidad.

---

## Un único sistema

El laboratorio funciona como un único organismo.

No existen herramientas independientes.

Todos los módulos colaboran.

---

## Modularidad

Cada módulo tiene una única responsabilidad.

Debe poder evolucionar sin afectar al resto.

---

## Coherencia

Toda decisión debe ser coherente con:

la identidad

la arquitectura

la experiencia

la dirección editorial

---

# Cómo trabaja un agente

Siempre sigue este orden.

## 1 Comprender

Leer la documentación relacionada.

Analizar el código existente.

Detectar dependencias.

Comprender el contexto.

Nunca modificar antes de comprender.

---

## 2 Planificar

Explicar:

qué archivos cambiará

por qué

qué dependencias existen

qué riesgos detecta

---

## 3 Implementar

Cambios pequeños.

Código limpio.

Tipos completos.

Sin duplicaciones.

---

## 4 Revisar

Buscar:

errores

duplicados

tipos

imports

componentes repetidos

código muerto

legacy innecesario

---

## 5 Validar

El proyecto debe compilar.

No introducir errores TypeScript.

No romper funcionalidades existentes.

---

# Prioridades

Siempre priorizar:

1 Arquitectura

2 Legibilidad

3 Mantenibilidad

4 Rendimiento

5 Optimización

Nunca optimizar antes de tener una arquitectura sólida.

---

# Legacy

La carpeta legacy existe únicamente como referencia.

Nunca ampliar legacy.

Nunca crear nuevos módulos dentro de legacy.

Siempre construir sobre la nueva arquitectura.

Solo utilizar legacy cuando sea imprescindible para mantener compatibilidad.

---

# Componentes

Cada componente debe tener una única responsabilidad.

Debe ser reutilizable.

Debe ser pequeño.

Debe ser fácilmente testeable.

---

# TypeScript

No utilizar any.

Preferir tipos explícitos.

Preferir interfaces.

Eliminar tipos muertos.

Mantener nombres consistentes.

---

# React

Preferir componentes funcionales.

Evitar lógica compleja dentro del render.

Extraer hooks cuando sea necesario.

Mantener componentes pequeños.

---

# Estado

Centralizar el estado.

Evitar estados duplicados.

No almacenar información derivable.

---

# Dependencias

Antes de añadir una librería comprobar:

¿Ya existe una solución?

¿Es realmente necesaria?

¿Aumenta la complejidad?

---

# Documentación

Todo módulo importante debe estar documentado.

Toda decisión arquitectónica debe quedar registrada.

---

# Calidad

Antes de finalizar revisar:

Compilación

Lint

TypeScript

Accesibilidad

Imports

Dependencias

Errores

---

# Qué nunca debe hacer un agente

No modificar grandes áreas del proyecto sin explicación.

No borrar código por intuición.

No renombrar carpetas sin justificarlo.

No cambiar arquitectura existente sin aprobación.

No generar código duplicado.

No crear soluciones temporales permanentes.

No romper contratos públicos.

---

# Forma de responder

Cuando un agente recibe una tarea debe responder siempre:

## Comprensión

Qué ha entendido.

## Plan

Qué piensa modificar.

## Riesgos

Qué puede afectar.

## Implementación

Qué archivos cambiará.

## Validación

Cómo comprobará que funciona.

Solo después comienza a escribir código.

---

# Objetivo final

Cada cambio debe acercar el laboratorio a una plataforma capaz de transformar conocimiento en identidad, estrategia, creatividad, producción y comunicación sin perder coherencia.

Toda decisión debe hacer RƎVELA más clara, más sólida y más fácil de evolucionar.