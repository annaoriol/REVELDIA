import type { CreativeDNA } from "../creative-dna/CreativeDNA";

/**
 * RƎVELACIÓN
 *
 * Síntesis estratégica generada a partir del CreativeDNA.
 * Representa las decisiones que guiarán la comunicación,
 * la identidad y la producción del proyecto.
 */
export interface Revelation {
  /** Identificador */
  id: string;

  /** Proyecto */
  projectId: string;

  /** ADN del que nace esta revelación */
  creativeDNA: CreativeDNA;

  /** Nombre de la revelación */
  title: string;

  /** Resumen ejecutivo */
  summary: string;

  /** Explicación completa */
  description: string;

  /** Idea central */
  coreIdea: string;

  /** Propuesta de valor */
  valueProposition: string;

  /** Diferenciación */
  differentiation: string;

  /** Estrategia de comunicación */
  communicationStrategy: string;

  /** Dirección creativa */
  creativeDirection: string[];

  /** Recomendaciones */
  recommendations: string[];

  /** Próximos pasos */
  nextActions: string[];

  /** Nivel de confianza */
  confidence: number;

  /** Fechas */
  createdAt: Date;
  updatedAt: Date;
}