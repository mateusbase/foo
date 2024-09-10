import { MainOptionsActionsProps } from "./types";

export default function MainOptionsActions({
  options,
  rounded = "rounded-3xl",
}: MainOptionsActionsProps): JSX.Element {
  return (
    <main
      className={`flex justify-center gap-10 bg-primary p-10 text-white ${rounded}`}
    >
      {options.map((option, index) => (
        <>
          <div key={option.id} className="flex">
            <button type="button" className="flex items-center space-x-2">
              <option.icon className="h-6 w-6" />
              <span className="text-2xl">{option.title}</span>
            </button>
          </div>
          <section>
            {index < options.length - 1 && (
              <span className="mx-4 border-y-large border-l border-white" />
            )}
          </section>
        </>
      ))}
    </main>
  );
}
