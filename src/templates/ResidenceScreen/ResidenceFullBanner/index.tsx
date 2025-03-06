import BaseButton from "@/components/Button";
import Image from "next/image";

interface ResidenceFullBannerProps {
  src: string;
  hasButton?: boolean;
  buttonText?: string;
}

const ResidenceFullBanner = ({
  src,
  hasButton = false,
  buttonText,
}: ResidenceFullBannerProps): JSX.Element => {
  return (
    <div className="full-bleed my-10 text-center md:mb-16 lg:mb-10 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="lg:w-2/5">
        <div className="size-full">
          <Image
            src={src}
            alt="Banner"
            width={1920}
            height={1080}
            className="h-[209px] object-fill md:h-[439px] lg:h-[460px] lg:rounded-bl-[100px]"
          />
        </div>
      </div>

      <div className="flex min-h-[355px] flex-col justify-center bg-custom-gradient-dark px-9 pb-12 pt-14 font-lato-regular text-white md:px-32 md:py-14 lg:h-[460px] lg:w-3/5 lg:shrink-0 lg:py-6 lg:pl-14 lg:pr-24">
        <div className="flex h-full flex-col items-center justify-center lg:items-start">
          <h1 className="mb-12 text-3xl lg:text-xl xl:text-3xl">
            Quem é o grupo Oncoclínicas?
          </h1>
          <p className="mb-8 text-center text-xl md:text-2xl lg:text-left lg:text-sm xl:text-xl">
            Somos um dos maiores grupos de oncologia da América Latina.
          </p>
          <p className="mb-8 text-center text-xl md:text-2xl lg:text-left lg:text-sm xl:text-xl">
            Estamos presentes em 13 estados brasileiros e DF com 129 unidades
            entre clínicas, parcerias hospitalares e um laboratório de medicina
            de precisão
          </p>
          <p className="mb-8 text-center text-xl md:text-2xl lg:text-left lg:text-sm xl:text-xl">
            Atuamos em toda a linha de cuidado oncológico.
          </p>
          <p className="mb-8 text-center text-xl md:text-2xl lg:text-left lg:text-sm xl:text-xl">
            Temos mais de 1.800 médicos especialistas e 7.000 colaboradores.
          </p>
          <p className="mb-8 text-center text-xl md:text-2xl lg:text-left lg:text-sm xl:text-xl">
            Realizamos mais de 380 mil ciclos de tratamento por mês.
          </p>
          {hasButton && (
            <BaseButton className="mt-4 h-14 w-[85%] shrink-0 rounded border border-white bg-transparent px-6 py-2 text-white lg:mt-12 lg:self-start">
              {buttonText}
            </BaseButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidenceFullBanner;
