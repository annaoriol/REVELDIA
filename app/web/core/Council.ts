import { Observation } from "@/types/observation";
import { CouncilResult } from "@/types/CouncilResult";

import { buildObservationContext } from "./ObservationContext";

import { analyzeIdentity } from "./IdentityLab";
import { analyzeNarrative } from "./NarrativeLab";
import { analyzeVisual } from "./VisualLab";
import { analyzeStrategy } from "./StrategyLab";

export function consultCouncil(
  observations: Observation[]
): CouncilResult {

  const last = observations.at(-1);

  const context = buildObservationContext(
    last?.answer ?? ""
  );

  return {

    results: [

      analyzeIdentity(context),

      analyzeNarrative(context),

      analyzeVisual(context),

      analyzeStrategy(context),

    ],

  };

}