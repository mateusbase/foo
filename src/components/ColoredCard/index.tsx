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
      } min-h-72 w-full content-center justify-center rounded-xl border-3 p-4 md:h-[343px] ${className || ""}`}
    >
      <p className="mb-6 px-6 py-9 text-center font-lato-black text-2xl font-bold md:text-4xl lg:text-2xl xl:text-4xl">
        {title}
      </p>
      <p className="px-9 text-center font-lato-thin text-xl md:text-2xl lg:text-lg xl:text-2xl">
        {description}
      </p>

      {inputPlaceholder && (
        <input
          type="text"
          placeholder={inputPlaceholder}
          className="mx-auto my-4 w-[85%] rounded-full bg-white p-3 text-center text-darkGray md:w-64 lg:w-[90%]"
        />
      )}

      <div className="mt-9 flex w-full flex-col items-center gap-4 pb-8 lg:pb-11">
        {buttons.map((button) => (
          <BaseButton
            key={button.text}
            onClick={button.onClick}
            className={`mb-6 w-[85%] rounded-md px-12 py-3 text-lg md:mb-9 md:w-[322px] lg:mb-[41.5px] ${button.className}`}
          >
            {button.text}
          </BaseButton>
        ))}
      </div>
    </div>
  );
}
