import type { Evidence } from "../evidence";
import type { Pattern } from "../patterns/Pattern";

import type { Engine } from "./Engine";

/**
 * Agrupa evidencias y detecta patrones.
 */
export class PatternEngine
  implements Engine<Evidence[], Pattern[]>
{
  async execute(
    evidences: Evidence[]
  ): Promise<Pattern[]> {
    // TODO Sprint 006
    void evidences;

    return [];
  }
}