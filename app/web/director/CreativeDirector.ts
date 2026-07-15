import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";
import { Clarity } from "@/types/Clarity";

import { generateRevelation } from "@/core/RevelationEngine";
import { buildClarity } from "@/core/ClarityEngine";

export class CreativeDirector {

  public reveal(
    council: CouncilResult
  ): Revelation {

    return generateRevelation(council);

  }

  public clarify(
    council: CouncilResult
  ): Clarity {

    return buildClarity(council);

  }

}