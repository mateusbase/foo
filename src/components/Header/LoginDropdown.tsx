import { cn } from "@/styles/classes";
import { PageHeader } from "@/types/page";
import { LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../Dropdown";

interface Props {
  data: PageHeader["login"];
}

export function LoginDropdown({ data }: Props): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "hidden h-12 items-center gap-2 rounded-lg bg-white p-2 text-primary data-[state=open]:bg-primary data-[state=open]:text-white lg:flex",
          )}
        >
          {data.text} <LogIn size={26} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="z-50 w-60 rounded-xl bg-white p-2"
        aria-label="Menu"
      >
        {data.links.map(({ link, text }) => (
          <DropdownMenuItem
            key={text}
            asChild
            className="cursor-pointer rounded-xl px-3 py-4 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <a
              href={link.url}
              target={link.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              {text}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
