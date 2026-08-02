import { Observation } from "@/src/domain/observation/Observation";
import { Reference } from "@/src/domain/references/Reference";

interface ObserveReferenceParams {
  reference: Reference;
}

export function observeReference({
  reference,
}: ObserveReferenceParams): Observation {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    createdAt: now,
    updatedAt: now,

    title: reference.title,

    description:
      reference.description ??
      "Observación pendiente.",

    references: [reference.id],

    tags: reference.tags,
  };
}