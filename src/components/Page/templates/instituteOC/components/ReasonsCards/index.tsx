import Image from "next/image";
import { RichText } from "@/components/Blocks/RichText";
import { ReasonsCardProps } from "./types";

const ReasonsCard = ({
  description,
  icon,
  alt,
  width,
  height,
}: ReasonsCardProps): JSX.Element => {
  return (
    <div className="flex h-[290px] flex-row items-center gap-5 rounded-[20px] border border-lightGray py-6 pl-5 pr-6 md:my-4 md:h-[125px] md:py-[25.5px] lg:my-0 lg:h-[350px] xl:h-[260px]">
      <Image
        src={icon}
        alt={alt}
        width={width}
        height={height}
        className="shrink-0"
      />

      <RichText
        content={description}
        className="text-xs text-darkGray lg:text-sm xl:text-base"
      />
    </div>
  );
};

export default ReasonsCard;
