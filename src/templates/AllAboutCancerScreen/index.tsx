import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader/page-header.component";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import HealthServiceCard from "@/components/HealthServiceCard";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { options } from "@/utils/objectUtils";

export default function AllAboutCancerScreen(): JSX.Element {
  const router = useRouter();

  const pathSegments = router.asPath.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <main>
      <PageHeader
        title={capitalizeFirstLetter(decodeURIComponent(lastSegment))}
        subtitle="Oncoclínicas"
        showContactSection={false}
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col py-20">
        <Breadcrumb />

        <div className="mt-20 flex justify-center">
          <div className="text-center">
            <h2 className="font-lato text-[62px] font-black leading-[74px] text-primary">
              O que é o câncer?
            </h2>

            <p className="font-lato mt-4 text-[28px] font-medium leading-[32px] text-darkGray">
              Nesta série de informações confeccionadas pelo Grupo Oncoclínicas,
              você poderá entender mais sobre o que é o câncer, seus tipos,
              tratamentos disponíveis na clínica e alertas sobre prevenção e
              qualidade de vida. Leia o conteúdo abaixo
            </p>

            <h2 className="font-lato mt-14 text-[28px] font-black leading-[74px] text-primary">
              Leia o conteúdo abaixo
            </h2>
          </div>
        </div>

        <div className="mt-20 flex justify-between">
          <div className="w-1/2 pr-16">
            <h2 className="font-lato text-[40px] font-black leading-[48px] text-primary">
              O que é o câncer?
            </h2>
            <p className="font-lato mt-4 text-[20px] leading-[30px] text-darkGray">
              Câncer é um crescimento anormal de células, que se dividem
              rapidamente formando tumores. A doença pode atingir a maior parte
              dos órgãos do corpo humano, incluindo a circulação sanguínea, e se
              espalhar para outras regiões, como tecidos. É o crescimento
              desordenado e anormal de células que, dividindo-se rapidamente,
              formam tumores em algum local do corpo e podem se espalhar para
              outras regiões, invadindo tecidos e órgãos. São mais de 200 tipos
              de câncer, que se dividem em 5 categorias:
            </p>

            <p className="font-lato mt-20 text-[20px] font-bold leading-[30px] text-darkGray">
              São mais de 200 tipos de câncer, que se dividem em 5 categorias:
            </p>
          </div>

          <div className="grid w-1/2 grid-cols-2 gap-6">
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

        <div className="mt-32 flex justify-center">
          <div className="text-center">
            <h2 className="font-lato text-[62px] font-black leading-[74px] text-primary">
              Confira os tipos de câncer mais comuns no Brasil
            </h2>

            <p className="font-lato mt-4 text-[28px] font-medium leading-[32px] text-darkGray">
              O câncer se desenvolve em praticamente qualquer parte do corpo e
              varia em tipos e gravidade. Selecione abaixo a parte do corpo que
              deseja pesquisar ou busque pelo órgão / nome do câncer. Conheça os
              mais comuns:
            </p>

            <h2 className="font-lato mt-14 text-[28px] font-black leading-[74px] text-primary">
              Conheça os mais comuns:
            </h2>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-5">
          <div className="grid w-full grid-cols-4 gap-6">
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

          <BaseButton color="primary" className="text-white" width="224px">
            Ver todos os tipos de câncer
          </BaseButton>
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
      </div>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
