/* eslint-disable prettier/prettier */
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
}: MedicalServiceCardProps): JSX.Element {
  const hasActionButton = !!actionButtonText;
  const hasSubtitle = !!subtitle;

  return (
    <div
      className={`flex w-auto flex-col overflow-hidden rounded-br-[100px] border bg-white ${hasActionButton ? "h-[891px]" : "h-[700px]"
        }`}
    >
      <div
        className="h-[376px] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            backgroundImageUrl ??
            "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
        }}
      />
      <div
        className={`flex flex-col justify-between rounded-br-[100px] bg-gradient-to-br from-primary-foreground to-secondary-foreground py-8 px-16 ${hasActionButton
          ? "h-[515px]"
          : "h-[400px]"
          }`}
      >
        {hasSubtitle && (
          <p className="mt-4 text-[24px] leading-[30px] text-white">
            {subtitle}
          </p>
        )}

        {hasActionButton && (
          <Button
            className="flex h-[71px] w-[371px] items-center justify-start rounded-[12px] border-2 border-white bg-transparent pl-4 text-left text-[24px] font-black leading-[60px] text-white"
            startContent={serviceIcon}
          >
            {actionButtonText}
          </Button>
        )}

        <div className="text-left">
          <h3 className="text-4xl md:text-5xl leading-[60px] text-white">
            {serviceTitle}
          </h3>

          <p className="mt-4 text-xl md:text-2xl leading-[30px] text-white">
            {serviceDescription}
          </p>
        </div>

        <div className="flex w-full items-start justify-start rounded-full">
          <IoIosArrowDropright size={29} color="white" />
        </div>
      </div>
    </div>
  );
}
