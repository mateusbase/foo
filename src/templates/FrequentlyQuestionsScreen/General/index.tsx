import BaseAccordion from "@/components/Accordion";
import { FaqContent } from "../helper";

export default function General(): JSX.Element {
  const itemClasses = {
    title: "text-primary text-sm md:text-2xl ",
    content: "text-darkGray text-2xl px-2",
  };

  return <BaseAccordion content={FaqContent} itemClasses={itemClasses} />;
}
