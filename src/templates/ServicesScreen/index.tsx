import PageLayout from "@/components/PageLayout";
import ServiceSection from "./components/ServiceSection";
import {
  headerProps,
  healthServices1,
  healthServices2,
  medicalServices1,
  medicalServices2,
} from "./data/servicesData";

export default function ServiceScreen(): JSX.Element {
  return (
    <PageLayout
      title={headerProps.title}
      subtitle={headerProps.address}
      showSections
      sections={headerProps.sections}
    >
      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-2 lg:hidden">
        <a
          href="#servicos"
          className="flex min-w-[90px] flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-white"
        >
          Serviços
        </a>
        <a
          href="#diagnósticos"
          className="flex min-w-[90px] flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-white"
        >
          Diagnósticos
        </a>
        <a
          href="#tratamentos"
          className="flex min-w-[90px] flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-center text-white"
        >
          Tratamentos
        </a>
      </div>

      <ServiceSection
        id="servicos"
        title="Serviços Oncoclínicas"
        description="Comodidade e priorização da vida em toda a jornada do tratamento do câncer. Conheça nossos serviços."
        healthServices={healthServices1}
        medicalServices={medicalServices1}
      />

      <ServiceSection
        id="diagnósticos"
        title="OC Diagnósticos"
        description="Corpo clínico altamente especializado e os mais variados tipos de exames. Conheça a OC Diagnóstico."
        healthServices={healthServices2}
        medicalServices={medicalServices2}
      />

      <ServiceSection
        id="tratamentos"
        title="Tratamentos Oncoclínicas"
        description="As terapias mais eficazes para o tratamento do câncer. Conheça nossos métodos."
        healthServices={healthServices1}
        medicalServices={medicalServices1}
      />
    </PageLayout>
  );
}
