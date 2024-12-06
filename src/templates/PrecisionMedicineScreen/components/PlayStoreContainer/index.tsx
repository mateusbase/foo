import Link from "next/link";

const PlayStoreContainer = (): JSX.Element => {
  return (
    <div className="w-[90%] self-center">
      <div className="mb-9 mt-20 rounded-bl-3xl border-1 border-black">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center bg-gradient-to-t from-purpleDark to-purpleLight px-11 py-10 text-center md:w-1/2 md:rounded-bl-[32px]">
            <span className="block text-4xl font-normal text-white lg:hidden">
              Baixe o aplicativo da
            </span>
            <span className="block text-4xl font-bold text-white lg:hidden">
              OC Medicina de Precisão
            </span>

            <div className="hidden lg:flex lg:flex-col">
              <p className="text-5xl text-white">
                Baixe o aplicativo da{" "}
                <span className="font-bold">OC Medicina de Precisão</span>
              </p>
              <p className="mt-10 text-5xl font-thin text-white">
                Escaneie o QR code ao lado
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center px-6 py-10 md:w-1/2">
            <div className="flex space-x-12 lg:space-x-36">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="/assets/images/appstoreqr.png"
                  className="hidden size-44 lg:block"
                  alt="App Store QR Code"
                />
                <Link
                  target="_blank"
                  href="https://www.apple.com/br/app-store/"
                >
                  <img
                    src="https://i.postimg.cc/289cwVpF/Imagem-6.png"
                    alt="App Store"
                    className="h-14 w-44 lg:h-[55px] lg:w-[185px]"
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
                  href="https://play.google.com/store/games?hl=pt_BR"
                >
                  <img
                    src="https://i.postimg.cc/Mph9CNpn/Imagem-5.png"
                    alt="Google Play"
                    className="h-14 w-44 lg:h-[55px] lg:w-[185px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreContainer;
