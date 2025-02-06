import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Selection } from "@heroui/react";
import { BaseAccordionProps } from "./types";
import ArrowCicleOutlineIcon from "../Icons/ArrowCicleOutline";

export default function BaseAccordion({
  content,
  itemClasses = {
    title: "text-primary text-sm md:text-xl ",
    content: "text-2xl",
  },
}: BaseAccordionProps): JSX.Element {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleSelectionChange = (keys: Selection): void => {
    setSelectedKeys(Array.from(keys as Set<string>));
  };

  return (
    <Accordion
      itemClasses={itemClasses}
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
      selectionMode="multiple"
    >
      {content.map((item) => {
        const isOpen = selectedKeys.includes(item.id.toString());

        return (
          <AccordionItem
            key={item.id.toString()}
            title={item.title}
            indicator={
              <ArrowCicleOutlineIcon
                size={0.8}
                className={`transition-transform duration-300 ${
                  isOpen ? "-rotate-90" : "rotate-0"
                }`}
              />
            }
          >
            <div>{item.content}</div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
