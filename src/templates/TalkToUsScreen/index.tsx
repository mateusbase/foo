import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import Link from "next/link";
import { Image } from "@nextui-org/image";
import BaseButton from "@/components/Button";
import ContactUsForm from "./components/ContactUsForm";

export default function TalkToUsScreen(): JSX.Element {
  return (
    <main>
      <PageLayout
        title="Fale Conosco"
        subtitle="Este canal é exclusivo para você tirar dúvidas, enviar sugestões, elogios, reclamações e buscar informações sobre a Oncoclínicas&Co ou se preferir ligue para 4004-8020."
        mainOptions={false}
      >
        <div className="mb-10 mt-20 flex w-full flex-col gap-5 lg:flex-row">
          <ContactUsForm />

          <div className="flex flex-col">
            <InfoCard roundedSide="left">
              <h2 className="text-3xl font-bold text-white">
                Contato para Negócios
              </h2>
              <p className="text-lg text-white">
                A área de Novos Negócios atua como mecanismo estratégico,
                buscando oportunidades no cenário nacional e internacional no
                intuito de agregar valor ao portfólio de clínicas e parcerias do
                Grupo Oncoclínicas.
              </p>

              <div className="flex flex-col">
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

            <div className="mt-10 flex rounded-bl-full">
              <div>
                <Image
                  width={299}
                  height={236}
                  radius="none"
                  alt="Imagem de conheça"
                  src="/assets/image/banner-talk-to-us.png"
                  className="size-full"
                />
              </div>
              <div className="flex w-4/5 flex-col items-center justify-center bg-aquaLight">
                <Image
                  src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/header/oncoclinicas.svg"
                  alt="Logo"
                  className="w-[250px] max-w-none xl2:w-[300px]"
                />
                <BaseButton className="mt-10 min-w-52 text-white">
                  Conheça
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
