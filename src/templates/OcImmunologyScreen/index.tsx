import BaseSwiper from "@/components/BaseSwiper";
import PageLayout from "@/components/PageLayout";
import { specialtiesMock } from "./data/specialtyDataMock";
import SpecialtyCard from "./components/SpecialtyCards";
import ServiceFluxMock from "./data/serviceFluxData";
import ServiceFLuxCards from "./components/ServiceFLuxCards";
import ServicesLocations from "./components/ServiceLocations";

const OcImmunologyScreen = (): JSX.Element => {
  return (
    <PageLayout
      title="OC Imunologia e centro de infusões"
      showBreadcrumb
      subtitle="Unidades especializadas no tratamento de doenças autoimunes, inflamatórias e metabólicas, que proporcionam ao paciente um atendimento individual e acolhedor em uma estrutura completa, composta por equipamentos de alta tecnologia."
    >
      <div className="mt-20">
        <h1 className="text-2xl text-primary lg:text-[40px]">
          Especialidades atendidas
        </h1>

        <BaseSwiper
          data={specialtiesMock}
          renderItem={(specialty) => <SpecialtyCard specialty={specialty} />}
          className="md:hidden"
        />
      </div>

      <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {specialtiesMock.map((specialty) => (
          <SpecialtyCard specialty={specialty} />
        ))}
      </div>

      <div className="mt-16">
        <h1 className="mb-14 text-2xl text-primary lg:text-[40px]">
          Fluxo de atendimento
        </h1>

        <BaseSwiper
          data={ServiceFluxMock}
          renderItem={(service) => <ServiceFLuxCards services={service} />}
          className="md:hidden"
        />
      </div>

      <div className="mb-28 hidden flex-col gap-7 md:flex lg:flex-row">
        {ServiceFluxMock.map((service) => (
          <ServiceFLuxCards services={service} />
        ))}
      </div>

      <ServicesLocations />
    </PageLayout>
  );
};

export default OcImmunologyScreen;
