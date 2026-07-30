import { Entity } from "../shared/types";

export type ReferenceType =
  | "book"
  | "film"
  | "architect"
  | "photographer"
  | "designer"
  | "writer"
  | "poet"
  | "artist"
  | "brand"
  | "building"
  | "object"
  | "music"
  | "podcast"
  | "article"
  | "experience"
  | "place"
  | "other";

export interface Reference extends Entity {
  title: string;

  type: ReferenceType;

  author?: string;

  description?: string;

  image?: string;

  url?: string;

  tags: string[];
}