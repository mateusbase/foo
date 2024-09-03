import { EventCardProps } from "./types";

export default function EventCard({ image }: EventCardProps): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border-1 border-neutral-400 p-4 opacity-100 sm:h-48 sm:w-48 md:h-260 md:w-[514px]">
      <img src={image} alt="" className="h-auto w-full" />
    </div>
  );
}
