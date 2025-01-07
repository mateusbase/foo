import { House, UserIcon } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
import { LunchIcon, ParkingIcon, PinIcon } from "@/components/Icons";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import WifiIcon from "@/components/Icons/WifiIcon";
import ClinicalBody from "./components/ClinicalBody";
import MapCard from "./components/MapCard";
import InsuranceGrid from "./components/InsuranceGrid";
import { Section } from "./components/MapCard/components/Section";
import { locationData } from "./components/MapCard/mocks";
import { mapIconsBySpeciality } from "./utils";

export default function UnitScreen(): JSX.Element {
  const router = useRouter();
  const { name, address, complement, city, specialties } = router.query;

  const noticiaContent = `
  Fundado há mais de três décadas, o Centro Paulista de Oncologia (CPO) passou a integrar o Grupo Oncoclínicas em 2013. A clínica oferece cuidado integral e individualizado ao paciente oncológico, com consultas médicas, tratamento oncológico ambulatorial (quimioterapia, hormonioterapia, drogas alvo, imunoterapia), medicamentos de suporte, acompanhamento médico durante internações hospitalares e uma equipe médica para suporte de emergências disponível 24 horas por dia.

  Nosso corpo clínico é composto por profissionais especializados em oncologia clínica e hematologia, cuidadosamente selecionados por sua qualidade técnica e ética de trabalho, além de médicos especialistas em oncologia nas áreas de cardiologia, dermatologia, genética e medicina integrativa.

  Em conjunto com a equipe administrativa, somos mais de 120 colaboradores e 50 médicos trabalhando pela missão de cuidar integralmente do paciente, com excelência, humanidade e ética.

  O OC Oncoclínicas CPO oferece a todos os pacientes em tratamento ambulatorial uma equipe de enfermagem com experiência e capacitações técnicas e, ainda, farmácia clínica, psicologia, nutrição e reflexologia, complementando os cuidados necessários durante o tratamento. Atualmente, a Oncoclínicas CPO conta com duas unidades localizadas nos bairros Vila Olímpia e Higienópolis.

  Responsável Técnico da Unidade: Daniel Luiz Gimenes | CRM SP 75953
  `;

  const paragraphs = noticiaContent
    .trim()
    .replace(/\n+/g, "\n\n")
    .split("\n\n");

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

  const sections = [
    {
      href: "#",
      text: "Fale por WhatsApp",
      icon: <RiWhatsappFill />,
      isLink: true,
    },
    {
      href: "#",
      text: "Ligar na central de atendimento",
      icon: <BsFillTelephoneFill />,
      isLink: true,
    },
    {
      href: "#",
      text: "Mostrar no mapa",
      icon: <PinIcon size={0.8} />,
      isLink: true,
    },
  ];

  return (
    <PageLayout
      title={`${decodedUnitName}`}
      subtitle={`${decodedAddress}, ${decodedComplement}, ${decodedCity}`}
      showSections
      sections={sections}
      buttonText="Ver no mapa"
      buttonIcon={<FaMapMarkedAlt size={40} />}
    >
      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <div className="mb-10 flex-1">
          <div>
            <h2 className="text-2xl font-normal text-primary md:leading-[50px] 2xl:text-[32px]">
              Especialidades e Serviços {decodedUnitName}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-2">
              {decodedSpecialties.map((specialty) => {
                const iconSpeciality = mapIconsBySpeciality(specialty);

                return (
                  <div
                    key={specialty}
                    className="flex items-center gap-2 text-base text-primary lg:text-[20px]"
                  >
                    {iconSpeciality}
                    {specialty}
                  </div>
                );
              })}
            </div>
            <div className="md:full-bleed mt-10 flex items-center justify-center lg:hidden">
              <MapCard />
            </div>
          </div>

          <div>
            <h2 className="mt-20 text-2xl font-normal text-primary md:leading-[50px] 2xl:text-[32px]">
              Facilidades e Comodidades
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="flex items-center gap-2 text-base text-primary sm:text-[20px]">
                <ParkingIcon size={1} className="text-primary-foreground" />
                Estacionamento
              </div>
              <div className="flex items-center gap-2 text-base text-primary lg:justify-center lg:text-[20px]">
                <WifiIcon size={1} className="text-primary-foreground" /> Wi-fi
              </div>
              <div className="flex items-center gap-2 text-base text-primary lg:text-[20px]">
                <LunchIcon size={1} className="text-primary-foreground" />
                Lanche para paciente
              </div>
            </div>
          </div>

          <InsuranceGrid />

          <ClinicalBody />

          <div>
            <h2 className="mt-20 text-2xl font-normal text-primary md:text-3xl md:leading-[50px]">
              Sobre a unidade {decodedUnitName}
            </h2>

            <div className="mt-10 space-y-4">
              {paragraphs.map((paragraph) => (
                <p className="text-base leading-[28px] text-darkGray md:text-[18px] md:font-medium md:leading-[32px]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex w-full flex-col md:flex-row lg:hidden">
              <div className="w-1/2">
                <Section
                  icon={<House className="text-primary" />}
                  title="Estrutura da Unidade"
                  items={locationData.structure}
                />
              </div>
              <div className="w-1/2">
                <Section
                  icon={<UserIcon color="text-primary" size={0.8} />}
                  title="Composição da Equipe"
                  items={locationData.team}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:flex-row lg:justify-start">
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

        <div className="hidden lg:flex">
          <MapCard />
        </div>
      </div>
    </PageLayout>
  );
}
