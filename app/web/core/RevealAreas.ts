export type RevealArea = {

  id: string;

  title: string;

  image: string;

  description: string;

  specialist: string;

  prompt: string;

  questions: string[];

};

export const REVEAL_AREAS: RevealArea[] = [

  {
    id: "identity",

    title: "IDENTIDAD",

    image: "/images/reveal/identity.jpg",

    description:
      "Descubre quién eres realmente como marca.",

    specialist: "Director de Marca",

    prompt:
      "Analiza la identidad profunda de esta marca.",

    questions: [

      "¿Quién eres?",

      "¿Qué valores te definen?",

      "¿Qué te hace diferente?",

      "¿Qué nunca deberías perder?",

    ],

  },

  {
    id: "purpose",

    title: "PROPÓSITO",

    image: "/images/reveal/purpose.jpg",

    description:
      "Encuentra el porqué de tu proyecto.",

    specialist: "Estratega",

    prompt:
      "Descubre el propósito auténtico del proyecto.",

    questions: [

      "¿Por qué existe?",

      "¿Qué problema resuelve?",

      "¿Qué transformación genera?",

      "¿Qué impacto quiere dejar?",

    ],

  },

  {
    id: "value",

    title: "PROPUESTA DE VALOR",

    image: "/images/reveal/value.jpg",

    description:
      "Define el valor que aportas.",

    specialist: "Consultor",

    prompt:
      "Analiza la propuesta de valor.",

    questions: [

      "¿Qué ofreces?",

      "¿Qué beneficio obtiene el cliente?",

      "¿Qué te hace único?",

      "¿Por qué deberían elegirte?",

    ],

  },

  {
    id: "voice",

    title: "VOZ",

    image: "/images/reveal/voice.jpg",

    description:
      "Descubre cómo habla tu marca.",

    specialist: "Copywriter",

    prompt:
      "Define la voz y personalidad verbal.",

    questions: [

      "¿Cómo hablas?",

      "¿Qué emociones transmites?",

      "¿Qué palabras utilizas?",

      "¿Qué tono evitas?",

    ],

  },

  {
    id: "visual",

    title: "UNIVERSO VISUAL",

    image: "/images/reveal/visual.jpg",

    description:
      "Construye un lenguaje visual coherente.",

    specialist: "Director de Arte",

    prompt:
      "Define el universo visual.",

    questions: [

      "¿Qué estética representa la marca?",

      "¿Qué colores predominan?",

      "¿Qué referencias inspiran?",

      "¿Qué atmósfera transmite?",

    ],

  },

  {
    id: "communication",

    title: "COMUNICACIÓN",

    image: "/images/reveal/communication.jpg",

    description:
      "Organiza cómo conectar con las personas.",

    specialist: "Director Creativo",

    prompt:
      "Diseña la estrategia de comunicación.",

    questions: [

      "¿A quién hablas?",

      "¿Qué mensajes son esenciales?",

      "¿Qué canales utilizarás?",

      "¿Qué experiencia quieres crear?",

    ],

  },

  {
    id: "project",

    title: "PROYECTO",

    image: "/images/reveal/project.jpg",

    description:
      "Da forma a una idea completa.",

    specialist: "Project Lead",

    prompt:
      "Estructura el proyecto.",

    questions: [

      "¿Qué quieres construir?",

      "¿Qué recursos tienes?",

      "¿Qué falta?",

      "¿Cuál será el siguiente paso?",

    ],

  },

  {
    id: "idea",

    title: "IDEA",

    image: "/images/reveal/idea.jpg",

    description:
      "Convierte una intuición en una oportunidad.",

    specialist: "Creative Director",

    prompt:
      "Explora y desarrolla la idea.",

    questions: [

      "¿Cuál es la intuición inicial?",

      "¿Qué potencial tiene?",

      "¿Qué podría convertirse?",

      "¿Qué necesita para crecer?",

    ],

  },

];

export function getRevealArea(id: string): RevealArea | undefined {

  return REVEAL_AREAS.find(

    area => area.id === id

  );

}