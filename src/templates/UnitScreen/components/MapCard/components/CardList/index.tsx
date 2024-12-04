import { LocationDataProps } from "./types";

export const CardList = ({ items }: LocationDataProps): JSX.Element => (
  <ul className="ml-14 list-disc text-[18px] leading-[30px] text-darkGray">
    {items.map((item) => (
      <li key={item.id}>{item.structure}</li>
    ))}
  </ul>
);
