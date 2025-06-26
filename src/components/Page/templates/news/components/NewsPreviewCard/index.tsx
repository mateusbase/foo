import Image from "next/image";
import Link from "next/link";
import { getMonthAndYear } from "../../../events/utils";
import { RelatedArticle } from "../../../press/types";

export default function NewsPreviewCard({
  name,
  date,
  author,
  description,
  image,
  path,
}: RelatedArticle): JSX.Element {
  return (
    <Link href={path ?? ""} className="h-[395px] overflow-hidden p-2">
      <div className="h-1/2 overflow-hidden">
        <Image
          src={image?.url ?? ""}
          alt={image?.alt ?? ""}
          width={image?.width ?? 0}
          height={image?.height ?? 0}
        />
      </div>

      <div className="flex h-1/2 flex-col gap-2 p-2">
        <h3 className="text-xl font-light text-darkGray">{name}</h3>

        <p className="text-sm text-primary">{`${getMonthAndYear(date)} - Por: ${author}`}</p>

        <p className="line-clamp-3 text-sm text-darkGray">{description}</p>
      </div>
    </Link>
  );
}
