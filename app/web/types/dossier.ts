import { Observation } from "./observation";
import { Revelation } from "./revelation";
import { Clarity } from "./Clarity";

export interface Dossier {
  observations: Observation[];

  revelations: Revelation[];

  clarity: Clarity;
}