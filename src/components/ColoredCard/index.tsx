import BaseButton from "../Button";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

interface InformationCardProps {
  title: string;
  description: string;
  buttons: ButtonProps[];
  inputPlaceholder?: string;
  background?: boolean;
  className?: string;
}

export default function ColoredCard({
  title,
  description,
  buttons,
  inputPlaceholder,
  background,
  className,
}: InformationCardProps): JSX.Element {
  return (
    <div
      className={`border-purpleMedium ${
        background ? "bg-purpleMedium text-white" : "bg-white text-darkGray"
      } min-h-72 w-full content-center justify-center rounded-xl border-3 p-4 md:p-16 ${className || ""}`}
    >
      <p className="mb-6 text-center font-lato-black text-4xl">{title}</p>
      <p className="text-center font-lato-thin">{description}</p>

      {inputPlaceholder && (
        <input
          type="text"
          placeholder={inputPlaceholder}
          className="mx-auto my-4 w-[85%] rounded-full bg-white p-3 text-center text-darkGray md:w-64 lg:w-[90%]"
        />
      )}

      <div className="mt-6 flex w-full flex-col items-center gap-4">
        {buttons.map((button) => (
          <BaseButton
            key={button.text}
            onClick={button.onClick}
            className={`w-[85%] rounded-full px-12 py-3 text-lg md:w-64 ${button.className}`}
          >
            {button.text}
          </BaseButton>
        ))}
      </div>
    </div>
  );
}
