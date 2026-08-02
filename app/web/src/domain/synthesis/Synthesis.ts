export interface Synthesis {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  summary: string;

  conclusions: string[];

  confidence: number;
}