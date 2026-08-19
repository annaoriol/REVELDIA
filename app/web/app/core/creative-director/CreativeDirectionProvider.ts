import type {
  CreativeDirectorBrief,
  CreativeDirection,
} from "./CreativeDirectorTypes";

export interface CreativeDirectionProvider {
  direct(
    brief: CreativeDirectorBrief
  ): CreativeDirection;
}
