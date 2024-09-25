/* eslint-disable prettier/prettier */
import { useState } from "react";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import MenuItem from "@/components/MenuItem";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function WhoWeArecreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const menuItems = [
    { id: 1, name: "História" },
    { id: 2, name: "Franquias" },
    { id: 3, name: "Propósito" },
    { id: 4, name: "Parcerias" },
    { id: 5, name: "Convênios" },
    { id: 6, name: "Qualidade/Certificações" },
    { id: 7, name: "Segurança" },
    { id: 8, name: "Compliance" },
    { id: 9, name: "Carreiras" },
  ];

  return (
    <main>
      <div className="block bg-gray-200 p-6 md:hidden">
        <Breadcrumb />
      </div>

      <PageHeader
        preTitle="Conheça"
        title="Oncoclínicas&Co"
        subtitle="Pioneira no país em gestão de serviços oncológicos, a Oncoclínicas&Co foi fundada em 2010 e hoje é um dos maiores centros de oncologia, hematologia e radioterapia da América Latina."
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-0 md:py-20">
        <div className="hidden px-10 md:block md:px-8">
          <Breadcrumb />
        </div>

        <div className="mt-14 flex">
          <div className="w-[398px] text-white hidden md:block">
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

          <div className="ml-0 md:ml-16 flex-1">
            <h1 className="font-lato text-4xl font-bold leading-[48px] text-primary">
              A Oncoclínicas&Co é um dos maiores grupos de oncologia,
              hematologia e radioterapia da América Latina.
            </h1>
            <p className="font-lato mt-6 text-[20px] font-normal leading-[26px] text-darkGray">
              Oncoclínicas&Co é o maior grupo dedicado ao tratamento do câncer
              na América Latina, com um modelo especializado e inovador focado
              em toda a jornada do tratamento oncológico, aliando eficiência
              operacional, atendimento humanizado e especialização por meio de
              um corpo clínico composto por mais de 2.700 médicos especialistas
              com ênfase em oncologia. Com a missão de democratizar o tratamento
              oncológico, oferece um sistema completo que integra clínicas
              ambulatoriais a cancer centers de alta complexidade. Conta com 145
              unidades em 39 cidades brasileiras, permitindo acesso de qualidade
              em todas as regiões que atua, alinhados aos padrões dos melhores
              centros de referência mundiais no tratamento do câncer.
              <br />
              <br />
            </p>

            <p className="font-lato mt-6 text-[20px] font-normal leading-[26px] text-darkGray">
              Com foco em tecnologia, medicina de precisão e genômica, a
              Oncoclínicas realizou aproximadamente 635 mil tratamentos em 2023.
              É parceira exclusiva no Brasil do Dana-Farber Cancer Institute,
              afiliado à Faculdade de Medicina de Harvard, um dos principais
              centros de pesquisa e tratamento de câncer no mundo. Possui a
              Boston Lighthouse Innovation, especializada em bioinformática, em
              Cambridge, Estados Unidos, e participação na MedSir, dedicada ao
              desenvolvimento e gestão de ensaios clínicos para pesquisas
              independentes sobre o câncer, em Barcelona, Espanha. Recentemente,
              expandiu sua atuação para a Arábia Saudita por meio de uma joint
              venture com o Grupo Al Faisaliah, levando a missão de vencer o
              câncer para um novo continente e proporcionando cuidados
              oncológicos em escala global, ao combinar a hiperespecialização
              oncológica com abordagens inovadoras de tratamento.
            </p>

            <p className="font-lato mt-4 text-[20px] font-normal leading-[26px] text-darkGray">
              A laserterapia é usada para eliminar ou ao menos aliviar essas
              manifestações e, consequentemente, melhorar a qualidade de vida do
              paciente.
            </p>

            <br />
            <br />

            <p className="font-lato mt-4 text-[20px] font-normal leading-[26px] text-darkGray">
              A companhia integra a carteira do IDIVERSA, índice lançado pela
              B3, destacando empresas comprometidas com diversidade de gênero e
              raça.
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
