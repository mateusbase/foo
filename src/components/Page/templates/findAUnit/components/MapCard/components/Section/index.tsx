import { IconWithTitle } from "../IconWithTitle";

type SectionProps = {
  icon: JSX.Element;
  title: string;
  items: string[];
};

export const Section = ({ icon, title, items }: SectionProps): JSX.Element => (
  <div className="mb-6 md:mr-8 lg:flex lg:flex-col">
    <IconWithTitle icon={icon} title={title} />

    <div className="ml-10 mt-4 flex flex-col text-base leading-6 text-darkGray md:ml-3">
      {items?.map((item) => <span key={item}>{item}</span>)}
    </div>
  </div>
);
