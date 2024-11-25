import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
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
      <div className="mt-10 flex flex-row gap-12">
        <div className="w-[398px] text-white">
          {menuItems.map((item, index) => (
            <MenuItem
              id={item.id}
              name={item.name}
              isActive={activeItem === item.id}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={setActiveItem}
            />
          ))}
        </div>

        <div className="w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
