import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { Textarea } from "@nextui-org/react";
import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import InfoCard from "@/components/InfoCard";
import ContactUsForm from "./components/ContactUsForm";

export default function TalkToUsScreen(): JSX.Element {
  return (
    <main>
      <PageLayout
        subtitle="Este canal é exclusivo para você tirar dúvidas, enviar sugestões, elogios, reclamações e buscar informações sobre a Oncoclínicas&Co ou se preferir ligue para 4004-8020."
        mainOptions={false}
      >
        <div className="mb-10 mt-20 flex w-full flex-col gap-5 lg:flex-row">
          <ContactUsForm />

          <InfoCard>
            <h2 className="text-3xl font-bold text-white">
              Contato para Negócios
            </h2>
            <p className="mt-2 text-lg text-white">
              A área de Novos Negócios atua como mecanismo estratégico, buscando
              oportunidades no cenário nacional e internacional no intuito de
              agregar valor ao portfólio de clínicas e parcerias do Grupo
              Oncoclínicas.
            </p>

            <div className="mt-4 flex flex-col">
              <p className="text-3xl font-bold text-white">
                Área de Novos Negócios
              </p>
              <a
                href="mailto:novosnegocios@onoclinicas.com"
                className="text-lg text-white underline"
              >
                novosnegocios@onoclinicas.com
              </a>

              <p className="mt-4 text-3xl text-white">
                <strong>Fornecedores</strong>
                <br />
              </p>
              <a
                href="mailto:comprasdiversas@onoclinicas.com"
                className="text-lg text-white underline"
              >
                comprasdiversas@onoclinicas.com
              </a>
            </div>
          </InfoCard>
        </div>
      </PageLayout>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
