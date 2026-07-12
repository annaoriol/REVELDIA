export interface Seed {

  id: string;

  title: string;

  intention: string;

  status:
    | "revealing"
    | "clarifying"
    | "positivating";

  createdAt: string;

}