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
    name: "Traumatología y Ortopedia",
    slug: "traumatologia-ortopedia",
    shortDescription:
      "Diagnóstico y tratamiento de lesiones, articulaciones, huesos y sistema musculoesquelético.",
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