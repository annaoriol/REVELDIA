import type {
  ReferenceCandidate,
  ReferenceProvider,
  ReferenceSearchQuery,
} from "./ReferenceProviderTypes";

export class MockReferenceProvider
  implements ReferenceProvider
{
  async search(
    input: ReferenceSearchQuery
  ): Promise<ReferenceCandidate[]> {
    const query =
      input.query.trim().toLowerCase();

    const candidates: ReferenceCandidate[] = [
      {
        id: "mock-light-architecture",
        title: "Light as Architecture",
        description:
          "Referencias donde la luz construye el espacio y determina la percepción.",
        meaning:
          "La luz funciona como estructura narrativa y espacial.",
        kind: "cinematic",
        category: "Arquitectura",
        keywords: [
          "luz",
          "espacio",
          "geometría",
          "arquitectura",
        ],
        reason:
          "La intención sugiere explorar la relación entre luz, espacio y percepción.",
      },

      {
        id: "mock-editorial-minimalism",
        title: "Editorial Minimalism",
        description:
          "Lenguajes editoriales basados en claridad, silencio visual y composición.",
        meaning:
          "La reducción de elementos puede aumentar la fuerza del mensaje.",
        kind: "editorial",
        category: "Editorial",
        keywords: [
          "minimalismo",
          "editorial",
          "composición",
          "silencio",
        ],
        reason:
          "Aporta contraste y permite explorar cómo la simplicidad puede construir significado.",
      },

      {
        id: "mock-materiality",
        title: "Materiality and Texture",
        description:
          "Referencias centradas en materia, textura y presencia física.",
        meaning:
          "La materialidad aporta una dimensión sensorial a la comunicación.",
        kind: "visual",
        category: "Dirección de arte",
        keywords: [
          "materia",
          "textura",
          "sensorial",
          "detalle",
        ],
        reason:
          "Amplía la exploración hacia una dimensión táctil y sensorial.",
      },

      {
        id: "mock-human-editorial",
        title: "Human Editorial",
        description:
          "Lenguajes editoriales que combinan dirección visual y presencia humana.",
        meaning:
          "La mirada humana introduce emoción y narrativa.",
        kind: "narrative",
        category: "Editorial",
        keywords: [
          "humano",
          "narrativa",
          "editorial",
          "emoción",
        ],
        reason:
          "Introduce una dimensión narrativa y emocional complementaria.",
      },
    ];

    /*
     * MOCK PROVIDER
     *
     * En esta fase no necesitamos que el mock
     * interprete literalmente toda la query.
     *
     * La query real contiene intención + contexto
     * + exploración del Director, por lo que un
     * includes(query) produciría demasiados falsos
     * negativos.
     *
     * Más adelante el Provider real hará la búsqueda
     * semántica.
     *
     * Para validar ahora el circuito completo,
     * devolvemos candidatos del catálogo mock y
     * evitamos referencias ya exploradas cuando
     * sea posible.
     */

    const explored =
      new Set(
        input.context.exploredReferenceIds
      );

    const filtered =
      candidates.filter(
        (candidate) =>
          !explored.has(candidate.id)
      );

    return (
      filtered.length > 0
        ? filtered
        : candidates
    ).slice(
      0,
      Math.max(1, input.limit)
    );
  }
}
