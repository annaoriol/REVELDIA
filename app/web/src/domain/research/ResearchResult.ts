import type { Evidence } from "../evidence";

/**
 * Resultado devuelto por un proveedor.
 */
export interface ResearchResult {
  provider: string;

  evidences: Evidence[];

  duration: number;

  createdAt: Date;
}