import InformationSlider from "@/components/InformationSlider";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

export default function OcInstitute(): JSX.Element {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t("oc_institute.title")}
      subtitle={t("oc_institute.subtitle")}
    >
      <div className="mt-20">
        <InformationSlider
          title="Pesquisa Clínica Oncoclínicas"
          description="Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil."
          image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
        />
      </div>
    </PageLayout>
  );
}
