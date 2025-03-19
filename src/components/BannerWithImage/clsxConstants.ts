import clsx from "clsx";

const getGradientClasses = (
  primaryColor?: string,
  secondaryColor?: string,
): string => `from-${primaryColor} to-${secondaryColor}`;

export const getDesktopContainerClasses = (
  primaryColor: string,
  secondaryColor: string,
  isLargeText: boolean,
): string =>
  clsx(
    "flex h-[320px] w-1/2 flex-col justify-between gap-2 bg-custom-gradient-dark md:justify-start md:px-6 md:py-12 lg:size-full",
    getGradientClasses(primaryColor, secondaryColor),
    {
      "text-lg": isLargeText,
      "p-10": isLargeText,
      "p-20": !isLargeText,
      "lg:pl-[44px]": !isLargeText,
      "md:h-[271px]": !isLargeText,
      "lg:rounded-bl-[100px]": !isLargeText,
      "lg:h-[438px]": !isLargeText,
      "lg:h-[580px]": isLargeText,
      "lg:py-10": isLargeText,
      "lg:px-12": isLargeText,
    },
  );

export const getImageClasses = (isLargeText: boolean): string =>
  clsx("h-[320px] w-full object-cover md:w-1/2 ", {
    "md:h-[271px]": !isLargeText,
    "lg:rounded-bl-[100px]": isLargeText,
    "lg:h-[438px]": !isLargeText,
    "lg:h-[580px]": isLargeText,
  });

export const getDesktopTitleClasses = (isLargeText: boolean): string =>
  clsx(" font-lato-light text-2xl ", {
    "text-xl": isLargeText,
    "lg:text-5xl": !isLargeText,
    "lg:text-[30px]": isLargeText,
    "lg:text-[32px]": isLargeText,
    "mb-8": isLargeText,
    "text-left": isLargeText,
  });

export const getDesktopDescriptionClasses = (isLargeText: boolean): string =>
  clsx("mb-3 font-lato-bold text-base ", {
    "2xl:text-lg": isLargeText,
    "text-left": isLargeText,
    "lg:mb-4": isLargeText,
    "xl:mb-6": isLargeText,
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
    "flex flex-col bg-custom-gradient-dark py-12",
    getGradientClasses(primaryColor, secondaryColor),
    { "py-16": isLargeText },
  );

export const getMobileTitleClasses = (isLargeText: boolean): string =>
  clsx("mb-8 px-7 text-left font-lato-light text-4xl", {
    "text-xl text-left": isLargeText,
    "mb-6": isLargeText,
  });

export const getMobileDescriptionClasses = (isLargeText: boolean): string =>
  clsx("px-7 text-left font-lato-regular text-base", {
    "text-sm leading-relaxed text-left": isLargeText,
  });
