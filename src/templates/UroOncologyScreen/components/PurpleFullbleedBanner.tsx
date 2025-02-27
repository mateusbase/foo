import Image from "next/image";

interface PurpleFullBleedBannerProps {
  src: string;
}

const PurpleFullBleedBanner = ({
  src,
}: PurpleFullBleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed-md mb-10 flex flex-col-reverse md:flex-row md:items-stretch lg:mt-12">
      <div className="flex h-[243px] flex-col gap-5 bg-custom-gradient-purple-145deg from-purpleLight to-purpleDark pb-11 pl-8 pr-16 pt-14 font-thin text-white md:h-[260px] md:w-1/2 md:rounded-bl-[100px] md:bg-gradient-to-b md:pl-8 md:pr-20 md:pt-14 lg:h-[320px] lg:pb-12 lg:pl-16 lg:pr-11 lg:pt-[71px]">
        <p className="text-2xl md:text-3xl lg:text-5xl">
          Tecnologia e serviço no combate ao câncer urológico{" "}
          <span className="font-bold text-white">OC Linha de Cuidado</span>
        </p>
      </div>

      <div className="md:w-1/2">
        <div className="size-full">
          <Image
            src={src}
            alt="Banner"
            width={1920}
            height={1080}
            className="size-full h-[390px] object-cover md:h-[260px] lg:h-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PurpleFullBleedBanner;
