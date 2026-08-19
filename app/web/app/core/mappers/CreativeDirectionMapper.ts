import type {
  CreativeDirection,
} from "@/app/core/creative-director/CreativeDirectorTypes";

import type {
  ProjectDNACreativeDirection,
} from "@/app/types";

export class CreativeDirectionMapper {
  static toProjectDNA(
    direction: CreativeDirection
  ): Omit<
    ProjectDNACreativeDirection,
    "updatedAt"
  > {
    return {
      criteria: [],
      decisions: [],

      creativeReading:
        direction.creativeReading,

      formatDirectives:
        direction.formatDirectives,

      explorationTerritories:
        direction.explorationTerritories,

      questions:
        direction.questions,

      nextAction:
        direction.nextAction,
    };
  }
}
