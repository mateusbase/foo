import { Image } from "@nextui-org/react";
import { StepTestCardProps } from "./types";

export default function StepTestCard({
  stepDescription,
  stepImage,
}: StepTestCardProps): JSX.Element {
  return (
    <div className="w-full">
      <Image src={stepImage} className="h-[213px] w-[334px] object-cover" />
      <div className="mt-4 w-5/6">
        <p className="text-xl text-darkGray">{stepDescription}</p>
      </div>
    </div>
  );
}
