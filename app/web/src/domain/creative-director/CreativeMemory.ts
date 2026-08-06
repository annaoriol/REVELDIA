/**
 * Memoria de trabajo del Director Creativo.
 *
 * No es memoria permanente.
 * Solo representa el estado de razonamiento
 * durante una sesión.
 */
export interface CreativeMemory {
  thoughts: string[];

  questions: string[];

  decisions: string[];

  pendingActions: string[];
}