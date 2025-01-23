import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { BaseAccordionProps } from "./types";

export default function BaseAccordion({
  content,
  itemClasses = {
    title: "text-primary text-sm md:text-xl ",
    content: "text-2xl",
  },
}: BaseAccordionProps): JSX.Element {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set<string>(),
  );

  // Tipado como any após a migração de NextUI para HeroUI
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectionChange = (keys: any): void => {
    const newKeys = new Set<string>(keys as unknown as string[]);
    setSelectedKeys(newKeys);
  };

  return (
    <Accordion
      itemClasses={itemClasses}
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
      selectionMode="multiple"
    >
      {content.map((item) => (
        <AccordionItem
          key={item.id.toString()}
          title={item.title}
          indicator={<IoArrowBackCircleOutline size={28} color="#00B6AD" />}
        >
          <div className={itemClasses.content}>{item.content}</div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
