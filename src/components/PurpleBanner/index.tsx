import BaseContainer from "../Container";
import { PurpleBannerProps } from "./type";

const PurpleBanner = ({
  title,
  subtitle,
  description,
  video,
}: PurpleBannerProps): JSX.Element => {
  return (
    <BaseContainer>
      <div className="full-bleed flex size-full min-h-[302px] flex-col justify-center gap-4 bg-gradient-to-t from-purpleDark to-purpleLight py-4 pl-4 pr-6 md:-mt-5 lg:w-1/2 lg:rounded-bl-[100px] lg:p-20">
        <p className="text-2xl font-light text-white md:text-4xl">{title}</p>
        <p className="mt-6 text-3xl font-light text-white md:text-4xl lg:text-5xl">
          {subtitle}
        </p>
        <p className="mt-4 text-lg font-bold text-white md:text-xl lg:text-2xl">
          {description}
        </p>
      </div>

      {video && (
        <div className="full-bleed lg:w-auto lg:flex-1 lg:translate-x-0">
          <video className="size-full object-cover" controls>
            <source src={video} type="video/mp4" />
            <track
              src="captions_en.vtt"
              kind="captions"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      )}
    </BaseContainer>
  );
};

export default PurpleBanner;
