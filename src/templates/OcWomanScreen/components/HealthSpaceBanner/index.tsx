import Image from "next/image";

export const HealthSpaceBanner = (): JSX.Element => {
  return (
    <div className="full-bleed mb-14 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="lg:w-[55%]">
        <div className="size-full">
          <Image
            src="/assets/images/ocMulher/oc_mulher_banner.png"
            alt="OC Mulher"
            width={1920}
            height={1080}
            className="size-full object-fill lg:rounded-bl-[100px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-custom-gradient-light px-10 pb-40 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20 lg:h-auto lg:w-[45%] lg:shrink-0 lg:pb-24 lg:pl-14 lg:pr-24 lg:pt-[72px]">
        <h1 className="mb-8 text-5xl">Espaço Saúde</h1>
        <p className="text-xl">
          O OC Mulher – Espaço Saúde é uma das iniciativas do programa.
          Localizado em algumas unidades da Oncoclínicas no Brasil, é um local
          que foi pensado para atender exclusivamente ao público feminino, com
          todo cuidado, privacidade e praticidade. Oferece atendimento de ponta,
          com tecnologia de última geração, corpo clínico e equipe
          multiprofissional especializados em saúde da mulher.
        </p>
      </div>
    </div>
  );
};
