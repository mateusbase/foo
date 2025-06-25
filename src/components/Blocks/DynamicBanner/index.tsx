import { Plus } from "lucide-react";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import clsx from "clsx";
import { DynamicBannerProps } from "./types";
import RenderHTML from "../../RenderHTML";
import { RichText } from "../RichText";

export default function DynamicBanner({
  subtitle,
  title,
  description,
  actionButtonText,
  actionLink,
  serviceIcon = <Plus size={22} />,
  image,
  logo,
  text,
  link,
  shouldShowButton,
  layout = "vertical",
  theme = "gradient",
  textAlign = "left",
  imagePosition = "top",
  customClassName,
  roundedPosition,
  content,
  press,
  event,
  campaigns,
}: DynamicBannerProps): JSX.Element {
  const hasActionButton = !!actionButtonText;

  const containerClasses = clsx(
    "flex w-auto flex-col overflow-hidden",
    layout === "horizontal" ? "lg:flex-row" : "flex-col",
    roundedPosition === "tl" && "md:rounded-tl-[100px]",
    roundedPosition === "tr" && "md:rounded-tr-[100px]",
    roundedPosition === "bl" && "rounded-bl-[100px]",
    roundedPosition === "br" && "md:rounded-br-[100px]",
    theme === "dark" && "bg-black",
    theme === "light" && "bg-white",
    theme === "gradient" && "bg-custom-gradient-dark",
    customClassName,
  );

  const textAlignment = clsx(
    textAlign === "center" && "text-center",
    textAlign === "right" && "text-right",
    textAlign === "left" && "text-left",
  );

  const imageComponent = image ? (
    <div
      className="hidden h-[263px] w-full bg-cover bg-center bg-no-repeat md:block"
      style={{ backgroundImage: `url(${image.url})` }}
    />
  ) : null;

  const contentOnlyComponent = (
    <div
      className={clsx(
        "flex w-full flex-col justify-between gap-12",
        "min-h-[292px] px-6 py-16 md:px-14",
        textAlignment,
      )}
    >
      {content && <RenderHTML html={content} />}
    </div>
  );

  const contentComponent = (
    <div
      className={clsx(
        "flex w-full flex-col justify-between gap-12",
        "min-h-[292px] px-6 py-8 md:px-14",
        textAlignment,
      )}
    >
      {subtitle && (
        <p className="text-2xl font-semibold text-white">{subtitle}</p>
      )}

      <h3 className="text-2xl font-bold text-white md:text-[50px]">{title}</h3>

      <p className="text-base text-white md:text-2xl">{description}</p>

      {hasActionButton && (
        <div>
          <Button
            className="h-10 w-full border-white text-white"
            variant="outlined"
          >
            {serviceIcon}
            {actionButtonText}
          </Button>
        </div>
      )}

      {shouldShowButton && actionLink && (
        <div className="flex justify-end">
          <Link href={actionLink}>
            <IoIosArrowDropright size={29} color="white" />
          </Link>
        </div>
      )}
    </div>
  );

  if (press && image) {
    return (
      <div className="flex h-fit w-auto flex-col overflow-hidden rounded-br-[100px] bg-white">
        <div className="relative w-full">
          <Image
            src={image.url}
            alt={image.alt}
            className="h-[207px] w-full object-cover lg:h-[274px]"
            width={image.width}
            height={image.height}
          />
        </div>

        <div className="flex h-[289px] min-w-[322px] flex-col rounded-br-[100px] bg-custom-gradient-dark p-8 md:px-9 lg:h-[342px] lg:min-h-[515px] lg:gap-12">
          {subtitle && (
            <p className="my-2 text-left text-lg leading-[30px] text-white md:text-[20px] lg:text-[24px]">
              {subtitle}
            </p>
          )}

          {hasActionButton && (
            <div className="w-11/12">
              <Button
                className="h-10 w-full border-white text-white"
                variant="outlined"
              >
                {serviceIcon}

                {actionButtonText}
              </Button>
            </div>
          )}

          <div className="text-left">
            <h3 className="text-[30px] leading-7 text-white md:text-[32px] 2xl:text-5xl 2xl:leading-[60px]">
              {title}
            </h3>

            <p className="mt-4 text-sm leading-5 text-white md:text-sm lg:text-xl lg:leading-[30px] 2xl:text-2xl">
              {description}
            </p>
          </div>

          <div className="mt-4 flex size-full items-end rounded-full">
            {shouldShowButton && actionLink && (
              <Link href={actionLink}>
                <IoIosArrowDropright size={29} color="white" />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (event && image) {
    return (
      <div className="mb-10 hidden lg:flex">
        <div className="flex h-[500px] w-full justify-between text-white">
          <div className="flex h-full w-1/2 flex-col justify-between rounded-bl-[80px] bg-custom-gradient-dark p-16">
            <div className="space-y-6">
              <h1 className="text-5xl font-light leading-tight">{title}</h1>
              <p className="text-xl font-medium opacity-90">{subtitle}</p>
            </div>

            <Button
              className="h-14 w-64 border-white text-white hover:bg-white/10"
              variant="outlined"
            >
              Quero me inscrever
            </Button>
          </div>

          <div className="h-full w-1/2">
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt="Workshop sobre câncer"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  if (logo && link && image) {
    return (
      <div className="mt-10 w-full md:flex">
        <div className="w-full md:w-[260px]">
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="size-full max-h-[254px] rounded-none object-cover md:rounded-bl-[100px]"
          />
        </div>

        <div className="flex min-h-[195px] w-full flex-col items-center justify-center rounded-bl-[100px] bg-aquaLight py-10 md:flex-1 md:rounded-none">
          <Image
            src={logo.url}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="w-[250px] max-w-none xl2:w-[300px]"
          />

          <Link
            href={link.url}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <Button className="mt-10 min-w-52 text-white">
              {text || "Conheça"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (campaigns && image) {
    return (
      <div className="full-bleed flex flex-col lg:flex-row">
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full lg:hidden"
        />

        <div className="hidden w-full lg:block lg:w-1/2">
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="size-full rounded-bl-[100px] object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-center bg-custom-gradient-dark px-8 py-10 text-white lg:h-[402px] lg:w-1/2 lg:px-16 lg:py-0">
          <h1 className="mb-4 text-3xl font-semibold lg:text-5xl">{title}</h1>

          {description && (
            <div className="my-8">
              <RichText
                content={description}
                className="[&_p.editor-paragraph]:whitespace-normal [&_p.editor-paragraph]:break-words [&_p.editor-paragraph]:text-2xl [&_p.editor-paragraph]:text-white"
              />
            </div>
          )}

          {hasActionButton && (
            <Button className="h-[54px] w-full border border-white bg-transparent text-white">
              {actionButtonText}
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      {(imagePosition === "top" || imagePosition === "left") && imageComponent}

      {content ? contentOnlyComponent : contentComponent}

      {(imagePosition === "bottom" || imagePosition === "right") &&
        imageComponent}
    </div>
  );
}
