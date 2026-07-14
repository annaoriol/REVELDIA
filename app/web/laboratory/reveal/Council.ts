import { ObservationContext } from "@/types/ObservationContext";
import { CouncilResult } from "@/types/CouncilResult";

import { specialists } from "./specialists";

export function consultCouncil(
  context: ObservationContext
): CouncilResult {

  return {

    results: specialists.map(
      (specialist) => specialist.analyze(context)
    ),

  };

}