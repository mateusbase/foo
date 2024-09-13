import { Circle, Plus } from "lucide-react";
import { FaUser, FaMapMarkerAlt, FaFile } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { Button } from "@nextui-org/react";
import MainOptionsActions from "@/components/MainOptionsActions";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import HealthServiceCard from "@/components/HealthServiceCard";
import { TbCodePlus } from "react-icons/tb";
import Breadcrumb from "./components/breadcrumb.component";
import PageHeader from "./components/page-header.component";
import AlphabetSelector from "./components/alphabet-selector.component";
import SectionHeader from "./components/SectionHeader";

export default function ServiceScreen(): JSX.Element {
  const options = [
    { id: 1, title: "Agende uma consulta ou exame", icon: IoIosCalendar },
    { id: 2, title: "Encontre uma unidade", icon: FaMapMarkerAlt },
    { id: 3, title: "Encontre um médico", icon: FaUser },
    { id: 4, title: "Resultado de Exames", icon: FaFile },
  ];

  return (
    <main>
      <PageHeader />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col py-28">
        {/* Breadcrumb */}
        <div className="flex justify-start">
          <Breadcrumb />
        </div>

        {/* Serviços Oncoclínicas */}
        <div>
          <SectionHeader
            title="Serviços Oncoclínicas"
            description="Comodidade e priorização da vida em toda a jornada do tratamento
                do câncer. Conheça nossos serviços."
          />

          <AlphabetSelector />

          <div className="mt-10 grid grid-cols-4 gap-[26px]">
            {[...Array(8)].map((_, index) => (
              <HealthServiceCard
                key={index}
                serviceTitle="Análise Patológica"
                serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
              />
            ))}
          </div>

          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<TbCodePlus size={24} />}
            className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-primary"
          >
            Ver todos
          </Button>

          <div className="mt-28 grid grid-cols-3 gap-[26px]">
            {[...Array(3)].map((_, index) => (
              <MedicalServiceCard
                key={index}
                serviceTitle="OC Acesso"
                serviceDescription="A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência."
                actionButtonText="Exclusividade Oncoclínicas"
              />
            ))}
          </div>
        </div>

        {/* OC Diagnósticos */}
        <div className="mt-5">
          <SectionHeader
            title="OC Diagnósticos"
            description="Corpo clínico altamente especializado e os mais variados tipos
                de exames. Conheça a OC Diagnóstico."
          />

          <AlphabetSelector />

          <div className="mt-10 grid grid-cols-4 gap-[26px]">
            {[...Array(8)].map((_, index) => (
              <HealthServiceCard
                key={index}
                serviceTitle="Cuidados Paliativos"
                serviceDescription="Serviços realizados por equipe multidisciplinar para pacientes, familiares e cuidadores."
              />
            ))}
          </div>

          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<TbCodePlus size={24} />}
            className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-primary"
          >
            Ver todos
          </Button>

          <div className="mt-28 grid grid-cols-3 gap-[26px]">
            {[...Array(3)].map((_, index) => (
              <MedicalServiceCard
                key={index}
                serviceTitle="Terapia Celular"
                serviceDescription="Tratamento que usa as próprias células de defesa do sistema imunológico para combater alguns tipos de câncer."
                actionButtonText="Personalização"
              />
            ))}
          </div>
        </div>

        {/* Tratamentos Oncoclínicas */}
        <div className="mt-5">
          <SectionHeader
            title="Tratamentos Oncoclínicas"
            description="As terapias mais eficazes para o tratamento do câncer. Conheça
                nossos métodos."
          />

          <AlphabetSelector />

          <div className="mt-10 grid grid-cols-4 gap-[26px]">
            {[...Array(8)].map((_, index) => (
              <HealthServiceCard
                key={index}
                serviceTitle="Jornada Molecular"
                serviceDescription="Testes moleculares para a escolha do melhor tratamento em cada paciente."
              />
            ))}
          </div>

          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<TbCodePlus size={24} />}
            className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-primary"
          >
            Ver todos
          </Button>

          <div className="mt-28 grid grid-cols-3 gap-[26px]">
            {[...Array(3)].map((_, index) => (
              <MedicalServiceCard
                key={index}
                serviceTitle="Testes Germinativos"
                serviceDescription="Os testes germinativos analisam genes associados a predisposição hereditária a diversos tipos de câncer."
                actionButtonText="Genômica"
              />
            ))}
          </div>
        </div>
      </div>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
