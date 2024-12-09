import PageLayout from "@/components/PageLayout";
import { services } from "./mocks";
import ServiceCard from "./components/ServiceCard";
import CareLineAdditionalServices from "./components/CareLineAdditionalServices";

export default function OcCareLineScreen(): JSX.Element {
  return (
    <>
      <PageLayout
        title="OC Linha de cuidado"
        subtitle="Um serviço ágil e seguro que acompanha o paciente oncológico durante toda a sua jornada: do diagnóstico ao desfecho clínico, dentro do acolhimento e estrutura da Oncoclínicas."
      >
        <div className="mt-10">
          <h1 className="text-4xl text-primary md:text-[40px]">
            Na OC Linha de cuidado, oferecemos resolutividade e agilidade em:
          </h1>

          <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} serviceName={service.serviceName} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <CareLineAdditionalServices />
        </div>
      </PageLayout>

      <div className="flex md:hidden">
        <CareLineAdditionalServices />
      </div>
    </>
  );
}
