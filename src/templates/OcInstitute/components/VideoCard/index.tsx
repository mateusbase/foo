import { Image } from "@nextui-org/react";
import { VideoCardProps } from "./types";

export default function VideoCard({
  title,
  description,
}: VideoCardProps): JSX.Element {
  return (
    <div className="max-w-[502px]">
      <div className="w-full">
        <Image
          width={502}
          height={502}
          radius="none"
          src="https://i.postimg.cc/1RTmQXy4/Captura-de-tela-2024-11-18-150147.png"
          alt="Preview do vídeo"
        />
        <div className="mt-5">
          <p className="text-left text-[42px] text-primary">{title}</p>
          <p className="text-left text-2xl text-darkGray">{description}</p>
        </div>
      </div>
    </div>
  );
}
