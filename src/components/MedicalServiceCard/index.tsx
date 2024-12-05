import { Plus } from "lucide-react";
import { IoIosArrowDropright } from "react-icons/io";
import { MedicalServiceCardProps } from "./types";
import BaseButton from "../Button";

export default function MedicalServiceCard({
  subtitle,
  serviceTitle,
  serviceDescription,
  actionButtonText,
  serviceIcon = <Plus size={24} className="mr-4" />,
  backgroundImageUrl,
  shouldShowButton = true,
}: MedicalServiceCardProps): JSX.Element {
  const hasActionButton = !!actionButtonText;
  const hasSubtitle = !!subtitle;

  return (
    <div className="flex h-fit w-auto flex-col overflow-hidden rounded-br-[100px] border bg-white">
      <div
        className="h-[322px] bg-cover bg-no-repeat md:h-[376px]"
        style={{
          backgroundImage:
            backgroundImageUrl ??
            "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
        }}
      />
      <div className="flex h-[289px] min-w-[322px] flex-col justify-between rounded-br-[100px] bg-gradient-to-b from-primary-foreground from-60% via-secondary-foreground via-90% to-purpleAccent to-70% px-14 py-8 lg:h-[342px] lg:min-h-[515px] lg:gap-12">
        {hasSubtitle && (
          <p className="mt-4 text-left text-lg leading-[30px] text-white md:text-[24px]">
            {subtitle}
          </p>
        )}

        {hasActionButton && (
          <div className="w-10/12">
            <BaseButton
              className="h-10 w-full border-white text-white"
              variant="bordered"
              startContent={serviceIcon}
            >
              {actionButtonText}
            </BaseButton>
          </div>
        )}

        <div className="text-left">
          <h3 className="text-[32px] leading-none text-white md:text-[32px] 2xl:text-5xl 2xl:leading-[60px]">
            {serviceTitle}
          </h3>

          <p className="mt-4 text-sm text-white md:text-sm lg:text-xl lg:leading-[30px] 2xl:text-2xl">
            {serviceDescription}
          </p>
        </div>

        <div className="mt-5 flex w-full items-start justify-start rounded-full">
          {shouldShowButton && <IoIosArrowDropright size={29} color="white" />}
        </div>
      </div>
    </div>
  );
}
