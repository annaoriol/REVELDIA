/**
 * Plan estratégico del Director Creativo.
 *
 * El plan describe la estrategia actual para alcanzar
 * el objetivo de la sesión y puede evolucionar
 * durante el proceso creativo.
 */
export interface CreativePlan {
  /**
   * Objetivo principal.
   */
  objective: string;

  /**
   * Estrategia actual.
   */
  strategy: string;

  /**
   * Fase actual del proceso.
   */
  currentStage:
    | "research"
    | "patterns"
    | "clarity"
    | "creative-dna"
    | "revelation"
    | "production";

  /**
   * Próxima acción.
   */
  nextAction: string;

  /**
   * Motivo de esa acción.
   */
  reasoning: string;

  /**
   * Estado del plan.
   */
  status:
    | "pending"
    | "running"
    | "blocked"
    | "completed";

  /**
   * Última actualización.
   */
  updatedAt: Date;
}