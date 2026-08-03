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

    laboratory: "identity",

    image: "",

    question: "",

    answer:
      reference.description ??
      reference.title,

    keywords: reference.tags,

    confidence: 0,
  };
}