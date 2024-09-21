import PageHeader from "@/components/PageHeader/page-header.component";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { options } from "@/utils/objectUtils";
import { TbCodePlus } from "react-icons/tb";
import BaseButton from "@/components/Button";
import { CardDoctor } from "@/components/CardDoctors";

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
      <PageHeader
        title="Encontre um médico"
        subtitle="Conheça os médicos Oncoclínicas em todo o Brasil"
        showContactSection={false}
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col py-20">
        <Breadcrumb />

        <div className="mt-14">
          <h1 className="font-lato text-4xl leading-[48px] text-primary">
            Encontre uma unidade Oncoclínicas próxima a você
          </h1>

          <div className="mt-14 flex items-center justify-between">
            <Select
              color="primary"
              variant="bordered"
              label="UF"
              className="max-w-[122px]"
              radius="full"
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
              className="max-w-xs"
              radius="full"
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
              label="Cidade"
              className="max-w-xs"
              radius="full"
            >
              <SelectItem key={1} value="1">
                São Paulo
              </SelectItem>
              <SelectItem key={2} value="2">
                Ibituruna
              </SelectItem>
            </Select>

            <Input
              placeholder="Buscar convênio"
              size="lg"
              radius="full"
              variant="bordered"
              className="h-[50px] w-[280px]"
            />

            <BaseButton color="primary" className="text-white">
              Buscar Médicos
            </BaseButton>

            <BaseButton
              className="font-bold"
              color="primary"
              variant="bordered"
              startContent={<TbCodePlus size={20} />}
              width="322px"
            >
              Buscar próximos a mim
            </BaseButton>
          </div>

          <p className="font-lato mt-20 text-[20px] font-normal leading-[26px] text-darkGray">
            Sua pesquisa encontrou 23 médicos
          </p>

          <div className="mt-10 grid grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <CardDoctor key={doctor.id} doctor={doctor} width="w-[398px]" />
            ))}
          </div>
        </div>
      </div>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
