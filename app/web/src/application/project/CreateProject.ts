import { createEmptyDossier } from "./CreateEmptyProjectDossier";
import { Project } from "@/types/project";

export function createProject(): Project {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),

    title: "Nuevo proceso",

    stage: "welcome",

    seed: null,

    createdAt: now,

    updatedAt: now,

    dossier: createEmptyDossier(),
  };
}