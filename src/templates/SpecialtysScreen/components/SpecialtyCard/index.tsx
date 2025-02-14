import { IoChevronForwardCircleOutline } from "react-icons/io5";

export function SpecialtyCard({ name }: { name: string }): JSX.Element {
  return (
    <div className="flex h-[105px] w-full cursor-pointer items-center gap-4 rounded-lg border border-primary px-4 py-2 text-primary lg:h-[150px] xl:px-5 xl:py-3">
      <h2 className="grow font-lato-bold text-xl">{name}</h2>
      <IoChevronForwardCircleOutline className="shrink-0 text-3xl text-primary" />
    </div>
  );
}
