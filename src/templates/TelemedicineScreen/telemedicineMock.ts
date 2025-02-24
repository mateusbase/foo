type Button = {
  text: string;
  className?: string;
};

type TelemedicineItem = {
  id: number;
  title: string;
  isPurple: boolean;
  description: string;
  button: Button;
};

const telemedicineMock: TelemedicineItem[] = [
  {
    id: 1,
    title: "Telemedicina",
    isPurple: false,
    description:
      "Um avanço que veio para ficar e vai muito além de um simples acompanhando à distância.",
    button: {
      text: "Agende uma consulta",
      className: "bg-purpleMedium text-white h-[54px]",
    },
  },
  {
    id: 2,
    title: "Agende uma consulta",
    isPurple: true,
    description:
      "Defina o especialista, data e horário desejados para o agendamento.",
    button: {
      text: "Acesse telemedicina",
      className: "bg-white text-purpleMedium h-[54px]",
    },
  },
  {
    id: 3,
    title: "Encontre um médico",
    isPurple: false,
    description: "Escolha a especialidade do médico que deseja consultar.",
    button: {
      text: "Encontre um médico",
      className: "bg-purpleMedium text-white h-[54px]",
    },
  },
];

export default telemedicineMock;
