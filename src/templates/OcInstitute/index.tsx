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

      <div className="mt-28">
        <AcademyCard />
      </div>

      <div className="mt-16 flex flex-col space-y-4 lg:mt-40 lg:items-center lg:text-center">
        <p className="text-2xl text-primary lg:text-6xl">
          Instituto Oncoclínicas
        </p>
        <p className="text-darkGray lg:text-2xl">
          Produção e compartilhamento de ciência, tecnologia, inovação e
          educação para a área de saúde.
        </p>
      </div>
    </PageLayout>
  );
}
