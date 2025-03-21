import BeneficiosPesquisaClinica from "@/components/pesquisa-clinica/beneficios-pesquisa-clinica";
import ComiteDeEtica from "@/components/pesquisa-clinica/comite-de-etica";
import Comites from "@/components/pesquisa-clinica/comites";
import ComoFunciona from "@/components/pesquisa-clinica/como-funciona";
import EstudosClinicosAbertos from "@/components/pesquisa-clinica/estudos-clinicos-abertos";
import FaseEstudoClinico from "@/components/pesquisa-clinica/fase-estudo-clinico";
import PerguntasFrequentes from "@/components/pesquisa-clinica/perguntas-frequentes";
import TermosDeConsentimento from "@/components/pesquisa-clinica/temos-de-consentimento";

interface MenuItem {
  id: number;
  name: string;
  slug: string;
  component: JSX.Element;
}

export const clinicalResearchMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Como funciona",
    slug: "como-funciona",
    component: <ComoFunciona />,
  },
  {
    id: 2,
    name: "Estudos clínicos abertos",
    slug: "estudos-clinicos-abertos",
    component: <EstudosClinicosAbertos />,
  },
  {
    id: 3,
    name: "Comitê de ética em pesquisa",
    slug: "comite-de-etica",
    component: <ComiteDeEtica />,
  },
  { id: 4, name: "Comitês", slug: "comites", component: <Comites /> },
  {
    id: 5,
    name: "Fases de um estudo clínico",
    slug: "fases-estudo-clinico",
    component: <FaseEstudoClinico />,
  },
  {
    id: 6,
    name: "Termos de consentimento",
    slug: "termos-consentimento",
    component: <TermosDeConsentimento />,
  },
  {
    id: 7,
    name: "Benefícios da pesquisa clínica",
    slug: "beneficios-pesquisa-clinica",
    component: <BeneficiosPesquisaClinica />,
  },
  {
    id: 8,
    name: "Perguntas frequentes",
    slug: "perguntas-frequentes",
    component: <PerguntasFrequentes />,
  },
];
