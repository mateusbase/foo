import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";
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
              <Link
                href="mailto:novosnegocios@onoclinicas.com"
                className="text-lg text-white underline"
              >
                novosnegocios@onoclinicas.com
              </Link>

              <p className="mt-4 text-3xl text-white">
                <strong>Fornecedores</strong>
                <br />
              </p>
              <Link
                href="mailto:comprasdiversas@onoclinicas.com"
                className="text-lg text-white underline"
              >
                comprasdiversas@onoclinicas.com
              </Link>
            </div>
          </InfoCard>
        </div>
      </PageLayout>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
