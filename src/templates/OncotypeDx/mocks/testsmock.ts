interface Test {
  id: number;
  description: string;
  icon: string;
  alt: string;
}

const testsMock: Test[] = [
  {
    id: 1,
    description:
      "Pacientes com tumores de mama inicial e baixo ou alto risco de recorrência.",
    icon: "/assets/images/oncotypeDx/initial_breast.svg",
    alt: "Ícone de tumores de mama inicial",
  },
  {
    id: 2,
    description:
      "Mulheres na menopausa que apresentam linfonodos negativos ou positivos (1 a 3).",
    icon: "/assets/images/oncotypeDx/menopause_linfonodes.svg",
    alt: "Ícone de linfonodos na menopausa",
  },
  {
    id: 3,
    description: "Mulheres pré-menopausa que possuem linfonodos negativos.",
    icon: "/assets/images/oncotypeDx/premenopause_linfonodes.svg",
    alt: "Ícone de linfonodos pré-menopausa",
  },
];

export default testsMock;
