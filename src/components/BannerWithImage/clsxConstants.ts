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
    "flex size-full flex-col justify-between gap-2 bg-gradient-to-t lg:w-1/2",
    getGradientClasses(primaryColor, secondaryColor),
    {
      "rounded-br-[100px]": isLeft,
      "rounded-bl-[100px]": !isLeft,
      "text-lg": isLargeText,
      "p-10": isLargeText,
      "p-20": !isLargeText,
    },
  );

export const getDesktopTitleClasses = (isLargeText: boolean): string =>
  clsx("font-lato-light text-6xl", {
    "text-xl": isLargeText,
    "mb-6": isLargeText,
    "text-left": isLargeText,
  });

export const getDesktopDescriptionClasses = (isLargeText: boolean): string =>
  clsx("font-lato-bold text-xl", {
    "text-base": isLargeText,
    "text-left": isLargeText,
  });

export const getMobileContainerClasses = (isLeft: boolean): string =>
  clsx("flex w-full flex-1 flex-col lg:hidden", {
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
