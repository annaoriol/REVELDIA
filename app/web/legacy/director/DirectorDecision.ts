import { ProjectStage } from "@/types/ProjectStage";

export interface DirectorDecision {

  stage: ProjectStage;

  title: string;

  message: string;

  canContinue: boolean;

}