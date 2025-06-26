import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import { VideoCardProps } from "./types";

export default function VideoCard({
  title,
  description,
  mediaData,
}: VideoCardProps): JSX.Element {
  return (
    <div className="flex w-full flex-col">
      <CustomVideoPlayer src={mediaData.url} />

      <div className="mt-5">
        <h3 className="mb-6 text-left text-2xl text-primary lg:text-[42px]">
          {title}
        </h3>

        <p className="text-left text-base text-darkGray lg:text-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
