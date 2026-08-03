export type SeedStatus =
  | "revealing"
  | "clarifying"
  | "positivating";

export interface Seed {
  id: string;

  title: string;

  intention: string;

  status: SeedStatus;

  createdAt: Date;
}