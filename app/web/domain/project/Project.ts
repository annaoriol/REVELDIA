import { Intention } from "../discovery/Intention";
import { Reference } from "../discovery/Reference";
import { Style } from "../discovery/Style";
import { ProjectId } from "../shared/ids";
import { MethodStage } from "../shared/MethodStage";
import { Timestamp } from "../shared/Timestamp";

export interface Project {
  id: ProjectId;
  name: string;
  stage: MethodStage;
  intention?: Intention;
  references: Reference[];
  style?: Style;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
