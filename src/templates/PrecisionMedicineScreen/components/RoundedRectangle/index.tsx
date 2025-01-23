import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { cardElementsProps, RoundedRectangleProps } from "./type";

const RoundedRectangle = ({
  cardElements,
}: RoundedRectangleProps): JSX.Element => {
  return (
    <div className="mt-5 flex flex-col items-center gap-4 lg:mb-9 lg:flex-row">
      {cardElements.map((element: cardElementsProps) => (
        <Link
          href={element.url}
          key={element.text}
          target="_blank"
          rel="noopener noreferrer"
          passHref
          className="w-full"
        >
          <div
            key={element.text}
            className="flex h-[98px] w-full items-center justify-between rounded-[20px] border-3 border-primary px-7 py-8 font-lato-black md:h-[106px] md:w-[90%] md:text-4xl lg:w-full lg:gap-2 lg:text-3xl"
          >
            <span className="text-primary">{element.text}</span>
            <IoIosArrowForward className="rounded-full border-2 border-primary text-primary" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoundedRectangle;
