import PageLayout from "@/components/PageLayout";
import { useEffect, useState } from "react";
import apiClient from "@/services/apiClient";
import { FaMapMarkedAlt } from "react-icons/fa";
import AlertComponent from "@/components/Blocks/Alert";
import Image from "next/image";
import { House, UserIcon } from "lucide-react";
import { RichText } from "@/components/Blocks/RichText";
import { SingleUnitRootProps } from "./type";
import { sections } from "./utils";
import MapCard from "./components/MapCard";
import InsuranceGrid from "./components/InsuranceGrid";
import { Section } from "./components/MapCard/components/Section";
import CertificationCard from "./components/CertificationCard";
import { Doctor } from "../findADoctor/components/CardDoctors/types";
import ClinicalBody from "./components/ClinicalBody";
import { ApiPhysician } from "../findADoctor/types";
import { GuidedTourButton } from "./components/GuidedTourButton";
import { RouteButton } from "./components/RouteButton";

export function SingleUnitRoot({
  data,
  breadcrumbs,
}: SingleUnitRootProps): JSX.Element {
  const {
    alert,
    entities,
    workingHours,
    address,
    contact,
    structure,
    team,
    otherMedia,
    certifications,
    urls,
  } = data;

  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const handleVIrtualTourClick = (): void => {
    if (urls?.virtualTourUrl) {
      window.open(urls?.virtualTourUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleRouteClick = (): void => {
    if (address?.mapLink) {
      window.open(address?.mapLink, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const fetchDoctors = async (): Promise<void> => {
      try {
        const response = await apiClient.post("/api/pages/kind-search", {
          kind: "PHYSICIAN",
          query: "SEARCH",
          language: "pt",
          payload: {
            unit: data.id,
          },
        });

        const result: ApiPhysician[] = response.data;

        const mappedDoctors: Doctor[] = result?.map((item) => ({
          id: item.info.name,
          name: item.info?.name || "",
          crm: item.professionalNumbers?.crms?.[0]?.number || "",
          rqe: item.professionalNumbers?.rqes?.[0]?.number || "",
          path: item.path,
          location: data.name,
          imgSrc: item.images?.picture?.url || "",
          specialty: item.references?.specialties || [],
          units: item.references?.units || [],
        }));

        setDoctors(mappedDoctors);
      } catch (error) {
        error;
      }
    };

    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.id]);

  return (
    <PageLayout
      title={data.name}
      subtitle={data.description}
      breadcrumbs={breadcrumbs}
      showSections
      sections={sections}
      buttonText="Ver no mapa"
      buttonIcon={<FaMapMarkedAlt size={40} />}
    >
      <div className="mt-10">
        <AlertComponent
          title={alert.title}
          description={alert.description}
          icon={alert.icon}
        />
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-5 xl:gap-10">
        <div className="mb-10 flex-1 lg:w-2/3">
          <div>
            <h2 className="text-2xl font-normal text-primary md:leading-[50px] 2xl:text-3xl">
              Especialidades e Serviços {data.name}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-2">
              {entities.physicianSpecialties?.map((item) => (
                <div
                  key={item.basicInfo.name}
                  className="flex flex-row items-center justify-start gap-6 text-center text-primary"
                >
                  <Image
                    src={item.basicInfo.icon.url}
                    alt={item.basicInfo.icon.alt}
                    width={item.basicInfo.icon.width}
                    height={item.basicInfo.icon.height}
                  />

                  <span className="text-sm lg:text-lg">
                    {item.basicInfo.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="md:full-bleed mt-10 lg:hidden">
              <MapCard
                workingHours={workingHours}
                address={address}
                contact={contact}
                structure={structure}
                team={team}
                handleVirtualTourClick={handleVIrtualTourClick}
                shouldShowVirtualTourButton={urls?.showVirtualTour}
              />
            </div>

            <div className="md:hidden">
              <RouteButton handleClick={handleRouteClick} />

              <GuidedTourButton
                shouldShow={urls?.showVirtualTour}
                handleClick={handleVIrtualTourClick}
              />
            </div>
          </div>

          <div className="lg:w-full">
            <h2 className="mt-10 text-2xl font-normal text-primary md:leading-[50px] 2xl:text-3xl">
              Facilidades e Comodidades
            </h2>

            <div className="mt-10 grid grid-cols-1 justify-start gap-y-4 md:grid-cols-3">
              {entities.facilities &&
                entities.facilities.map((facility) => (
                  <div className="flex items-center gap-2 text-base text-primary sm:text-xl">
                    {facility.icon && (
                      <Image
                        src={facility.icon.url}
                        alt={facility.icon.alt}
                        width={facility.icon.width}
                        height={facility.icon.height}
                      />
                    )}

                    {facility.name}
                  </div>
                ))}
            </div>
          </div>

          <InsuranceGrid insurance={entities.healthProviders} />

          <ClinicalBody doctors={doctors} />

          <div>
            <h2 className="mt-20 text-2xl font-normal text-primary md:text-3xl md:leading-[50px]">
              Sobre a unidade {data.name}
            </h2>

            <div className="mt-10 space-y-4">
              <RichText content={data.about} />
            </div>

            <div className="mt-10 flex w-full flex-col md:flex-row lg:hidden">
              <Section
                icon={<House className="text-primary" />}
                title="Estrutura da Unidade"
                items={structure}
              />

              <Section
                icon={<UserIcon color="text-primary" size={0.8} />}
                title="Composição da Equipe"
                items={team}
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 md:justify-between lg:grid lg:grid-flow-row-dense lg:grid-cols-2">
              {otherMedia.map((media) => (
                <Image
                  key={media.key}
                  src={media.url}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  className="h-[200px] w-full object-cover lg:h-[300px] lg:w-[400px]"
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col">
            <h1 className="mb-5 text-2xl text-primary md:text-3xl">
              Certificações
            </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification) => (
                <CertificationCard
                  key={certification.name}
                  image={certification.icon}
                  name={certification.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden h-full w-1/3 lg:flex">
          <MapCard
            workingHours={workingHours}
            address={address}
            contact={contact}
            structure={structure}
            team={team}
            handleVirtualTourClick={handleVIrtualTourClick}
            shouldShowVirtualTourButton={urls?.showVirtualTour}
          />
        </div>
      </div>
    </PageLayout>
  );
}
