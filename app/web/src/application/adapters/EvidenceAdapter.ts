import type { Evidence } from "@/src/domain/evidence";
import type { Reference } from "@/app/features/references/data";

export function referenceToEvidence(
  reference: Reference
): Evidence {
  return {
    id: reference.id,

    title: reference.title,

    description: reference.description,

    type: "image",

    thumbnail: reference.image,

    tags: [
      reference.category,
      ...reference.keywords,
    ],

    metadata: {
      category: reference.category,
      orientation: reference.orientation,
      featured: reference.featured ?? false,
    },
  };
}