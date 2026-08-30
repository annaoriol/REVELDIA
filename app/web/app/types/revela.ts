import type { Reference } from "@/app/features/references/data";

export type ProjectStatus =
  | "draft"
  | "active"
  | "ready-for-review"
  | "exported";

export type SceneId =
  | "welcome"
  | "intention"
  | "observation"
  | "references"
  | "light-table"
  | "creative-director"
  | "specialists"
  | "revelation"
  | "positivado"
  | "system"
  | "creation"
  | "production"
  | "adaptation"
  | "export";

export type SceneStatus =
  | "available"
  | "active"
  | "locked"
  | "complete";

export type CreativeDirectorExplorationStatus =
  | "exploring"
  | "sufficient";

export interface ProjectDNA {
  identity: ProjectDNAIdentity;
  references: ProjectDNAReference[];
  lightTable: ProjectDNALightTable;
  relationships: ProjectDNARelationship[];
  observations: ProjectDNAObservation[];
  insights: ProjectDNAInsight[];
  sensoryLanguage: ProjectDNASensoryLanguage;
  sensoryDNA: ProjectDNASensoryDNA | null;

  creativeDirector: ProjectDNACreativeDirector;

  expressions: ProjectDNAExpression[];

  /** @deprecated Use identity. */
  intention: ProjectDNAIntention;

  /** @deprecated Use sensoryLanguage and sensoryDNA. */
  creativeDirection: ProjectDNACreativeDirection;

  /** @deprecated Specialist analysis is no longer a primary Sprint 06 stage. */
  specialistAnalyses: ProjectDNASpecialistAnalysis[];

  /** @deprecated Use insights and sensoryDNA. */
  revelation: ProjectDNARevelation | null;

  /** @deprecated Use sensoryDNA. */
  positivation: ProjectDNAPositivation | null;

  /** @deprecated Use sensoryDNA and expressions. */
  creativeSystem: ProjectDNACreativeSystem | null;
}

export interface ProjectDNAIdentity {
  whatToReveal: string;
  whatToTransmit: string;
  context: string;
  updatedAt: string | null;
}

/** @deprecated Use ProjectDNAIdentity. */
export type ProjectDNAIntention = ProjectDNAIdentity;

export type ObservationStatus =
  | "draft"
  | "registered"
  | "connected"
  | "translated-to-insight";

export interface ProjectDNAObservation {
  id: string;
  question: string;
  answer: string;
  evidenceIds: string[];
  referenceIds: string[];
  relationshipIds: string[];
  insightIds: string[];
  status: ObservationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectDNAReference {
  id: string;

  kind:
    | "visual"
    | "narrative"
    | "cultural"
    | "emotional"
    | "conceptual"
    | "editorial"
    | "cinematic";

  title: string;

  description: string;

  meaning: string;

  image?: string;

  /*
   * Recurso audiovisual original de la referencia.
   * Puede ser una imagen, vídeo, PDF u otro recurso local.
   */
  mediaUrl?: string;

  fileName?: string;

  mimeType?: string;

  createdAt: string;
}

export interface ProjectDNALightTable {
  referenceIds: string[];
  groupIds: string[];
  updatedAt: string | null;
}

export type RelationshipType =
  | "supports"
  | "contrasts"
  | "inspires"
  | "extends"
  | "avoids";

export interface ProjectDNARelationship {
  id: string;
  fromId: string;
  toId: string;
  type: RelationshipType;
  note?: string;
  strength?: number;
  createdAt: string;
}

export interface ProjectDNAInsight {
  id: string;
  statement: string;
  sourceIds: string[];
  confidence: number;
  createdAt: string;
}

export type SensoryChannel =
  | "visual"
  | "verbal"
  | "material"
  | "spatial"
  | "motion"
  | "sound";

export interface ProjectDNASensoryTerm {
  id: string;
  channel: SensoryChannel;
  value: string;
  meaning: string;
}

export interface ProjectDNASensoryLanguage {
  terms: ProjectDNASensoryTerm[];
  updatedAt: string | null;
}

export interface ProjectDNASensoryDNA {
  identity: string;
  principles: string[];
  rules: string[];
  signature: string;
  updatedAt: string;
}

/**
 * Estado de exploración dirigido por el Director Creativo IA.
 *
 * El contador de propuestas representa rondas de exploración.
 * La suficiencia es una decisión del Director, no una regla
 * basada únicamente en el número de referencias seleccionadas.
 */
export interface ProjectDNACreativeDirectorDecision {
  proposalNumber: number;
  decision: "continue" | "sufficient";
  exploredReferenceIds: string[];
  reason: string;
  nextExploration: string | null;
  createdAt: string;
}

export interface ProjectDNACreativeDirector {
  /**
   * Dirección inicial expresada por el usuario.
   */
  requestedOutput: string;
  userVision: string;

  /**
   * Memoria crítica del proceso creativo.
   */
  openQuestions: string[];
  tensions: string[];
  hypotheses: string[];
  perspectivesUsed: string[];

  /**
   * Nivel de definición actual del proyecto.
   */
  clarityLevel: "low" | "medium" | "high";

  /**
   * Exploración y decisiones del Director.
   */
  criteria: string[];
  decisions: string[];
  decisionHistory: ProjectDNACreativeDirectorDecision[];

  proposalNumber: number;
  exploredReferenceIds: string[];
  proposedReferenceIds: string[];

  status: CreativeDirectorExplorationStatus;

  decision: "continue" | "sufficient" | null;

  updatedAt: string | null;
}

export interface ProjectDNAExpression {
  id: string;
  format: string;
  brief: string;
  sourceIds: string[];
  createdAt: string;
}

export interface ProjectDNACreativeDirection {
  criteria: string[];
  decisions: string[];

  creativeReading: string;
  formatDirectives: string[];
  explorationTerritories: string[];
  questions: string[];

  nextAction:
    | "explore-references"
    | "add-references"
    | "light-table"
    | "synthesize"
    | null;

  updatedAt: string | null;
}

export interface ProjectDNASpecialistAnalysis {
  id: string;
  specialist: string;
  findings: string[];
  evidenceIds: string[];
  createdAt: string;
}

export interface ProjectDNARevelation {
  hypothesis: string;
  evidenceIds: string[];
  confidence: number;
  createdAt: string;
}

export interface ProjectDNAPositivation {
  principles: string[];
  rules: string[];
  updatedAt: string;
}

export interface ProjectDNACreativeSystem {
  identity: string;
  narrative: string;
  tone: string;
  visualLanguage: string;
  editorialRules: string[];
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  dna: ProjectDNA;
  createdAt: string;
  updatedAt: string;
}

export interface Scene {
  id: SceneId;
  order: number;
  title: string;
  eyebrow: string;
  description: string;
  status: SceneStatus;
}

export interface Workspace {
  activeSceneId: SceneId;
  sceneTitle: string;
  sceneDescription: string;
}

export interface Panel {
  id: string;
  title: string;
  description: string;
  emptyLabel: string;
}

export interface Navigation {
  items: Scene[];
  activeSceneId: SceneId;
}

export interface MemoryEntry {
  id: string;
  label: string;
  value: string;
  createdAt: string;
}

export interface Memory {
  entries: MemoryEntry[];
  lastSyncedAt: string | null;
}

export interface Group {
  id: string;
  name: string;
  itemIds: string[];
  color?: string;
  collapsed?: boolean;
}

/** @deprecated Use RelationshipType. */
export type RelationType = RelationshipType;

/** @deprecated Use ProjectDNARelationship for domain data. */
export interface Connection {
  id: string;
  from: string;
  to: string;
  relation: RelationType;
  note?: string;
  strength?: number;
}

export interface Selection {
  id: string | null;
  type: "scene" | "panel" | "asset" | "note" | null;
}

export interface Preferences {
  theme: "dark" | "light";
  reducedMotion: boolean;
  density: "comfortable" | "compact";
}

export interface FutureFeature {
  id: string;
  label: string;
  area:
    | "ai"
    | "memory"
    | "export"
    | "specialists"
    | "orchestration";
  enabled: boolean;
}

export interface LoadingState {
  scene: boolean;
  memory: boolean;
  export: boolean;
}

export interface ErrorState {
  id: string;
  message: string;
}

export interface RevealState {
  project: Project;
  scene: Workspace;
  navigation: Navigation;
  history: SceneId[];
  memory: Memory;

  /**
   * Referencias descubiertas por el Provider
   * durante la exploración del Director Creativo.
   */
  discoveredReferences: Reference[];

  lightTable: Reference[];
  lightTableGroups: Group[];
  relationships: ProjectDNARelationship[];

  /** @deprecated Use relationships. */
  connections: Connection[];

  selection: Selection;
  preferences: Preferences;
  loading: LoadingState;
  errors: ErrorState[];
  future: FutureFeature[];
}