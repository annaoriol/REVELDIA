import type { Reference } from "@/app/features/references/data";
import type { ReferenceCandidate } from "./ReferenceProviderTypes";

export function mapReferenceCandidate(
  candidate: ReferenceCandidate
): Reference {
  return {
    id: candidate.id,

    title: candidate.title,

    category:
      candidate.category ??
      "Inspiración",

    image:
      candidate.image ?? "",

    orientation: "landscape",

    description:
      candidate.description,

    meaning:
      candidate.meaning,

    kind:
      candidate.kind,

    keywords:
      candidate.keywords,

    reason:
      candidate.reason,

    mediaUrl:
      candidate.mediaUrl,

    sourceUrl:
      candidate.sourceUrl,

    sourceName:
      candidate.sourceName,

    fileName:
      candidate.fileName,

    mimeType:
      candidate.mimeType,

    origin: "provider",
  };
}
