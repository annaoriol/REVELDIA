import type { Evidence } from "@/src/domain/evidence";
import type { Reference } from "@/app/features/references/data";

export function referenceToEvidence(
  reference: Reference
): Evidence {
  return {
    // Identidad
    id: reference.id,

    // Contenido
    title: reference.title,
    summary: reference.description,
    description: reference.description,

    // Clasificación
    type: "image",
    category: "visual",

    // Procedencia
    origin: "research",
    source: "Legacy References",

    // Recursos
    url: undefined,
    thumbnail: reference.image,

    // Investigación
    discoveredBy: "ReferenceAdapter",
    rationale:
      "Migrado automáticamente desde el sistema legacy de referencias.",

    // Organización
    tags: [
      reference.category,
      ...reference.keywords,
    ],

    confidence: 1,

    status: "discovered",

    selected: false,

    notes: undefined,

    metadata: {
      legacyCategory: reference.category,
      orientation: reference.orientation,
      featured: reference.featured ?? false,
    },

    // Auditoría
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}