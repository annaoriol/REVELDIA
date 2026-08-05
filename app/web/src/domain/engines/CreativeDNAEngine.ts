import type { Clarity } from "../clarity/Clarity";
import type { CreativeDNA } from "../creative-dna/CreativeDNA";

import type { Engine } from "./Engine";

/**
 * Genera el ADN creativo.
 */
export class CreativeDNAEngine
  implements Engine<Clarity, CreativeDNA>
{
  async execute(
    clarity: Clarity
  ): Promise<CreativeDNA> {
    throw new Error(
      "CreativeDNAEngine not implemented."
    );
  }
}