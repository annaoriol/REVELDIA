import { RevealSession, RevealSessionState } from "@/src/domain";

interface CreateRevealSessionParams {
  projectId: string;
  title: string;
}

export function createRevealSession({
  projectId,
  title,
}: CreateRevealSessionParams): RevealSession {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    projectId,

    title,

    state: RevealSessionState.Identity,

    createdAt: now,
    updatedAt: now,

    identityId: undefined,

    referenceIds: [],

    observationIds: [],

    insightIds: [],
  };
}