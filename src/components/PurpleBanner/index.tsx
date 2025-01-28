import { PurpleBannerProps } from "./type";

const PurpleBanner = ({
  title,
  subtitle,
  description,
}: PurpleBannerProps): JSX.Element => {
  return (
    <div className="relative left-1/2 flex size-full min-h-[302px] w-screen -translate-x-1/2 flex-col justify-center gap-4 bg-gradient-to-t from-purpleDark to-purpleLight px-10 py-4 md:-mt-5 lg:w-1/2 lg:rounded-bl-[100px] lg:p-20">
      <p className="font-lato-regular text-2xl text-white md:text-4xl">
        {title}
      </p>
      <p className="mt-6 font-lato-light text-3xl text-white md:text-4xl lg:text-5xl">
        {subtitle}
      </p>
      <p className="mt-4 font-lato-bold text-lg text-white md:text-xl lg:text-2xl">
        {description}
      </p>
    </div>
  );
};

export default PurpleBanner;
