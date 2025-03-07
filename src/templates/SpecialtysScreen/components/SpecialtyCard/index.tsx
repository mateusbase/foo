import { IoChevronForwardCircleOutline } from "react-icons/io5";

export function SpecialtyCard({ name }: { name: string }): JSX.Element {
  return (
    <div className="flex h-[105px] w-full cursor-pointer items-center gap-4 rounded-lg border border-primary px-4 py-2 text-primary xl:px-5 xl:py-3">
      <h2 className="grow pl-10 font-lato-bold text-xl md:pl-8 lg:pl-10 lg:text-base xl:text-xl">
        {name}
      </h2>
      <IoChevronForwardCircleOutline className="mr-10 shrink-0 text-3xl text-primary md:mr-8 lg:mr-10" />
    </div>
  );
}
