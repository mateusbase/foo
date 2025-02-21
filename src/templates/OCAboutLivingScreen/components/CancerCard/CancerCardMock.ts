interface CancerCardProps {
  id: number;
  description: string;
  icon: string;
}

const CancerCardMock: CancerCardProps[] = [
  {
    id: 1,
    description: "Pacientes diagnosticados com câncer de mama não metastático",
    icon: "/assets/images/oc-about-living/breast-cancer.svg",
  },
  {
    id: 2,
    description:
      "Pacientes diagnosticados com câncer colorretal não metastático",
    icon: "/assets/images/oc-about-living/colorectal-cancer.svg",
  },
  {
    id: 3,
    description:
      "Pacientes diagnosticados com câncer de próstata não metastático",
    icon: "/assets/images/oc-about-living/prostate-cancer.svg",
  },
];

export default CancerCardMock;
