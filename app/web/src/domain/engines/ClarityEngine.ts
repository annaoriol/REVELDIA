import type { Clarity } from "../clarity/Clarity";
import type { Pattern } from "../patterns/Pattern";

import type { Engine } from "./Engine";

/**
 * Convierte patrones en claridad.
 */
export class ClarityEngine
  implements Engine<Pattern[], Clarity>
{
  async execute(
    patterns: Pattern[]
  ): Promise<Clarity> {
    throw new Error(
      "ClarityEngine not implemented."
    );
  }
}