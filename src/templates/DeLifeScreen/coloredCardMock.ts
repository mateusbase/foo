interface Button {
  text: string;
  className?: string;
  onCLick?: () => void;
}

interface ColoredCard {
  id: number;
  title: string;
  description: string;
  background: boolean;
  buttons: Button[];
}

const coloredCardMock: ColoredCard[] = [
  {
    id: 1,
    title: "Seja um parceiro",
    background: false,
    description:
      "Gostaria de saber mais para se tornar um parceiro Delife, empresa da Oncoclínicas?",
    buttons: [
      {
        text: "Cadastre-se",
        className: "bg-purpleMedium text-white",
      },
    ],
  },
  {
    id: 2,
    title: "Acesso a área de operadoras",
    background: true,
    description:
      "Área exclusiva para operadoras realizarem pedidos de medicamentos.",
    buttons: [
      {
        text: "Acesso Operadora",
        className: "bg-white text-purpleMedium",
      },
    ],
  },
];

export default coloredCardMock;
