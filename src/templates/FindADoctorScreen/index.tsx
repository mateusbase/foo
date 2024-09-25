import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { options } from "@/utils/objectUtils";
import { TbCodePlus } from "react-icons/tb";
import BaseButton from "@/components/Button";
import { CardDoctor } from "@/components/CardDoctors";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function FindADoctorScreen(): JSX.Element {
  const doctors = [
    {
      id: 1,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/medico-alegre-um-rosto-feliz-na-profissao-medica-isolado-em-um-fundo-branco_94628-20220.jpg?w=1800",
    },
    {
      id: 2,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/a-presenca-iluminadora-da-enfermeira-isolada-em-um-fundo-branco-ai-generativo_94628-9638.jpg?w=1800",
    },
    {
      id: 3,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
    {
      id: 4,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
    {
      id: 4,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
    {
      id: 4,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
    {
      id: 4,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
    {
      id: 4,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
    {
      id: 4,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
    {
      id: 4,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
  ];

  return (
    <main>
      <div className="block bg-gray-200 p-6 md:hidden">
        <Breadcrumb />
      </div>

      <PageHeader
        title="Encontre um médico"
        subtitle="Conheça os médicos Oncoclínicas em todo o Brasil"
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-0 md:py-20">
        <div className="hidden px-10 md:block md:px-0">
          <Breadcrumb />
        </div>

        <div className="mt-14 md:px-0">
          <h1 className="font-lato hidden text-4xl leading-[48px] text-primary md:block">
            Encontre um médico Oncoclínicas próximo a você
          </h1>

          <div className="mt-0 flex flex-col gap-5 md:mt-14 md:flex-col lg:flex-row lg:items-center lg:justify-center">
            <Select
              color="primary"
              variant="bordered"
              label="UF"
              className="w-full md:max-w-full lg:max-w-[122px]"
              radius="full"
              size="sm"
            >
              <SelectItem key={1} value="1">
                SP
              </SelectItem>
              <SelectItem key={2} value="2">
                RJ
              </SelectItem>
            </Select>

            <Select
              color="primary"
              variant="bordered"
              label="Cidade"
              className="w-full md:max-w-full lg:max-w-xs"
              radius="full"
              size="sm"
            >
              <SelectItem key={1} value="1">
                São Paulo
              </SelectItem>
              <SelectItem key={2} value="2">
                Ibituruna
              </SelectItem>
            </Select>

            <Select
              color="primary"
              variant="bordered"
              label="Especialidade"
              className="w-full md:max-w-full lg:max-w-xs"
              radius="full"
              size="sm"
            >
              <SelectItem key={1} value="1">
                Oncologia
              </SelectItem>
              <SelectItem key={2} value="2">
                Cardiologia
              </SelectItem>
            </Select>

            <Input
              placeholder="Nome ou CRM"
              size="lg"
              radius="full"
              variant="bordered"
              className="h-[50px] w-full"
            />

            <div className="flex w-full flex-col items-center gap-4 md:flex-row lg:flex-row lg:gap-4">
              <BaseButton
                color="primary"
                className="w-full text-white lg:w-auto"
                width="100% lg:w-[322px]"
              >
                Buscar Médicos
              </BaseButton>

              <BaseButton
                className="w-full font-bold lg:w-auto"
                color="primary"
                variant="bordered"
                startContent={<TbCodePlus size={20} />}
                width="100% lg:w-[322px]"
              >
                Buscar próximos a mim
              </BaseButton>
            </div>
          </div>

          <p className="font-lato mt-20 text-[20px] font-normal leading-[26px] text-darkGray">
            Sua pesquisa encontrou 23 médicos
          </p>

          <div className="mb-10 mt-10 grid grid-cols-1 justify-items-center gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <CardDoctor
                key={doctor.id}
                doctor={doctor}
                width="max-w-[398px]"
              />
            ))}
          </div>
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
