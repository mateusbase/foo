import { StepTestCardProps } from "./types";

export default function StepTestCard({
  stepDescription,
  stepImage,
}: StepTestCardProps): JSX.Element {
  return (
    <div className="w-full">
      <img
        alt="Etapas para teste onco pdo"
        src={stepImage}
        className="h-[213px] w-full rounded-3xl object-cover"
      />
      <div className="mt-4 w-5/6">
        <p className="text-xl text-darkGray">{stepDescription}</p>
      </div>
    </div>
  );
}
