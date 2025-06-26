import ButtonLinkBlock from "../LinkButton";
import { ButtonLinkGroupProps } from "./types";

export default function ButtonLinkGroup({
  orientation,
  links,
}: ButtonLinkGroupProps): JSX.Element {
  return (
    <div
      className={`flex items-start justify-center gap-4 ${orientation === "vertical" ? "flex-col" : "flex-wrap md:flex-row"}`}
    >
      {links?.map((link, idx) => (
        <ButtonLinkBlock
          key={`${link.text}-${link.link.url || link.link.path || idx}`}
          text={link.text}
          link={link.link}
          filling={link.filling}
        />
      ))}
    </div>
  );
}
