import type { Evidence } from "./Evidence";
import type { ResearchRequest } from "../research";

/**
 * Contrato que implementan todos los proveedores
 * de evidencias del sistema.
 */
export interface EvidenceProvider {
  readonly name: string;

  search(
    request: ResearchRequest
  ): Promise<Evidence[]>;
}