# RƎVELA · Domain Migration

## Objetivo

Migrar progresivamente del modelo Reference al modelo Evidence sin romper la arquitectura existente.

---

# Estado actual

El proyecto utiliza actualmente la entidad `Reference` como núcleo del flujo del Laboratorio.

La auditoría del dominio ha mostrado que `Reference` está integrada en:

- Domain
- Application
- Stores
- LightTable
- Observation
- RevealPipeline
- UI

Por tanto, no debe eliminarse directamente.

---

# Nuevo modelo

El nuevo Laboratorio utilizará `Evidence` como entidad principal.

Una Evidence representa una evidencia interpretada y contextualizada para un proyecto.

Las evidencias podrán provenir de:

- Research Engine
- Usuario
- Importaciones futuras

---

# Estrategia

## Fase 1

Congelar `Reference`.

No añadir nuevas funcionalidades.

---

## Fase 2

Crear y enriquecer `Evidence` como modelo oficial.

Todo el código nuevo utilizará `Evidence`.

---

## Fase 3

Migrar progresivamente:

- Inspiration
- Light Table
- Observation
- Creative Director
- Revelation

---

## Fase 4

Eliminar `Reference` cuando ya no existan dependencias.

---

# Principios

- No romper el proyecto.
- Mantener compatibilidad durante la transición.
- Todo desarrollo nuevo utilizará Evidence.
- Reference permanecerá únicamente como capa legacy.

---

Estado:

🟡 En migración