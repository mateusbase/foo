import { BannerWithVideoProps } from "./type";

const BannerWithVideo = ({
  media,
  isVideo,
}: BannerWithVideoProps): JSX.Element => {
  return (
    <div className="mt-4 hidden h-[480px] w-full justify-between text-white lg:flex">
      <div className="flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] bg-gradient-to-t from-purpleDark to-purpleLight p-20">
        <div>
          <p className="text-6xl font-light">
            Conheça a OC Medicina de Precisão
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">
            A OC Medicina de Precisão engloba os laboratórios de Anatomia
            Patológica, Genômica e Big data que oferece um portfolio completo e
            de alta relevância clínica.
          </p>
        </div>
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
