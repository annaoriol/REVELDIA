import { CreativeDirectorEngine } from "../app/core/creative-director/CreativeDirectorEngine";

const engine = new CreativeDirectorEngine();

const intention = {
  whatToReveal:
    "Una identidad que conecte naturaleza y tecnología.",

  whatToTransmit:
    "Cercanía, curiosidad y transformación.",

  context:
    "Proyecto de comunicación audiovisual.",
};

let proposalNumber = 1;
let exploredReferenceIds: string[] = [];

const revelaReferences = [
  "revela-01",
  "revela-02",
  "revela-03",
  "revela-04",
  "revela-05",
  "revela-06",
  "revela-07",
  "revela-08",
];

const userReferences = [
  "user-01",
];

const selectedReferences: string[] = [];

for (let round = 1; round <= 5; round++) {
  const nextReferences =
    revelaReferences.slice(
      0,
      Math.min(round * 2, revelaReferences.length)
    );

  exploredReferenceIds =
    Array.from(
      new Set([
        ...exploredReferenceIds,
        ...nextReferences,
      ])
    );

  const result = engine.evaluate({
    intention,

    revelaReferences:
      nextReferences,

    userReferences,

    selectedReferences,

    proposalNumber,

    exploredReferenceIds,
  });

  console.log("\n==============================");
  console.log(`PROPUESTA ${round}`);
  console.log("==============================");

  console.log("Decisión:", result.decision);
  console.log("Estado:", result.status);
  console.log(
    "Propuesta:",
    result.proposalNumber
  );

  console.log(
    "Referencias exploradas:",
    result.exploredReferenceIds.length
  );

  console.log("Motivo:", result.reason);

  console.log(
    "Siguiente exploración:",
    result.nextExploration
  );

  proposalNumber =
    result.proposalNumber;

  if (result.decision === "sufficient") {
    console.log(
      "\n✓ El Director considera suficiente el material."
    );

    break;
  }
}
