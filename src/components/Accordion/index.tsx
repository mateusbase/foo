import { cn } from "@/styles/classes";
import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Base";
import { BaseAccordionProps } from "./types";
import ArrowCicleOutlineIcon from "../Icons/ArrowCicleOutline";

export function Accordion({
  content,
  titleClassName,
  contentClassName,
  indicator,
}: BaseAccordionProps): JSX.Element {
  return (
    <AccordionRoot type="multiple" className="w-full">
      {content.map((item) => (
        <AccordionItem key={item.id.toString()} value={item.id.toString()}>
          <AccordionTrigger
            className={titleClassName}
            indicator={
              indicator ?? (
                <ArrowCicleOutlineIcon
                  size={0.8}
                  className="shrink-0 transition-transform duration-300 group-data-[state=closed]:rotate-0 group-data-[state=open]:-rotate-90"
                />
              )
            }
          >
            {item.title}
          </AccordionTrigger>

          <AccordionContent
            className={cn("pl-2 text-base text-darkGray", contentClassName)}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
