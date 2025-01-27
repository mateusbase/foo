import {
  AbdomenIcon,
  BodyIcon,
  HeadIcon,
  LowerBellyIcon,
  NeckIcon,
  OthersIcon,
  ThoraxBackIcon,
} from "@/components/Icons";

import {
  BreastIcon,
  ColorectalIcon,
  EsophagusIcon,
  LungIcon,
  ProstateIcon,
  SkinIcon,
  StomachIcon,
  ThyroidIcon,
  MouthIcon,
} from "@/components/Icons";

export const bodyRegionsMock = [
  {
    id: 1,
    label: "Todos",
    icon: <BodyIcon />,
  },
  {
    id: 2,
    label: "Abdômen",
    icon: <AbdomenIcon />,
  },
  {
    id: 3,
    label: "Baixo Ventre",
    icon: <LowerBellyIcon />,
  },
  {
    id: 4,
    label: "Cabeça",
    icon: <HeadIcon />,
  },
  {
    id: 5,
    label: "Outros",
    icon: <OthersIcon />,
  },
  {
    id: 6,
    label: "Pescoço",
    icon: <NeckIcon />,
  },
  {
    id: 7,
    label: "Tórax e Costas",
    icon: <ThoraxBackIcon />,
  },
];

export const iconMap = {
  1: <ProstateIcon />,
  2: <BreastIcon />,
  3: <ColorectalIcon />,
  4: <LungIcon />,
  5: <ThyroidIcon />,
  6: <StomachIcon />,
  7: <SkinIcon />,
  8: <EsophagusIcon />,
  9: <MouthIcon />,
};
