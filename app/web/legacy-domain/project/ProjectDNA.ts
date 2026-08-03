import { Intention } from "../discovery/Intention";
import { Observation } from "../discovery/Observation";
import { Reference } from "../discovery/Reference";
import { Style } from "../discovery/Style";
import { CreativeDirectorDecision } from "../direction/CreativeDirector";
import { SpecialistAnalysis } from "../direction/SpecialistAnalysis";
import { Revelation } from "../revelation/Revelation";
import { Synthesis } from "../synthesis/Synthesis";

export interface ProjectDNA {
  intention?: Intention;

  observations: Observation[];

  references: Reference[];

  style?: Style;

  creativeDirection: CreativeDirectorDecision[];

  specialistAnalyses: SpecialistAnalysis[];

  synthesis?: Synthesis;

  revelation?: Revelation;
}