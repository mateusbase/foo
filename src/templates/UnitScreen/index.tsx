import { Activity, Heart, User } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
import ClinicalBody from "./components/ClinicalBody";
import MapCard from "./components/MapCard";
import InsuranceGrid from "./components/InsuranceGrid";

export default function UnitScreen(): JSX.Element {
  const router = useRouter();
  const { name, address, complement, city, specialties } = router.query;

  const decodedUnitName = name
    ? decodeURIComponent(name as string)
    : "Oncoclínicas";
  const decodedAddress = address
    ? decodeURIComponent(address as string)
    : "Endereço não disponível";
  const decodedComplement = complement
    ? decodeURIComponent(complement as string)
    : "";
  const decodedCity = city
    ? decodeURIComponent(city as string)
    : "Cidade não disponível";
  const decodedSpecialties = specialties
    ? (specialties as string).split(",")
    : [];

  return (
    <PageLayout
      title={`${decodedUnitName}`}
      subtitle={`${decodedAddress}, ${decodedComplement}, ${decodedCity}`}
      showContactSection
      contactLinks={{
        whatsappText: "Fale por WhatsApp",
        whatsappLink: "#",
        phoneText: "Ligar na central de atendimento",
        phoneLink: "#",
        mapText: "Mostrar no mapa",
        mapLink: "#",
      }}
    >
      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <div className="mb-10 flex-1">
          <div>
            <h2 className="text-2xl font-extralight text-primary md:text-3xl md:leading-[50px]">
              Especialidades e Serviços {decodedUnitName}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-2">
              {decodedSpecialties.map((specialty) => (
                <div
                  key={specialty}
                  className="flex items-center gap-2 text-base text-primary sm:text-[20px]"
                >
                  <Heart size={40} className="text-primary sm:size-[60px]" />{" "}
                  {specialty}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center md:hidden">
              <MapCard />
            </div>
          </div>

          <div>
            <h2 className="mt-20 text-2xl font-extralight text-primary md:text-3xl md:leading-[50px]">
              Facilidades e Comodidades
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-2 text-base text-primary sm:text-[20px]">
                <Heart size={40} className="text-primary sm:size-[60px]" />{" "}
                Estacionamento
              </div>
              <div className="flex items-center gap-2 text-base text-primary sm:text-[20px]">
                <User size={40} className="text-primary sm:size-[60px]" /> Wi-fi
              </div>
              <div className="flex items-center gap-2 text-base text-primary sm:text-[20px]">
                <Activity size={40} className="text-primary sm:size-[60px]" />{" "}
                Lanche para paciente
              </div>
            </div>
          </div>

          <InsuranceGrid />

          <ClinicalBody />

          <div>
            <h2 className="mt-20 text-2xl font-extralight text-primary md:text-3xl md:leading-[50px]">
              Sobre a unidade {decodedUnitName}
            </h2>

            <div className="mt-10 space-y-4">
              <p className="text-base leading-[28px] text-darkGray md:text-[18px] md:font-medium md:leading-[32px]">
                Fundado há mais de três décadas, o Centro Paulista de
                Oncologia...
              </p>
              <p className="text-base leading-[28px] text-darkGray md:text-[18px] md:font-medium md:leading-[32px]">
                Nosso corpo clínico é composto por profissionais
                especializados...
              </p>
              <p className="text-base leading-[28px] text-darkGray md:text-[18px] md:font-medium md:leading-[32px]">
                O OC Oncoclínicas CPO oferece a todos os pacientes...
              </p>
              <p className="text-base leading-[28px] text-darkGray md:text-[18px] md:font-medium md:leading-[32px]">
                Atualmente, a Oncoclínicas CPO conta com duas unidades...
              </p>
              <p className="text-base leading-[28px] text-darkGray md:text-[18px] md:font-medium md:leading-[32px]">
                Responsável Técnico da Unidade: Daniel Luiz Gimenes | CRM SP
                75953.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <img
                src="https://via.placeholder.com/352x198"
                alt="Imagem 1"
                className="h-[198px] w-full rounded object-cover md:w-[352px]"
              />
              <img
                src="https://via.placeholder.com/352x198"
                alt="Imagem 2"
                className="h-[198px] w-full rounded object-cover md:w-[352px]"
              />
              <img
                src="https://via.placeholder.com/352x198"
                alt="Imagem 3"
                className="h-[198px] w-full rounded object-cover md:w-[352px]"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex">
          <MapCard />
        </div>
      </div>
    </PageLayout>
  );
}
