/**
 * Pregunta que el Director Creativo necesita resolver.
 */
export interface CreativeQuestion {
  /**
   * Identificador.
   */
  id: string;

  /**
   * Pregunta.
   */
  question: string;

  /**
   * ¿Por qué necesita responderla?
   */
  purpose: string;

  /**
   * Prioridad.
   */
  priority: number;

  /**
   * ¿Ya está respondida?
   */
  answered: boolean;

  /**
   * Respuesta obtenida.
   */
  answer?: string;
}