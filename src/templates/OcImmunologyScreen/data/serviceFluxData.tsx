import ServiceFlux1 from "@/components/Icons/ServiceFlux1";
import ServiceFlux2 from "@/components/Icons/ServiceFlux2";
import ServiceFlux3 from "@/components/Icons/ServiceFlux3";

export interface ServiceFluxDataProps {
  id: number;
  description: string;
  image: JSX.Element;
}

const ServiceFluxMock: ServiceFluxDataProps[] = [
  {
    id: 1,
    description:
      "Nosso médico especialista faz o diagnóstico da doença e identifica o tratamento mais adequado para o paciente.",
    image: <ServiceFlux1 />,
  },
  {
    id: 2,
    description:
      "Já a nossa equipe de concierges está sempre pronta para ajudar. Ela recebe orientações sobre o que deve ser feito, agiliza a autorização e facilita o início do tratamento.",
    image: <ServiceFlux2 />,
  },
  {
    id: 3,
    description:
      "Assim, garantimos em todas as etapas do tratamento cuidados voltados para o bem-estar do paciente, atendimento médico de qualidade e unidades totalmente preparadas.",
    image: <ServiceFlux3 />,
  },
];

export default ServiceFluxMock;
