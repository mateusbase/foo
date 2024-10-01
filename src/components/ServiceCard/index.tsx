import Link from "next/link";
import { Image } from "@nextui-org/react";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  title,
  icon,
}: ServiceCardProps): JSX.Element {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, "");

  return (
    <Link href={`/servicos#${formattedTitle}`}>
      <div className="flex min-h-28 min-w-24 cursor-pointer flex-col items-center justify-center rounded-2xl border-1 border-primary p-2 opacity-100 lg:h-40 lg:w-40 xl:h-52 xl:w-52">
        <Image
          src={icon}
          alt={title}
          className="mb-4 h-8 w-8 object-cover sm:h-10 sm:w-10 md:h-12 md:w-12"
        />
        <h3 className="text-xs font-bold text-primary lg:text-center lg:text-xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}
