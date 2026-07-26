# RƎVELA Architecture

## Purpose

RƎVELA is structured as one continuous creative laboratory. The initial screen, method navigation, workspace, inspector and footer are part of the same shell.

The architecture follows `docs/FOUNDATION.md` and `docs/DOMAIN.md`: identity precedes communication, specialists analyze, the Creative Director decides, and AI providers stay outside the core method.

## Runtime Entry

`app/page.tsx` renders the permanent `AppShell`.

`AppShell` composes:

- `Header`
- `Sidebar`
- `Workspace`
- `Inspector`
- `Footer`

The shell does not disappear between scenes. The active scene changes inside the workspace.

## Scene Flow

Home

↓

Projects

↓

RƎVELAR

↓

Laboratorio

↓

Mesa de Luz

↓

Director Creativo

↓

Especialistas

↓

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

## Boundaries

- `app/core/` defines application orchestration contracts for the UI layer.
- `app/stores/` owns client state.
- `app/components/` owns reusable interface components.
- `app/features/` owns scene-level composition.
- Existing root-level `core/`, `context/`, `director/`, `knowledge/`, `decision/` and `laboratory/` remain untouched.

## Motion

Framer Motion is used only inside the workspace scene transition. Motion is short and structural, intended to communicate continuity between chapters.
