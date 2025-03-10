import { useTranslation } from "react-i18next";
import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import BaseInput from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { format } from "@react-input/mask";
import { FormValues, useValidation } from "@/hooks/useValidation";
import { useForm } from "react-hook-form";

export default function ScheduleYourConsultationScreen(): JSX.Element {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const resolve = useValidation({ validateEmail: true, validatePhone: true });

  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormValues>({
    resolver: resolve,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const rawValue = event.target.value.replace(/\D/g, "");
    if (rawValue.length > 11) return;

    const dynamicMask =
      rawValue.length > 10 ? "(__) _____-____" : "(__) ____-____";
    const formattedValue = format(rawValue, {
      mask: dynamicMask,
      replacement: { _: /\d/ },
    });

    setPhoneNumber(formattedValue);
    setValue("phone", rawValue);
    trigger("phone");
  };

  const handleBlur = async (): Promise<void> => {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, "");

    const dynamicMask =
      rawPhoneNumber.length > 10 ? "(__) _____-____" : "(__) ____-____";
    const formattedPhone = format(rawPhoneNumber, {
      mask: dynamicMask,
      replacement: { _: /\d/ },
    });

    setPhoneNumber(formattedPhone);
    setValue("phone", rawPhoneNumber);
    await trigger("phone");
  };

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
          <h1 className="text-title-lg text-primary">
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
              register={register}
              name="name"
              error={errors.name?.message}
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
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <BaseInput
              placeholder={t("pages.scheduleYourConsultation.telephone")}
              size="lg"
              radius="full"
              variant="bordered"
              placeholderColor="darkGray"
              borderStyle="border-default"
              value={phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={15}
              register={register}
              name="phone"
              error={errors.phone?.message}
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
