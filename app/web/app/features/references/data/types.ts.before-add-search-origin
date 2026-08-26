export type ReferenceOrientation =
  | "landscape"
  | "portrait"
  | "square";

export interface Reference {
  id: string;

  title: string;

  category: string;

  image: string;

  orientation: ReferenceOrientation;

  featured?: boolean;

  description: string;

  /**
   * Significado interpretativo de la referencia.
   * Puede proceder del Provider.
   */
  meaning?: string;

  /**
   * Tipo de referencia detectado por RƎVELA.
   */
  kind?:
    | "visual"
    | "narrative"
    | "cultural"
    | "emotional"
    | "conceptual"
    | "editorial"
    | "cinematic";

  keywords: string[];

  /**
   * Motivo por el que el Director/Provider
   * considera relevante esta referencia.
   */
  reason?: string;

  /**
   * Recurso audiovisual principal.
   * Puede ser una imagen, vídeo, PDF u otro recurso.
   */
  mediaUrl?: string;

  /**
   * Página web o fuente original de la referencia.
   */
  sourceUrl?: string;

  /**
   * Nombre de la fuente de procedencia.
   */
  sourceName?: string;

  /**
   * Nombre original del archivo cuando
   * la referencia procede de un archivo local.
   */
  fileName?: string;

  /**
   * Tipo MIME del recurso.
   */
  mimeType?: string;

  /**
   * Indica que la referencia procede
   * de una búsqueda/propuesta del Director.
   */
  origin?:
    | "revela"
    | "user"
    | "provider";
}
