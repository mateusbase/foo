// practicityMock.ts

export interface PracticityItem {
  id: number;
  titulo: string;
  descricao: string;
  icone: string;
}

export const practicityMock: PracticityItem[] = [
  {
    id: 1,
    titulo: "Telemedicina",
    descricao:
      "Atendimento a distância como padrão de excelência Oncoclínicas.",
    icone: "/assets/images/app-oncoclinicas/cards/image 56.svg",
  },
  {
    id: 2,
    titulo: "Notificações e lembretes",
    descricao: "Para você não perder consultas e exames agendados.",
    icone: "/assets/images/app-oncoclinicas/cards/image.svg",
  },
  {
    id: 3,
    titulo: "Contato com equipe de cuidados",
    descricao:
      "Visualize a sua agenda, reagende ou cancele consultas quando precisar.",
    icone: "/assets/images/app-oncoclinicas/cards/image (1).svg",
  },
  {
    id: 4,
    titulo: "Contato com equipe de cuidados",
    descricao:
      "Atendimento a distância como padrão de excelência Oncoclínicas.",
    icone: "/assets/images/app-oncoclinicas/cards/image (2).svg",
  },
];
