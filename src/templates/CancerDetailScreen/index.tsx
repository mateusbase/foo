import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
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
      <div className="mt-10 flex flex-col gap-14 lg:flex-row">
        <div className="hidden max-w-96 text-white lg:flex">
          <MenuList
            items={menuItems}
            activeItem={activeItem}
            onItemClick={setActiveItem}
          />
        </div>
        <div className="flex w-full md:w-1/2 lg:hidden">
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
        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
