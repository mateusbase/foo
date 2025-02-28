type LaserBenefit = {
  id: number;
  title: string;
  text?: string;
  isList?: boolean;
  listItems?: string[];
  icon: string;
};

const baseUrl = "/assets/images/oc-estomatologia/icons";

const laserBenefitsMock: LaserBenefit[] = [
  {
    id: 1,
    title: "Antes",
    isList: false,
    text: "Preparação da cavidade oral para garantir saúde bucal livre de infecções.",
    icon: `${baseUrl}/image.svg`,
  },
  {
    id: 2,
    title: "Durante",
    isList: true,
    listItems: [
      "Alívio de desconfortos e sintomas agudos;",
      "Prevenção de infecções secundárias;",
      "Tratamento de mucosite, infecções oportunistas, xerostomia, entre outros.",
    ],
    icon: `${baseUrl}/image (1).svg`,
  },
  {
    id: 3,
    title: "Depois",
    isList: false,
    text: "Manutenção da saúde bucal, prevenindo e tratando possíveis sequelas, como necroses ósseas, e sintomas tardios.",
    icon: `${baseUrl}/image (2).svg`,
  },
];

export { laserBenefitsMock };
export type { LaserBenefit };
