import type { Pattern } from "../patterns/Pattern";

/**
 * CLARITY
 *
 * La claridad representa la comprensión obtenida tras analizar
 * los patrones detectados durante la investigación.
 *
 * Es el puente entre los patrones y el ADN creativo.
 */
export interface Clarity {
  /** Identificador */
  id: string;

  /** Proyecto */
  projectId: string;

  /** Patrones analizados */
  patterns: Pattern[];

  /** Qué hemos comprendido */
  summary: string;

  /** Idea central */
  coreInsight: string;

  /** Qué debemos conservar */
  strengths: string[];

  /** Qué debemos evitar */
  weaknesses: string[];

  /** Contradicciones detectadas */
  conflicts: string[];

  /** Oportunidades detectadas */
  opportunities: string[];

  /** Hipótesis principales */
  hypotheses: string[];

  /** Preguntas todavía abiertas */
  openQuestions: string[];

  /** Recomendaciones antes de generar el ADN */
  recommendations: string[];

  /** Nivel de confianza */
  confidence: number;

  /** Auditoría */
  createdAt: Date;

  updatedAt: Date;
}