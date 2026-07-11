import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";

export function generateRevelation(
  council: CouncilResult
): Revelation {

  const confidence = Math.round(
    council.results.reduce(
      (total, lab) => total + lab.confidence,
      0
    ) /
      council.results.length *
      100
  );

  const patterns = council.results
    .flatMap((lab) => lab.patterns)
    .slice(0, 5);

  const recommendations = council.results
    .flatMap((lab) => lab.recommendations)
    .slice(0, 3);

  let text = "";

  if (patterns.length > 0) {

    text +=
      "Empiezan a aparecer patrones consistentes en tu forma de observar.\n\n";

    text += "Patrones detectados:\n";

    patterns.forEach((pattern) => {
      text += `• ${pattern}\n`;
    });

    if (recommendations.length > 0) {

      text += "\nSiguiente paso:\n\n";

      recommendations.forEach((item) => {
        text += `• ${item}\n`;
      });

    }

  } else {

    text =
      "Todavía no existe suficiente información para elaborar una primera revelación.";

  }

  return {

    id: crypto.randomUUID(),

    title: "Primera Revelación",

    text,

    confidence,

    laboratories: council.results.map(
      (lab) => lab.laboratory
    ),

    createdAt: new Date().toISOString(),

    council: council.results.map((lab) => ({
      specialist: lab.laboratory,
      confidence: lab.confidence,
      summary:
        lab.patterns.length > 0
          ? lab.patterns.join(", ")
          : "Sin patrones suficientes",
    })),

  };

}