import type {
  Project,
  ProjectDNAObservation,
  ProjectDNAReference,
} from "@/app/types";

import { AddObservation } from "../laboratory/AddObservation";
import { AddReference } from "../laboratory/AddReference";

export class LaboratoryService {
  addObservation(
    project: Project,
    observation: ProjectDNAObservation
  ): Project {
    return new AddObservation().execute({
      project,
      observation,
    });
  }

  addReference(
    project: Project,
    reference: ProjectDNAReference
  ): Project {
    return new AddReference().execute({
      project,
      reference,
    });
  }
}