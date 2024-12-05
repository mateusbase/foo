import Link from "next/link";

const PlayStoreContainer = (): JSX.Element => {
  return (
    <div className="w-[90%] self-center">
      <div className="mb-9 mt-20 rounded-bl-3xl border-1 border-black">
        <div className="flex flex-col md:flex-row">
          <div className="flex h-[260px] w-full items-center justify-center bg-gradient-to-t from-purpleDark to-purpleLight px-11 py-10 text-center md:w-1/2 md:rounded-bl-[32px]">
            <div>
              <span className="block font-lato-light text-4xl text-white">
                Baixe o aplicativo da
              </span>
              <span className="block font-lato-bold text-4xl text-white">
                OC Medicina de Precisão
              </span>
            </div>
          </div>

          <div className="flex h-[256px] w-full flex-col items-center justify-center gap-8 px-6 py-10 md:w-1/2">
            <Link
              target="_blank"
              href="https://play.google.com/store/games?hl=pt_BR"
            >
              <img
                src="https://i.postimg.cc/Mph9CNpn/Imagem-5.png"
                alt="App Store"
                className="h-14 w-44"
              />
            </Link>
            <Link target="_blank" href="https://www.apple.com/br/app-store/">
              <img
                src="https://i.postimg.cc/289cwVpF/Imagem-6.png"
                alt="Google Play"
                className="h-14 w-44"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreContainer;
