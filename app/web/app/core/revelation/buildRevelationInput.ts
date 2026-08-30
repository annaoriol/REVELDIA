import type {
  RevelationInput,
  RevelationReference,
} from "@/app/features/revelation/types";

/**
 * Traduce los orígenes técnicos actuales de referencias
 * al lenguaje conceptual del método RƎVELA.
 */
function normalizeOrigin(
  origin?: string
): RevelationReference["origin"] {
  switch (origin) {
    case "provider":
      return "director";

    case "search":
    case "revela":
      return "revela";

    case "user":
      return "user";

    default:
      return "revela";
  }
}

/**
 * Construye una referencia apta para RƎVELACIÓN conservando
 * la información disponible para mantener trazabilidad.
 */
function buildReference(
  reference: Record<string, unknown>
): RevelationReference {
  return {
    id: String(reference.id ?? crypto.randomUUID()),

    origin: normalizeOrigin(
      typeof reference.origin === "string"
        ? reference.origin
        : undefined
    ),

    title:
      typeof reference.title === "string"
        ? reference.title
        : undefined,

    description:
      typeof reference.description === "string"
        ? reference.description
        : undefined,

    imageUrl:
      typeof reference.image === "string"
        ? reference.image
        : typeof reference.mediaUrl === "string"
          ? reference.mediaUrl
          : undefined,

    metadata: {
      kind: reference.kind,
      meaning: reference.meaning,
      reason: reference.reason,
      keywords: reference.keywords,
      sourceUrl: reference.sourceUrl,
      sourceName: reference.sourceName,
      fileName: reference.fileName,
      mimeType: reference.mimeType,
      ...(
        typeof reference.metadata === "object" &&
        reference.metadata !== null
          ? reference.metadata
          : {}
      ),
    },
  };
}

export interface BuildRevelationInputOptions {
  intention?: string;
  requestedOutput?: string;
  creativeContext?: Record<string, unknown>;

  references: Record<string, unknown>[];

  relationships?: {
    referenceIds: string[];
    meaning?: string;
  }[];
}

/**
 * Adaptador entre el estado actual del proyecto y el contrato
 * conceptual de RƎVELACIÓN.
 */
export function buildRevelationInput(
  options: BuildRevelationInputOptions
): RevelationInput {
  return {
    intention: options.intention,

    requestedOutput: options.requestedOutput,

    creativeContext: options.creativeContext,

    references: options.references.map(
      buildReference
    ),

    relationships: options.relationships ?? [],
  };
}
