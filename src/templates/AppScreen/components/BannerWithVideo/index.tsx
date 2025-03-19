import { BannerWithVideoProps } from "@/templates/PrecisionMedicineScreen/components/BannerWithVideo/type";

const BannerWithVideo = ({
  media,
  isVideo,
}: BannerWithVideoProps): JSX.Element => {
  return (
    <div className="hidden h-[383px] w-full text-white lg:flex">
      <div className="flex h-full w-1/2 flex-col justify-around gap-2 rounded-bl-[100px] bg-gradient-to-t from-purpleDark to-purpleLight p-20">
        <p className="text-4xl font-light">APP OC Medicina de Precisão</p>
        <p className="text-2xl font-bold">
          Ensaios clínicos, jornadas moleculares e programas de suporte em uma
          experiência médica integrada.
        </p>
      </div>

      <div className="h-full w-1/2">
        {isVideo ? (
          <video src={media} controls className="size-full object-cover">
            <track kind="captions" />
          </video>
        ) : (
          <img src={media} alt="Imagem 1" className="size-full object-cover" />
        )}
      </div>
    </div>
  );
};

export default BannerWithVideo;
