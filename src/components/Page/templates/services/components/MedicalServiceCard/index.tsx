import { Plus } from "lucide-react";
import { IoIosArrowDropright } from "react-icons/io";
import { Button } from "@/components/Button";
import { MedicalServiceCardProps } from "./types";

export default function MedicalServiceCard({
  subtitle,
  serviceTitle,
  serviceDescription,
  actionButtonText,
  serviceIcon = <Plus size={22} />,
  backgroundImageUrl,
  shouldShowButton = true,
}: MedicalServiceCardProps): JSX.Element {
  const hasActionButton = !!actionButtonText;
  const hasSubtitle = !!subtitle;

  return (
    <div className="flex h-fit w-auto flex-col overflow-hidden rounded-bl-[50px] border bg-white lg:rounded-bl-none lg:rounded-br-[100px]">
      <div
        className="h-[322px] bg-cover bg-no-repeat md:h-[376px]"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />

      <div className="flex h-[350px] min-w-[322px] flex-col bg-custom-gradient-dark-145deg p-6 md:px-9 lg:h-[342px] lg:min-h-[515px] lg:gap-6 lg:rounded-br-[100px] lg:bg-custom-gradient-dark">
        {hasSubtitle && (
          <span className="mb-8 mt-3 text-left text-lg leading-[30px] text-white md:text-2xl">
            {subtitle}
          </span>
        )}

        {hasActionButton && (
          <div className="mb-8 w-3/4 md:w-11/12">
            <Button
              className="h-10 w-full rounded-2xl border-white text-white"
              variant="outlined"
            >
              {serviceIcon}

              {actionButtonText}
            </Button>
          </div>
        )}

        <div className="text-left">
          <h3 className="mb-4 text-[30px] leading-7 text-white md:mb-8 md:text-[32px] 2xl:text-5xl 2xl:leading-[60px]">
            {serviceTitle}
          </h3>

          <span className="mt-4 text-sm leading-5 text-white md:text-sm lg:text-xl lg:leading-[30px] 2xl:text-2xl">
            {serviceDescription}
          </span>
        </div>

        <div className="mt-4 flex size-full items-end rounded-full">
          {shouldShowButton && <IoIosArrowDropright size={29} color="white" />}
        </div>
      </div>
    </div>
  );
}
