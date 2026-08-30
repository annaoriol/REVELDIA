/**
 * RƎVELACIÓN
 *
 * Contrato de datos para la primera síntesis creativa del proyecto.
 *
 * Esta capa no genera contenido por sí misma.
 * Define qué información recibe RƎVELACIÓN y qué conocimiento
 * devuelve para las siguientes fases del método.
 */

export type RevelationStatus =
  | "idle"
  | "generating"
  | "ready"
  | "approved";

export interface RevelationReference {
  id: string;

  /**
   * Procedencia de la referencia.
   */
  origin:
    | "director"
    | "revela"
    | "user";

  title?: string;

  description?: string;

  imageUrl?: string;

  metadata?: Record<
    string,
    unknown
  >;
}

export interface RevelationRelationship {
  /**
   * Referencias relacionadas dentro de la Mesa de Luz.
   */
  referenceIds: string[];

  /**
   * Lectura o relación significativa.
   */
  meaning?: string;
}

export interface RevelationInput {
  /**
   * Punto de partida definido en Director Creativo.
   */
  intention?: string;

  /**
   * Output o pieza que el usuario decidió desarrollar.
   *
   * No debe volver a preguntarse en RƎVELACIÓN.
   */
  requestedOutput?: string;

  /**
   * Decisiones obtenidas durante la conversación creativa.
   */
  creativeContext?: Record<
    string,
    unknown
  >;

  /**
   * Todas las referencias conservadas.
   */
  references: RevelationReference[];

  /**
   * Relaciones creadas en la Mesa de Luz.
   */
  relationships: RevelationRelationship[];
}

export interface RevelationVisualUniverse {
  composition: string;
  light: string;
  texture: string;
  colour: string;
  movement: string;
  materiality: string;
}

export interface RevelationSoundUniverse {
  music: string;
  sound: string;
  silence: string;
  voice: string;
  rhythm: string;
  atmosphere: string;
}

export interface RevelationResult {
  /**
   * Idea esencial del proyecto.
   */
  core: string;

  /**
   * Qué queremos provocar.
   */
  intention: string;

  /**
   * Contradicción o fricción creativa.
   */
  tension: string;

  /**
   * Síntesis visual derivada de las referencias.
   */
  visual: RevelationVisualUniverse;

  /**
   * Síntesis sonora.
   */
  sound: RevelationSoundUniverse;

  /**
   * Elementos que deben mantenerse
   * para conservar coherencia.
   */
  coherence: string[];

  /**
   * Caminos creativos que debemos evitar.
   */
  avoid: string[];

  /**
   * Síntesis operativa para las siguientes fases.
   */
  creativeDirection: string;

  /**
   * Permite rastrear qué referencias
   * participaron en la síntesis.
   */
  sourceReferenceIds: string[];
}

export interface RevelationState {
  status: RevelationStatus;

  input: RevelationInput | null;

  result: RevelationResult | null;

  /**
   * El usuario puede editar la síntesis.
   */
  updatedAt?: string;
}
