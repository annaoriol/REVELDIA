# L2.1 · Referencias

## Estado

Pendiente

---

## Objetivo

Incorporar el sistema de Referencias como parte del ADN del proyecto.

Las referencias constituyen las evidencias que alimentan el proceso de revelación.

No son únicamente enlaces.

Pueden representar cualquier elemento que inspire, justifique o documente una observación.

---

## Requisitos

Toda referencia debe almacenarse en:

project.dna.references

Las observaciones podrán relacionarse con ellas mediante:

evidenceIds

No modificar la arquitectura existente.

No introducir persistencia.

No modificar navegación.

No eliminar código legacy.

---

## Modelo

Cada referencia deberá representar al menos:

- id
- tipo
- título
- descripción
- origen
- url (opcional)
- etiquetas
- fecha de creación

El modelo deberá poder ampliarse en el futuro sin romper compatibilidad.

---

## Objetivo funcional

El usuario podrá registrar una referencia desde el Laboratorio.

Cada referencia quedará disponible para relacionarse posteriormente con observaciones, hipótesis y revelaciones.

---

## Criterios de aceptación

- El dominio incorpora Reference.
- Existe una acción registerReference().
- Las referencias se almacenan en project.dna.references.
- TypeScript compila.
- Lint pasa correctamente.

---

## No implementar todavía

- subida de imágenes
- scraping
- IA
- análisis automático
- relaciones inteligentes

Todo eso pertenece a fases posteriores.