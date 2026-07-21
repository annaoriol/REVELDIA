import { ObservationContext } from "@/legacy/types/ObservationContext";

export function buildObservationContext(
  answer: string
): ObservationContext {

  const cleaned = answer.trim();

  const words = cleaned
    .split(/\s+/)
    .filter(Boolean);

  return {

    observation: cleaned,

    answer: cleaned,

    words,

    length: words.length,

    hasAnswer: words.length > 0,

  };

}
