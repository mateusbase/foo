import { IoIosArrowDropright } from "react-icons/io";
import clsx from "clsx";
import { MenuHeadingLinkProps } from "./types";

export default function MenuHeadingLink({
  name,
  link,
  textSize = "text-xl",
  isFirst = false,
  isLast = false,
}: MenuHeadingLinkProps): JSX.Element {
  const isExternal = link.external ?? false;
  const href =
    (isExternal ? link.url : `/${link.path?.replace(/^\/+/, "")}`) || "#";

  const openInNewTab = link.openOnNewTab ?? isExternal;

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noreferrer" : undefined}
      className={clsx(
        "flex min-h-[79px] items-center justify-between gap-4 border-t border-white bg-primary py-4 pl-10 pr-5 transition hover:bg-primary-foreground",
        {
          "rounded-t-xl": isFirst,
          "rounded-b-xl": isLast,
        },
        textSize,
      )}
    >
      <span className="w-[calc(100%-2rem)] break-words">{name}</span>

      <div className="flex items-center justify-center">
        <IoIosArrowDropright size={29} className="text-white" />
      </div>
    </a>
  );
}
