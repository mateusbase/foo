import { SectionHeaderProps } from "./types";

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps): JSX.Element {
  return (
    <div className="mt-10 flex justify-center md:mt-20">
      <div className="w-full text-center">
        <h2 className="text-2xl text-primary md:text-5xl md:font-light lg:text-6xl lg:leading-[74px]">
          {title}
        </h2>
        <p className="mt-8 text-center text-base text-darkGray md:text-2xl lg:mt-4 lg:text-2xl lg:leading-[32px]">
          {description}
        </p>
      </div>
    </div>
  );
}
