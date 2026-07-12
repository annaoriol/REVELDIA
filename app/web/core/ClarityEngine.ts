import { CouncilResult } from "@/types/CouncilResult";
import { Clarity } from "@/types/Clarity";

export function buildClarity(
  council: CouncilResult
): Clarity {

  function score(name: string): number {

    const result = council.results.find(
      (lab) =>
        lab.laboratory.toLowerCase() ===
        name.toLowerCase()
    );

    if (!result) return 0;

    return Math.round(result.confidence * 100);

  }

  return {

    identity: score("Identidad"),

    narrative: score("Narrativa"),

    visual: score("Visual"),

    strategy: score("Estrategia"),

  };

}