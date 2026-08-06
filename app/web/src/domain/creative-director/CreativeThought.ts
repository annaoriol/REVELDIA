/**
 * Un pensamiento generado por el Director Creativo.
 *
 * Los pensamientos representan el razonamiento interno
 * durante una sesión de trabajo.
 */
export interface CreativeThought {
  /**
   * Identificador único.
   */
  id: string;

  /**
   * Momento en el que se genera.
   */
  createdAt: Date;

  /**
   * Contenido del pensamiento.
   */
  content: string;

  /**
   * Motivo que origina este pensamiento.
   */
  reason: string;

  /**
   * Nivel de confianza (0–1).
   */
  confidence: number;

  /**
   * ¿Requiere actuar?
   */
  requiresAction: boolean;

  /**
   * Acción sugerida.
   */
  suggestedAction?:
    | "research"
    | "observe"
    | "compare"
    | "detect-patterns"
    | "generate-clarity"
    | "generate-dna"
    | "generate-revelation"
    | "produce";

  /**
   * Evidencias relacionadas.
   */
  evidenceIds: string[];

  /**
   * Patrones relacionados.
   */
  patternIds: string[];
}