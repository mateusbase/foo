/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, Radio, RadioGroup } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/language.context";
import { useEffect, useState } from "react";
import BaseContainer from "../Container";

export default function Footer(): JSX.Element {
  const { i18n } = useTranslation();
  const { toggleLanguage } = useLanguage();

  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language || "pt_BR",
  );

  const toggleLanguageLocale = (language: string): void => {
    const newLocale = language === "en" ? "en" : "pt_BR";

    i18n.changeLanguage(newLocale).then(() => {
      localStorage.setItem("language", newLocale);

      setSelectedLanguage(newLocale);

      toggleLanguage();
    });
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("language") || i18n.language;

    i18n.changeLanguage(savedLocale);

    setSelectedLanguage(savedLocale);
  }, [i18n]);

  const icons = [
    {
      src: "https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/footer/facebook.svg",
      path: "https://www.facebook.com/GrupoOncoclinicas?fref=ts",
      alt: "Facebook Icon",
    },
    {
      src: "https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/footer/instagram.svg",
      path: "https://www.instagram.com/grupooncoclinicas/",
      alt: "Instagram Icon",
    },
    {
      src: "https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/footer/youtube.svg",
      path: "https://www.youtube.com/channel/UCTLjB1xqQs88RiW1JsQHDpQ",
      alt: "Youtube Icon",
    },
    {
      src: "https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/footer/linkedin.svg",
      path: "https://www.linkedin.com/company/rede-oncocl%C3%ADnicas-do-brasil?trk=cws-btn-overview-0-0",
      alt: "Linkedin Icon",
    },
    {
      src: "https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/footer/spotify.svg",
      path: "https://open.spotify.com/show/6B4KzW4ENKt3jWDMf0wOIC?si=6eeb4ac8f7634429",
      alt: "Spotify Icon",
    },
  ];

  return (
    <>
      <footer className="bg-darkGray p-10 text-white">
        <BaseContainer className="flex w-full flex-col">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-0">
            <Image
              src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/footer/oncoclinicas.svg"
              alt="Oncoclinicas Icon"
              width={312}
              height={38}
            />
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <h1 className="mt-10 font-semibold text-white md:mt-0">
                Nossos Canais
              </h1>

              <div className="flex gap-4">
                {icons.map(({ src, path, alt }) => (
                  <Link key={src} href={path}>
                    <Image src={src} width={32} height={32} alt={alt} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Divider className="mt-8 hidden bg-gray-500 md:block" />

          <div className="mt-16 grid grid-cols-2 gap-8 md:mt-8 lg:grid-cols-5">
            <div>
              <h4 className="mb-4 font-bold text-white">
                Sobre a Oncoclínicas
              </h4>
              <ul>
                <li>
                  <Link href="/quem-somos" className="hover:text-white">
                    Quem somos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    OC Medicina de Precisão
                  </Link>
                </li>
                <li>
                  <Link
                    href="/relacao-com-investidor"
                    className="hover:text-white"
                  >
                    Investidores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Instituto OC
                  </Link>
                </li>
                <li>
                  <Link href="/imprensa" className="hover:text-white">
                    Imprensa
                  </Link>
                </li>
                <li>
                  <Link href="/fale-conosco" className="hover:text-white">
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Pacientes</h4>
              <ul>
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos#tratamentos"
                    className="hover:text-white"
                  >
                    Tratamentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos#diagnósticos"
                    className="hover:text-white"
                  >
                    Diagnóstico
                  </Link>
                </li>
                <li>
                  <Link
                    href="/para-sua-saude/tudo-sobre-o-cancer"
                    className="hover:text-white"
                  >
                    Tudo sobre o câncer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    OC ACESSO
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Vacinas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">Transparência</h4>
              <ul>
                <li>
                  <Link href="#" className="hover:text-white">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Política de Segurança
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Ética e Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">Médicos</h4>
              <ul>
                <li>
                  <Link href="/pesquisa-clinica" className="hover:text-white">
                    Pesquisa clínica
                  </Link>
                </li>
                <li>
                  <Link href="/eventos" className="hover:text-white">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    OC Academia
                  </Link>
                </li>
                <li>
                  <Link href="/oc-journal" className="hover:text-white">
                    OC Journal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Acesso do médico
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h4 className="mb-4 font-bold text-white">
                Baixe o app Oncoclínicas
              </h4>
              <div className="flex flex-col">
                <Link href="#">
                  <img
                    src="https://i.postimg.cc/Mph9CNpn/Imagem-5.png"
                    alt="App Store"
                    className="h-10 w-36"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="https://i.postimg.cc/289cwVpF/Imagem-6.png"
                    alt="Google Play"
                    className="h-10 w-36"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div>
              <h4 className="mb-4 font-bold text-white">Notícias</h4>
              <ul>
                <li>
                  <Link href="#" className="hover:text-white">
                    Publicações Oncoclínicas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Reportagens e artigos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-white">OC Carreiras</h4>
              <ul>
                <li>
                  <Link href="/trabalhe-conosco" className="hover:text-white">
                    Trabalhe Conosco
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Divider className="mt-8 bg-gray-500" />

          <div className="mt-8 flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
            <div className="flex flex-col items-center justify-center md:hidden">
              <h4 className="mb-4 font-bold text-white">
                Baixe o app Oncoclínicas
              </h4>
              <div className="flex flex-col">
                <Link href="#">
                  <img
                    src="https://i.postimg.cc/Mph9CNpn/Imagem-5.png"
                    alt="App Store"
                    className="h-10 w-36"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="https://i.postimg.cc/289cwVpF/Imagem-6.png"
                    alt="Google Play"
                    className="h-10 w-36"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
            <div className="mb-4 lg:mb-0">
              <p className="text-xs text-white">
                © 2024 Grupo Oncoclínicas - RT: Dra. Mariana Laloni - CRM-SP
                102379
              </p>
            </div>

            <RadioGroup
              className="flex flex-col gap-4 lg:flex-row lg:gap-8"
              color="primary"
              value={selectedLanguage}
              onValueChange={(value) => toggleLanguageLocale(value)}
              orientation="horizontal"
            >
              <Radio className="text-white" value="pt_BR">
                <span className="font-medium text-white">Português</span>
              </Radio>
              <Radio className="text-white" value="en">
                <span className="font-medium text-white">English</span>
              </Radio>
              <Radio className="text-white" value="es-ES">
                <span className="font-medium text-white">Español</span>
              </Radio>
            </RadioGroup>
          </div>
        </BaseContainer>
      </footer>

      <div className="flex h-[65px] w-full items-center justify-between bg-[#E3E3E3] px-4 lg:hidden">
        <p className="text-lg font-bold text-gray-600">
          O que você está procurando?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.85-6.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </div>

      <div className="flex h-[65px] w-full items-center justify-between lg:hidden">
        <div className="flex h-full w-1/2 items-center justify-center rounded-bl-3xl bg-secondary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="mr-2 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7v4m8-4v4m1 4h-10v6h10v-6m0-2V5m-10 4V5"
            />
          </svg>
          <p className="text-sm font-bold">Agende</p>
        </div>

        <div className="flex h-full w-1/2 items-center justify-center bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="mr-2 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.5 12c0 4.694 3.806 8.5 8.5 8.5 1.688 0 3.25-.498 4.57-1.348l3.336 1.21a.964.964 0 001.284-1.282l-1.207-3.337A8.451 8.451 0 0020.5 12c0-4.694-3.806-8.5-8.5-8.5S3.5 7.306 3.5 12z"
            />
          </svg>
          <p className="text-sm font-bold">Fale pelo WhatsApp</p>
        </div>
      </div>
    </>
  );
}
