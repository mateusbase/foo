/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, Radio, RadioGroup } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import BaseContainer from "../Container";

export default function Footer(): JSX.Element {
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
    <footer className="bg-[#5C5C5C] p-10 text-white">
      <BaseContainer className="flex w-full flex-col">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-0">
          <Image
            src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/footer/oncoclinicas.svg"
            alt="Oncoclinicas Icon"
            width={312}
            height={38}
          />
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <h1 className="font-semibold text-white">Nossos Canais</h1>

            <div className="flex gap-4">
              {icons.map(({ src, path, alt }) => (
                <Link key={src} href={path}>
                  <Image src={src} width={32} height={32} alt={alt} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Divider className="mt-8 bg-gray-500" />

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h4 className="mb-4 font-bold text-white">Sobre a Oncoclínicas</h4>
            <ul>
              <li>
                <Link href="quem-somos" className="hover:text-white">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  OC Medicina de Precisão
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investidores
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Instituto OC
                </Link>
              </li>
              <li>
                <Link href="imprensa" className="hover:text-white">
                  Imprensa
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Pacientes</h4>
            <ul>
              <li>
                <Link href="servicos" className="hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="servicos#tratamentos" className="hover:text-white">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link href="servicos#diagnósticos" className="hover:text-white">
                  Diagnóstico
                </Link>
              </li>
              <li>
                <Link
                  href="para-sua-saude/tudo-sobre-o-cancer"
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
                <Link href="pesquisa-clinica" className="hover:text-white">
                  Pesquisa clínica
                </Link>
              </li>
              <li>
                <Link href="eventos" className="hover:text-white">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  OC Academia
                </Link>
              </li>
              <li>
                <Link href="oc-journal" className="hover:text-white">
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
          <div>
            <h4 className="mb-4 font-bold text-white">
              Baixe o app Oncoclínicas
            </h4>
            <div className="flex flex-col">
              <Link href="#">
                <img
                  src="/apple-store-logo.png"
                  alt="App Store"
                  className="h-10"
                />
              </Link>
              <Link href="#">
                <img
                  src="/google-play-logo.png"
                  alt="Google Play"
                  className="h-10"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <Link href="#" className="hover:text-white">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="mt-8 bg-gray-500" />

        <div className="mt-8 flex flex-row items-center justify-between text-center">
          <div>
            <p className="text-xs text-white">
              © 2024 Grupo Oncoclínicas - RT: Dra. Mariana Laloni - CRM-SP
              102379
            </p>
          </div>
          <RadioGroup
            className="flex justify-center gap-8"
            color="default"
            orientation="horizontal"
          >
            <Radio className="text-white" value="pt-BR">
              <span className="font-medium text-white">Português</span>
            </Radio>
            <Radio className="text-white" value="en-US">
              <span className="font-medium text-white">English</span>
            </Radio>
            <Radio className="text-white" value="es-ES">
              <span className="font-medium text-white">Español</span>
            </Radio>
          </RadioGroup>
        </div>
      </BaseContainer>
    </footer>
  );
}
