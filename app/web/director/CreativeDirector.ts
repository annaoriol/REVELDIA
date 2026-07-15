import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";
import { Clarity } from "@/types/Clarity";
import { Project } from "@/types/project";

import { generateRevelation } from "@/core/RevelationEngine";
import { buildClarity } from "@/core/ClarityEngine";

export class CreativeDirector {

  public reveal(
    council: CouncilResult
  ): Revelation {

    return generateRevelation(council);

  }

  public clarify(
    council: CouncilResult
  ): Clarity {

    return buildClarity(council);

  }

  public updateProject(

    project: Project,

    council: CouncilResult

  ): Project {

    const revelation =
      this.reveal(council);

    const clarity =
      this.clarify(council);

    return {

      ...project,

      updatedAt:
        new Date().toISOString(),

      dossier: {

        ...project.dossier,

        clarity,

        revelations: [

          ...project.dossier.revelations,

          revelation,

        ],

      },

    };

  }

}