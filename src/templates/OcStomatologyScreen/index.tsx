import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import WhatIsSection from "./components/WhatIsSection";
import HowProgramWorksSection from "./components/HowProgramWorksSection";
import LasertherapyUsage from "./components/LasertherapyUsage";
import ObjectivesSection from "./components/ObjectivesSection";

const menuItems = [
  { id: 1, name: "O que é?", key: 1 },
  { id: 2, name: "Como o programa atua", key: 2 },
  { id: 3, name: "O uso da laserterapia e seus benefícios", key: 3 },
  { id: 4, name: "Objetivos", key: 4 },
  { id: 5, name: "Fases do tratamento", key: 5 },
  { id: 6, name: "Eficácia comprovada cientificamente", key: 6 },
];

export default function OcStomatologyScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);

  return (
    <PageLayout>
      <div className="flex flex-col gap-6 lg:mt-14 lg:flex-row lg:gap-10">
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
                key: item.key,
                value: item.id.toString(),
                label: item.name,
              }))}
              onChange={(value) => setActiveItem(Number(value))}
            />
          </div>

          <div className="hidden w-[398px] text-white lg:block">
            {menuItems.map((item, index) => (
              <MenuItem
                id={item.id}
                key={item.id}
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

        <div className="flex w-full flex-col gap-14 text-darkGray lg:w-[1061px]">
          <WhatIsSection />
          <HowProgramWorksSection />
          <LasertherapyUsage />
          <ObjectivesSection />

          <ShareOptions options={socialNetwork} />
        </div>
      </div>
    </PageLayout>
  );
}
