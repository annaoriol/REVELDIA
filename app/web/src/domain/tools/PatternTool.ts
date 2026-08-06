import type { Evidence } from "../evidence";
import type { Pattern } from "../patterns/Pattern";

import type { Tool } from "./Tool";

/**
 * PatternTool
 *
 * Analiza un conjunto de evidencias y genera
 * hipótesis creativas (Pattern).
 *
 * Implementación temporal durante la migración
 * al Director Creativo Agente.
 */
export class PatternTool
  implements Tool<Evidence[], Pattern[]>
{
  async execute(
    evidences: Evidence[]
  ): Promise<Pattern[]> {
    void evidences;

    return [];
  }
}