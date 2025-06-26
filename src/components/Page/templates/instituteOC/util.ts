export const events = [
  {
    id: "1",
    path: "/eventos/11o-congresso-oncoclinicas",
    name: "11º Congresso Internacional Oncoclínicas DANA-FARBER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem ullamcorper.",

    dateRange: {
      from: "2023-09-23",
      to: "2023-10-07",
    },

    hour: "Das 9h às 19h",
    location: "WTC Event Center São Paulo",

    images: {
      background: {
        alt: "Banner do evento Outubro Rosa",
        width: 1200,
        height: 600,
        key: "october_event_banner",
        url: "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
      },
      foreground: {
        alt: "Logo do evento",
        width: 400,
        height: 400,
        key: "logo_evento",
        url: "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
      },
    },

    type: {
      name: "Congresso",
      path: "/tipos/congressos",
    },

    topics: [
      {
        name: "Oncologia",
        path: "/topicos/oncologia",
      },
      "Tecnologia",
    ],
  },
  {
    id: "2",
    path: "/eventos/simposio-oncologia-inovacoes",
    name: "Simpósio de Oncologia e Inovações Tecnológicas",
    description:
      "Simpósio focado nas inovações tecnológicas no tratamento oncológico. Participe deste importante evento científico.",

    dateRange: {
      from: "2023-10-15",
      to: "2023-10-15",
    },

    hour: "Das 8h às 18h",
    location: "Centro de Convenções Rebouças",

    images: {
      background: {
        alt: "Banner do simpósio",
        width: 1200,
        height: 600,
        key: "simposio_banner",
        url: "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
      },
      foreground: {
        alt: "Logo do simpósio",
        width: 400,
        height: 400,
        key: "logo_simposio",
        url: "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
      },
    },

    type: "Simpósio",
    topics: ["Oncologia", "Inovação"],
  },
];

export const services = [
  {
    subtitle: "Conheça",
    serviceTitle: "Comitê nacional de pesquisa",
    serviceDescription:
      "Confira os profissionais que integram o Comitê Nacional de Pesquisa Clínica, Equipe de Abrangência Nacional.",
    actionButtonText: "Ver mais",
    backgroundImageUrl:
      "https://i.postimg.cc/sgjwLq1w/Captura-de-tela-2024-11-19-125216.png",
  },
  {
    subtitle: "Capacitação e treinamento",
    serviceTitle: "Parcerias para ensino",
    serviceDescription:
      "Conheça as instituições parceiras do Grupo para ensino, pesquisa, eventos, capacitação, treinamento e atualização de profissionais.",
    actionButtonText: "Descubra",
    backgroundImageUrl:
      "https://i.postimg.cc/sgjwLq1w/Captura-de-tela-2024-11-19-125216.png",
  },
  {
    subtitle: "Descubra",
    serviceTitle: "Estudos clínicos abertos",
    serviceDescription:
      "Contribua com o desenvolvimento de soluções para a saúde e qualidade de vida de todos.",
    actionButtonText: "Ver detalhes",
    backgroundImageUrl:
      "https://i.postimg.cc/sgjwLq1w/Captura-de-tela-2024-11-19-125216.png",
  },
];

export const videosContents = [
  {
    id: 1,
    title: "OC TEOTEC",
    description:
      "O maior curso preparatório para prova de título de especialista em Oncologia Clínica",
  },
  {
    id: 2,
    title: "OC Academia",
    description:
      "O maior curso preparatório para prova de título de especialista em Oncologia Clínica",
  },
  {
    id: 3,
    title: "Cursos de Extensão",
    description:
      "O maior curso preparatório para prova de título de especialista em Oncologia Clínica",
  },
  {
    id: 4,
    title: "Cursos de Imersão",
    description:
      "O maior curso preparatório para prova de título de especialista em Oncologia Clínica",
  },
  {
    id: 5,
    title: "Cursos de Extensão",
    description:
      "O maior curso preparatório para prova de título de especialista em Oncologia Clínica",
  },
];
