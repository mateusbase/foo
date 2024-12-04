import { IconWithTitle } from "../IconWithTitle";

type SectionProps = {
  icon: JSX.Element;
  title: string;
  items: string[];
};

export const Section = ({ icon, title, items }: SectionProps): JSX.Element => (
  <div className="mb-6 lg:flex lg:flex-col">
    <IconWithTitle icon={icon} title={title} />
    <ul className="ml-10 mt-4 list-disc text-base leading-6 text-darkGray">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);
