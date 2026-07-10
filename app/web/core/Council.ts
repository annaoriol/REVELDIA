import { Observation } from "@/types/observation";
import { CouncilResult } from "@/types/CouncilResult";

import { analyzeIdentity } from "./IdentityLab";
import { analyzeNarrative } from "./NarrativeLab";
import { analyzeVisual } from "./VisualLab";
import { analyzeStrategy } from "./StrategyLab";

export function consultCouncil(
  observations: Observation[]
): CouncilResult {

  const identity =
    analyzeIdentity(observations);

  const narrative =
    analyzeNarrative(observations);

  const visual =
    analyzeVisual(observations);

  const strategy =
    analyzeStrategy(observations);

  return {

    results: [

      identity,

      narrative,

      visual,

      strategy,

    ],

  };

}