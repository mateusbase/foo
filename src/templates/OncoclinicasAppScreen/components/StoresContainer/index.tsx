import { useDeviceType } from "@/hooks/useDeviceType";
import Link from "next/link";

const StoresContainer = (): JSX.Element => {
  const deviceType = useDeviceType();
  return (
    <div className="full-bleed-md w-full md:mt-10">
      <div className="mb-9">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center bg-gradient-to-t from-purpleDark to-purpleLight px-11 py-10 text-left lg:w-1/2 lg:rounded-bl-[100px]">
            <div className="mb-10 text-left font-light">
              <p className="text-5xl text-white">
                Baixe o app. <br />
                <span>
                  Escolha sua loja
                  {`${deviceType === "desktop" ? " ao lado" : " abaixo"}`}
                </span>
              </p>
              <p className="mt-10 text-xl font-bold text-white lg:text-base xl:text-2xl">
                Tenha acesso a todo o conteúdo da Oncoclínicas diretamente na
                palma da sua mão, através do seu iPhone ou Android. Mantenha-se
                informado sobre as últimas notícias e atualizações em cuidados
                oncológicos, assista a vídeos educativos, agende suas consultas
                e muito mais, tudo de forma rápida e conveniente, onde estiver.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 border-black px-6 py-10 md:flex-row md:space-x-12 md:border lg:w-1/2 lg:space-x-36">
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/images/appstoreqr.png"
                className="hidden size-44 lg:block"
                alt="App Store QR Code"
              />
              <Link
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.apple.com/br/app-store/"
              >
                <img
                  src="https://i.postimg.cc/289cwVpF/Imagem-6.png"
                  alt="App Store"
                  className="h-14 w-44 md:h-[72px] md:w-[240px] lg:h-[55px] lg:w-[185px]"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/images/googleplayqr.png"
                className="hidden size-44 lg:block"
                alt="Google Play QR Code"
              />
              <Link
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://play.google.com/store/games?hl=pt_BR"
              >
                <img
                  src="https://i.postimg.cc/Mph9CNpn/Imagem-5.png"
                  alt="Google Play"
                  className="h-14 w-44 md:h-[72px] md:w-[240px] lg:h-[55px] lg:w-[185px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresContainer;
