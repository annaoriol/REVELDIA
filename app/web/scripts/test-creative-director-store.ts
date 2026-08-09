import { useRevealStore } from "../app/stores/useRevealStore";

const store = useRevealStore.getState();

console.log("\n==============================");
console.log("ESTADO INICIAL");
console.log("==============================");

console.log(
  "Propuesta:",
  store.project.dna.creativeDirector.proposalNumber
);

console.log(
  "Historial:",
  store.project.dna.creativeDirector.decisionHistory.length
);

console.log(
  "Estado:",
  store.project.dna.creativeDirector.status
);

store.evaluateCreativeDirector();

const afterFirst =
  useRevealStore.getState().project.dna.creativeDirector;

console.log("\n==============================");
console.log("DESPUÉS DE LA EVALUACIÓN");
console.log("==============================");

console.log(
  "Propuesta:",
  afterFirst.proposalNumber
);

console.log(
  "Estado:",
  afterFirst.status
);

console.log(
  "Decisión:",
  afterFirst.decision
);

console.log(
  "Historial:",
  afterFirst.decisionHistory.length
);

console.log(
  "Última decisión:",
  afterFirst.decisionHistory.at(-1)
);
