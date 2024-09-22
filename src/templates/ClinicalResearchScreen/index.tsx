import PageHeader from "@/components/PageHeader/page-header.component";
import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import InformationSlider from "@/components/InformationSlider";

export default function ClinicalResearchScreen(): JSX.Element {
  const services = [
    {
      subtitle: "Saiba mais",
      serviceTitle: "OC na mídia",
      serviceDescription:
        "Confira o nosso clipping, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      actionButtonText: "Ver mais",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      subtitle: "Saiba mais",
      serviceTitle: "Serviço Oncológico",
      serviceDescription:
        "Acompanhe nossos serviços, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      actionButtonText: "Descubra",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      subtitle: "Novidades",
      serviceTitle: "Tecnologias",
      serviceDescription:
        "Tecnologias avançadas, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      actionButtonText: "Ver detalhes",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
  ];
  return (
    <main>
      <PageHeader
        title="Agende sua consulta"
        subtitle="Oncoclínicas"
        showContactSection={false}
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col py-20">
        <Breadcrumb />

        <div className="mt-20 flex w-full justify-between gap-10">
          <div className="flex w-full flex-col">
            <h1 className="max-w-unit-8xl text-6xl font-extralight text-primary">
              Pesquisa Clínica Oncoclínicas
            </h1>
            <p className="mt-8 max-w-unit-8xl text-lg text-darkGray">
              Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas
              vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada
              e a participação de sete de suas unidades no Brasil.
            </p>

            <BaseButton
              className="mt-16 font-bold text-white"
              color="primary"
              variant="solid"
              width="322px"
            >
              Como funciona
            </BaseButton>
          </div>

          <div className="flex w-full flex-col items-center">
            <img
              src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
              alt="Imagem de consulta"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-20 grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <MedicalServiceCard
              key={service.subtitle}
              subtitle={service.subtitle}
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
              actionButtonText={service.actionButtonText}
            />
          ))}
        </div>

        <div className="mt-20">
          <InformationSlider />
        </div>
      </div>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
