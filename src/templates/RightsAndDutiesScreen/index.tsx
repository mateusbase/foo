import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import { menuContent, menuItems } from "./helper";

export default function RightsAndDutiesScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);
  const activeContent = menuContent[activeItem];

  return (
    <PageLayout
      title="Direitos e Deveres do paciente"
      subtitle="Diante das circunstâncias enfrentadas pelos pacientes oncológicos, a legislação brasileira possui dispositivos que os ajudam a passar com mais tranquilidade pelo tratamento e reintegração à rotina após a alta médica.
"
    >
      <div className="flex flex-col gap-14 lg:mt-16 lg:flex-row">
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

        <div className="w-full lg:w-[826px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
}
