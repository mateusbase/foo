import Committees from "./components/Committees";
import HowItWorks from "./components/HowItWorks";
import OpenClinicalStudies from "./components/OpenClinicalStudies";

type MenuContent = {
  [key: number]: JSX.Element;
};

export const menuContent: MenuContent = {
  1: <HowItWorks />,
  2: <OpenClinicalStudies />,
  3: <div />,
  4: <Committees />,
  5: <div />,
  6: <div />,
  7: <div />,
  8: <div />,
};

export const clinicalResearchs = [
  {
    id: 1,
    title: "BGB-11417-201",
    unity: "OC Oncoclínicas RJ",
    description:
      "Um estudo de fase 2 multicêntrico, aberto e de braço único para avaliar a eficácia, segurança e farmacocinética do inibidor de Bcl-2 BGB-11417 em pacientes com linfoma de células do manto recidivado ou refratário",
  },
  {
    id: 2,
    title: "BGB-11417-201",
    unity: "OC Oncoclínicas RJ",
    description:
      "Um estudo de fase 2 multicêntrico, aberto e de braço único para avaliar a eficácia, segurança e farmacocinética do inibidor de Bcl-2 BGB-11417 em pacientes com linfoma de células do manto recidivado ou refratário",
  },
  {
    id: 3,
    title: "BGB-11417-201",
    unity: "OC Oncoclínicas RJ",
    description:
      "Um estudo de fase 2 multicêntrico, aberto e de braço único para avaliar a eficácia, segurança e farmacocinética do inibidor de Bcl-2 BGB-11417 em pacientes com linfoma de células do manto recidivado ou refratário",
  },
  {
    id: 4,
    title: "BGB-11417-201",
    unity: "OC Oncoclínicas RJ",
    description:
      "Um estudo de fase 2 multicêntrico, aberto e de braço único para avaliar a eficácia, segurança e farmacocinética do inibidor de Bcl-2 BGB-11417 em pacientes com linfoma de células do manto recidivado ou refratário",
  },
  {
    id: 5,
    title: "BGB-11417-201",
    unity: "OC Oncoclínicas RJ",
    description:
      "Um estudo de fase 2 multicêntrico, aberto e de braço único para avaliar a eficácia, segurança e farmacocinética do inibidor de Bcl-2 BGB-11417 em pacientes com linfoma de células do manto recidivado ou refratário",
  },
  {
    id: 6,
    title: "BGB-11417-201",
    unity: "OC Oncoclínicas RJ",
    description:
      "Um estudo de fase 2 multicêntrico, aberto e de braço único para avaliar a eficácia, segurança e farmacocinética do inibidor de Bcl-2 BGB-11417 em pacientes com linfoma de células do manto recidivado ou refratário",
  },
  {
    id: 7,
    title: "BGB-11417-201",
    unity: "OC Oncoclínicas RJ",
    description:
      "Um estudo de fase 2 multicêntrico, aberto e de braço único para avaliar a eficácia, segurança e farmacocinética do inibidor de Bcl-2 BGB-11417 em pacientes com linfoma de células do manto recidivado ou refratário",
  },
];
