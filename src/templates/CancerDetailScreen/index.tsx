import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { menuContent } from "./helper";

export default function CancerDetailScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);
  const activeContent = menuContent[activeItem];

  const menuItems = [
    { id: 1, name: "O que é o câncer de mama" },
    { id: 2, name: "Subtipos de câncer de mama" },
    { id: 3, name: "Sintomas e sinais" },
    { id: 4, name: "Diagnóstico" },
    { id: 5, name: "Tratamento" },
    { id: 6, name: "Prevenção" },
  ];

  return (
    <PageLayout
      title="Câncer de mama"
      subtitle="O câncer de mama pode atingir os dois sexos, mas é raro em homens. É o segundo tipo de câncer mais comum nas mulheres. Os principais sintomas são nódulos ou caroços nos seios. A mamografia é fundamental para o diagnóstico precoce."
    >
      <div className="mt-10 flex gap-14">
        <div className="max-w-96 text-white">
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
