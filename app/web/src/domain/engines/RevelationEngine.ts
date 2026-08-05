import type { CreativeDNA } from "../creative-dna/CreativeDNA";
import type { Revelation } from "../revelation/Revelation";

import type { Engine } from "./Engine";

/**
 * Genera la RƎVELACIÓN final.
 */
export class RevelationEngine
  implements Engine<CreativeDNA, Revelation>
{
  async execute(
    dna: CreativeDNA
  ): Promise<Revelation> {
    throw new Error(
      "RevelationEngine not implemented."
    );
  }
}