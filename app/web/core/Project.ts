import { createEmptyDossier } from "./Dossier";

import { Project } from "../types/project";

export function createProject(): Project {

  return {

    id: crypto.randomUUID(),

    title: "Nuevo Proyecto",

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),

    dossier: createEmptyDossier(),

  };

}