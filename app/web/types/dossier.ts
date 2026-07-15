import { Observation } from "./observation";
import { Revelation } from "./revelation";
import { Clarity } from "./Clarity";
import { Evidence } from "./evidence";

export interface Dossier {

  observations: Observation[];

  evidence: Evidence[];

  revelations: Revelation[];

  clarity: Clarity;

}