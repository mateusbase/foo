import { IoIosCalendar } from "react-icons/io";
import { useRouter } from "next/router";
import { ClippingCardProps } from "./types";
import { formatDate } from "../../../events/utils";

export default function ClippingCard({
  title,
  date,
  description,
  path,
  isRelease = false,
  fileUrl,
}: ClippingCardProps): JSX.Element {
  const router = useRouter();

  const handleNavigate = (): void => {
    if (path) {
      router.push(path);
    }
  };

  const handleDownload = async (): Promise<void> => {
    if (!fileUrl) return;

    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = title;
    link.click();

    URL.revokeObjectURL(link.href);
  };

  return (
    <div
      className={`flex h-[420px] w-full flex-col justify-between rounded-2xl border border-darkGray p-6 transition-shadow hover:shadow-lg md:h-[347px] ${!isRelease ? "cursor-pointer" : ""}`}
      onClick={() => (!isRelease ? handleNavigate() : null)}
    >
      <h3 className="mb-4 text-left text-[23px] font-bold text-primary md:text-lg lg:text-3xl">
        {title}
      </h3>

      <div className="mb-4 flex items-center align-middle text-darkGray">
        <IoIosCalendar
          size={20}
          className="mr-2 size-8 font-lato-regular text-primary"
        />

        <span className="text-xl">{formatDate(date)}</span>
      </div>

      {isRelease && fileUrl && (
        <button
          onClick={handleDownload}
          type="button"
          className="mt-2 flex w-full items-center justify-center rounded-md bg-primary py-3 font-lato-regular text-lg text-white"
        >
          Download
        </button>
      )}

      {!isRelease && (
        <p className="line-clamp-6 text-ellipsis text-left text-xl text-darkGray md:text-base lg:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
