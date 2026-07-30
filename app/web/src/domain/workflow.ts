export const REVELA_WORKFLOW = [
  "Identity",
  "References",
  "Light Table",
  "Relationships",
  "Observation",
  "Insights",
  "Sensory Language",
  "Sensory DNA",
  "Creative Director",
  "Expressions",
] as const;

export type WorkflowStep = typeof REVELA_WORKFLOW[number];