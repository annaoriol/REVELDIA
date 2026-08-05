import type { Pattern } from "../patterns/Pattern";

/**
 * ADN creativo del proyecto.
 *
 * Es la síntesis generada por RƎVELA a partir de los
 * patrones detectados durante el proceso de investigación.
 */
export interface CreativeDNA {
  /** Identificador */
  id: string;

  /** Proyecto al que pertenece */
  projectId: string;

  /** Patrones utilizados para construir el ADN */
  patterns: Pattern[];

  /** Esencia del proyecto */
  essence: string;

  /** Propósito */
  purpose: string;

  /** Personalidad */
  personality: string[];

  /** Valores principales */
  values: string[];

  /** Posicionamiento */
  positioning: string;

  /** Público principal */
  audience: string;

  /** Voz de comunicación */
  toneOfVoice: string;

  /** Estilo visual */
  visualLanguage: string[];

  /** Dirección narrativa */
  narrativeDirection: string[];

  /** Diferenciadores */
  differentiators: string[];

  /** Oportunidades detectadas */
  opportunities: string[];

  /** Riesgos detectados */
  risks: string[];

  /** Nivel de confianza */
  confidence: number;

  /** Fecha de creación */
  createdAt: Date;

  /** Última actualización */
  updatedAt: Date;
}