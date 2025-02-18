import {
  ProstateIcon,
  BreastIcon,
  ColorectalIcon,
  LungIcon,
  ThyroidIcon,
  StomachIcon,
  SkinIcon,
  EsophagusIcon,
} from "@/components/Icons";
import MouthIcon from "@/components/Icons/MouthIcon";
import { Image } from "@heroui/react";

export const cancerTypesMock = [
  {
    id: 1,
    name: "Próstata",
    description:
      "É o segundo tipo mais comum entre os homens e atinge principalmente pessoas com mais de 65 anos.",
    icon: <ProstateIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/pros.png" alt="Prostate" />
    ),
  },
  {
    id: 2,
    name: "Mama",
    description:
      "Pode atingir os dois sexos, mas é raro em homens. É o segundo tipo de câncer mais comum nas mulheres.",
    icon: <BreastIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/mama.png" alt="Prostate" />
    ),
  },
  {
    id: 3,
    name: "Colorretal",
    description:
      "Pode atingir os dois sexos, mas é raro em homens. É o segundo tipo de câncer mais comum nas mulheres.",
    icon: <ColorectalIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/colo.png" alt="Prostate" />
    ),
  },
  {
    id: 4,
    name: "Pulmão",
    description:
      "É o tipo mais incidente e que causa o maior número de mortes em todo o mundo.",
    icon: <LungIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/pul.png" alt="Prostate" />
    ),
  },
  {
    id: 5,
    name: "Tireóide",
    description:
      "É o câncer mais comum da região da cabeça e pescoço e afeta três vezes mais as mulheres do que os homens.",
    icon: <ThyroidIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/tire.png" alt="Prostate" />
    ),
  },
  {
    id: 6,
    name: "Estômago",
    description:
      "É um câncer de desenvolvimento lento e mais comum em homens acima dos 60 anos.",
    icon: <StomachIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/esto.png" alt="Prostate" />
    ),
  },
  {
    id: 7,
    name: "Pele não melanoma",
    description:
      "Há dois tipos: o melanoma, mais grave, e o não melanoma, o mais comum no país e o quinto mais incidente no mundo.",
    icon: <SkinIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/melanoma.png" alt="Prostate" />
    ),
  },
  {
    id: 8,
    name: "Esôfago",
    description:
      "É o oitavo mais frequente no mundo, e sua incidência em homens é cerca de duas vezes maior do que em mulheres.",
    icon: <EsophagusIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/eso.png" alt="Prostate" />
    ),
  },
  {
    id: 9,
    name: "Boca",
    description:
      "O tabagismo aumenta em até dez vezes as chances de desenvolver esse tipo de câncer.",
    icon: <MouthIcon />,
    icon2: (
      <Image src="/assets/images/tipos-de-cancer/boca.png" alt="Prostate" />
    ),
  },
];
