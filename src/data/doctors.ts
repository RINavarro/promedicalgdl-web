export interface DoctorCredential {
  label: string;
  value: string;
}

export interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  image: string;
  credentials: DoctorCredential[];
}

export const doctors: Doctor[] = [
  {
    slug: "jose-miguel-huerta",
    name: "Dr. José Miguel Huerta",
    specialty: "Traumatología y Ortopedia",
    image: "/images/doctors/dr-jose-miguel-huerta.jpeg",

    credentials: [
      {
        label: "CED. PROF.",
        value: "1042885",
      },
      {
        label: "CED. FED. ESP.",
        value: "3223244",
      },
      {
        label: "R. ESP. JAL.",
        value: "40 (12-1/25)E",
      },
      {
        label: "C.M.O.T.",
        value: "14/0696/20",
      },
      {
        label: "P.E.J.",
        value: "6388 (12-I)",
      },
    ],
  },

   {
    slug: "ricardo-sevilla-vizcaino",
    name: "Dr. Ricardo Sevilla Vizcaíno",
    specialty: "Cirugía General",
    image: "/images/doctors/dr-ricardo-sevilla-vizcaino.jpeg",

    credentials: [
      {
        label: "DGP",
        value: "5836800",
      },
      {
        label: "Cédula de Especialidad",
        value: "9540283",
      },
    ],
  },

  {
    slug: "carlos-alejandro-gonzalez-zepeda",
    name: "Dr. Carlos Alejandro González Zepeda",
    specialty: "Urología",
    image: "/images/doctors/dr-carlos-alejandro-gonzalez-zepeda.jpeg",

    credentials: [
        {
        label: "DGP",
        value: "10609006",
        },
        {
        label: "Céd. Prof. Esp.",
        value: "12843521",
        },
    ],
    },

];

export const getDoctorBySlug = (slug: string) =>
  doctors.find((doctor) => doctor.slug === slug);