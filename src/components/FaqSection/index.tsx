import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FaqSection() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const itemClasses = {
    title: "text-primary",
  };

  return (
    <section className="flex flex-col justify-center items-center bg-background-foreground">
      <div>
        <h1>Descubra tudo o que você deseja saber sobre a Oncoclínicas</h1>
      </div>
      <div>
        <Accordion
          className="w-full max-w-[700px]"
          itemClasses={itemClasses}
          selectionMode="multiple"
        >
          <AccordionItem key="1" title="O que é a Oncoclínicas?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" title="Quais cidades têm Oncoclínicas?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" title="Quais os tipos de tratamentos que a Oncoclínicas oferece?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="4" title="A Oncoclínicas atende quais especialidades?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="5" title="Quais planos de saúde são aceitos?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="6" title="A Oncoclínicas atende pelo SUS (Sistema Único de Saúde)?">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
