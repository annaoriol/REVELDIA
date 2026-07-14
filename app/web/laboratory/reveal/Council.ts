import { ObservationContext } from "@/types/ObservationContext";
import { CouncilResult } from "@/types/CouncilResult";

import { analyzeIdentity } from "@/core/IdentityLab";
import { analyzeNarrative } from "@/core/NarrativeLab";
import { analyzeVisual } from "@/core/VisualLab";
import { analyzeStrategy } from "@/core/StrategyLab";

export function consultCouncil(
  context: ObservationContext
): CouncilResult {

  return {

    results: [

      analyzeIdentity(context),

      analyzeNarrative(context),

      analyzeVisual(context),

      analyzeStrategy(context),

    ],

  };

}