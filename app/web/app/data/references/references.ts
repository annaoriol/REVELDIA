import { Reference } from "./types";

export const references: Reference[] = [
  {
    id: "leica",
    title: "Leica",
    category: "Fotografía",
    heroImage: "/images/reveal/visual.jpg",
    orientation: "landscape",
    featured: true,
    description: "",
    history: "",
    learning: "",
    keywords: ["minimalismo", "fotografía"],
    related: ["braun", "apple"],
  },
  {
    id: "braun",
    title: "Braun",
    category: "Producto",
    heroImage: "/images/reveal/identity.jpg",
    orientation: "portrait",
    featured: false,
    description: "",
    history: "",
    learning: "",
    keywords: ["dieter rams"],
    related: ["apple"],
  },
];