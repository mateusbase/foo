import BeneficiosTributarios from "@/components/direitos-e-deveres/beneficios-tributarios";
import Diretrizes from "@/components/direitos-e-deveres/diretrizes";
import Facilidades from "@/components/direitos-e-deveres/faclidades";
import Geral from "@/components/direitos-e-deveres/geral";
import Saude from "@/components/direitos-e-deveres/saude";
import Trabalho from "@/components/direitos-e-deveres/trabalho";
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

export const rightsAndDutiesMenuItems: MenuItem[] = [
  { id: 1, name: "Geral", slug: "geral", component: <Geral /> },
  { id: 2, name: "Saúde", slug: "saude", component: <Saude /> },
  {
    id: 3,
    name: "Facilidades",
    slug: "facilidades",
    component: <Facilidades />,
  },
  {
    id: 4,
    name: "Benefícios tributários",
    slug: "beneficios-tributarios",
    component: <BeneficiosTributarios />,
  },
  { id: 5, name: "Trabalho", slug: "trabalho", component: <Trabalho /> },
  { id: 6, name: "Diretrizes", slug: "diretrizes", component: <Diretrizes /> },
];
