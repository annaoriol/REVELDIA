import type { Clarity } from "../clarity/Clarity";
import type { CreativeDNA } from "../creative-dna/CreativeDNA";

import type { Tool } from "./Tool";

/**
 * Genera el ADN creativo a partir de la Clarity.
 *
 * Esta es una implementación temporal durante la migración
 * hacia el Director Creativo Agente.
 */
export class CreativeDNATool
  implements Tool<Clarity, CreativeDNA>
{
  async execute(
    clarity: Clarity
  ): Promise<CreativeDNA> {
    void clarity;

    throw new Error(
      "CreativeDNATool not implemented."
    );
  }
}