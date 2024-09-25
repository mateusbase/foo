import MainOptionsActions from "@/components/MainOptionsActions";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ServiceSection from "./components/service.component";

export default function ServiceScreen(): JSX.Element {
  const healthServices1 = [
    {
      id: 1,
      serviceTitle: "Análise Patológica",
      serviceDescription:
        "Técnica responsável pela análise de células e tecidos com alterações oncológicas.",
    },
    {
      id: 2,
      serviceTitle: "Cuidados Paliativos",
      serviceDescription:
        "Serviços realizados por equipe multidisciplinar para pacientes, familiares e cuidadores.",
    },
    {
      id: 3,
      serviceTitle: "Análise Patológica",
      serviceDescription:
        "Testes moleculares para a escolha do melhor tratamento em cada paciente.",
    },
    {
      id: 4,
      serviceTitle: "Jornada Molecular",
      serviceDescription:
        "Testes moleculares para a escolha do melhor tratamento em cada paciente.",
    },
    {
      id: 5,
      serviceTitle: "Análise Patológica",
      serviceDescription:
        "Testes moleculares para a escolha do melhor tratamento em cada paciente.",
    },
    {
      id: 6,
      serviceTitle: "Laserterapia",
      serviceDescription:
        "Testes moleculares para a escolha do melhor tratamento em cada paciente.",
    },
  ];

  const medicalServices1 = [
    {
      id: 1,
      serviceTitle: "OC Acesso",
      serviceDescription:
        "A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência.",
      actionButtonText: "Exclusividade Oncoclínicas",
    },
    {
      id: 2,
      serviceTitle: "Terapia Celular",
      serviceDescription:
        "Tratamento que usa as próprias células de defesa do sistema imunológico para combater alguns tipos de câncer.",
      actionButtonText: "Personalização",
    },
    {
      id: 3,
      serviceTitle: "Terapia Celular",
      serviceDescription:
        "Tratamento que usa as próprias células de defesa do sistema imunológico para combater alguns tipos de câncer.",
      actionButtonText: "Personalização",
    },
  ];

  const healthServices2 = [
    {
      id: 4,
      serviceTitle: "Jornada Molecular",
      serviceDescription:
        "Testes moleculares para a escolha do melhor tratamento em cada paciente.",
    },
    {
      id: 5,
      serviceTitle: "Cuidados Paliativos",
      serviceDescription:
        "Serviços realizados por equipe multidisciplinar para pacientes, familiares e cuidadores.",
    },
  ];

  const medicalServices2 = [
    {
      id: 3,
      serviceTitle: "Testes Germinativos",
      serviceDescription:
        "Os testes germinativos analisam genes associados a predisposição hereditária a diversos tipos de câncer.",
      actionButtonText: "Genômica",
    },
  ];

  const headerProps = {
    title: "Serviços, diagnósticos e tratamentos",
    address: "Oncoclínicas",
    buttonText: "Ver todos os serviços",
    showContactSection: true,
    contactLinks: {
      whatsappLink: "https://wa.me/your-whatsapp-number",
      whatsappText: "WhatsApp",
      phoneLink: "tel:+123456789",
      phoneText: "Ligue Agora",
      mapLink: "https://maps.google.com",
      mapText: "Localização",
    },
  };

  return (
    <main>
      <PageHeader
        title={headerProps.title}
        subtitle={headerProps.address}
        buttonText={headerProps.buttonText}
        showContactSection={headerProps.showContactSection}
        contactLinks={headerProps.contactLinks}
      />

      <BaseContainer className="flex min-h-screen w-full flex-col py-20">
        <div className="hidden px-10 md:block md:px-0">
          <Breadcrumb />
        </div>

        <ServiceSection
          id="servicos"
          title="Serviços Oncoclínicas"
          description="Comodidade e priorização da vida em toda a jornada do tratamento do câncer. Conheça nossos serviços."
          healthServices={healthServices1}
          medicalServices={medicalServices1}
        />

        <ServiceSection
          id="diagnósticos"
          title="OC Diagnósticos"
          description="Corpo clínico altamente especializado e os mais variados tipos de exames. Conheça a OC Diagnóstico."
          healthServices={healthServices2}
          medicalServices={medicalServices2}
        />

        <ServiceSection
          id="tratamentos"
          title="Tratamentos Oncoclínicas"
          description="As terapias mais eficazes para o tratamento do câncer. Conheça nossos métodos."
          healthServices={healthServices1}
          medicalServices={medicalServices1}
        />
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
