import { SensoryDNA } from "../sensory-dna/SensoryDNA";

export interface CreativeDirector {
  dna: SensoryDNA;

  objective: string;

  recommendations: string[];

  nextActions: string[];
}