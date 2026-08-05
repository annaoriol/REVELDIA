import { EvidenceCategory } from "./EvidenceCategory";
import { EvidenceOrigin } from "./EvidenceOrigin";
import { EvidenceStatus } from "./EvidenceStatus";
import { EvidenceType } from "./EvidenceType";

/**
 * Entidad principal del Laboratorio de Inspiración.
 */

export interface Evidence {
  /** Identificador único */
  id: string;

  /** Título */
  title: string;

  /** Resumen breve */
  summary: string;

  /** Descripción */
  description?: string;

  /** Tipo de evidencia */
  type: EvidenceType;

  /** Categoría */
  category: EvidenceCategory;

  /** Procedencia */
  origin: EvidenceOrigin;

  /** Fuente */
  source?: string;

  /** URL */
  url?: string;

  /** Miniatura */
  thumbnail?: string;

  /** Agente o proveedor */
  discoveredBy?: string;

  /** Justificación de la evidencia */
  rationale?: string;

  /** Etiquetas */
  tags: string[];

  /** Nivel de confianza */
  confidence: number;

  /** Estado */
  status: EvidenceStatus;

  /** Seleccionada para Mesa de Luz */
  selected: boolean;

  /** Notas del usuario */
  notes?: string;

  /** Información adicional */
  metadata?: Record<string, unknown>;

  /** Fechas */
  createdAt: Date;
  updatedAt: Date;
}