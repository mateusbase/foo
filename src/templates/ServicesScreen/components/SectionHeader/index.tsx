import { SectionHeaderProps } from "./types";

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps): JSX.Element {
  return (
    <div className="mt-10 flex justify-center md:mt-20">
      <div className="w-full text-left lg:text-center">
        <h2 className="text-2xl font-extralight text-primary lg:text-6xl lg:leading-[74px]">
          {title}
        </h2>
        <p className="mt-4 text-base text-darkGray lg:text-2xl lg:leading-[32px]">
          {description}
        </p>
      </div>
    </div>
  );
}
