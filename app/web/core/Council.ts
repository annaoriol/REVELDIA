import { ObservationContext } from "@/types/ObservationContext";
import { CouncilResult } from "@/types/CouncilResult";

import { analyzeIdentity } from "./IdentityLab";
import { analyzeNarrative } from "./NarrativeLab";
import { analyzeVisual } from "./VisualLab";
import { analyzeStrategy } from "./StrategyLab";

export function consultCouncil(
  context: ObservationContext
): CouncilResult {

  const identity = analyzeIdentity(context);

  const narrative = analyzeNarrative(context);

  const visual = analyzeVisual(context);

  const strategy = analyzeStrategy(context);

  return {

    results: [

      identity,

      narrative,

      visual,

      strategy,

    ],

  };

}