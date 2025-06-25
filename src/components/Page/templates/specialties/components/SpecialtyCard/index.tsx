import { IoChevronForwardCircleOutline } from "react-icons/io5";

export function SpecialtyCard({ name }: { name: string }): JSX.Element {
  return (
    <div className="flex h-[105px] w-full cursor-pointer items-center rounded-lg border border-primary px-6 py-2 text-primary xl:px-8 xl:py-3">
      <div className="flex w-full items-center justify-between">
        <h2 className="flex-1 text-left font-lato-bold text-xl lg:text-base xl:text-xl">
          {name}
        </h2>

        <IoChevronForwardCircleOutline className="text-3xl text-primary" />
      </div>
    </div>
  );
}
