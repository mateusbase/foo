import { Accordion, AccordionItem, Selection } from "@heroui/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { BaseAccordionProps } from "./types";

export default function BaseAccordion({
  content,
  itemClasses = {
    title: "text-primary text-sm md:text-xl ",
    content: "text-2xl",
  },
}: BaseAccordionProps): JSX.Element {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set<string>(),
  );

  const handleSelectionChange = (keys: Selection): void => {
    setSelectedKeys(keys);
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
