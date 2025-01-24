import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Image } from "@heroui/image";
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
          <div
            className="h-[202px] bg-cover bg-no-repeat md:h-[376px] lg:hidden"
            style={{
              backgroundImage: `url('/assets/images/banner-talk-to-us-2.png')`,
            }}
          />
          <ContactUsForm />

          <div className="flex flex-col">
            <div className="flex w-auto flex-col overflow-hidden rounded-bl-[100px] bg-white">
              <div
                className="hidden h-[376px] bg-cover bg-no-repeat lg:block"
                style={{
                  backgroundImage: `url('/assets/images/banner-talk-to-us-2.png')`,
                }}
              />
              <div className="flex min-h-[292px] w-full flex-col justify-between gap-12 rounded-bl-[100px] bg-custom-gradient-dark px-6 py-8 md:px-14">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Contato para Negócios
                </h2>
                <p className="text-base text-white md:text-xl">
                  A área de Novos Negócios atua como mecanismo estratégico,
                  buscando oportunidades no cenário nacional e internacional no
                  intuito de agregar valor ao portfólio de clínicas e parcerias
                  do Grupo Oncoclínicas.
                </p>

                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-white md:text-3xl">
                    Área de Novos Negócios
                  </p>
                  <Link
                    href="mailto:novosnegocios@onoclinicas.com"
                    className="text-lg text-white underline"
                  >
                    novosnegocios@onoclinicas.com
                  </Link>

                  <p className="mt-4 text-2xl text-white md:text-3xl">
                    <strong>Fornecedores</strong>
                    <br />
                  </p>
                  <Link
                    href="mailto:comprasdiversas@onoclinicas.com"
                    className="mb-10 text-lg text-white underline md:mb-0"
                  >
                    comprasdiversas@onoclinicas.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 md:flex">
              <div className="">
                <img
                  alt="Imagem de conheça"
                  src="/assets/images/banner-talk-to-us.png"
                  className="size-full max-h-[254px] rounded-none object-cover md:rounded-bl-[100px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center rounded-bl-[100px] bg-aquaLight py-10 md:w-4/5 md:rounded-none">
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
