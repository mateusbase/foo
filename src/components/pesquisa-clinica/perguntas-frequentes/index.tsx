import BaseAccordion from "@/components/Accordion";
import { FaqContent } from "./FaqData";

export default function PerguntasFrequentes(): JSX.Element {
  const itemClasses = {
    title: "text-primary text-sm md:text-2xl ",
    content: "text-darkGray text-2xl px-2",
  };

  return (
    <div className="mx-auto mb-5 flex w-full max-w-5xl flex-col items-center justify-center">
      <BaseAccordion content={FaqContent} itemClasses={itemClasses} />
    </div>
  );
}
