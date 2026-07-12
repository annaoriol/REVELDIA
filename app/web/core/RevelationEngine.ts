import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";

export function generateRevelation(
  council: CouncilResult
): Revelation {

  //----------------------------------------
  // Laboratorio dominante
  //----------------------------------------

  const strongest =
    [...council.results].sort(
      (a, b) => b.confidence - a.confidence
    )[0];

  //----------------------------------------
  // Nivel de confianza
  //----------------------------------------

  const confidence = Math.round(

    council.results.reduce(

      (total, lab) => total + lab.confidence,

      0

    ) /

      council.results.length *

      100

  );

  //----------------------------------------
  // Patrones
  //----------------------------------------

  const patterns = council.results

    .flatMap((lab) => lab.patterns)

    .slice(0, 6);

  //----------------------------------------
  // Recomendaciones
  //----------------------------------------

  const recommendations = council.results

    .flatMap((lab) => lab.recommendations)

    .slice(0, 3);

  //----------------------------------------
  // Texto principal
  //----------------------------------------

  let text = "";

  if (patterns.length > 0) {

    text +=
      `El laboratorio de ${strongest.laboratory.toLowerCase()} muestra actualmente la mayor consistencia dentro del proceso de revelado.\n\n`;

    text +=
      "Empiezan a consolidarse los siguientes patrones:\n\n";

    patterns.forEach((pattern) => {

      text += `• ${pattern}\n`;

    });

    if (recommendations.length > 0) {

      text += "\nPara seguir revelando:\n\n";

      recommendations.forEach((item) => {

        text += `• ${item}\n`;

      });

    }

  } else {

    text =
      "Todavía no existe suficiente información para elaborar una revelación consistente.";

  }

  //----------------------------------------

  return {

    id: crypto.randomUUID(),

    title: "Revelación",

    text,

    confidence,

    laboratories:

      council.results.map(

        (lab) => lab.laboratory

      ),

    createdAt:

      new Date().toISOString(),

    council:

      council.results.map(

        (lab) => ({

          specialist: lab.laboratory,

          confidence: lab.confidence,

          summary:

            lab.patterns.length > 0

              ? lab.patterns.join(", ")

              : "Sin patrones suficientes",

        })

      ),

  };

}