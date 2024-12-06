import { IoIosArrowForward } from "react-icons/io";
import { cardElementsProps, RoundedRectangleProps } from "./type";

const RoundedRectangle = ({
  cardElements,
}: RoundedRectangleProps): JSX.Element => {
  return (
    <div className="mt-5 flex flex-col items-center gap-4 lg:mb-9 lg:flex-row">
      {cardElements.map((element: cardElementsProps) => (
        <div
          key={element.text}
          className="flex h-[98px] w-[323px] items-center justify-between rounded-[20px] border-3 border-primary px-7 py-8 font-lato-black md:h-[106px] md:w-[90%] md:text-4xl lg:w-[33,33%] lg:gap-2 lg:text-3xl"
        >
          <span className="text-primary">{element.text}</span>
          <IoIosArrowForward className="rounded-full border-3 border-primary text-primary" />
        </div>
      ))}
    </div>
  );
};

export default RoundedRectangle;
