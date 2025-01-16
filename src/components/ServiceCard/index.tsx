import Link from "next/link";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  title,
  icon,
  path,
}: ServiceCardProps): JSX.Element {
  return path ? (
    <Link href={path}>
      <div className="flex min-h-28 min-w-24 cursor-pointer flex-col items-start justify-center rounded-2xl border-1 border-primary p-3 opacity-100 lg:size-40 lg:items-center lg:justify-center xl:size-52">
        <div className="mb-4 flex size-full items-start justify-start border-2 lg:items-center lg:justify-center">
          {icon}
        </div>
        <h3 className="text-[13px] leading-none text-darkGray lg:text-center lg:text-xl lg:text-primary">
          {title}
        </h3>
      </div>
    </Link>
  ) : (
    <div className="flex min-h-28 min-w-24 flex-col items-center justify-center rounded-2xl border-1 border-primary p-4 opacity-100 lg:size-60">
      <div className="mb-4 size-8 sm:size-10 md:size-12">{icon}</div>

      <h3 className="text-xs font-bold text-primary lg:text-center lg:text-xl">
        {title}
      </h3>
    </div>
  );
}
