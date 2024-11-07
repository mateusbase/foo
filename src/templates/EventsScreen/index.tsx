import BaseButton from "@/components/Button";
import { IoIosArrowDown } from "react-icons/io";
import EventCard from "@/components/EventsCard";

import BaseSelect from "@/components/Select";
import PageLayout from "@/components/PageLayout";
import { Plus } from "lucide-react";

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
    <PageLayout
      title="Eventos Oncoclínicas"
      subtitle="Congressos, palestras, simpósios e muito mais."
    >
      <div className="mt-20 hidden md:flex">
        <div className="hidden h-[536px] w-full justify-between text-white lg:flex">
          <div className="flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] bg-gradient-to-b from-primary-foreground to-secondary-foreground p-20">
            <div>
              <p className="text-5xl font-light">
                Workshop sobre crescimento do câncer
              </p>
            </div>

            <div>
              <p className="text-2xl">
                Um bate papo com especialistas do mundo todo sobre o crescimento
                do câncer em grandes cidades.
              </p>
            </div>

            <div className="flex gap-2">
              <BaseButton
                className="h-16 w-80 justify-center border-white text-2xl text-white"
                variant="bordered"
              >
                Quero me inscrever
              </BaseButton>
            </div>
          </div>

          <div className="h-full w-1/2">
            <img
              src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
              alt="Imagem 1"
              className="size-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:mt-28 md:flex-row md:items-center md:justify-between md:px-0">
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

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>

      <div className="my-10 flex justify-center lg:justify-start">
        <BaseButton
          color="primary"
          variant="bordered"
          radius="sm"
          startContent={<Plus />}
          className="h-[50px] w-80 items-center justify-center pl-3 text-[18px] font-black leading-[22px] text-primary sm:w-3/6 md:flex lg:w-[228px]"
        >
          Ver mais
        </BaseButton>
      </div>
    </PageLayout>
  );
}
