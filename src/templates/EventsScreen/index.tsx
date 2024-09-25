import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import InformationSlider from "@/components/InformationSlider";
import BaseButton from "@/components/Button";
import { IoIosArrowDown } from "react-icons/io";
import EventCard from "@/components/EventsCard";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import BaseSelect from "@/components/Select";

export default function EventsScreen(): JSX.Element {
  const events = [
    {
      title: "11º Congresso Internacional Oncoclínicas DANA-FARBER",
      date: "23/09/2023 a 07/10/2023",
      location: "WTC Event Center São Paulo",
      address: "Av. das Nações Unidas, 12551 - Brooklin Novo, São Paulo - SP",
      time: "Das 9h às 19h",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem ullamcorper.",
      imageUrl:
        "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
    },
    {
      title: "Simpósio de Oncologia e Inovações Tecnológicas",
      date: "15/10/2023",
      location: "Centro de Convenções Rebouças",
      address: "Av. Rebouças, 600 - Pinheiros, São Paulo - SP",
      time: "Das 8h às 18h",
      description:
        "Simpósio focado nas inovações tecnológicas no tratamento oncológico. Participe deste importante evento científico.",
      imageUrl:
        "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
    },
    {
      title: "Workshop: Cuidados Paliativos na Oncologia",
      date: "05/11/2023",
      location: "Hospital das Clínicas",
      address: "Rua Dr. Enéas de Carvalho Aguiar, 255 - Cerqueira César, SP",
      time: "Das 14h às 17h",
      description:
        "Uma abordagem prática e multidisciplinar sobre os cuidados paliativos em pacientes oncológicos. Vagas limitadas!",
      imageUrl:
        "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
    },
    {
      title: "Workshop: Cuidados Paliativos na Oncologia",
      date: "05/11/2023",
      location: "Hospital das Clínicas",
      address: "Rua Dr. Enéas de Carvalho Aguiar, 255 - Cerqueira César, SP",
      time: "Das 14h às 17h",
      description:
        "Uma abordagem prática e multidisciplinar sobre os cuidados paliativos em pacientes oncológicos. Vagas limitadas!",
      imageUrl:
        "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
    },
    {
      title: "Workshop: Cuidados Paliativos na Oncologia",
      date: "05/11/2023",
      location: "Hospital das Clínicas",
      address: "Rua Dr. Enéas de Carvalho Aguiar, 255 - Cerqueira César, SP",
      time: "Das 14h às 17h",
      description:
        "Uma abordagem prática e multidisciplinar sobre os cuidados paliativos em pacientes oncológicos. Vagas limitadas!",
      imageUrl:
        "https://www.fundacao1demaio.org.br/media/2021/10/outrubro_Rosa.png",
    },
  ];

  return (
    <main>
      <PageHeader
        title="Eventos Oncoclínicas"
        subtitle="Congressos, palestras, simpósios e muito mais."
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-20">
        <Breadcrumb />

        <div className="mt-20">
          <InformationSlider
            title="Pesquisa Clínica Oncoclínicas"
            description="Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil."
            image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
          />
        </div>

        <div className="mt-28 flex flex-col gap-4 border-b border-gray-300 px-8 pb-4 md:flex-row md:items-center md:justify-between md:px-0">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <BaseSelect
              color="primary"
              variant="bordered"
              label="Tipo de evento"
              radius="full"
              size="sm"
              className="w-full sm:w-[280px]"
              options={[
                { key: 1, value: "1", label: "SP" },
                { key: 2, value: "2", label: "RJ" },
              ]}
            />

            <BaseSelect
              color="primary"
              variant="bordered"
              label="Tema"
              radius="full"
              size="sm"
              className="w-full sm:w-[280px]"
              options={[
                { key: 1, value: "1", label: "São Paulo" },
                { key: 2, value: "2", label: "Rio de Janeiro" },
              ]}
            />

            <BaseButton color="primary" className="w-full text-white sm:w-auto">
              Buscar
            </BaseButton>
          </div>

          <div className="flex cursor-pointer items-center justify-end gap-2 sm:justify-start">
            <span className="text-lg text-primary">Mais Relevantes</span>
            <IoIosArrowDown size={20} className="text-primary" />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
