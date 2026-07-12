import { ObservationContext } from "@/types/ObservationContext";
import { CouncilResult } from "@/types/CouncilResult";

import { analyzeIdentity } from "./IdentityLab";
import { analyzeNarrative } from "./NarrativeLab";
import { analyzeVisual } from "./VisualLab";
import { analyzeStrategy } from "./StrategyLab";

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