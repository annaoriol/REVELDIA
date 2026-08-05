export type EvidenceOrigin = "REVELA" | "USER";

export type EvidenceType =
  | "website"
  | "brand"
  | "campaign"
  | "book"
  | "article"
  | "video"
  | "image"
  | "podcast"
  | "architecture"
  | "product"
  | "note"
  | "pdf";

export interface Evidence {
  id: string;

  origin: EvidenceOrigin;

  type: EvidenceType;

  title: string;

  summary: string;

  whyRelevant: string;

  source?: string;

  url?: string;

  thumbnail?: string;

  confidence?: number;

  tags: string[];

  selected: boolean;
}