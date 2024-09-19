import { Activity, Heart, User } from "lucide-react";
import { FaUser, FaMapMarkerAlt, FaFile } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import MainOptionsActions from "@/components/MainOptionsActions";
import PageHeader from "@/components/PageHeader/page-header.component";
import ClinicalBody from "./components/clinical-body.component";
import MapCard from "./components/map-card.component";
import Breadcrumb from "./components/breadcrumb.component";
import InsuranceGrid from "./components/insurance-grid.component";

export default function UnitScreen(): JSX.Element {
  const options = [
    { title: "Agende uma consulta ou exame", icon: IoIosCalendar },
    { title: "Encontre uma unidade", icon: FaMapMarkerAlt },
    { title: "Encontre um médico", icon: FaUser },
    { title: "Resultado de Exames", icon: FaFile },
  ];

  return (
    <main>
      <PageHeader
        title="Oncoclínicas Faria Lima"
        address="Avenida Brigadeiro Faria Lima, 4.300 - 6º e 10º Andar - Vila Olímpia São Paulo/SP"
        buttonText="Botão"
        showContactSection
        contactLinks={{
          whatsappText: "Fale por WhatsApp",
          whatsappLink: "#",
          phoneText: "Ligar na central de atendimento",
          phoneLink: "#",
          mapText: "Mostrar no mapa",
          mapLink: "#",
        }}
      />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-between py-28">
        <Breadcrumb />

        <div className="mt-20 flex">
          <div className="flex-1">
            <div>
              <h2
                className="text-left font-bold"
                style={{
                  fontSize: "42px",
                  lineHeight: "50px",
                  color: "#007D77",
                }}
              >
                Especialidades e Serviços Oncoclínicas Faria Lima
              </h2>

              <div className="mt-20 grid grid-cols-3 gap-20">
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Heart size={60} className="text-primary" /> Cardiologia
                  Oncológica
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <User size={60} className="text-primary" /> Dermatologia
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Genética
                  Médica
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Heart size={60} className="text-primary" /> Hematologia
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <User size={60} className="text-primary" /> Medicina Paliativa
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Oncologia
                  Clínica
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Crioterapia
                </div>
              </div>
            </div>

            <div>
              <h2
                className="mt-32 text-left font-bold"
                style={{
                  fontSize: "42px",
                  lineHeight: "50px",
                  color: "#007D77",
                }}
              >
                Facilidades e comodidades
              </h2>

              <div className="mt-20 grid grid-cols-3 gap-20">
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Heart size={60} className="text-primary" /> Estacionemento
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <User size={60} className="text-primary" /> Wi-fi
                </div>

                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Activity size={60} className="text-primary" /> Lanche para
                  paciente
                </div>
              </div>
            </div>

            <InsuranceGrid />

            <ClinicalBody />

            <div>
              <h2 className="mt-32 text-left text-[42px] font-bold leading-[50px] text-[#007D77]">
                Sobre a unidade Faria Lima
              </h2>

              <div className="mt-10">
                <p className="font-lato mb-4 text-left text-[18px] font-medium leading-[28px] text-[#5C5C5C]">
                  Fundado há mais de três décadas, o Centro Paulista de
                  Oncologia (CPO) passou a integrar o Grupo Oncoclínicas em
                  2013. A clínica oferece cuidado integral e individualizado ao
                  paciente oncológico, com consultas médicas, tratamento
                  oncológico ambulatorial (quimioterapia, hormonioterapia,
                  drogas alvo, imunoterapia), medicamentos de suporte,
                  acompanhamento médico durante internações hospitalares e uma
                  equipe médica para suporte de emergências disponível 24 horas
                  por dia.
                </p>
                <p className="font-lato mb-4 text-left text-[18px] font-medium leading-[28px] text-[#5C5C5C]">
                  Nosso corpo clínico é composto por profissionais
                  especializados em oncologia clínica e hematologia,
                  cuidadosamente selecionados por sua qualidade técnica e ética
                  de trabalho, além de médicos especialistas em oncologia nas
                  áreas de cardiologia, dermatologia, genética e medicina
                  integrativa. Em conjunto com a equipe administrativa, somos
                  mais de 120 colaboradores e 50 médicos trabalhando pela missão
                  de cuidar integralmente do paciente, com excelência,
                  humanidade e ética.
                </p>
                <p className="font-lato mb-4 text-left text-[18px] font-medium leading-[28px] text-[#5C5C5C]">
                  O OC Oncoclínicas CPO oferece a todos os pacientes em
                  tratamento ambulatorial uma equipe de enfermagem com
                  experiência e capacitações técnicas e, ainda, farmácia
                  clínica, psicologia, nutrição e reflexologia, complementando
                  os cuidados necessários durante o tratamento.
                </p>
                <p className="font-lato mb-4 text-left text-[18px] font-medium leading-[28px] text-[#5C5C5C]">
                  Atualmente, a Oncoclínicas CPO conta com duas unidades
                  localizadas nos bairros Vila Olímpia e Higienópolis.
                </p>
                <p className="font-lato mb-4 text-left text-[18px] font-medium leading-[28px] text-[#5C5C5C]">
                  Responsável Técnico da Unidade: Daniel Luiz Gimenes | CRM SP
                  75953.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <img
                  src="https://via.placeholder.com/352x198"
                  alt="Imagem 1"
                  className="h-[198px] w-[352px] rounded object-cover"
                />
                <img
                  src="https://via.placeholder.com/352x198"
                  alt="Imagem 2"
                  className="h-[198px] w-[352px] rounded object-cover"
                />
                <img
                  src="https://via.placeholder.com/352x198"
                  alt="Imagem 3"
                  className="h-[198px] w-[352px] rounded object-cover"
                />
              </div>
            </div>
          </div>

          <MapCard />
        </div>
      </div>

      <MainOptionsActions options={options} />
    </main>
  );
}
