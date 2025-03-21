import BaseButton from "@/components/Button";

export default function TermsOfConsentBanner(): JSX.Element {
  return (
    <div className="relative flex h-[246px] w-full justify-between text-white lg:h-[536px]">
      <div className="flex h-full flex-col justify-between gap-2 bg-darkGray p-7 md:w-1/2 lg:rounded-bl-[100px] lg:px-20 lg:py-10">
        <div>
          <p className="mb-4 text-[28px] font-light lg:mb-8 lg:mt-20 lg:text-5xl">
            Termo de Consentimento
          </p>
          <p className="mb-5 text-sm lg:mb-32 lg:text-2xl">
            O Termo de Consentimento Livre Esclarecido (TCLE) é o documento que
            explica todos os procedimentos, vantagens e desvantagens de ser um
            participante da pesquisa.
          </p>
          <div className="flex w-full lg:hidden">
            <BaseButton
              variant="bordered"
              className="w-full text-white"
              color="default"
            >
              Como funciona
            </BaseButton>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 lg:h-full">
        <img
          src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
          alt="Imagem 1"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
