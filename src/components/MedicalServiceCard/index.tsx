import { Plus } from "lucide-react";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { MedicalServiceCardProps } from "./types";
import BaseButton from "../Button";

export default function MedicalServiceCard({
  subtitle,
  serviceTitle,
  serviceDescription,
  actionButtonText,
  actionLink = "/default-link",
  serviceIcon = <Plus size={22} />,
  backgroundImageUrl = "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg",
  shouldShowButton = true,
}: MedicalServiceCardProps): JSX.Element {
  const hasActionButton = !!actionButtonText;
  const hasSubtitle = !!subtitle;

  return (
    <div className="flex h-fit w-auto flex-col overflow-hidden rounded-br-[100px] bg-white">
      <div className="relative w-full">
        <Image
          src={backgroundImageUrl}
          alt="Background"
          className="h-[207px] lg:h-[274px]"
          width={1080}
          height={207}
        />
      </div>
      <div className="flex h-[289px] min-w-[322px] flex-col rounded-br-[100px] bg-custom-gradient-dark p-8 md:px-9 lg:h-[342px] lg:min-h-[515px] lg:gap-12">
        {hasSubtitle && (
          <p className="my-2 text-left text-lg leading-[30px] text-white md:text-[20px] lg:text-[24px]">
            {subtitle}
          </p>
        )}

        {hasActionButton && (
          <div className="w-11/12">
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
          <h3 className="text-[30px] leading-7 text-white md:text-[32px] 2xl:text-5xl 2xl:leading-[60px]">
            {serviceTitle}
          </h3>

          <p className="mt-4 text-sm leading-5 text-white md:text-sm lg:text-xl lg:leading-[30px] 2xl:text-2xl">
            {serviceDescription}
          </p>
        </div>

        <div className="mt-4 flex size-full items-end rounded-full">
          {shouldShowButton && (
            <Link href={actionLink}>
              <IoIosArrowDropright size={29} color="white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
