export type ReferenceOrientation =
  | "portrait"
  | "landscape"
  | "square";

export interface Reference {

  id: string;

  title: string;

  category: string;

  heroImage: string;

  orientation: ReferenceOrientation;

  featured: boolean;

  description: string;

  history: string;

  learning: string;

  keywords: string[];

  related: string[];
}