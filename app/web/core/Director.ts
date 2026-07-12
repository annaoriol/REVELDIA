import { observations, Observation } from "@/data/mentor/observations";
import { Project } from "@/types/project";

export function nextObservation(
  project: Project
): Observation | null {

  const completed =
    project.dossier.observations.length;

  if (completed >= observations.length) {
    return null;
  }

  return observations[completed];

}