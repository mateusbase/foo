import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { menuContent, menuItems } from "./helper";
import { MenuList } from "./components/MenuItems";

export default function CancerDetailScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);
  const activeContent = menuContent[activeItem];

  return (
    <PageLayout
      title="Câncer de mama"
      subtitle="O câncer de mama pode atingir os dois sexos, mas é raro em homens. É o segundo tipo de câncer mais comum nas mulheres. Os principais sintomas são nódulos ou caroços nos seios. A mamografia é fundamental para o diagnóstico precoce."
    >
      <div className="mt-10 flex gap-14">
        <div className="max-w-96 text-white">
          <MenuList
            items={menuItems}
            activeItem={activeItem}
            onItemClick={setActiveItem}
          />
        </div>
        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
