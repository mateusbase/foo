import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import BaseSelect from "@/components/Select";
import { menuContent, menuItems } from "./helper";

export default function IntegrativeMedicineScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);

  const activeContent = menuContent[activeItem];

  // const titleSelectedMenu =
  //   menuItems.find((item) => item.id === activeItem)?.name ||
  //   "Item não encontrado";

  return (
    <PageLayout
      title="Medicina integrativa"
      subtitle="A medicina integrativa na oncologia é responsável pela mente, o estado de espírito e outras necessidades do paciente durante o tratamento de câncer, com o objetivo de melhorar a sua qualidade de vida. Saiba mais"
    >
      <div className="mt-14 flex flex-col gap-10 lg:flex-row">
        <div className="text-white lg:w-[398px]">
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
        </div>

        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
