import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";

export function generateRevelation(
  council: CouncilResult
): Revelation {

  const confidence =
    Math.round(
      council.results.reduce(
        (total, lab) => total + lab.confidence,
        0
      ) / council.results.length * 100
    );

  const patterns = council.results
    .flatMap((lab) => lab.patterns)
    .slice(0, 3);

  return {

    id: crypto.randomUUID(),

    title: "Primera Revelación",

    text:
      patterns.length > 0
        ? `Empieza a emerger un patrón consistente: ${patterns.join(", ")}.`
        : "Todavía no existe suficiente información para formular una revelación.",

    confidence,

    laboratories: council.results.map(
      (lab) => lab.laboratory
    ),

    createdAt: new Date().toISOString(),

  };

}