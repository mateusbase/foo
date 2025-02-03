import { IoIosCalendar } from "react-icons/io";
import { useRouter } from "next/router";
import { ClippingCardProps } from "./types";

export default function ClippingCard({
  title,
  date,
  description,
  isRelease = false,
}: ClippingCardProps): JSX.Element {
  const router = useRouter();

  const handleCardClick = (isReleaseCard: boolean): void => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    isReleaseCard
      ? router.push(`/releases/${slug}`)
      : router.push(`/clipping/${slug}`);
  };

  return (
    <div
      onClick={() => handleCardClick(isRelease)}
      className={`flex h-[420px] w-full cursor-pointer flex-col justify-between rounded-2xl border border-darkGray p-6 transition-shadow hover:shadow-lg md:h-[347px] ${!isRelease ? "cursor-pointer" : ""}`}
    >
      <h3 className="mb-4 text-left text-[23px] font-bold text-primary md:text-lg lg:text-3xl">
        {title}
      </h3>

      <div className="mb-4 flex items-center align-middle text-darkGray">
        <IoIosCalendar
          size={20}
          className="mr-2 size-8 font-lato-regular text-primary"
        />
        <span className="text-xl">{date}</span>
      </div>

      {isRelease && (
        <button
          type="button"
          aria-label="Download"
          className="mt-2 w-full items-center justify-center rounded-md bg-primary py-3 font-lato-regular text-lg text-white"
        >
          Download
        </button>
      )}

      {!isRelease && (
        <p className="text-ellipsis text-left text-[20px] text-darkGray md:text-base lg:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
