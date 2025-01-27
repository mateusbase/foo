import {
  BreastIcon,
  ColorectalIcon,
  EsophagusIcon,
  LungIcon,
  ProstateIcon,
  SkinIcon,
  StomachIcon,
  ThyroidIcon,
} from "@/components/Icons";
import MouthIcon from "@/components/Icons/MouthIcon";

export const cancerTypesMock = [
  {
    id: 1,
    name: "Próstata",
    description:
      "É o segundo tipo mais comum entre os homens e atinge principalmente pessoas com mais de 65 anos.",
    icon: <ProstateIcon />,
  },
  {
    id: 2,
    name: "Mama",
    description:
      "Pode atingir os dois sexos, mas é raro em homens. É o segundo tipo de câncer mais comum nas mulheres.",
    icon: <BreastIcon />,
  },
  {
    id: 3,
    name: "Colorretal",
    description:
      "Pode atingir os dois sexos, mas é raro em homens. É o segundo tipo de câncer mais comum nas mulheres.",
    icon: <ColorectalIcon />,
  },
  {
    id: 4,
    name: "Pulmão",
    description:
      "É o tipo mais incidente e que causa o maior número de mortes em todo o mundo.",
    icon: <LungIcon />,
  },
  {
    id: 5,
    name: "Tireóide",
    description:
      "É o câncer mais comum da região da cabeça e pescoço e afeta três vezes mais as mulheres do que os homens.",
    icon: <ThyroidIcon />,
  },
  {
    id: 6,
    name: "Estômago",
    description:
      "É um câncer de desenvolvimento lento e mais comum em homens acima dos 60 anos.",
    icon: <StomachIcon />,
  },
  {
    id: 7,
    name: "Pele não melanoma",
    description:
      "Há dois tipos: o melanoma, mais grave, e o não melanoma, o mais comum no país e o quinto mais incidente no mundo.",
    icon: <SkinIcon />,
  },
  {
    id: 8,
    name: "Esôfago",
    description:
      "É o oitavo mais frequente no mundo, e sua incidência em homens é cerca de duas vezes maior do que em mulheres.",
    icon: <EsophagusIcon />,
  },
  {
    id: 9,
    name: "Boca",
    description:
      "O tabagismo aumenta em até dez vezes as chances de desenvolver esse tipo de câncer.",
    icon: <MouthIcon />,
  },
];
