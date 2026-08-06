import type { CreativeDNA } from "../creative-dna/CreativeDNA";
import type { Revelation } from "../revelation/Revelation";

import type { Tool } from "./Tool";

/**
 * RevelationTool
 *
 * Convierte el CreativeDNA en una RƎVELACIÓN.
 *
 * Esta implementación es temporal durante la transición
 * al CreativeDirectorAgent.
 */
export class RevelationTool
  implements Tool<CreativeDNA, Revelation>
{
  async execute(
    creativeDNA: CreativeDNA
  ): Promise<Revelation> {
    void creativeDNA;

    throw new Error(
      "RevelationTool not implemented."
    );
  }
}