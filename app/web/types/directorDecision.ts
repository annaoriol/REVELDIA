import { DirectorAction } from "./directorAction";

export interface DirectorDecision {

  action: DirectorAction;

  specialist?: string;

  reason: string;

}