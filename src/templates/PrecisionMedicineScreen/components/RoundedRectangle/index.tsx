import { IoIosArrowForward } from "react-icons/io";
import { cardElementsProps, RoundedRectangleProps } from "./type";

const RoundedRectangle = ({
  cardElements,
}: RoundedRectangleProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row">
      {cardElements.map((element: cardElementsProps) => (
        <div
          key={element.text}
          className="flex h-[98px] w-[323px] items-center justify-between rounded-[20px] border-3 border-primary px-7 py-8"
        >
          <span className="font-lato-black text-primary">{element.text}</span>
          <IoIosArrowForward className="rounded-full border-3 border-primary text-2xl text-primary" />
        </div>
      ))}
    </div>
  );
};

export default RoundedRectangle;
