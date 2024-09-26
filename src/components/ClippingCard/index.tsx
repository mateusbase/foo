import { IoIosCalendar } from "react-icons/io";
import { useRouter } from "next/router";
import { ClippingCardProps } from "./types";

export default function ClippingCard({
  title,
  date,
  description,
}: ClippingCardProps): JSX.Element {
  const router = useRouter();

  const handleCardClick = (): void => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/clipping/${slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex h-auto w-full cursor-pointer flex-col justify-between rounded-2xl border border-darkGray p-6 transition-shadow hover:shadow-lg"
    >
      <h3 className="mb-4 text-left text-[30px] font-bold text-primary">
        {title}
      </h3>

      <div className="mb-4 flex items-center text-darkGray">
        <IoIosCalendar size={20} className="mr-2" />
        <span>{date}</span>
      </div>

      <p className="text-left text-[20px] text-darkGray">{description}</p>
    </div>
  );
}
