import Link from "next/link";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  title,
  icon,
}: ServiceCardProps): JSX.Element {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, "");

  return (
    <Link href={`/servicos#${formattedTitle}`}>
      <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-primary p-4 opacity-100 sm:h-48 sm:w-48 md:h-260 md:w-260">
        <img
          src={icon}
          alt={title}
          className="mb-4 h-8 w-8 object-cover sm:h-10 sm:w-10 md:h-12 md:w-12"
        />
        <h3 className="text-center text-xl font-bold text-primary">{title}</h3>
      </div>
    </Link>
  );
}
