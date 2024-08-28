import {
  Activity,
  Heart,
  User,
} from "lucide-react";
import { FaUser, FaMapMarkerAlt, FaFile } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import ClinicalBody from "./components/clinical-body.component";
import MapCard from "./components/map-card.component";
import Breadcrumb from "./components/breadcrumb.component";
import InsuranceGrid from "./components/insurance-grid.component";
import PageHeader from "./components/page-header.component";
import MainOptionsActions from "@/components/MainOptionsActions";

export default function UnitScreen(): JSX.Element {
  const options = [
    { title: "Agende uma consulta ou exame", icon: IoIosCalendar },
    { title: "Encontre uma unidade", icon: FaMapMarkerAlt },
    { title: "Encontre um médico", icon: FaUser },
    { title: "Resultado de Exames", icon: FaFile },
  ];

  return (
    <main>
      <PageHeader />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-between py-28">
        <Breadcrumb />

        <div className="mt-20 flex">
          <div className="flex-1">
            <div>
              <h2
                className="text-left font-bold"
                style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
              >
                Especialidades e Serviços Oncoclínicas Faria Lima
              </h2>

              <div className="mt-20 grid grid-cols-3 gap-20">
                <div
                  className="flex items-center gap-2"
                  style={{ fontSize: "20px", color: "#007D77" }}
                >
                  <Heart size={60} className="text-primary" /> Cardiologia Oncológica
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
                  <Activity size={60} className="text-primary" /> Genética Médica
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
                  <Activity size={60} className="text-primary" /> Oncologia Clínica
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
                className="text-left font-bold mt-32"
                style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
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
                  <Activity size={60} className="text-primary" /> Lanche para paciente
                </div>

              </div>
            </div>

            <InsuranceGrid />

            <ClinicalBody />

            <div>
              <h2
                className="text-left font-bold mt-32 text-[42px] leading-[50px] text-[#007D77]"
              >
                Sobre a unidade Faria Lima
              </h2>

              <div className="mt-10">
                <p className="text-left font-medium text-[18px] leading-[28px] font-lato text-[#5C5C5C] mb-4">
                  Fundado há mais de três décadas, o Centro Paulista de Oncologia (CPO) passou a integrar o Grupo Oncoclínicas em 2013. A clínica oferece cuidado integral e individualizado ao paciente oncológico, com consultas médicas, tratamento oncológico ambulatorial (quimioterapia, hormonioterapia, drogas alvo, imunoterapia), medicamentos de suporte, acompanhamento médico durante internações hospitalares e uma equipe médica para suporte de emergências disponível 24 horas por dia.
                </p>
                <p className="text-left font-medium text-[18px] leading-[28px] font-lato text-[#5C5C5C] mb-4">
                  Nosso corpo clínico é composto por profissionais especializados em oncologia clínica e hematologia, cuidadosamente selecionados por sua qualidade técnica e ética de trabalho, além de médicos especialistas em oncologia nas áreas de cardiologia, dermatologia, genética e medicina integrativa. Em conjunto com a equipe administrativa, somos mais de 120 colaboradores e 50 médicos trabalhando pela missão de cuidar integralmente do paciente, com excelência, humanidade e ética.
                </p>
                <p className="text-left font-medium text-[18px] leading-[28px] font-lato text-[#5C5C5C] mb-4">
                  O OC Oncoclínicas CPO oferece a todos os pacientes em tratamento ambulatorial uma equipe de enfermagem com experiência e capacitações técnicas e, ainda, farmácia clínica, psicologia, nutrição e reflexologia, complementando os cuidados necessários durante o tratamento.
                </p>
                <p className="text-left font-medium text-[18px] leading-[28px] font-lato text-[#5C5C5C] mb-4">
                  Atualmente, a Oncoclínicas CPO conta com duas unidades localizadas nos bairros Vila Olímpia e Higienópolis.
                </p>
                <p className="text-left font-medium text-[18px] leading-[28px] font-lato text-[#5C5C5C] mb-4">
                  Responsável Técnico da Unidade: Daniel Luiz Gimenes | CRM SP 75953.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <img
                  src="https://via.placeholder.com/352x198"
                  alt="Imagem 1"
                  className="w-[352px] h-[198px] object-cover rounded"
                />
                <img
                  src="https://via.placeholder.com/352x198"
                  alt="Imagem 2"
                  className="w-[352px] h-[198px] object-cover rounded"
                />
                <img
                  src="https://via.placeholder.com/352x198"
                  alt="Imagem 3"
                  className="w-[352px] h-[198px] object-cover rounded"
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
