import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import { menuContent } from "./helper";

export default function HowItWorksScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);

  const menuItems = [
    { id: 1, name: "Como funciona" },
    { id: 2, name: "Estudos clínicos abertos" },
    { id: 3, name: "Comitê de ética em pesquisa" },
    { id: 4, name: "Comitês" },
    { id: 5, name: "Fases de um estudo clínico" },
    { id: 6, name: "Termos de consentimento" },
    { id: 7, name: "Benefícios da pesquisa clínica" },
    { id: 8, name: "Perguntas frequentes" },
  ];

  const activeContent = menuContent[activeItem];

  return (
    <PageLayout
      title="Como funciona"
      subtitle="Programa de Pesquisa Clínica do Grupo Oncoclínicas"
    >
      <div className="flex flex-col md:gap-12 lg:mt-10 lg:flex-row">
        <div className="mb-2 block lg:hidden">
          <BaseSelect
            color="primary"
            variant="bordered"
            labelColor="primary"
            radius="full"
            size="lg"
            startContent={<IoMenu className="text-primary" size={28} />}
            defaultSelectedKey="1"
            labelPlacement="outside"
            options={menuItems.map((item) => ({
              key: item.id,
              value: item.id,
              label: item.name,
            }))}
            onChange={(value) => setActiveItem(Number(value))}
          />
        </div>
        <div className="hidden w-[398px] text-white lg:block">
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              isActive={activeItem === item.id}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={setActiveItem}
            />
          ))}
        </div>

        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
