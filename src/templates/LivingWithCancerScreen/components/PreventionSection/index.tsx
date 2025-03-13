import BaseButton from "@/components/Button";
import Image from "next/image";

const PreventionSection = (): JSX.Element => {
  return (
    <div className="full-bleed lg:mb-40 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="lg:w-3/5 lg:shrink-0 lg:overflow-hidden">
        <div className="size-full lg:h-full">
          <Image
            src="/assets/images/ocLivingWithCancer/imagem_banner.png"
            alt="OC Mulher"
            width={1920}
            height={1080}
            className="size-full lg:rounded-bl-[100px]"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-custom-gradient-dark px-10 pb-20 pt-12 font-lato-regular text-white md:pb-[99px] md:pl-[138px] md:pr-[140px] md:pt-[90px] lg:w-2/5 lg:shrink-0 lg:gap-6 lg:pb-[111px] lg:pl-11 lg:pr-10 lg:pt-[118px]">
        <h1 className="mb-5 text-center text-4xl md:text-5xl lg:text-start">
          Prevenção ao câncer
        </h1>
        <p className="mb-5 text-center text-xl md:text-2xl lg:text-start">
          A Oncoclínicas desenvolve uma série de importantes ações e campanhas
          de conscientização e prevenção contra o câncer.
        </p>
        <BaseButton className="w-full self-center border border-white bg-transparent text-white md:w-[482px] lg:ml-0 lg:w-[442px] lg:self-start">
          <span className="text-lg">Saiba mais</span>
        </BaseButton>
      </div>
    </div>
  );
};
export default PreventionSection;
