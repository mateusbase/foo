import PageLayout from "@/components/PageLayout";

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
      </div>
    </PageLayout>
  );
};

export default OcImmunologyScreen;
