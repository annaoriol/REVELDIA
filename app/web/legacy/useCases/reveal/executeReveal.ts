import { Project } from "@/types/project";
import { Laboratory } from "@/types/observation";

import { registerObservation } from "@/core/ObservationEngine";
import { buildObservationContext } from "@/legacy/core/ObservationContext";

import { consultCouncil } from "@/legacy/laboratory/reveal/Council";
import { CreativeDirector } from "@/legacy/director/CreativeDirector";

export function executeRevealProcess(

  project: Project,

  observation: {

    id: string;

    laboratory: Laboratory;

    image: string;

    question: string;

  },

  answer: string

): Project {

  //----------------------------------
  // Registrar observación
  //----------------------------------

  const projectWithObservation =
    registerObservation(
      project,
      {
        id: observation.id,
        laboratory: observation.laboratory,
        image: observation.image,
        question: observation.question,
        answer,
        createdAt: new Date().toISOString(),
      }
    );

  //----------------------------------
  // Construir contexto
  //----------------------------------

  const context =
    buildObservationContext(answer);

  //----------------------------------
  // Consejo Creativo
  //----------------------------------

  const council =
    consultCouncil(context);

  //----------------------------------
  // Director Creativo
  //----------------------------------

  const director =
    new CreativeDirector();

  return director.updateProject(

    projectWithObservation,

    council

  );

}
