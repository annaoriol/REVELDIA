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

    /*
     * MOCK PROVIDER
     *
     * Este catálogo simula una búsqueda semántica.
     *
     * La referencia no tiene que pertenecer al mismo
     * formato que el proyecto.
     *
     * El Director busca relaciones creativas:
     * narrativa, ritmo, materia, luz, espacio,
     * editorialidad, emoción, etc.
     */

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
          "cinematic",
          "visual",
        ],
        reason:
          "La luz puede convertirse en una estructura para organizar la percepción.",
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
          "claridad",
          "estructura",
        ],
        reason:
          "La síntesis editorial puede ayudar a encontrar una forma clara de comunicar.",
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
          "táctil",
          "presencia",
        ],
        reason:
          "La materia introduce una dimensión sensorial que puede enriquecer la dirección.",
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
          "persona",
          "voz",
        ],
        reason:
          "La presencia humana puede convertir una información en una experiencia narrativa.",
      },

      {
        id: "mock-documentary-observation",
        title: "Documentary Observation",
        description:
          "Lenguajes documentales basados en observar antes que explicar.",
        meaning:
          "La observación puede convertirse en una forma de narrar.",
        kind: "cinematic",
        category: "Cine",
        keywords: [
          "documental",
          "observación",
          "realidad",
          "narrativa",
          "tiempo",
          "humano",
        ],
        reason:
          "El lenguaje documental permite construir significado a través de la observación.",
      },

      {
        id: "mock-photo-sequence",
        title: "Photographic Sequence",
        description:
          "Secuencias fotográficas donde la relación entre imágenes construye una historia.",
        meaning:
          "La narrativa puede aparecer en el montaje entre imágenes.",
        kind: "visual",
        category: "Fotografía",
        keywords: [
          "fotografía",
          "secuencia",
          "montaje",
          "narrativa",
          "imagen",
          "ritmo",
        ],
        reason:
          "Una secuencia fotográfica puede aportar una estructura narrativa aplicable a otros formatos.",
      },

      {
        id: "mock-sound-storytelling",
        title: "Sound Storytelling",
        description:
          "Narrativas donde la voz, el silencio y el paisaje sonoro construyen significado.",
        meaning:
          "El sonido puede dirigir la imaginación sin necesidad de mostrarlo todo.",
        kind: "narrative",
        category: "Sonido",
        keywords: [
          "sonido",
          "voz",
          "silencio",
          "podcast",
          "ritmo",
          "escucha",
          "narrativa",
        ],
        reason:
          "El sonido puede convertirse en una herramienta narrativa incluso cuando el proyecto final no sea sonoro.",
      },

      {
        id: "mock-book-structure",
        title: "Book as Narrative",
        description:
          "Estructuras editoriales donde el orden y la secuencia construyen una experiencia.",
        meaning:
          "La estructura puede convertirse en parte del significado.",
        kind: "editorial",
        category: "Libro",
        keywords: [
          "libro",
          "estructura",
          "secuencia",
          "editorial",
          "capítulos",
          "ritmo",
        ],
        reason:
          "El pensamiento editorial de un libro puede aportar estructuras útiles para otros formatos.",
      },

      {
        id: "mock-installation-space",
        title: "Installation as Experience",
        description:
          "Instalaciones donde espacio, recorrido y percepción forman parte de la narrativa.",
        meaning:
          "La experiencia puede diseñarse como un recorrido.",
        kind: "conceptual",
        category: "Arte",
        keywords: [
          "instalación",
          "espacio",
          "experiencia",
          "recorrido",
          "arte",
          "percepción",
        ],
        reason:
          "Una instalación permite pensar el contenido como una experiencia y no solo como una pieza.",
      },

      {
        id: "mock-cinematic-rhythm",
        title: "Cinematic Rhythm",
        description:
          "Lenguajes cinematográficos construidos mediante ritmo, pausa y contraste.",
        meaning:
          "El ritmo organiza la atención y la emoción.",
        kind: "cinematic",
        category: "Cine",
        keywords: [
          "cine",
          "ritmo",
          "pausa",
          "contraste",
          "montaje",
          "emoción",
        ],
        reason:
          "El ritmo cinematográfico puede aportar una estructura emocional a cualquier formato.",
      },

      {
        id: "mock-handmade-publishing",
        title: "Handmade Publishing",
        description:
          "Publicaciones donde imperfección, materia y gesto humano forman parte del lenguaje.",
        meaning:
          "La huella humana puede convertirse en identidad.",
        kind: "editorial",
        category: "Publicación",
        keywords: [
          "artesanal",
          "materia",
          "papel",
          "humano",
          "editorial",
          "imperfección",
        ],
        reason:
          "La huella humana puede aportar autenticidad y carácter propio.",
      },

      {
        id: "mock-cultural-symbols",
        title: "Cultural Symbols",
        description:
          "Referencias que utilizan símbolos culturales para condensar ideas complejas.",
        meaning:
          "Un símbolo puede comunicar una idea de forma inmediata.",
        kind: "cultural",
        category: "Cultura",
        keywords: [
          "cultura",
          "símbolo",
          "metáfora",
          "identidad",
          "memoria",
          "significado",
        ],
        reason:
          "Los símbolos pueden abrir asociaciones culturales y conceptuales inesperadas.",
      },
    ];

    const explored =
      new Set(
        input.context.exploredReferenceIds
      );

    /*
     * Construimos un pequeño campo semántico
     * a partir de la dirección del Director.
     *
     * No intentamos simular una IA completa.
     * Solo hacemos visible la lógica que después
     * resolverá el Provider real.
     */

    const direction =
      input.context.creativeDirection;

    const semanticText = [
      input.query,

      direction.creativeReading,

      ...direction.formatDirectives,

      ...direction.explorationTerritories,

      ...direction.questions,
    ]
      .join(" ")
      .toLowerCase();

    const tokens =
      semanticText
        .split(/[^a-záéíóúüñ0-9]+/i)
        .filter(
          (token) =>
            token.length > 3
        );

    const scored =
      candidates
        .filter(
          (candidate) =>
            !explored.has(candidate.id)
        )
        .map((candidate) => {

          const candidateText = [
            candidate.title,
            candidate.description,
            candidate.meaning,
            candidate.category ?? "",
            ...candidate.keywords,
          ]
            .join(" ")
            .toLowerCase();

          let score = 0;

          for (const token of tokens) {
            if (
              candidateText.includes(token)
            ) {
              score += 1;
            }
          }

          return {
            candidate,
            score,
          };
        })
        .sort(
          (a, b) =>
            b.score - a.score
        );

    /*
     * Si hay coincidencias semánticas,
     * las priorizamos.
     *
     * Si no las hay, mantenemos diversidad
     * para que la exploración no quede bloqueada.
     */

    const meaningful =
      scored.filter(
        (item) => item.score > 0
      );

    const source =
      meaningful.length > 0
        ? meaningful
        : scored;

    return source
      .slice(
        0,
        Math.max(1, input.limit)
      )
      .map(
        (item) =>
          item.candidate
      );
  }
}
