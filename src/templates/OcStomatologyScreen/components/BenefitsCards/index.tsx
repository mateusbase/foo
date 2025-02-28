import { Image } from "@heroui/react";

interface BenefitsCardsProps {
  title: string;
  icon: string;
  text?: string;
  isList?: boolean;
  listItems?: string[];
}

const BenefitsCards = ({
  title,
  icon,
  text,
  isList = false,
  listItems,
}: BenefitsCardsProps): JSX.Element => {
  return (
    <div className="flex min-h-[520px] w-[260px] flex-col items-center rounded-[20px] border border-lightGray px-[20px] text-center text-darkGray md:w-1/3">
      <h2 className="mb-5 mt-7 text-3xl">{title}</h2>
      <Image src={icon} width={130} height={130} alt={title} className="mb-5" />
      {isList ? (
        <ul className="mb-4 w-full list-inside list-disc text-xl">
          {listItems?.map((item) => <li>{item}</li>)}
        </ul>
      ) : (
        <p className="mb-4 text-xl">{text}</p>
      )}
    </div>
  );
};

export default BenefitsCards;
