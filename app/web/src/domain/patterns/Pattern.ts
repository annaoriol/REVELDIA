import type { Evidence } from "../evidence";

/**
 * Un patrón representa una relación significativa
 * entre varias evidencias.
 *
 * Es la unidad de pensamiento del Director Creativo.
 */
export interface Pattern {
  /** Identificador único */
  id: string;

  /** Nombre del patrón */
  title: string;

  /** Explicación */
  description: string;

  /** Evidencias que lo forman */
  evidences: Evidence[];

  /** Qué revela este patrón */
  insight: string;

  /** Relevancia para el proyecto */
  relevance: number;

  /** Nivel de confianza */
  confidence: number;

  /** Etiquetas */
  tags: string[];

  /** Conflictos detectados */
  conflicts?: string[];

  /** Oportunidades detectadas */
  opportunities?: string[];

  /** Fecha de creación */
  createdAt: Date;

  /** Última actualización */
  updatedAt: Date;
}