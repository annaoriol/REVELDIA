import { Project } from "@/types/project";
import { Revelation } from "@/types/revelation";

export type LaboratoryStage =
  | "idear"
  | "revelar"
  | "mesa-de-luz"
  | "positivar"
  | "transmitir";

export class CreativeDirector {

  constructor(
    private project: Project
  ) {}

  //----------------------------------
  // Estado del proyecto
  //----------------------------------

  public observations() {

    return this.project.dossier.observations;

  }

  public revelations(): Revelation[] {

    return this.project.dossier.revelations;

  }

  public lastRevelation():

    Revelation | null {

    const revelations =
      this.revelations();

    return revelations.length > 0

      ? revelations[revelations.length - 1]

      : null;

  }

  //----------------------------------
  // Etapa del laboratorio
  //----------------------------------

  public stage(): LaboratoryStage {

    const revelations =
      this.revelations().length;

    if (revelations === 0)
      return "idear";

    if (revelations < 3)
      return "revelar";

    if (revelations < 6)
      return "mesa-de-luz";

    if (revelations < 10)
      return "positivar";

    return "transmitir";

  }

  //----------------------------------
  // Reglas
  //----------------------------------

  public canReveal(): boolean {

    return this.observations().length > 0;

  }

  public canPositivate(): boolean {

    return this.stage() === "positivar"

      || this.stage() === "transmitir";

  }

  public canTransmit(): boolean {

    return this.stage() === "transmitir";

  }

}