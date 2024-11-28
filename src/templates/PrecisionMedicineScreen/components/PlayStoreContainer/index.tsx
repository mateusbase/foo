import Link from "next/link";

const PlayStoreContainer = (): JSX.Element => {
  return (
    <div className="mb-9 mt-20 items-center rounded-bl-3xl border-1 border-black">
      <div className="h-[250px] w-full items-center justify-center bg-gradient-to-t from-purpleDark to-purpleLight px-11 py-10 align-middle">
        <span className="font-lato-light text-4xl text-white">
          Baixe o aplicativo da
        </span>
        <br />
        <span className="font-lato-bold text-4xl text-white">
          OC Medicina de Precisão
        </span>
      </div>

      <div className="flex h-[256px] w-full flex-col items-center justify-center gap-8">
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
  );
};

export default PlayStoreContainer;
