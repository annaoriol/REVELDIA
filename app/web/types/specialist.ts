import { Evidence } from "./evidence";

export interface Specialist {

  id: string;

  name: string;

  description: string;

  analyze(

    evidence: Evidence[]

  ): Evidence[];

}