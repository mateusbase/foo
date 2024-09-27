import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaqHeader } from "./components/FaqHeader";

export default function FaqSection(): JSX.Element {
  const title = "Descubra tudo o que você deseja saber sobre a Oncoclínicas";
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const itemClasses = {
    title: "text-primary text-sm md:text-lg md:font-bold",
  };

  return (
    // prettier-ignore
    <section className="bg-gray-foreground flex flex-col items-center justify-center px-8 py-16 md:py-28">

      <FaqHeader titleHeader={title} />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center">
        <Accordion
          className=""
          itemClasses={itemClasses}
          selectionMode="multiple"
        >
          <AccordionItem key="1" title="O que é a Oncoclínicas?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Quais cidades têm Oncoclínicas?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            title="Quais os tipos de tratamentos que a Oncoclínicas oferece?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="4"
            title="A Oncoclínicas atende quais especialidades?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="5" title="Quais planos de saúde são aceitos?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="6"
            title="A Oncoclínicas atende pelo SUS (Sistema Único de Saúde)?"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
