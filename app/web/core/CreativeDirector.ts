import { Project } from "@/types/project";
import { Revelation } from "@/types/revelation";

import { getRevealArea } from "./RevealAreas";
import { getSpecialist } from "./Specialists";

export type LaboratoryStage =
  | "idear"
  | "revelar"
  | "mesa-de-luz"
  | "positivar"
  | "transmitir";

export class CreativeDirector {
  constructor(
    private readonly project: Project
  ) {}

  //--------------------------
  // Estado del proyecto
  //--------------------------

  public observationsCount(): number {
    return this.project.dossier.observations.length;
  }

  public revelationsCount(): number {
    return this.project.dossier.revelations.length;
  }

  public lastRevelation(): Revelation | null {
    const revelations = this.project.dossier.revelations;

    if (revelations.length === 0) {
      return null;
    }

    return revelations[revelations.length - 1];
  }

  //--------------------------
  // Área seleccionada
  //--------------------------

  public revealArea() {
    const seed = this.project.seed;

    if (!seed) {
      return undefined;
    }
    console.log("RevealArea:", getRevealArea(seed.id));
    return getRevealArea(seed.id);
  }

  //--------------------------
  // Especialista activo
  //--------------------------

  public specialist() {
    const seed = this.project.seed;

    if (!seed) {
      return undefined;
    }

    return getSpecialist(seed.id);
  }

  //--------------------------
  // Etapa actual
  //--------------------------

  public stage(): LaboratoryStage {
    const observations = this.observationsCount();

    if (observations === 0) {
      return "idear";
    }

    const revelation = this.lastRevelation();

    if (!revelation) {
      return "revelar";
    }

    if (revelation.confidence < 60) {
      return "revelar";
    }

    if (revelation.confidence < 80) {
      return "mesa-de-luz";
    }

    if (revelation.recommendations.length > 0) {
      return "mesa-de-luz";
    }

    return "positivar";
  }

  //--------------------------
  // Decisiones
  //--------------------------

  public canReveal(): boolean {
    return this.observationsCount() > 0;
  }

  public canOpenLightTable(): boolean {
    return (
      this.stage() === "mesa-de-luz" ||
      this.stage() === "positivar" ||
      this.stage() === "transmitir"
    );
  }

  public canPositivate(): boolean {
    return (
      this.stage() === "positivar" ||
      this.stage() === "transmitir"
    );
  }

  public canTransmit(): boolean {
    return this.stage() === "transmitir";
  }
}