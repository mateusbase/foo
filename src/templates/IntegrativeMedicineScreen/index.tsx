import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { menuContent } from "./helper";

export default function IntegrativeMedicineScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);

  const activeContent = menuContent[activeItem];

  const menuItems = [
    {
      id: 1,
      name: "Importância da medicina integrativa durante o tratamento de câncer",
    },
    {
      id: 2,
      name: "Importância da medicina integrativa durante o tratamento de câncer",
    },
    {
      id: 3,
      name: "Que médicos devem orientar sobre medicina integrativa durante o tratamento oncológico",
    },
  ];

  // const titleSelectedMenu =
  //   menuItems.find((item) => item.id === activeItem)?.name ||
  //   "Item não encontrado";

  return (
    <PageLayout
      title="Medicina integrativa"
      subtitle="A medicina integrativa na oncologia é responsável pela mente, o estado de espírito e outras necessidades do paciente durante o tratamento de câncer, com o objetivo de melhorar a sua qualidade de vida. Saiba mais
"
    >
      <div className="mt-14 flex gap-10">
        <div className="w-[398px] text-white">
          {menuItems.map((item, index) => (
            <MenuItem
              id={item.id}
              name={item.name}
              isActive={activeItem === item.id}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={setActiveItem}
              textSize="text-md leading-none"
            />
          ))}
        </div>

        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
