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

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
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
  area: "ai" | "memory" | "export" | "specialists" | "orchestration";
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
  selection: Selection;
  preferences: Preferences;
  loading: LoadingState;
  errors: ErrorState[];
  future: FutureFeature[];
}
