import { useRouter } from "next/router";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import HealthServiceCard from "@/components/HealthServiceCard";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { options } from "@/utils/objectUtils";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function AllAboutCancerScreen(): JSX.Element {
  const router = useRouter();

  const pathSegments = router.asPath.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <main>
      <div className="block bg-gray-200 p-6 md:hidden">
        <Breadcrumb />
      </div>

      <PageHeader
        title={capitalizeFirstLetter(decodeURIComponent(lastSegment))}
        subtitle="Oncoclínicas"
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-0 md:py-20">
        <div className="hidden px-10 md:block md:px-0">
          <Breadcrumb />
        </div>

        <div className="mt-20 flex justify-start">
          <div className="text-left md:text-center">
            <h2 className="text-2xl font-extralight text-primary md:text-title-xl md:font-black md:leading-[74px]">
              O que é o câncer?
            </h2>

            <p className="mt-4 text-base text-darkGray md:text-[28px] md:font-medium md:leading-[32px]">
              Nesta série de informações confeccionadas pelo Grupo Oncoclínicas,
              você poderá entender mais sobre o que é o câncer, seus tipos,
              tratamentos disponíveis na clínica e alertas sobre prevenção e
              qualidade de vida.
            </p>

            <h2 className="mt-14 hidden text-2xl font-extralight text-primary md:block md:text-[28px] md:font-black md:leading-[74px]">
              Leia o conteúdo abaixo
            </h2>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 md:pr-16">
            <h2 className="text-2xl font-extralight text-primary md:text-[40px] md:font-black md:leading-[48px]">
              O câncer?
            </h2>
            <p className="mt-4 text-base text-darkGray md:text-[20px] md:leading-[30px]">
              Câncer é um crescimento anormal de células, que se dividem
              rapidamente formando tumores. A doença pode atingir a maior parte
              dos órgãos do corpo humano, incluindo a circulação sanguínea, e se
              espalhar para outras regiões, como tecidos. É o crescimento
              desordenado e anormal de células que, dividindo-se rapidamente,
              formam tumores em algum local do corpo e podem se espalhar para
              outras regiões, invadindo tecidos e órgãos. São mais de 200 tipos
              de câncer, que se dividem em 5 categorias:
            </p>
            <p className="mt-10 text-base font-bold text-darkGray md:mt-20 md:text-[20px] md:leading-[30px]">
              São mais de 200 tipos de câncer, que se dividem em 5 categorias:
            </p>
          </div>

          <div className="mt-10 grid w-full grid-cols-1 gap-6 md:mt-0 md:w-1/2 md:grid-cols-2">
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
              showButton={false}
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
              showButton={false}
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
              showButton={false}
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
              showButton={false}
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
              showButton={false}
            />
          </div>
        </div>

        <div className="mt-32 flex justify-start md:justify-center">
          <div className="text-left md:text-center">
            <h2 className="text-2xl font-extralight text-primary md:text-title-xl md:font-black md:leading-[74px]">
              Confira os tipos de câncer mais comuns no Brasil
            </h2>
            <p className="mt-4 text-base text-darkGray md:text-[28px] md:font-medium md:leading-[32px]">
              O câncer se desenvolve em praticamente qualquer parte do corpo e
              varia em tipos e gravidade. Selecione abaixo a parte do corpo que
              deseja pesquisar ou busque pelo órgão / nome do câncer. Conheça os
              mais comuns:
            </p>
            <h2 className="mt-10 text-2xl font-extralight text-primary md:mt-14 md:text-[28px] md:font-black md:leading-[74px]">
              Conheça os mais comuns:
            </h2>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 md:mt-20">
          <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            />
          </div>

          <div className="flex justify-center">
            <BaseButton
              color="primary"
              className="w-full text-white md:w-[224px]"
            >
              Ver todos os tipos de câncer
            </BaseButton>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-3 gap-[26px]">
          <MedicalServiceCard
            serviceTitle="OC Acesso"
            serviceDescription="A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência."
            actionButtonText="Exclusividade Oncoclínicas"
          />
          <MedicalServiceCard
            serviceTitle="OC Acesso"
            serviceDescription="A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência."
            actionButtonText="Exclusividade Oncoclínicas"
          />
          <MedicalServiceCard
            serviceTitle="OC Acesso"
            serviceDescription="A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência."
            actionButtonText="Exclusividade Oncoclínicas"
          />
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
