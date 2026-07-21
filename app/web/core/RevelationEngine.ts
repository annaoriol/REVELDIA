import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";

export function generateRevelation(
  _council: CouncilResult
): Revelation {
  return {
    id: "pending-revelation",
    title: "Revelación pendiente",
    text: "",
    summary: "",
    confidence: 0,
    clarity: {
      identity: 0,
      narrative: 0,
      visual: 0,
      strategy: 0,
    },
    patterns: [],
    recommendations: [],
    references: [],
    laboratories: [],
    createdAt: "",
    council: [],
  };
}
