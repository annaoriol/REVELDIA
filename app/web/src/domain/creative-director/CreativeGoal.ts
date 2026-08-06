/**
 * Objetivo actual del Director Creativo.
 */
export interface CreativeGoal {
  /**
   * Qué quiere conseguir.
   */
  objective: string;

  /**
   * Resultado esperado.
   */
  expectedOutcome: string;

  /**
   * Nivel de completitud (0–1).
   */
  progress: number;

  /**
   * ¿Está completado?
   */
  completed: boolean;
}