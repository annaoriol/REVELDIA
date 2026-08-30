import type {
  CreativeDirectorBrief,
  CreativeDirection,
} from "./CreativeDirectorTypes";

import type {
  CreativeDirectionProvider,
} from "./CreativeDirectionProvider";

export class CreativeDirectorService {
  constructor(
    private readonly provider:
      CreativeDirectionProvider
  ) {}

  direct(
    brief: CreativeDirectorBrief
  ): CreativeDirection {
    return this.provider.direct(
      brief
    );
  }
}
