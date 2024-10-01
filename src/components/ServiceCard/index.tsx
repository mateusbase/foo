import Link from "next/link";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  title,
  icon,
}: ServiceCardProps): JSX.Element {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, "");

  return (
    <Link href={`/servicos#${formattedTitle}`}>
      <div className="flex min-h-28 min-w-24 cursor-pointer flex-col items-center justify-center rounded-2xl border-1 border-primary p-4 opacity-100 lg:h-60 lg:w-60">
        <div className="mb-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
          {icon}
        </div>

        <h3 className="text-xs font-bold text-primary lg:text-center lg:text-xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}
