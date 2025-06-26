import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { RichText } from "@/components/Blocks/RichText";
import { Button } from "@/components/Button";
import { useDeviceType } from "@/hooks/useDeviceType";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import { GradientBannerProps } from "./types";

export default function GradientBanner({
  subtitle,
  title,
  description,
  link,
  theme = "gradient",
  gradientType,
  customClassName,
  content,
  media,
  roundCorner = "bottom-left",
  institute,
  listItems,
  isSwiper = false,
}: GradientBannerProps): JSX.Element {
  const mediaSide = media?.side ?? "right";

  const deviceType = useDeviceType();

  const isSmallScreen = ["mobile", "tablet"].includes(deviceType);

  const finalTheme = gradientType ?? theme;

  const isTransparent = finalTheme === "transparent";

  const shouldRoundImage = isSmallScreen && (isSwiper || mediaSide === "right");

  const hasMedia =
    !!media?.data?.data?.url &&
    typeof media.data.data.url === "string" &&
    media.data.data.url.trim() !== "";

  const themeClassMap: Record<string, string> = {
    gradient: "bg-custom-gradient-dark-145deg",
    grey: "bg-darkGray",
    "dark-green": "bg-custom-gradient-dark-145deg",
    "dark-purple": "bg-gradient-to-t from-purpleDark to-purpleLight",
    transparent: "bg-white text-darGray",
  };

  const bgClass = themeClassMap[finalTheme] || "bg-custom-gradient-dark-145deg";

  const roundedClassMap: Record<string, string> = {
    "bottom-left": "rounded-bl-[100px]",
    "bottom-right": "rounded-br-[100px]",
    none: "",
  };

  const roundedClass =
    !isSmallScreen || isSwiper ? roundedClassMap[roundCorner] : "";

  const applyRoundedToImage =
    (isSmallScreen && (mediaSide === "top" || mediaSide === "bottom")) ||
    (!isSmallScreen &&
      ((mediaSide === "left" && roundCorner === "bottom-left") ||
        (mediaSide === "right" && roundCorner === "bottom-right")));

  const isHorizontal = mediaSide === "left" || mediaSide === "right";
  const isVertical = mediaSide === "top" || mediaSide === "bottom";

  const mediaComponent = (() => {
    if (!hasMedia) return null;

    const { type, data } = media.data;

    const containerClass = clsx(
      "flex items-stretch overflow-hidden",
      isHorizontal ? "min-h-full flex-1" : "h-[263px] w-full",
      {
        "rounded-t-lg md:rounded-none":
          isSmallScreen && (mediaSide === "top" || mediaSide === "bottom"),
        [roundedClass]: !isSmallScreen && applyRoundedToImage,
      },
    );

    if (type === "image") {
      return (
        <div className={containerClass}>
          <Image
            src={data.url}
            alt={data.alt || "Imagem"}
            width={data.width}
            height={data.height}
            className={clsx(
              "size-full object-cover",
              applyRoundedToImage && roundedClass,
            )}
          />
        </div>
      );
    }

    if (type === "youtube") {
      const embedUrl = data.url.replace("watch?v=", "embed/");
      return (
        <div className={containerClass}>
          <CustomVideoPlayer src={embedUrl} />
        </div>
      );
    }

    if (type === "video") {
      return (
        <div className={containerClass}>
          <CustomVideoPlayer src={data.url} />
        </div>
      );
    }

    return null;
  })();

  const contentComponent = (
    <div
      className={clsx(
        "flex flex-1 flex-col justify-center gap-6 py-10 text-white",
        isHorizontal ? "flex-1 px-[52px]" : "px-[52px]",
        bgClass,
        !isSmallScreen && !applyRoundedToImage && roundedClass,
      )}
    >
      <div className="flex flex-col gap-6">
        <p
          className={clsx(
            "text-left text-2xl",
            isTransparent ? "text-darkGray" : "text-white",
          )}
        >
          {subtitle}
        </p>

        {title &&
          (typeof title === "string" && !/<\/?[a-z][\s\S]*>/i.test(title) ? (
            <h1
              className={clsx(
                "whitespace-normal break-words text-left text-[50px] leading-none",
                isTransparent ? "text-primary" : "text-white",
              )}
            >
              {title}
            </h1>
          ) : (
            <RichText
              content={title}
              className={clsx(
                "[&_p.editor-paragraph]:whitespace-normal",
                "[&_p.editor-paragraph]:break-words",
                "[&_p.editor-paragraph]:leading-none",
                isTransparent
                  ? "[&_p.editor-paragraph]:text-primary"
                  : "[&_p.editor-paragraph]:text-white",
                institute
                  ? "[&_p.editor-paragraph]:text-title-lg"
                  : "[&_p.editor-paragraph]:text-[50px]",
              )}
            />
          ))}

        {description &&
          (typeof description === "string" &&
          !/<\/?[a-z][\s\S]*>/i.test(description) ? (
            <p
              className={clsx(
                "text-left text-2xl",
                "whitespace-normal break-words",
                isTransparent ? "text-darkGray" : "text-white",
              )}
            >
              {description}
            </p>
          ) : (
            <RichText
              content={description}
              className={clsx(
                "text-left",
                "[&_p.editor-paragraph]:whitespace-normal",
                "[&_p.editor-paragraph]:break-words",
                "[&_p.editor-paragraph]:text-2xl",
                isTransparent
                  ? "[&_p.editor-paragraph]:text-darkGray"
                  : "[&_p.editor-paragraph]:text-white",
              )}
            />
          ))}

        {content && <RichText content={content} />}

        {listItems && listItems.length > 0 && (
          <ul className="grid list-disc grid-cols-2 gap-x-12 gap-y-2 pl-5">
            {listItems.map((item) => (
              <li
                key={item}
                className={clsx(
                  "text-left text-lg",
                  isTransparent ? "text-darkGray" : "text-white",
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {link?.target?.url && (
          <Link
            href={link.target.url}
            target={link.target.openOnNewTab ? "_blank" : "_self"}
            rel={link.target.external ? "noopener noreferrer" : undefined}
          >
            {link.variant === "chevron-right-button" && (
              <IoIosArrowDropright
                size={24}
                color={isTransparent ? "black" : "white"}
              />
            )}

            {link.variant === "button" && (
              <Button
                variant={
                  finalTheme === "dark-green" ||
                  finalTheme === "dark-purple" ||
                  finalTheme === "gradient"
                    ? "outlined"
                    : "filled"
                }
                className={clsx(
                  finalTheme === "dark-green" ||
                    finalTheme === "dark-purple" ||
                    finalTheme === "gradient"
                    ? "w-48 border-white text-white"
                    : "h-14 w-64",
                )}
              >
                {link.text || "Saiba mais"}
              </Button>
            )}
          </Link>
        )}
      </div>
    </div>
  );

  const layoutClass = isVertical || isSmallScreen ? "flex-col" : "flex-row";

  return (
    <div
      className={clsx(
        "full-bleed flex size-full h-full items-stretch overflow-hidden",
        layoutClass,
        { [roundedClass]: shouldRoundImage },
        customClassName,
      )}
    >
      {hasMedia && mediaSide === "top" && mediaComponent}

      {hasMedia && mediaSide === "left" && mediaComponent}

      {contentComponent}

      {hasMedia && mediaSide === "right" && mediaComponent}

      {hasMedia && mediaSide === "bottom" && mediaComponent}
    </div>
  );
}
