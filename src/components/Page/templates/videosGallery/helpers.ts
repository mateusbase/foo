export const menuOptions = [
  {
    id: "1",
    label: "Todas",
    key: 1,
    width: 204,
  },
  {
    id: "2",
    label: "Sem Limites para Cuidar",
    key: 2,
    width: 283,
  },
  {
    id: "3",
    label: "OC Cast",
    key: 3,
    width: 283,
  },
  {
    id: "4",
    label: "ESMO 2023 ",
    key: 4,
    width: 283,
  },
  {
    id: "5",
    label: "Oncoclínicas na ASCO 2023",
    key: 5,
    width: 283,
  },
  {
    id: "6",
    label: "Sua vida. Nossa vida.",
    key: 6,
    width: 283,
  },
  {
    id: "7",
    label: "Encontro com a Espiritualidade",
    key: 7,
    width: 283,
  },
  {
    id: "8",
    label: "11º Congresso Internacional Oncoclínicas Dana-Farber",
    key: 8,
    width: 486,
  },
  {
    id: "9",
    label: "CAR-T Cell",
    key: 9,
    width: 283,
  },
];

interface VideoCard {
  id: string;
  cardTitle: string;
  description: string;
  src: string;
  poster?: string;
}

interface VideoSection {
  id: string;
  title: string;
  subtitle?: string;
  videos: VideoCard[];
}

export const videoSectionsMock: VideoSection[] = [
  {
    id: "1",
    title: "Últimos vídeos",
    videos: [
      {
        id: "1",
        cardTitle: "Diagnóstico precoce do câncer de próstata | Episódio 11",
        description:
          "João Leite Ferreira, músico aposentado, compartilha como o acompanhamento médico e os exames regulares...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (9).png",
      },
      {
        id: "2",
        cardTitle:
          "Daniel Vargas Alessandra: Geniturinário | Cast Edição Especial SBOC 2024 #4",
        description:
          "No 4º episódio do OC Cast, edição especial SBOC 2024, o Dr. Daniel Vargas, da Oncoclínicas de Brasília...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (10).png",
      },
      {
        id: "3",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
      {
        id: "4",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
      {
        id: "5",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
    ],
  },
  {
    id: "2",
    title: "Sem Limites para Cuidar",
    subtitle:
      "Todo mundo tem uma história e boas histórias merecem ser contadas 🤍 A Oncoclínicas tem uma trajetória de crescimento, importantes avanços científicos e responsabilidade para um cuidado sem limites. A nossa história é composta por muitos personagens: pacientes, médicos, colaboradores. Diariamente, participamos de milhares de histórias e aqui contamos alguns relatos de superação e cuidado vividos na Oncoclínicas. Acompanhe!",
    videos: [
      {
        id: "6",
        cardTitle: "Diagnóstico precoce do câncer de próstata | Episódio 11",
        description:
          "João Leite Ferreira, músico aposentado, compartilha como o acompanhamento médico e os exames regulares...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (9).png",
      },
      {
        id: "7",
        cardTitle:
          "Daniel Vargas Alessandra: Geniturinário | Cast Edição Especial SBOC 2024 #4",
        description:
          "No 4º episódio do OC Cast, edição especial SBOC 2024, o Dr. Daniel Vargas, da Oncoclínicas de Brasília...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (10).png",
      },
      {
        id: "8",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
      {
        id: "9",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
      {
        id: "10",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
    ],
  },
  {
    id: "3",
    title: "OC Cast",
    subtitle:
      "Todo mundo tem uma história e boas histórias merecem ser contadas 🤍 A Oncoclínicas tem uma trajetória de crescimento, importantes avanços científicos e responsabilidade para um cuidado sem limites. A nossa história é composta por muitos personagens: pacientes, médicos, colaboradores. Diariamente, participamos de milhares de histórias e aqui contamos alguns relatos de superação e cuidado vividos na Oncoclínicas. Acompanhe!",
    videos: [
      {
        id: "11",
        cardTitle: "Diagnóstico precoce do câncer de próstata | Episódio 11",
        description:
          "João Leite Ferreira, músico aposentado, compartilha como o acompanhamento médico e os exames regulares...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (9).png",
      },
      {
        id: "12",
        cardTitle:
          "Daniel Vargas Alessandra: Geniturinário | Cast Edição Especial SBOC 2024 #4",
        description:
          "No 4º episódio do OC Cast, edição especial SBOC 2024, o Dr. Daniel Vargas, da Oncoclínicas de Brasília...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (10).png",
      },
      {
        id: "13",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
      {
        id: "14",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
      {
        id: "15",
        cardTitle:
          "Arthur Rodrigues e Marco Lessa: Gastrointestinal | Cast Edição Especial SBOC 2024 #3",
        description:
          "Neste episódio do OC Cast, o Dr. Artur Rodrigues Ferreira, oncologista clínico da Oncoclínicas de São Paulo...",
        src: "https://www.youtube.com/watch?v=8ZD9Qe7Tja4",
        poster: "/assets/images/galeria-de-videos/image (11).png",
      },
    ],
  },
];
