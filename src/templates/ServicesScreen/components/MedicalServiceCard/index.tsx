import { Plus } from "lucide-react";
import { IoIosArrowDropright } from "react-icons/io";
import BaseButton from "@/components/Button";
import { MedicalServiceCardProps } from "./types";

export default function MedicalServiceCard({
  subtitle,
  serviceTitle,
  serviceDescription,
  actionButtonText,
  serviceIcon = <Plus size={22} className="shrink-0" />,
  backgroundImageUrl,
  imageClassName,
  shouldShowButton = true,
}: MedicalServiceCardProps): JSX.Element {
  const hasActionButton = !!actionButtonText;
  const hasSubtitle = !!subtitle;

  return (
    <div className="flex h-fit w-auto flex-col rounded-bl-[50px] border bg-white lg:rounded-bl-none lg:rounded-br-[100px]">
      <div
        className={`${imageClassName} bg-cover bg-no-repeat`}
        style={{
          backgroundImage:
            backgroundImageUrl ??
            "url('https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg')",
        }}
      />
      <div className="flex h-[289px] min-w-[322px] flex-col rounded-bl-[50px] bg-custom-gradient-dark-145deg p-6 md:px-9 lg:h-[342px] lg:min-h-[500px] lg:gap-6 lg:lg:rounded-bl-none lg:rounded-br-[100px] lg:bg-custom-gradient-dark">
        {hasSubtitle && (
          <p className="mb-4 text-left text-lg leading-[30px] text-white md:text-[24px] lg:mt-7">
            {subtitle}
          </p>
        )}

        {hasActionButton && (
          <div className="mb-4 w-[41%] lg:mt-7">
            <BaseButton
              className="h-10 rounded-2xl border-2 border-white text-center text-[13px] text-white"
              variant="bordered"
              startContent={serviceIcon || undefined}
            >
              {actionButtonText}
            </BaseButton>
          </div>
        )}

        <div className="text-left">
          <h3 className="text-[30px] leading-7 text-white md:text-[32px] 2xl:text-5xl 2xl:leading-[60px]">
            {serviceTitle}
          </h3>

          <p className="mt-4 text-sm leading-5 text-white md:text-sm lg:mt-8 lg:text-xl lg:leading-[30px] 2xl:text-2xl">
            {serviceDescription}
          </p>
        </div>

        <div className="mt-4 flex size-full items-end rounded-full">
          {shouldShowButton && <IoIosArrowDropright size={29} color="white" />}
        </div>
      </div>
    </div>
  );
}
