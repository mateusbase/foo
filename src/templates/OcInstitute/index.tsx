import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";
import AcademyCard from "./components/AcademyCard";
import EducationalCard from "./components/EducationalCard";

export default function OcInstitute(): JSX.Element {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t("oc_institute.title")}
      subtitle={t("oc_institute.subtitle")}
    >
      <div className="mt-10 w-full">
        <EducationalCard />
      </div>

      <div className="mt-20">
        <AcademyCard />
      </div>

      <div className="mt-40 flex-col justify-center">
        <p className="text-2xl text-primary lg:text-6xl">
          Instituto Oncoclínicas
        </p>
        <p className="text-2xl text-darkGray">
          Produção e compartilhamento de ciência, tecnologia, inovação e
          educação para a área de saúde.
        </p>
      </div>
    </PageLayout>
  );
}
