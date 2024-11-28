import { PurpleBannerProps } from "./type";

const PurpleBanner = ({
  title,
  subtitle,
  description,
}: PurpleBannerProps): JSX.Element => {
  return (
    <div className="flex w-full flex-col justify-center gap-4 bg-gradient-to-t from-purpleDark to-purpleLight p-10 lg:w-1/2 lg:rounded-bl-[100px] lg:p-20">
      <p className="font-lato-regular text-2xl text-white lg:text-4xl">
        {title}
      </p>
      <p className="mt-6 font-lato-light text-3xl text-white lg:text-5xl">
        {subtitle}
      </p>
      <p className="mt-4 font-lato-bold text-lg text-white lg:text-2xl">
        {description}
      </p>
    </div>
  );
};

export default PurpleBanner;
