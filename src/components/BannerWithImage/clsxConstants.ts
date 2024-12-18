import clsx from "clsx";

const getGradientClasses = (
  primaryColor?: string,
  secondaryColor?: string,
): string => `from-${primaryColor} to-${secondaryColor}`;

export const getDesktopContainerClasses = (
  primaryColor: string,
  secondaryColor: string,
  isLargeText: boolean,
  isLeft: boolean,
): string =>
  clsx(
    "flex h-[320px] w-1/2 flex-col justify-between gap-2 bg-gradient-to-t md:w-1/2 lg:size-full",
    getGradientClasses(primaryColor, secondaryColor),
    {
      "lg:rounded-br-[100px]": isLeft,
      "lg:rounded-bl-[100px]": !isLeft,
      "text-lg": isLargeText,
      "p-10": isLargeText,
      "p-20": !isLargeText,
      "md:h-[438px]": !isLargeText,
      "lg:h-[438px]": !isLargeText,
      "lg:h-[580px]": isLargeText,
      "lg:py-10": isLargeText,
      "lg:px-12": isLargeText,
    },
  );

export const getImageClasses = (isLargeText: boolean): string =>
  clsx("h-[320px] w-full object-cover md:w-1/2", {
    "md:h-[438px]": !isLargeText,
    "lg:h-[438px]": !isLargeText,
    "lg:h-[580px]": isLargeText,
  });

export const getDesktopTitleClasses = (isLargeText: boolean): string =>
  clsx("mb-6 font-lato-light text-2xl 2xl:text-6xl", {
    "text-xl": isLargeText,
    "lg:text-5xl": isLargeText || !isLargeText,
    "mb-6": isLargeText,
    "text-left": isLargeText,
  });

export const getDesktopDescriptionClasses = (isLargeText: boolean): string =>
  clsx("mb-5 font-lato-bold text-base ", {
    "2xl:text-lg": isLargeText,
    "text-left": isLargeText,
    "lg:text-xl": !isLargeText,
    "lg:text-base": isLargeText,
  });

export const getMobileContainerClasses = (isLeft: boolean): string =>
  clsx("flex w-full flex-1 flex-col md:hidden", {
    "flex-col-reverse": isLeft,
  });

export const getMobileContentClasses = (
  isLargeText: boolean,
  primaryColor: string,
  secondaryColor: string,
): string =>
  clsx(
    "flex flex-col bg-gradient-to-t py-12",
    getGradientClasses(primaryColor, secondaryColor),
    { "py-16": isLargeText },
  );

export const getMobileTitleClasses = (isLargeText: boolean): string =>
  clsx("px-7 text-left font-lato-light text-4xl", {
    "text-xl text-left": isLargeText,
    "mb-6": isLargeText,
  });

export const getMobileDescriptionClasses = (isLargeText: boolean): string =>
  clsx("px-7 text-left font-lato-regular text-base", {
    "text-sm leading-relaxed text-left": isLargeText,
  });
