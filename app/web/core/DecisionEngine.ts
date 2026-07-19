import { Project } from "@/types/project";
import { Revelation } from "@/types/revelation";
import { ProjectStage } from "@/types/ProjectStage";

export interface DecisionResult {

  stage: ProjectStage;

  readyForLightTable: boolean;

  readyForPositivate: boolean;

  readyForTransmit: boolean;

  reason: string;

}

export function evaluateProject(

  project: Project

): DecisionResult {

  const observations =
    project.dossier.observations.length;

  const revelations =
    project.dossier.revelations;

  if (observations === 0) {

    return {

      stage: "ideating",

      readyForLightTable: false,

      readyForPositivate: false,

      readyForTransmit: false,

      reason: "Todavía no existen observaciones.",

    };

  }

  if (revelations.length === 0) {

    return {

      stage: "revealing",

      readyForLightTable: false,

      readyForPositivate: false,

      readyForTransmit: false,

      reason: "Todavía no existe una revelación.",

    };

  }

  const last: Revelation =
    revelations[revelations.length - 1];

  if (last.confidence < 70) {

    return {

      stage: "revealing",

      readyForLightTable: false,

      readyForPositivate: false,

      readyForTransmit: false,

      reason: "La revelación todavía necesita consolidarse.",

    };

  }

  if (last.recommendations.length > 0) {

    return {

      stage: "light-table",

      readyForLightTable: true,

      readyForPositivate: false,

      readyForTransmit: false,

      reason: "Es momento de organizar las decisiones en la Mesa de Luz.",

    };

  }

  return {

    stage: "positivating",

    readyForLightTable: true,

    readyForPositivate: true,

    readyForTransmit: false,

    reason: "El proyecto está preparado para iniciar el Positivado.",

  };

}