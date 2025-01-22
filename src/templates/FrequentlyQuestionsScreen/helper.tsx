import { IoAddCircle } from "react-icons/io5";
import General from "./General";

type MenuContent = {
  [key: number]: JSX.Element;
};

export const menuContent: MenuContent = {
  1: <General />,
  2: <div />,
  3: <div />,
};

export const options = [
  {
    id: 1,
    label: "Geral",
    icon: <IoAddCircle className="size-20 text-primary-foreground" />,
  },
  {
    id: 2,
    label: "Tipos de câncer",
    icon: <IoAddCircle className="size-20 text-primary-foreground" />,
  },
  {
    id: 3,
    label: "Tratamentos",
    icon: <IoAddCircle className="size-20 text-primary-foreground" />,
  },
];

export const FaqContent = [
  {
    id: 1,
    title: "O que é câncer?",
    content: "Lorem ipsum",
  },
  {
    id: 2,
    title: "O câncer tem cura?",
    content:
      "Com o avanço da medicina, as técnicas de detecção e tratamento do câncer evoluíram muito nos últimos anos. Grande parte dos tumores têm cura atualmente. Se diagnosticado precocemente, as chances de recuperação do paciente são sempre mais favoráveis.",
  },
  {
    id: 3,
    title: "Todo tumor é câncer?",
    content: "Lorem ipsum",
  },
  {
    id: 4,
    title: "O câncer é contagioso?",
    content: "Lorem ipsum",
  },
  {
    id: 5,
    title: "Qual é o tipo mais comum de câncer no país?",
    content: "Lorem ipsum",
  },
  {
    id: 6,
    title: "É verdade que atividade física reduz o risco de câncer?",
    content: "Lorem ipsum",
  },
];
