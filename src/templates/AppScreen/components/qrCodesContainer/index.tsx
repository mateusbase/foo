import Image from "next/image";
import Link from "next/link";

const QrCodeContainer = (): JSX.Element => {
  return (
    <div className="w-full self-center">
      <div className="mb-9 mt-20 rounded-bl-3xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center bg-gradient-to-t from-purpleDark to-purpleLight px-11 py-10 text-left md:w-1/2 md:rounded-bl-[32px]">
            <span className="block text-4xl font-normal text-white lg:hidden">
              Baixe o aplicativo da
            </span>
            <span className="block text-4xl font-bold text-white lg:hidden">
              OC Medicina de Precisão
            </span>

            <div className="hidden text-left font-light lg:flex lg:flex-col">
              <p className="text-5xl text-white">
                Baixe o app.
                <br />
                <span>Escolha sua loja ao lado</span>
              </p>
              <p className="mt-10 text-lg font-bold text-white">
                Tenha acesso a todo o conteúdo da OC Medicina de Precisão
                diretamente na palma da sua mão, através do seu iPhone ou
                Android.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 border border-black px-6 py-10 md:w-1/2 md:flex-row md:space-x-12">
            {/* telas pequena/média */}
            <div className="flex flex-col items-center gap-6 lg:hidden">
              <Image
                src="/assets/images/precision-medicine-app/medicina-precisão-app.png"
                alt="OC Medicina de Precisão App"
                width={104}
                height={104}
              />
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                <Link
                  target="_blank"
                  href="https://www.apple.com/br/app-store/"
                >
                  <img
                    src="https://i.postimg.cc/289cwVpF/Imagem-6.png"
                    alt="App Store"
                    className="h-[55px] w-[185px] md:h-[45px] md:w-[153px]"
                  />
                </Link>

                <Link
                  target="_blank"
                  href="https://play.google.com/store/games?hl=pt_BR"
                >
                  <img
                    src="https://i.postimg.cc/Mph9CNpn/Imagem-5.png"
                    alt="Google Play"
                    className="h-[55px] w-[185px] md:h-[45px] md:w-[153px]"
                  />
                </Link>
              </div>
            </div>

            {/* tela grande */}
            <div className="ml-0 hidden w-full items-start justify-center self-center lg:flex">
              <div className="flex w-full max-w-4xl flex-row items-start justify-center gap-x-6 self-center">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src="/assets/images/appstoreqr.png"
                    className="shrink-0 lg:size-36 xl:size-44"
                    alt="App Store QR Code"
                  />
                  <Link
                    target="_blank"
                    href="https://www.apple.com/br/app-store/"
                  >
                    <img
                      src="https://i.postimg.cc/289cwVpF/Imagem-6.png"
                      alt="App Store"
                      className="h-14 w-44 shrink-0 md:h-[45px] md:w-[153px] lg:h-[55px] lg:w-[185px] xl:h-14 xl:w-44"
                    />
                  </Link>
                </div>

                <div className="flex items-start">
                  <Image
                    src="/assets/images/precision-medicine-app/medicina-precisão-app.png"
                    alt="OC Medicina de Precisão App"
                    width={150}
                    height={150}
                    className="h-44 shrink-0 object-contain lg:size-36 xl:h-44"
                  />
                </div>

                <div className="flex flex-col items-center gap-4">
                  <img
                    src="/assets/images/googleplayqr.png"
                    className="size-44 lg:size-36 xl:size-44"
                    alt="Google Play QR Code"
                  />
                  <Link
                    target="_blank"
                    href="https://play.google.com/store/games?hl=pt_BR"
                  >
                    <img
                      src="https://i.postimg.cc/Mph9CNpn/Imagem-5.png"
                      alt="Google Play"
                      className="h-[55px] w-[185px] shrink-0 md:h-[45px] md:w-[153px] lg:h-[55px] lg:w-[185px] xl:h-14 xl:w-44"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodeContainer;
