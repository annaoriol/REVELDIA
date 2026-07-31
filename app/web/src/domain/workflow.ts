export const REVELA_WORKFLOW = [
  "Identity",
  "References",
  "Style",
  "Creative Director",
  "Specialists",
  "Synthesis",
  "Reveal Session",
  "Light Table",
  "Observation",
  "Insight",
  "Creative System",
  "Production",
  "Adaptation",
  "Editorial Direction",
  "Export",
] as const;

export type WorkflowStep = typeof REVELA_WORKFLOW[number];