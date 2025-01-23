import GeneralIcon from "@/components/Icons/GeneralIcon";
import TypeOfCancerIcon from "@/components/Icons/TypeOfCancerIcon";
import TreatmentIcon from "@/components/Icons/TreatmentIcon";
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
    icon: (
      <GeneralIcon className="size-14 text-primary-foreground lg:size-16" />
    ),
  },
  {
    id: 2,
    label: "Tipos de câncer",
    icon: (
      <TypeOfCancerIcon className="size-14 text-primary-foreground lg:size-16" />
    ),
  },
  {
    id: 3,
    label: "Tratamentos",
    icon: (
      <TreatmentIcon className="size-14 text-primary-foreground lg:size-16" />
    ),
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
