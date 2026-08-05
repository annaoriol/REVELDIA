/**
 * Naturaleza del contenido.
 */

export type EvidenceType =
  // Imagen
  | "image"
  | "photography"
  | "illustration"
  | "artwork"

  // Vídeo
  | "video"
  | "film"
  | "animation"
  | "motion"

  // Audio
  | "audio"
  | "music"
  | "podcast"

  // Branding
  | "brand"
  | "campaign"
  | "identity"

  // Diseño
  | "graphic-design"
  | "editorial"
  | "packaging"
  | "typography"

  // Digital
  | "website"
  | "interface"
  | "app"

  // IA
  | "workflow"
  | "prompt"

  // Arquitectura
  | "architecture"
  | "interior"
  | "exhibition"
  | "place"

  // Producto
  | "product"
  | "object"

  // Conocimiento
  | "book"
  | "article"
  | "document"
  | "research"
  | "case-study"

  // Cultura
  | "experience"
  | "event"
  | "trend"

  // Otros
  | "other";