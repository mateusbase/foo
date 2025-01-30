import { Image } from "@heroui/image";
import { NewsPreviewCardProps } from "./types";

export default function NewsPreviewCard({
  title,
  date,
  description,
  imageUrl,
}: NewsPreviewCardProps): JSX.Element {
  return (
    <div className="h-[395px] overflow-hidden rounded-lg border-2 p-2">
      <div className="h-1/2 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width="100%"
          height="100%"
          radius="none"
          className="size-full rounded-t-lg object-cover"
        />
      </div>

      <div className="flex h-1/2 flex-col justify-between p-2">
        <h3 className="text-xl font-light leading-5 text-darkGray">{title}</h3>
        <p className="text-sm text-primary">{date}</p>
        <p className="mt-1 line-clamp-3 text-sm text-darkGray">{description}</p>
      </div>
    </div>
  );
}
