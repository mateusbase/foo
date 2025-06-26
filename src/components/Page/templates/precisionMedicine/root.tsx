import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import { Button } from "@/components/Button";
import GradientBanner from "@/components/Blocks/GradientBanner";
import { RichText } from "@/components/Blocks/RichText";
import UnitList from "@/components/Blocks/UnitList";
import BaseInput from "@/components/Input";
import apiClient from "@/services/apiClient";
import { useState } from "react";
import { PrecisionMedicineRootProps } from "./types";
import RoundedRectangle from "./components/RoundedRetangle";
import ExamsCard from "./components/ExamsCard";
import PlusCard from "./components/PlusCard";
import InformationCard from "./components/InformationsCard";
import AccreditationsSection from "./components/Acreditation";
import { validate } from "./utils";

export function PrecisionMedicineRoot({
  data,
  breadcrumbs,
}: PrecisionMedicineRootProps): JSX.Element {
  const [emailMolecular, setEmailMolecular] = useState("");
  const [emailPathologic, setEmailPathologic] = useState("");

  const [errorMolecular, setErrorMolecular] = useState("");
  const [errorPathologic, setErrorPathologic] = useState("");

  const [successMolecular, setSuccessMolecular] = useState("");
  const [successPathologic, setSuccessPathologic] = useState("");

  const [isLoadingMolecular, setIsLoadingMolecular] = useState(false);
  const [isLoadingPathologic, setIsLoadingPathologic] = useState(false);

  const handleSubmit = async (
    actionType:
      | "MOLECULAR_THURSDAYS_SUBSCRIBE"
      | "PATHOLOGIC_THURSDAYS_SUBSCRIBE",
  ): Promise<void> => {
    const isMolecular = actionType === "MOLECULAR_THURSDAYS_SUBSCRIBE";

    const email = isMolecular ? emailMolecular : emailPathologic;

    const setEmail = isMolecular ? setEmailMolecular : setEmailPathologic;

    const setError = isMolecular ? setErrorMolecular : setErrorPathologic;

    const setSuccess = isMolecular ? setSuccessMolecular : setSuccessPathologic;

    const setLoading = isMolecular
      ? setIsLoadingMolecular
      : setIsLoadingPathologic;

    const error = validate(email);

    if (error) {
      setError(error);

      setSuccess("");

      return;
    }

    setError("");

    setSuccess("");

    setLoading(true);

    try {
      await apiClient.post("/api/pages/action", {
        kind: "PRECISION_MEDICINE",
        action: actionType,
        payload: { email: email.trim() },
      });

      setEmail("");

      setSuccess("Mensagem enviada com sucesso!");
    } catch {
      setSuccess("Erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageLayout
        title={
          <Image
            src={data.header.image.url}
            alt={data.header.image.alt}
            width={data.header.image.width}
            height={data.header.image.height}
          />
        }
        breadcrumbs={breadcrumbs}
      >
        <GradientBanner
          title={data.banner.title}
          theme="dark-purple"
          description={data.banner.description}
          media={{
            side: "right",
            data: {
              type: "video",
              data: data.banner.media.data.data,
            },
          }}
        />

        <div className="my-10 flex flex-col lg:flex-row">
          <div className="mb-9 flex flex-col gap-10 lg:w-1/2 lg:flex-col lg:gap-12">
            {data.values.keyValues.map((item) => (
              <div key={item.title} className="flex flex-col lg:gap-3">
                <h3 className="mb-4 font-lato-regular text-4xl text-primary md:text-5xl">
                  {item.title}
                </h3>

                <span className="font-lato-regular text-lg text-darkGray md:mb-5 md:text-2xl lg:w-[95%]">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:w-1/2">
            <RichText
              content={data.values.description}
              className="mt-4 w-full text-justify font-lato-regular text-darkGray md:text-2xl lg:mt-0"
            />
          </div>
        </div>

        <div className="mb-10">
          <RoundedRectangle
            cardElements={data.cardLinks.map((item) => ({
              text: item.name,
              url: item.link.url,
            }))}
          />
        </div>

        <GradientBanner
          title={data.banner2.title}
          theme="dark-purple"
          media={{
            side: "right",
            data: {
              type: "image",
              data: data.banner2.media.data.data,
            },
          }}
        />

        <div className="mb-7 mt-10 text-center">
          <h1 className="mb-11 font-lato-regular text-4xl text-primary lg:text-6xl">
            {data.exams.title}
          </h1>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:flex lg:flex-col">
            {data.exams.groups.map((group) => (
              <div key={group.name} className="items-center justify-center">
                <h4 className="mb-8 font-lato-regular text-3xl text-darkGray lg:text-5xl">
                  {group.name}
                </h4>

                <ExamsCard
                  exams={group.links.map((linkItem) => ({
                    id: linkItem.name,
                    name: linkItem.name,
                    redirectUrl: linkItem.link.url,
                  }))}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="my-10">
          <GradientBanner
            title={data.banner3.title}
            theme="dark-green"
            description={data.banner3.description}
            media={{
              side: "right",
              data: {
                type: "image",
                data: data.banner3.media.data.data,
              },
            }}
          />
        </div>

        <PlusCard exams={data.imageCardLinks} />

        <div className="my-10">
          <GradientBanner
            title={data.banner4.title}
            description={data.banner4.description}
            theme="dark-green"
            media={{
              side: "left",
              data: {
                type: "image",
                data: data.banner4.media.data.data,
              },
            }}
          />
        </div>

        <UnitList
          title={data.unitReference.title}
          // @ts-expect-error temporário até ajustar a tipagem de Unit para UnitsCardProps
          units={data.unitReference.units}
          showSideMenu={false}
          actionButton={data.unitReference.buttonText}
          moreInfoButtonText={data.unitReference.secondaryButtonText}
        />

        <div className="my-8 flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:items-stretch lg:justify-center">
          <InformationCard className="flex min-h-[450px] flex-col items-center justify-center gap-6 px-8 py-10 2xl:h-[566px]">
            <span className="text-center font-lato-black text-4xl text-darkGray">
              {data.ctas.contact.title}
            </span>
            <span className="text-center font-lato-thin text-darkGray">
              {data.ctas.contact.description}
            </span>
            <a
              href={data?.ctas?.contact?.link?.url}
              target={
                data?.ctas?.contact?.link?.openOnNewTab ? "_blank" : "_self"
              }
              rel={
                data?.ctas?.contact?.link?.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex w-full justify-center"
            >
              <Button className="bg-purpleMedium px-6 py-4 text-center font-lato-bold text-lg text-white">
                {data.ctas.contact.buttonText}
              </Button>
            </a>
          </InformationCard>

          <InformationCard
            background
            className="flex min-h-[450px] flex-col items-center justify-center gap-6 px-8 py-10 2xl:h-[566px]"
          >
            <span className="text-center text-2xl text-white">
              {data.ctas.molecularThursdays.title}
            </span>

            <span className="text-center text-sm text-white">
              {data.ctas.molecularThursdays.description}
            </span>

            <BaseInput
              value={emailMolecular}
              onChange={(e) => setEmailMolecular(e.target.value)}
              className="rounded-full border-darkGray bg-white text-darkGray"
              placeholder={data.ctas.molecularThursdays.placeholder}
            />

            {errorMolecular && (
              <p className="text-sm text-red-500">{errorMolecular}</p>
            )}

            {successMolecular && (
              <p className="text-sm text-green-500">{successMolecular}</p>
            )}

            <Button
              className="w-full bg-white text-purpleMedium"
              loading={isLoadingMolecular}
              onClick={() => handleSubmit("MOLECULAR_THURSDAYS_SUBSCRIBE")}
            >
              {data.ctas.molecularThursdays.buttonText}
            </Button>
          </InformationCard>

          <InformationCard className="flex min-h-[450px] flex-col items-center justify-center gap-6 px-8 py-10 2xl:h-[566px]">
            <span className="text-center text-2xl text-darkGray">
              {data.ctas.pathologicThursdays.title}
            </span>

            <span className="text-center text-sm text-darkGray">
              {data.ctas.pathologicThursdays.description}
            </span>

            <BaseInput
              value={emailPathologic}
              onChange={(e) => setEmailPathologic(e.target.value)}
              className="rounded-full border-darkGray bg-white text-darkGray"
              placeholder={data.ctas.pathologicThursdays.placeholder}
            />

            {errorPathologic && (
              <p className="text-sm text-red-500">{errorPathologic}</p>
            )}

            {successPathologic && (
              <p className="text-sm text-green-500">{successPathologic}</p>
            )}

            <Button
              className="w-full bg-purpleMedium text-white"
              loading={isLoadingPathologic}
              onClick={() => handleSubmit("PATHOLOGIC_THURSDAYS_SUBSCRIBE")}
            >
              {data.ctas.pathologicThursdays.buttonText}
            </Button>
          </InformationCard>
        </div>

        <div className="my-10">
          <GradientBanner
            title={data.banner5.title}
            description={data.banner5.description}
            theme="dark-green"
            roundCorner="none"
            media={{
              side: "right",
              data: {
                type: "image",
                data: data.banner5.media.data.data,
              },
            }}
          />
        </div>
      </PageLayout>

      <AccreditationsSection
        title={data.certifications.title}
        entries={data.certifications.entries}
      />
    </>
  );
}
