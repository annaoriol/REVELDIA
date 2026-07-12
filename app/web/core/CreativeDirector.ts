import { Project } from "@/types/project";
import { Clarity } from "@/types/Clarity";

export class CreativeDirector {

  constructor(
    private project: Project
  ) {}

  //----------------------------------
  // Estado del proceso
  //----------------------------------

  public observationCount(): number {

    return this.project
      .dossier
      .observations
      .length;

  }

  public revelationCount(): number {

    return this.project
      .dossier
      .revelations
      .length;

  }

  public clarity(): Clarity {

    return this.project
      .dossier
      .clarity;

  }

  //----------------------------------
  // Reglas
  //----------------------------------

  public canReveal(): boolean {

    return this.observationCount() > 0;

  }

  public hasFinished(
    totalObservations: number
  ): boolean {

    return (
      this.observationCount()
      >=
      totalObservations
    );

  }

  public nextObservationIndex(): number {

    return this.observationCount();

  }

  //----------------------------------
  // Estado textual
  //----------------------------------

  public stage():

    | "observing"
    | "revealing"
    | "clarifying"
    | "positivating"

  {

    if (this.revelationCount() === 0)
      return "observing";

    if (this.revelationCount() < 3)
      return "revealing";

    if (this.revelationCount() < 6)
      return "clarifying";

    return "positivating";

  }

}