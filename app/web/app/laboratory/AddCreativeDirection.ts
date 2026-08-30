import type {
  ProjectDNACreativeDirection,
  ProjectDNACreativeDirector,
  ProjectDNA,
} from "@/app/types";

interface AddCreativeDirectionInput {
  creativeDirection: ProjectDNACreativeDirection;
}

export function addCreativeDirection(
  projectDNA: ProjectDNA,
  input: AddCreativeDirectionInput
): ProjectDNA {
  const now = new Date().toISOString();

  const previousDirector =
    projectDNA.creativeDirector;

  const creativeDirector: ProjectDNACreativeDirector = {
    requestedOutput: previousDirector.requestedOutput ?? "",
    userVision: previousDirector.userVision ?? "",

    openQuestions: previousDirector.openQuestions ?? [],
    tensions: previousDirector.tensions ?? [],
    hypotheses: previousDirector.hypotheses ?? [],
    perspectivesUsed: previousDirector.perspectivesUsed ?? [],

    clarityLevel: previousDirector.clarityLevel ?? "low",

    criteria: input.creativeDirection.criteria,
    decisions: input.creativeDirection.decisions,
    decisionHistory: previousDirector.decisionHistory ?? [],
    proposedReferenceIds:
      previousDirector.proposedReferenceIds ?? [],

    proposalNumber:
      previousDirector.proposalNumber ?? 1,

    exploredReferenceIds:
      previousDirector.exploredReferenceIds ?? [],

    status:
      previousDirector.status ?? "exploring",

    decision:
      previousDirector.decision ?? null,

    updatedAt: now,
  };

  return {
    ...projectDNA,

    creativeDirector,

    creativeDirection: {
      ...input.creativeDirection,
      updatedAt: now,
    },
  };
}