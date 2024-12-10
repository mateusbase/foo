import { useTranslation } from "react-i18next";
import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import BaseInput from "@/components/Input";
import PageLayout from "@/components/PageLayout";

export default function ScheduleYourConsultationScreen(): JSX.Element {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t("pages.scheduleYourConsultation.pageTitle")}
      subtitle={t("pages.scheduleYourConsultation.pageSubtitle")}
    >
      <div className="mb-10 mt-5 flex flex-col gap-10 md:mt-20 lg:mb-6 lg:flex-row">
        <div className="flex w-full flex-col items-center lg:hidden">
          <img
            src="https://i.postimg.cc/Y0sxRgW5/Captura-de-tela-2024-09-22-152639.png"
            alt={t("pages.scheduleYourConsultation.consultationImageAlt")}
            className="w-full object-cover"
          />
          <p className="mb-5 mt-4 text-left text-lightGray">
            {t("pages.scheduleYourConsultation.additionalInfo")}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-[40px] text-primary">
            {t("pages.scheduleYourConsultation.heading")}
          </h1>
          <p className="mt-2 text-2xl text-primary">
            {t("pages.scheduleYourConsultation.description")}
          </p>

          <div className="mt-10">
            <BaseInput
              placeholder={t("pages.scheduleYourConsultation.name")}
              size="lg"
              radius="full"
              variant="bordered"
              placeholderColor="darkGray"
              borderStyle="border-default"
            />
          </div>

          <div className="mt-6 flex gap-4">
            <BaseInput
              placeholder={t("pages.scheduleYourConsultation.email")}
              size="lg"
              radius="full"
              variant="bordered"
              placeholderColor="darkGray"
              borderStyle="border-default"
            />
            <BaseInput
              placeholder={t("pages.scheduleYourConsultation.telephone")}
              size="lg"
              radius="full"
              variant="bordered"
              placeholderColor="darkGray"
              borderStyle="border-default"
            />
          </div>

          <div className="mt-6 flex gap-4">
            <BaseSelect
              variant="bordered"
              label={t("pages.scheduleYourConsultation.selectUfLabel")}
              radius="full"
              borderStyle="border-default"
              size="sm"
              options={[
                { key: 1, value: "1", label: "SP" },
                { key: 2, value: "2", label: "RJ" },
              ]}
            />

            <BaseSelect
              variant="bordered"
              label={t("pages.scheduleYourConsultation.selectCityLabel")}
              radius="full"
              borderStyle="border-default"
              size="sm"
              options={[
                { key: 1, value: "1", label: "SP" },
                { key: 2, value: "2", label: "RJ" },
              ]}
            />
          </div>

          <div className="mt-6">
            <BaseSelect
              variant="bordered"
              label={t("pages.scheduleYourConsultation.selectUnityLabel")}
              radius="full"
              borderStyle="border-default"
              size="sm"
              options={[
                { key: 1, value: "1", label: "SP" },
                { key: 2, value: "2", label: "RJ" },
              ]}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <BaseButton
              color="primary"
              className="w-full text-white lg:w-[322px]"
              width="322px"
            >
              {t("pages.scheduleYourConsultation.buttonText")}
            </BaseButton>
          </div>
        </div>

        <div className="hidden w-full flex-col items-center lg:flex lg:w-1/2">
          <img
            src="https://i.postimg.cc/Y0sxRgW5/Captura-de-tela-2024-09-22-152639.png"
            alt={t("pages.scheduleYourConsultation.consultationImageAlt")}
            className="w-full object-cover"
          />
          <p className="mb-5 mt-4 text-left text-lightGray">
            {t("pages.scheduleYourConsultation.additionalInfo")}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
