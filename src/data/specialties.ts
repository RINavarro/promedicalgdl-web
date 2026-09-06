export interface Specialty {
  name: string;
  slug: string;
  shortDescription: string;
  icon: string;
}

export const specialties: Specialty[] = [
  {
    name: "Cirugía General",
    slug: "cirugia-general",
    shortDescription:
      "Atención especializada para padecimientos que requieren valoración y tratamiento quirúrgico.",
    icon: "✚",
  },
  {
    name: "Trauma y Ortopedia",
    slug: "trauma-ortopedia",
    shortDescription:
      "Atención especializada en lesiones musculoesqueléticas, fracturas, luxaciones y padecimientos ortopédicos.",
    icon: "◇",
  }, 
  {
    name: "Urología",
    slug: "urologia",
    shortDescription:
      "Atención de padecimientos del sistema urinario y salud urológica.",
    icon: "○",
  },
];