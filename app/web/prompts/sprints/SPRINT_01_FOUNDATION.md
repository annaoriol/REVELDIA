# SPRINT 01 · FOUNDATION

Versión: 1.0

Estado: Ready

---

# Objetivo

Construir la base técnica sobre la que evolucionará todo RƎVELA.

Este sprint no desarrolla funcionalidades del laboratorio.

Su objetivo es garantizar que toda la arquitectura pueda crecer durante años sin reorganizaciones importantes.

---

# Resultado esperado

Al finalizar este sprint deberá existir:

✓ Arquitectura limpia

✓ Tipado compartido

✓ AppShell funcional

✓ Navegación básica

✓ Estado global

✓ Tema visual

✓ Componentes base

✓ Persistencia preparada

✓ Proyecto compilando sin errores

---

# Contexto

RƎVELA ya dispone de una arquitectura definida.

Este sprint debe respetar completamente:

docs/engineering/01_CODEX_SYSTEM.md

docs/engineering/02_ENGINEERING.md

docs/design/03_DESIGN_SYSTEM.md

docs/implementation/04_IMPLEMENTATION.md

docs/roadmap/05_ROADMAP.md

No modificar esos documentos.

---

# Objetivos

## 1

Revisar completamente la estructura existente.

No duplicar carpetas.

No crear arquitecturas paralelas.

---

## 2

Detectar código legacy.

Documentarlo.

No ampliarlo.

---

## 3

Construir la base común.

---

# Entregables

## AppShell

Debe existir:

AppShell

Header

Sidebar

Workspace

Inspector

Todos independientes.

Todos reutilizables.

---

## Theme

Crear un ThemeProvider único.

Dark.

Light.

System.

---

## Layout

Crear layout estable.

Header

Sidebar

Workspace

Inspector

Responsive.

---

## Navegación

NavigationStore.

Estado activo.

Ruta.

Proyecto activo.

---

## Tipos

Revisar todos los modelos.

Eliminar duplicados.

Compartir únicamente desde:

types/

---

## Persistencia

Preparar Storage.

Sin lógica de negocio.

---

## Directorios

Revisar:

app/

components/

core/

director/

knowledge/

decision/

laboratory/

storage/

stores/

services/

styles/

types/

useCases/

Eliminar inconsistencias.

---

# Componentes

Construir únicamente:

AppShell

Header

Sidebar

Workspace

Inspector

Card

Panel

Button

Input

Textarea

Modal

Drawer

Badge

Spinner

Separator

---

# No construir todavía

Observation

Revelation

Council

Knowledge Engine

Creative Director

IA

Exportaciones

Timeline

Dossier

---

# Calidad

Todo debe estar:

Tipado.

Documentado.

Reutilizable.

---

# Checklist

Arquitectura validada.

Imports revisados.

Alias funcionando.

Tema funcionando.

Layout funcionando.

Estado funcionando.

Persistencia preparada.

Compila.

Lint correcto.

---

# Definition of Done

El sprint termina cuando:

La aplicación arranca.

No existen errores TypeScript.

No existen componentes duplicados.

La arquitectura coincide con ARCHITECTURE.md.

La interfaz ya representa correctamente el laboratorio vacío.

---

# Commit recomendado

feat: foundation architecture