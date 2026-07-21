import { CouncilResult } from "@/types/CouncilResult";
import { Revelation } from "@/types/revelation";
import { Clarity } from "@/types/Clarity";
import { Project } from "@/types/project";

import { generateRevelation } from "@/core/RevelationEngine";
import { buildClarity } from "@/legacy/core/ClarityEngine";
import { updateProjectWithRevelation } from "@/core/ProjectUpdater";

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

    // Se mantiene por si se utiliza en otros puntos
    this.clarify(council);

    return updateProjectWithRevelation(

      project,

      revelation

    );

  }

}
