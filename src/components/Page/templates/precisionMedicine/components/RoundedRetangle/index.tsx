import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { cardElementsProps, RoundedRectangleProps } from "./types";

const RoundedRectangle = ({
  cardElements,
}: RoundedRectangleProps): JSX.Element => {
  return (
    <div className="mt-5 flex flex-col items-center gap-4 lg:mb-9 lg:flex-row">
      {cardElements.map((element: cardElementsProps) => (
        <Link href={element.url} key={element.text} passHref className="w-full">
          <div
            key={element.text}
            className="flex h-[98px] w-full items-center justify-between rounded-[20px] border-2 border-primary px-7 py-8 align-middle font-lato-black text-lg font-semibold md:h-[136px] md:text-[32px] lg:w-full lg:gap-2 lg:text-2xl xl:text-3xl"
          >
            <span className="text-greenDark">{element.text}</span>

            <IoIosArrowForward
              size={29.5}
              className="shrink-0 rounded-full border-2 border-primary align-middle text-greenDark"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoundedRectangle;
