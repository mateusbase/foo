import { MainOptionsActionsProps } from "./types";


export default function MainOptionsActions({ options }: MainOptionsActionsProps) {
  return (
    <main className="bg-primary text-white p-10 flex justify-center gap-10 items-center">
      {options.map((option, index) => (
        <>
          <div key={index} className="flex">
            <button className="flex items-center space-x-2">
              <option.icon className="w-6 h-6" />
              <span className="text-2xl">{option.title}</span>
            </button>
          </div>
          <section>
            {index < options.length - 1 && (
              <span className="border-l border-white border-y-large mx-4"></span>
            )}
          </section>
        </>
      ))}
    </main>
  );
}
