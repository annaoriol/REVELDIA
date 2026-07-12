import { Project } from "@/types/project";
import { Observation } from "@/types/observation";

export function registerObservation(
  project: Project,
  observation: Omit<Observation, "keywords" | "confidence">
): Project {

  const keywords = extractKeywords(observation.answer);

  const completedObservation: Observation = {
    ...observation,
    keywords,
    confidence: keywords.length > 0 ? 1 : 0.4,
  };

  return {

    ...project,

    updatedAt: new Date().toISOString(),

    dossier: {

      ...project.dossier,

      observations: [

        ...project.dossier.observations,

        completedObservation,

      ],

    },

  };

}

function extractKeywords(text: string): string[] {

  return text
    .toLowerCase()
    .replace(/[.,;:!?¿¡]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 3);

}