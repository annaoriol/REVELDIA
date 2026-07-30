export type ExpressionType =
  | "branding"
  | "editorial"
  | "audiovisual"
  | "digital"
  | "social"
  | "presentation"
  | "training"
  | "product"
  | "space"
  | "event";

export interface Expression {
  id: string;

  type: ExpressionType;

  title: string;

  description?: string;
}