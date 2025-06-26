import { RichText } from "@/components/Blocks/RichText";
import { EducationalCardProps } from "./types";

export default function EducationalCard({
  title,
  subtitle,
}: EducationalCardProps): JSX.Element {
  return (
    <div className="flex h-fit w-full flex-col text-white lg:h-[480px] lg:flex-row xl:h-[390px]">
      <div className="flex flex-col justify-center text-primary lg:w-[555px] lg:rounded-bl-[100px] lg:bg-custom-gradient-dark lg:p-20 lg:text-white">
        <RichText
          content={title}
          className="text-left [&_p.editor-paragraph]:break-words [&_p.editor-paragraph]:text-[48px] [&_p.editor-paragraph]:font-medium [&_p.editor-paragraph]:text-primary lg:[&_p.editor-paragraph]:text-white"
        />
      </div>

      <div className="py-6 lg:w-4/6 lg:py-0 lg:pl-8">
        <div className="w-4/5">
          <RichText
            content={subtitle}
            className="text-base text-darkGray lg:text-xl 2xl:text-2xl"
          />
        </div>
      </div>
    </div>
  );
}
