import { StepTestCardProps } from "./types";

export default function StepTestCard({
  stepNumber,
  stepDescription,
  stepImage,
}: StepTestCardProps): JSX.Element {
  return (
    <div className="w-full">
      <div>
        <div className="absolute m-5 flex size-12 items-center justify-center rounded-full bg-primary text-3xl text-white">
          {stepNumber}
        </div>
        <img
          alt="Etapas para teste onco pdo"
          src={stepImage}
          className="h-[213px] w-full rounded-3xl object-cover"
        />
      </div>
      <div className="mt-4 w-5/6">
        <p className="text-xl text-darkGray">{stepDescription}</p>
      </div>
    </div>
  );
}
