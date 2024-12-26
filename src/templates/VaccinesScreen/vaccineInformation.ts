type VaccineInformation = {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
};

export const vaccineInformation: VaccineInformation[] = [
  {
    id: 1,
    title: "Conheça o melhor programa de vacinas",
    description:
      "A Oncoclínicas sabe da importância da imunização para a prevenção de doenças e a promoção da saúde dos pacientes e seus familiares. Por isso, está implantando um Programa de Vacinas em diversas unidades do grupo.",
    iconUrl: "/assets/images/vaccine_card_1.png",
  },
  {
    id: 2,
    title: "Quem pode se vacinar?",
    description:
      "Todos os pacientes e familiares das unidades Oncoclínicas credenciadas para esse serviço.",
    iconUrl: "/assets/images/vaccine_card_2.png",
  },
  {
    id: 3,
    title: "Mais proteção e saúde para voce",
    description:
      "O principal objetivo é a prevenção de doenças, o aumento da cobertura vacinal do paciente oncológico e a promoção da saúde, reforçando a linha de cuidado integral e personalizada que o Grupo Oncoclínicas oferece a cada um de seus pacientes.",
    iconUrl: "/assets/images/vaccine_card_3.png",
  },
];
