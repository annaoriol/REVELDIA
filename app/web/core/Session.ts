import { Session } from "@/types/session";

export function createSession(): Session {

  return {

    step: "intro",

    observationIndex: 0,

    startedAt: new Date().toISOString(),

  };

}