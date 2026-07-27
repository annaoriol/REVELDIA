export type ReferenceOrientation =
  | "landscape"
  | "portrait"
  | "square";

export interface Reference {

  id: string;

  title: string;

  category: string;

  image: string;

  orientation: ReferenceOrientation;

  featured?: boolean;

  description: string;

  keywords: string[];

}