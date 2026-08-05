import { EvidenceCategory } from "../evidence";

/**
 * Solicitud de investigación enviada al Research Engine.
 */
export interface ResearchRequest {
  projectId: string;

  intention: string;

  audience?: string;

  objective?: string;

  categories: EvidenceCategory[];

  keywords?: string[];

  limit: number;
}