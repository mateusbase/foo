import BaseButton from "@/components/Button";
import Image from "next/image";

interface FellowshipFullBannerProps {
  src: string;
  hasButton?: boolean;
  opportunityText?: boolean;
  buttonText?: string;
}

const FellowshipFullBanner = ({
  src,
  hasButton = false,
  buttonText,
  opportunityText = false,
}: FellowshipFullBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-0 mt-10 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="lg:w-[55%]">
        <div className="size-full">
          <Image
            src={src}
            alt="Banner"
            width={1920}
            height={1080}
            className="size-full object-fill lg:rounded-bl-[100px]"
          />
        </div>
      </div>

      <div className="flex min-h-[355px] flex-col justify-center bg-custom-gradient-light pb-12 pl-8 pr-6 pt-14 font-lato-regular text-white md:px-32 md:py-14 lg:h-auto lg:w-[45%] lg:shrink-0 lg:pb-24 lg:pl-14 lg:pr-24 lg:pt-[72px]">
        <div className="flex h-full flex-col items-center justify-center">
          {opportunityText ? (
            <p className="mb-12 text-center text-xl md:text-2xl lg:text-left xl:text-2xl">
              Acompanhe as oportunidades OC Fellowship e se especialize com a
              melhor capacitação
            </p>
          ) : (
            <p className="text-center text-xl md:text-2xl lg:text-left xl:text-2xl">
              <span className="font-bold">OC Fellowship</span> é um um programa
              que contribui com a formação do médico oncologista e
              hematologista, privilegiando a especificidade das
              subespecialidades.{" "}
              <span className="font-bold">Garanta a sua vaga.</span>
            </p>
          )}
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

export default FellowshipFullBanner;
