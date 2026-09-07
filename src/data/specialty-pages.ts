export interface SpecialtyCareArea {
  title: string;
  description: string;
}

export interface SpecialtyPageData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;

  eyebrow: string;
  heroDescription: string;

  careSectionTitle: string;
  careSectionHighlight: string;
  careSectionDescription: string;
  careAreas: SpecialtyCareArea[];

  infoEyebrow: string;
  infoTitle: string;
  infoHighlight: string;
  infoParagraphs: string[];

  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

/* -------------------------------------------------------------------------- */
/*                                  UROLOGÍA                                  */
/* -------------------------------------------------------------------------- */

export const urology: SpecialtyPageData = {
  slug: "urologia",

  title: "Urología",

  seoTitle: "Urología | Pro Medical GDL",

  seoDescription:
    "Atención especializada en urología, salud urinaria y salud urológica masculina en Pro Medical GDL.",

  eyebrow: "Especialidad médica",

  heroDescription:
    "Atención especializada en el cuidado del sistema urinario y la salud urológica, mediante valoración médica individual y un enfoque profesional, confidencial y personalizado.",

  careSectionTitle: "Atención urológica enfocada en",
  careSectionHighlight: "cada paciente",

  careSectionDescription:
    "La especialidad de urología comprende distintas áreas de la salud urinaria y masculina. Cada caso requiere una valoración médica individual.",

  careAreas: [
    {
      title: "Salud urinaria",
      description:
        "Valoración especializada del sistema urinario con atención individual y profesional.",
    },
    {
      title: "Salud prostática",
      description:
        "Atención y seguimiento urológico de acuerdo con las necesidades particulares de cada paciente.",
    },
    {
      title: "Cálculos urinarios",
      description:
        "Valoración médica especializada de padecimientos relacionados con cálculos del sistema urinario.",
    },
    {
      title: "Infecciones urinarias",
      description:
        "Evaluación médica de problemas urinarios que requieren atención y seguimiento profesional.",
    },
    {
      title: "Salud sexual masculina",
      description:
        "Atención confidencial y profesional de aspectos relacionados con la salud sexual masculina.",
    },
    {
      title: "Valoración preventiva",
      description:
        "Revisión urológica individual de acuerdo con edad, antecedentes y necesidades de cada paciente.",
    },
  ],

  infoEyebrow: "Atención profesional",

  infoTitle: "¿Qué atiende la",
  infoHighlight: "urología?",

  infoParagraphs: [
    "La urología es la especialidad médica encargada de la valoración y tratamiento de padecimientos relacionados con el sistema urinario y con aspectos del aparato reproductor masculino.",
    "La atención debe adaptarse a cada paciente, considerando su historia clínica, antecedentes y necesidades particulares.",
  ],

  ctaEyebrow: "Atención urológica",

  ctaTitle: "Agenda una valoración con nuestro especialista",

  ctaDescription:
    "Recibe orientación médica profesional en un entorno confidencial y personalizado.",

  ctaLabel: "Agendar valoración",
};

/* -------------------------------------------------------------------------- */
/*                           TRAUMA Y ORTOPEDIA                               */
/* -------------------------------------------------------------------------- */

export const traumaOrthopedics: SpecialtyPageData = {
  slug: "trauma-ortopedia",

  title: "Trauma y Ortopedia",

  seoTitle: "Trauma y Ortopedia | Pro Medical GDL",

  seoDescription:
    "Atención especializada en trauma, ortopedia, fracturas, lesiones deportivas y padecimientos musculoesqueléticos en Pro Medical GDL.",

  eyebrow: "Especialidad médica",

  heroDescription:
    "Atención especializada en lesiones musculoesqueléticas, fracturas, luxaciones, lesiones deportivas y padecimientos ortopédicos, mediante valoración médica individual y seguimiento profesional.",

  careSectionTitle: "Atención integral para",
  careSectionHighlight: "movilidad y recuperación",

  careSectionDescription:
    "Trauma y Ortopedia comprende la valoración y seguimiento de lesiones musculoesqueléticas y padecimientos ortopédicos en distintas regiones del cuerpo.",

  careAreas: [
    {
      title: "Fracturas y luxaciones",
      description:
        "Valoración especializada de lesiones traumáticas que afectan huesos y articulaciones.",
    },
    {
      title: "Rodilla",
      description:
        "Atención de lesiones deportivas, articulares y degenerativas relacionadas con la rodilla.",
    },
    {
      title: "Hombro",
      description:
        "Valoración de lesiones articulares, tendinosas y problemas relacionados con la estabilidad del hombro.",
    },
    {
      title: "Cadera",
      description:
        "Atención especializada de lesiones traumáticas y padecimientos ortopédicos de la cadera.",
    },
    {
      title: "Mano y muñeca",
      description:
        "Valoración de lesiones traumáticas, tendinosas, ligamentarias y alteraciones de mano y muñeca.",
    },
    {
      title: "Pie y tobillo",
      description:
        "Atención de fracturas, lesiones ligamentarias, deformidades y otros padecimientos de pie y tobillo.",
    },
    {
      title: "Lesiones deportivas",
      description:
        "Valoración y seguimiento de lesiones musculoesqueléticas relacionadas con la actividad física y deportiva.",
    },
    {
      title: "Trauma por accidentes",
      description:
        "Atención inicial y valoración especializada de lesiones provocadas por accidentes, caídas o traumatismos.",
    },
  ],

  infoEyebrow: "Atención especializada",

  infoTitle: "¿Qué atiende Trauma y",
  infoHighlight: "Ortopedia?",

  infoParagraphs: [
    "Trauma y Ortopedia es la especialidad dedicada a la valoración, tratamiento y seguimiento de lesiones musculoesqueléticas, fracturas, luxaciones y padecimientos ortopédicos.",
    "Las opciones de tratamiento se determinan después de una valoración médica individual y pueden incluir manejo conservador o procedimientos quirúrgicos, según cada caso.",
  ],

  ctaEyebrow: "Trauma y Ortopedia",

  ctaTitle: "Agenda una valoración con nuestro especialista",

  ctaDescription:
    "Recibe atención profesional para lesiones musculoesqueléticas, trauma y padecimientos ortopédicos.",

  ctaLabel: "Agendar valoración",
};
/* -------------------------------------------------------------------------- */
/*                              CIRUGÍA GENERAL                               */
/* -------------------------------------------------------------------------- */

export const generalSurgery: SpecialtyPageData = {
  slug: "cirugia-general",

  title: "Cirugía General",

  seoTitle: "Cirugía General | Pro Medical GDL",

  seoDescription:
    "Atención especializada en cirugía general, padecimientos abdominales, hernias, vesícula biliar y tejidos blandos en Pro Medical GDL.",

  eyebrow: "Especialidad médica",

  heroDescription:
    "Atención especializada para padecimientos que pueden requerir manejo quirúrgico del abdomen, aparato digestivo, pared abdominal, piel y tejidos blandos, mediante valoración médica individual y selección del abordaje adecuado para cada paciente.",

  careSectionTitle: "Atención quirúrgica con un enfoque",
  careSectionHighlight: "individual y profesional",

  careSectionDescription:
    "Cirugía General comprende la valoración y tratamiento quirúrgico de distintos padecimientos abdominales, digestivos, de la pared abdominal, piel y tejidos blandos.",

  careAreas: [
    {
      title: "Hernias inguinales",
      description:
        "Valoración y tratamiento quirúrgico de hernias localizadas en la región inguinal.",
    },
    {
      title: "Hernias umbilicales",
      description:
        "Atención especializada de hernias localizadas alrededor de la región umbilical.",
    },
    {
      title: "Hernias ventrales",
      description:
        "Valoración de hernias que afectan diferentes regiones de la pared abdominal.",
    },
    {
      title: "Hernia hiatal",
      description:
        "Valoración quirúrgica de padecimientos relacionados con hernia hiatal y selección del tratamiento de acuerdo con cada caso.",
    },
    {
      title: "Apéndice",
      description:
        "Valoración y tratamiento quirúrgico de padecimientos que pueden requerir apendicectomía.",
    },
    {
      title: "Vesícula biliar",
      description:
        "Atención quirúrgica de padecimientos de la vesícula biliar que requieren valoración especializada.",
    },
    {
      title: "Piel y tejidos blandos",
      description:
        "Valoración quirúrgica de lesiones de piel y tejidos blandos, incluyendo lipomas cuando está indicado.",
    },
    {
      title: "Cirugía abierta y laparoscópica",
      description:
        "Selección del abordaje quirúrgico de acuerdo con el padecimiento, las características clínicas y la valoración del especialista.",
    },
  ],

  infoEyebrow: "Atención quirúrgica",

  infoTitle: "¿Qué atiende Cirugía",
  infoHighlight: "General?",

  infoParagraphs: [
    "Cirugía General es una especialidad médica dedicada a la valoración y tratamiento quirúrgico de diversas enfermedades que afectan principalmente el aparato digestivo, abdomen, pared abdominal, piel y tejidos blandos.",
    "El tratamiento se determina después de una valoración médica individual. Dependiendo del padecimiento y de las características de cada paciente, pueden considerarse diferentes alternativas y abordajes quirúrgicos.",
  ],

  ctaEyebrow: "Cirugía General",

  ctaTitle: "Agenda una valoración con nuestro especialista",

  ctaDescription:
    "Recibe orientación médica especializada para determinar las alternativas de atención de acuerdo con tu caso.",

  ctaLabel: "Agendar valoración",
};