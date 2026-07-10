import { Observation } from "./observation";
import { Revelation } from "./revelation";

export interface Dossier {
  observations: Observation[];
  revelations: Revelation[];
}