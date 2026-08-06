import type { Clarity } from "../clarity/Clarity";
import type { CreativeDNA } from "../creative-dna/CreativeDNA";
import type { Evidence } from "../evidence";
import type { Pattern } from "../patterns/Pattern";
import type { Revelation } from "../revelation/Revelation";

/**
 * Estado actual del proceso creativo.
 */
export type CreativeStage =
  | "research"
  | "patterns"
  | "clarity"
  | "creative-dna"
  | "revelation"
  | "production";

/**
 * Contexto completo del proyecto.
 */
export interface CreativeContext {
  evidences: Evidence[];

  patterns: Pattern[];

  clarity?: Clarity;

  creativeDNA?: CreativeDNA;

  revelation?: Revelation;
}

/**
 * Decisión tomada por el Director Creativo.
 */
export interface CreativeDecision {
  stage: CreativeStage;

  reason: string;

  action:
    | "research"
    | "generate-patterns"
    | "generate-clarity"
    | "generate-dna"
    | "generate-revelation"
    | "finish";
}

/**
 * Agente principal de RƎVELA.
 *
 * No genera contenido.
 *
 * Decide cuál es el siguiente paso del método.
 */
export class CreativeDirectorAgent {
  decide(
    context: CreativeContext
  ): CreativeDecision {
    if (context.evidences.length < 10) {
      return {
        stage: "research",

        action: "research",

        reason:
          "No existen suficientes evidencias para comenzar el análisis.",
      };
    }

    if (context.patterns.length === 0) {
      return {
        stage: "patterns",

        action: "generate-patterns",

        reason:
          "Ya existen suficientes evidencias para detectar patrones.",
      };
    }

    if (!context.clarity) {
      return {
        stage: "clarity",

        action: "generate-clarity",

        reason:
          "Los patrones necesitan sintetizarse en una Clarity.",
      };
    }

    if (!context.creativeDNA) {
      return {
        stage: "creative-dna",

        action: "generate-dna",

        reason:
          "La Clarity ya permite construir el CreativeDNA.",
      };
    }

    if (!context.revelation) {
      return {
        stage: "revelation",

        action: "generate-revelation",

        reason:
          "El CreativeDNA ya puede convertirse en una RƎVELACIÓN.",
      };
    }

    return {
      stage: "production",

      action: "finish",

      reason:
        "El proceso creativo está completo y listo para producción.",
    };
  }
}