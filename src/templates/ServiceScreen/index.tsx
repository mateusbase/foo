/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";
import { useState } from "react";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import MenuItem from "@/components/MenuItem";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function ServiceScreen(): JSX.Element {
  const router = useRouter();
  const { servico } = router.query;

  const [activeItem, setActiveItem] = useState<number | null>(null);

  const menuItems = [
    { id: 1, name: "O que é a laserterapia" },
    { id: 2, name: "Quando é usada" },
    { id: 3, name: "Como é realizada" },
  ];

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <main>
      <PageHeader
        title={
          servico
            ? capitalizeFirstLetter(decodeURIComponent(servico as string))
            : "Nome do Médico"
        }
        subtitle="Serviço Oncoclínicas"
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-20">
        <Breadcrumb />

        <div className="mt-14 flex">
          <div className="w-[398px] text-white">
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                isActive={activeItem === item.id}
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
                onClick={setActiveItem}
              />
            ))}
          </div>

          <div className="ml-16 flex-1">
            <h1 className="font-lato text-4xl font-bold leading-[48px] text-primary">
              O que é a laserterapia
            </h1>
            <p className="font-lato mt-6 text-[20px] font-normal leading-[26px] text-darkGray">
              A laserterapia é um tratamento realizado com laser de baixa
              potência que emite comprimento de onda vermelho e/ou infravermelho
              e não promove aumento de temperatura, atuando em nível celular. A
              luz emitida é absorvida no tecido e transformada em energia,
              promovendo a restauração da função celular e o reparo tecidual.
              Também acelera o processo de cicatrização, analgesia e ação
              anti-inflamatória, ajudando na prevenção e melhora na qualidade de
              vida dos pacientes.
              <br />
              <br />
            </p>

            <h1 className="font-lato text-4xl font-bold leading-[48px] text-primary">
              Quando é usada
            </h1>

            <p className="font-lato mt-6 text-[20px] font-normal leading-[26px] text-darkGray">
              Pacientes oncológicos submetidos a procedimentos cirúrgicos,
              transplante de medula óssea, quimioterapia, radioterapia em região
              da cabeça e do pescoço e ao uso de alguns medicamentos indicados
              para prevenção da perda óssea decorrente do tratamento
              antineoplásico ou da doença podem manifestar complicações
              significativas na cavidade oral. As principais manifestações são:
            </p>

            <ul className="font-lato mt-4 list-inside list-disc text-[20px] font-normal leading-[26px] text-darkGray">
              <li>Infecções dentárias e periodontais;</li>
              <li>Infecções oportunistas com candidíase oral;</li>
              <li>Herpes;</li>
              <li>Xerostomia (sensação de boca seca);</li>
              <li>Alteração no paladar;</li>
              <li>Dor e/ou dificuldade ao deglutir;</li>
              <li>Sangramentos gengivais;</li>
              <li>Limitação na abertura da boca;</li>
              <li>Necroses ósseas;</li>
              <li>
                Mucosites (lesões em cavidade oral induzidas pelo tratamento,
                são muito dolorosas e podem afetar a capacidade de alimentação,
                hidratação e fala do paciente, prejudicando seu estado geral).
              </li>
            </ul>

            <p className="font-lato mt-4 text-[20px] font-normal leading-[26px] text-darkGray">
              A laserterapia é usada para eliminar ou ao menos aliviar essas
              manifestações e, consequentemente, melhorar a qualidade de vida do
              paciente.
            </p>

            <br />
            <br />

            <h1 className="font-lato text-4xl font-bold leading-[48px] text-primary">
              Como é realizada
            </h1>

            <p className="font-lato mt-4 text-[20px] font-normal leading-[26px] text-darkGray">
              O Grupo Oncoclínicas dispõe de equipes capacitadas e de
              equipamentos para a realização do procedimento de forma segura e
              eficaz. O número de sessões de laserterapia varia de acordo com as
              lesões a serem tratadas e com o perfil de cada paciente. O
              tratamento é indolor, seguro e sem efeitos colaterais, desde que
              realizado seguindo os protocolos, e as aplicações têm duração
              curta.
            </p>

            <br />
            <br />
          </div>
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
