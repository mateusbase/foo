import Link from "next/link";
import { Button } from "@/components/Button";
import { ButtonLinkBlockProps } from "./types";

const fillingClassMap: Record<string, string> = {
  filled: "bg-primary text-white hover:bg-primary/90",
  outlined: "bg-white border border-primary text-primary hover:bg-primary/10",
  ghost: "text-primary hover:bg-primary/10",
};

export default function ButtonLinkBlock({
  text,
  link,
  filling = "filled",
}: ButtonLinkBlockProps): JSX.Element {
  const href = link.external ? link.url : `/${link.path}`;

  const target = link.openOnNewTab ? "_blank" : "_self";

  const rel = link.openOnNewTab ? "noopener noreferrer" : undefined;

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start">
      <Link href={href || "#"} target={target} rel={rel}>
        <Button
          className={`h-[54px] w-[300px] md:w-[354px] ${fillingClassMap[filling]}`}
        >
          {text}
        </Button>
      </Link>
    </div>
  );
}
