import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import BaseSwiper from "@/components/BaseSwiper";
import { scroller } from "react-scroll";
import WhatIsSection from "./components/WhatIsSection";
import HowProgramWorksSection from "./components/HowProgramWorksSection";
import LasertherapyUsage from "./components/LasertherapyUsage";
import ObjectivesSection from "./components/ObjectivesSection";
import LasertherapyBenefits from "./components/LasertherapyBenefits";
import { laserBenefitsMock } from "./laserBenefitsMock";
import BenefitsCards from "./components/BenefitsCards";
import ProvenEfficacy from "./components/ProvenEfficacy";

const menuItems = [
  { id: 1, name: "O que é?", key: 1, sectionName: "what-is" },
  { id: 2, name: "Como o programa atua", key: 2, sectionName: "how-works" },
  {
    id: 3,
    name: "O uso da laserterapia e seus benefícios",
    key: 3,
    sectionName: "lasertherapy-usage",
  },
  { id: 4, name: "Objetivos", key: 4, sectionName: "objectives" },
  {
    id: 5,
    name: "Fases do tratamento",
    key: 5,
    sectionName: "lasertherapy-benefits",
  },
  {
    id: 6,
    name: "Eficácia comprovada cientificamente",
    key: 6,
    sectionName: "proven-efficacy",
  },
];

export default function OcStomatologyScreen(): JSX.Element {
  const [activeItem, setActiveItem] = useState<string | number>(
    menuItems[0].key,
  );

  const handleSelectChange = (value: string | number): void => {
    const selectedMenuItem = menuItems.find(
      (item) => item.id === Number(value),
    );
    setActiveItem(value.toString());
    const offset = -100;
    if (!selectedMenuItem) return;

    scroller.scrollTo(selectedMenuItem?.sectionName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset,
    });
  };

  const handleSelectMenuChange = (value: string | number): void => {
    const selectedMenuItem = menuItems.find((item) => item.key === value);
    setActiveItem(value.toString());

    if (!selectedMenuItem) return;
    const section = document.getElementById(selectedMenuItem?.sectionName);

    if (section) {
      const offset = 110;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageLayout
      title="OC Estomatologia"
      subtitle="Saúde bucal durante todo o tratamento oncológico"
    >
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
              defaultSelectedKey={1}
              labelPlacement="outside"
              options={menuItems.map((item) => ({
                key: item.key,
                value: item.id.toString(),
                label: item.name,
              }))}
              onChange={handleSelectChange}
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
                onClick={handleSelectMenuChange}
                textSize="text-md leading-none"
              />
            ))}
          </div>
        </div>

        <div className="mb-24 flex w-full flex-col gap-14 text-darkGray lg:w-[1061px]">
          <WhatIsSection />
          <HowProgramWorksSection />
          <LasertherapyUsage />
          <ObjectivesSection />
          <LasertherapyBenefits />
          <BaseSwiper
            data={laserBenefitsMock}
            renderItem={(benefit) => (
              <BenefitsCards
                key={benefit.id}
                title={benefit.title}
                icon={benefit.icon}
                text={benefit.text}
                isList={benefit.isList}
                listItems={benefit.listItems}
              />
            )}
            className="md:hidden"
          />
          <div className="hidden gap-5 md:flex">
            {laserBenefitsMock.map((benefit) => (
              <BenefitsCards
                key={benefit.id}
                title={benefit.title}
                icon={benefit.icon}
                text={benefit.text}
                isList={benefit.isList}
                listItems={benefit.listItems}
              />
            ))}
          </div>

          <ProvenEfficacy />

          <ShareOptions options={socialNetwork} />
        </div>
      </div>
    </PageLayout>
  );
}
