import type { Clarity } from "../clarity/Clarity";
import type { Pattern } from "../patterns/Pattern";

import type { Tool } from "./Tool";

export class ClarityTool
  implements Tool<Pattern[], Clarity>
{
  async execute(
    patterns: Pattern[]
  ): Promise<Clarity> {
    throw new Error(
      "ClarityEngine not implemented."
    );
  }
}