export interface SpecialtyCareArea {
  title: string;
  description: string;
}

export interface SpecialtyDetailCard {
  title: string;
  summary: string;
  description: string;
  items?: string[];
  whatsappContext?: string;
  icon?: string;
}

export interface SpecialtyPageData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  doctorSlugs?: string[];

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

  cards?: SpecialtyDetailCard[];
}

/* -------------------------------------------------------------------------- */
/*                                  UROLOGÍA                                  */
/* -------------------------------------------------------------------------- */

export const urology: SpecialtyPageData = {
  slug: "urologia",

  title: "Urología",

  seoTitle: "Urología | Pro Medical GDL",

  doctorSlugs: ["carlos-alejandro-gonzalez-zepeda"],

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

    cards: [
    {
      title: "Próstata",
      icon: "prostate",
      summary:
        "Procedimientos para padecimientos prostáticos y obstrucción urinaria.",
      description:
        "La atención urológica de la próstata incluye diferentes alternativas quirúrgicas cuya indicación depende del padecimiento, sus características y la valoración individual del paciente.",
      items: [
        "Resección transuretral de próstata (RTUP)",
        "HoLEP — enucleación prostática con láser",
        "Prostatectomía radical",
      ],
      whatsappContext: "una valoración relacionada con la próstata",
    },

    {
      title: "Cálculos urinarios",
      icon: "kidney-stone",
      summary:
        "Alternativas de tratamiento para cálculos renales y ureterales.",
      description:
        "Los cálculos del riñón o del uréter pueden requerir diferentes procedimientos según su tamaño, localización y características. La valoración urológica permite determinar la alternativa adecuada para cada caso.",
      items: [
        "Ureteroscopia con litotricia láser",
        "Litotricia extracorpórea por ondas de choque (LEOC)",
        "Nefrolitotomía percutánea (NLPC)",
        "Colocación de catéter JJ",
      ],
      whatsappContext: "cálculos urinarios",
    },

    {
      title: "Riñón y vejiga",
      icon: "urinary-system",
      summary:
        "Valoración quirúrgica de padecimientos que afectan riñón y vejiga.",
      description:
        "Algunos padecimientos del riñón y la vejiga pueden requerir tratamiento quirúrgico. La extensión y tipo de procedimiento se determinan de acuerdo con el diagnóstico y las características particulares de cada paciente.",
      items: [
        "Nefrectomía parcial",
        "Nefrectomía radical",
        "Cistectomía parcial",
        "Cistectomía radical",
      ],
      whatsappContext: "una valoración relacionada con riñón o vejiga",
    },

    {
      title: "Salud reproductiva masculina",
      icon: "male-reproductive",
      summary:
        "Procedimientos relacionados con anticoncepción y salud reproductiva masculina.",
      description:
        "La urología también comprende procedimientos relacionados con la salud reproductiva masculina. Cada alternativa requiere una valoración previa y orientación médica sobre sus indicaciones e implicaciones.",
      items: [
        "Vasectomía",
        "Varicocelectomía",
      ],
      whatsappContext: "salud reproductiva masculina",
    },

    {
      title: "Testículo y escroto",
      icon: "testicle",
      summary:
        "Tratamiento quirúrgico de padecimientos testiculares y escrotales.",
      description:
        "Existen diferentes padecimientos del testículo y del escroto que pueden requerir manejo quirúrgico. El procedimiento se determina después de una valoración urológica individual.",
      items: [
        "Varicocelectomía",
        "Hidrocelectomía",
        "Orquiectomía cuando está indicada",
      ],
      whatsappContext: "una valoración testicular o escrotal",
    },

    {
      title: "Pene y prepucio",
      icon: "penis",
      summary:
        "Valoración y procedimientos quirúrgicos de pene y prepucio.",
      description:
        "La atención urológica incluye procedimientos para determinadas condiciones del pene y prepucio. La indicación y técnica se establecen de acuerdo con la edad, condición clínica y valoración del especialista.",
      items: [
        "Circuncisión",
        "Cirugía de hipospadias",
      ],
      whatsappContext: "una valoración relacionada con pene o prepucio",
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

  doctorSlugs: ["jose-miguel-huerta"],

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

    cards: [
    {
      title: "Reemplazo articular",
      icon: "joint-replacement",
      summary:
        "Valoración y tratamiento quirúrgico de articulaciones dañadas.",
      description:
        "El reemplazo articular es un procedimiento quirúrgico en el que una articulación dañada se sustituye parcial o totalmente por componentes artificiales llamados prótesis, con objetivos como disminuir el dolor y favorecer la función y movilidad.",
      items: [
        "Reemplazo de cadera",
        "Reemplazo de rodilla",
        "Reemplazo de hombro",
      ],
      whatsappContext: "reemplazo articular",
    },

    {
      title: "Lesiones deportivas",
      icon: "sports-injury",
      summary:
        "Atención de lesiones relacionadas con la actividad física y deportiva.",
      description:
        "Las lesiones deportivas pueden afectar músculos, tendones, ligamentos, huesos, cartílagos o articulaciones. Su valoración permite determinar el tratamiento adecuado y orientar la recuperación funcional y el retorno a la actividad deportiva.",
      items: [
        "Esguinces",
        "Luxaciones",
        "Fracturas",
        "Tendinitis",
        "Lesiones musculares",
        "Lesiones de menisco",
        "Lesiones de ligamentos",
      ],
      whatsappContext: "una lesión deportiva",
    },

    {
      title: "Fracturas",
      icon: "fracture",
      summary:
        "Valoración especializada de fracturas y lesiones óseas.",
      description:
        "Una fractura es la pérdida de continuidad o ruptura parcial o completa de un hueso. Puede producirse por traumatismos, sobrecarga repetitiva o condiciones que debilitan el tejido óseo.",
      items: [
        "Fractura de muñeca",
        "Fractura de clavícula",
        "Fractura de tobillo",
        "Fractura de cadera",
        "Fractura de húmero",
        "Fractura de tibia y peroné",
        "Fractura de costillas",
        "Fractura de vértebras",
      ],
      whatsappContext: "una fractura",
    },

    {
      title: "Trauma por accidentes",
      icon: "trauma",
      summary:
        "Atención de lesiones musculoesqueléticas ocasionadas por accidentes.",
      description:
        "Los accidentes automovilísticos, de motocicleta, laborales, deportivos y las caídas pueden ocasionar diferentes tipos de lesiones que requieren valoración por Traumatología y Ortopedia.",
      items: [
        "Fracturas",
        "Luxaciones",
        "Esguinces",
        "Lesiones musculares y tendinosas",
        "Lesiones de ligamentos",
        "Lesiones de columna",
        "Traumatismos de pelvis",
        "Trauma de mano",
        "Politraumatismo",
      ],
      whatsappContext: "una lesión ocasionada por un accidente",
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

  doctorSlugs: ["ricardo-sevilla-vizcaino"],

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

    cards: [
    {
      title: "Hernia inguinal",
      icon: "abdominal-wall",
      summary:
        "Valoración y tratamiento quirúrgico de hernias localizadas en la región inguinal.",
      description:
        "La reparación de una hernia inguinal busca reposicionar el tejido herniado y reforzar la pared abdominal. Dependiendo de las características del paciente y del caso, el especialista puede considerar un abordaje abierto o laparoscópico.",
      items: [
        "Cirugía abierta",
        "Cirugía laparoscópica",
        "Reparación de la pared abdominal",
        "Uso de malla cuando está indicado",
      ],
      whatsappContext: "una hernia inguinal",
    },

    {
      title: "Hernia umbilical",
      icon: "abdominal-wall",
      summary:
        "Tratamiento quirúrgico de hernias localizadas alrededor del ombligo.",
      description:
        "La cirugía de hernia umbilical permite corregir el defecto de la pared abdominal localizado alrededor del ombligo. El procedimiento puede realizarse mediante cirugía abierta o laparoscópica, de acuerdo con la valoración del especialista.",
      items: [
        "Cirugía abierta",
        "Cirugía laparoscópica",
        "Reparación de la pared abdominal",
        "Uso de malla cuando está indicado",
      ],
      whatsappContext: "una hernia umbilical",
    },

    {
      title: "Hernia ventral",
      icon: "abdominal-wall",
      summary:
        "Valoración y reparación quirúrgica de hernias de la pared abdominal.",
      description:
        "Las hernias ventrales aparecen en diferentes zonas de la pared abdominal. Su tratamiento quirúrgico busca reposicionar el tejido herniado y reforzar la zona debilitada, mediante un abordaje seleccionado de acuerdo con cada caso.",
      items: [
        "Cirugía abierta",
        "Cirugía laparoscópica",
        "Reparación de la pared abdominal",
        "Uso de malla cuando está indicado",
      ],
      whatsappContext: "una hernia ventral",
    },

    {
      title: "Hernia hiatal",
      icon: "stomach",
      summary:
        "Valoración quirúrgica de hernia hiatal y sus alternativas de tratamiento.",
      description:
        "La hernia hiatal ocurre cuando una parte del estómago se desplaza hacia el tórax a través del diafragma. En los casos en que está indicado tratamiento quirúrgico, puede considerarse un abordaje laparoscópico para reposicionar el estómago y reparar la zona afectada.",
      items: [
        "Valoración especializada",
        "Cirugía laparoscópica cuando está indicada",
        "Reposicionamiento del estómago",
        "Reparación de la zona afectada",
      ],
      whatsappContext: "una hernia hiatal",
    },

    {
      title: "Apendicectomía",
      icon: "appendix",
      summary:
        "Tratamiento quirúrgico para la extracción del apéndice cuando está indicado.",
      description:
        "La apendicectomía consiste en retirar el apéndice cuando existe una condición que requiere tratamiento quirúrgico, como la apendicitis. Dependiendo de la valoración médica, puede realizarse mediante cirugía abierta o laparoscópica.",
      items: [
        "Cirugía abierta",
        "Cirugía laparoscópica",
        "Atención de apendicitis",
        "Valoración quirúrgica individual",
      ],
      whatsappContext: "una valoración relacionada con el apéndice",
    },

    {
      title: "Vesícula biliar",
      icon: "gallbladder",
      summary:
        "Valoración y tratamiento quirúrgico de padecimientos de la vesícula biliar.",
      description:
        "La colecistectomía es el procedimiento mediante el cual se retira la vesícula biliar cuando existe una indicación médica, frecuentemente relacionada con cálculos biliares. El abordaje laparoscópico utiliza pequeñas incisiones, una cámara e instrumentos especializados.",
      items: [
        "Colecistectomía laparoscópica",
        "Cálculos biliares",
        "Abordaje mínimamente invasivo",
        "Valoración quirúrgica individual",
      ],
      whatsappContext: "un problema relacionado con la vesícula biliar",
    },

    {
      title: "Lipomas",
      icon: "lipoma",
      summary:
        "Valoración y extirpación quirúrgica de lesiones compatibles con lipomas.",
      description:
        "Un lipoma es una acumulación de tejido graso debajo de la piel. Cuando existe indicación médica, puede retirarse mediante un procedimiento quirúrgico. La valoración previa permite determinar las características de la lesión y el tratamiento adecuado.",
      items: [
        "Valoración de la lesión",
        "Extirpación quirúrgica",
        "Piel y tejidos blandos",
      ],
      whatsappContext: "la valoración de un lipoma",
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