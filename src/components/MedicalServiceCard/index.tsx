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
        className="h-[376px] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            backgroundImageUrl ??
            "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
        }}
      />
      <div className="flex min-h-[515px] flex-col justify-between gap-12 rounded-br-[100px] bg-gradient-to-b from-primary-foreground from-60% via-secondary-foreground via-90% to-purpleAccent to-70% px-14 py-8">
        {hasSubtitle && (
          <p className="mt-4 text-left text-[24px] leading-[30px] text-white">
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
          <h3 className="text-4xl leading-[60px] text-white md:text-5xl">
            {serviceTitle}
          </h3>

          <p className="mt-4 text-xl leading-[30px] text-white md:text-2xl">
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
