import { Seed } from "@/types/seed";

export function createSeed(

  title: string,

  intention: string

): Seed {

  return {

    id: crypto.randomUUID(),

    title,

    intention,

    status: "revealing",

    createdAt: new Date().toISOString(),

  };

}