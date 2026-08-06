import type { Evidence } from "../evidence";

/**
 * Pattern
 *
 * Un patrón representa una hipótesis creativa obtenida
 * al analizar múltiples evidencias.
 *
 * Es la primera interpretación realizada por RƎVELA
 * antes de generar la Clarity.
 */
export interface Pattern {
  /** Identificador único */
  id: string;

  /** Nombre corto del patrón */
  title: string;

  /** Explicación */
  description: string;

  /** Gran tema al que pertenece */
  theme: string;

  /** Evidencias que sustentan el patrón */
  evidences: Evidence[];

  /** Señales detectadas */
  signals: string[];

  /** Palabras clave */
  keywords: string[];

  /** Qué revela este patrón */
  insight: string;

  /** Hipótesis creativa */
  hypothesis: string;

  /** Relevancia para el proyecto (0–1) */
  relevance: number;

  /** Peso dentro del análisis (0–1) */
  weight: number;

  /** Nivel de confianza (0–1) */
  confidence: number;

  /** ¿Es un patrón emergente? */
  emerging: boolean;

  /** Etiquetas */
  tags: string[];

  /** Conflictos detectados */
  conflicts: string[];

  /** Oportunidades detectadas */
  opportunities: string[];

  /** Próximas preguntas que conviene investigar */
  nextQuestions: string[];

  /** Fecha de creación */
  createdAt: Date;

  /** Última actualización */
  updatedAt: Date;
}