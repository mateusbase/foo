import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/Blocks/RichText";
import { CircleChevronRight } from "lucide-react";
import { AlertProps } from "./types";

export default function AlertComponent({
  title,
  description,
  icon,
  link,
}: AlertProps): JSX.Element {
  return (
    <div className="w-full rounded-3xl border-4 bg-gray-50 p-4 md:px-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:my-2 md:ml-16 md:flex-row md:items-center md:justify-start md:gap-10">
          {icon && (
            <Image
              src={icon.url}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className="size-8 max-w-20 object-contain md:size-auto"
            />
          )}

          <div className="max-w-72 text-center md:text-left">
            <h1 className="text-lg font-semibold text-darkGray md:text-3xl">
              {title}
            </h1>
          </div>

          <div className="text-center md:text-left">
            <RichText content={description} />
          </div>
        </div>

        {link?.url && (
          <div className="flex justify-center md:mr-16 md:justify-start">
            <Link
              href={link.url}
              target={link.openOnNewTab ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-lightGray underline"
            >
              {link.text}
              <CircleChevronRight className="hidden size-8 xl:flex" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
