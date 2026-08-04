import { EvidenceType } from "./EvidenceType";

export interface Evidence {
  id: string;

  title: string;

  description?: string;

  type: EvidenceType;

  source?: string;

  url?: string;

  thumbnail?: string;

  tags: string[];

  metadata?: Record<string, unknown>;
}