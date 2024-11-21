import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { IoIosArrowDropright } from "react-icons/io";
import { MedicalServiceCardProps } from "./types";

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
      <div className="flex h-[342px] min-w-[322px] flex-col justify-between rounded-br-[100px] bg-gradient-to-b from-primary-foreground from-60% via-secondary-foreground via-90% to-purpleAccent to-70% px-14 py-8 md:min-h-[515px] lg:gap-12">
        {hasSubtitle && (
          <p className="mt-4 text-left text-lg leading-[30px] text-white md:text-[24px]">
            {subtitle}
          </p>
        )}

        {hasActionButton && (
          <Button
            className="flex items-center justify-start rounded-[12px] border-2 border-white bg-transparent py-7 pl-4 text-left text-xl font-black leading-[60px] text-white"
            startContent={serviceIcon}
          >
            {actionButtonText}
          </Button>
        )}

        <div className="text-left">
          <h3 className="text-[32px] text-white md:text-5xl md:leading-[60px]">
            {serviceTitle}
          </h3>

          <p className="mt-4 text-sm text-white md:text-2xl md:leading-[30px]">
            {serviceDescription}
          </p>
        </div>

        <div className="mt-10 flex w-full items-start justify-start rounded-full">
          {shouldShowButton && <IoIosArrowDropright size={29} color="white" />}
        </div>
      </div>
    </div>
  );
}
