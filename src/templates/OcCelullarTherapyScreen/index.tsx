import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import { scroller } from "react-scroll";
import MenuItem from "@/components/MenuItem";
import { useState } from "react";
import {
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
} from "./components/Paragraphs";

const options = [
  { key: "1", value: "1", label: "O que é?" },
  { key: "2", value: "2", label: "TMO Autólogo" },
  { key: "3", value: "3", label: "TMO Alogênico" },
];

const OcCelullarTherapyScreen = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>(options[0].key);

  const handleSelectChange = (value: string | number): void => {
    setActiveItem(value.toString());

    const offset = -50;

    scroller.scrollTo(`section-${value}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset,
    });
  };

  const handleSelectMenuChange = (value: string | number): void => {
    setActiveItem(value.toString());

    const section = document.getElementById(`section-${value}`);
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
      title="OC Terapia celular"
      subtitle="Para alcançar o futuro da medicina personalizada, expandimos fronteiras"
      showBreadcrumb
    >
      <div className="mb-14 flex flex-col items-start lg:mt-20 lg:flex-row">
        <div className="mt-16 w-full self-center md:self-start lg:hidden">
          <BaseSelect
            options={options}
            defaultSelectedKey={options[0].key}
            onChange={handleSelectChange}
            color="primary"
            className="flex h-14 w-full items-center justify-center rounded-full border border-primary py-[15.5px] text-center text-lg font-bold md:w-2/5"
            labelPlacement="outside"
            noBorder
            startContent={<IoMenu className="mr-3 text-primary" size={24} />}
          />
        </div>

        <div className="hidden w-full items-start gap-x-14 lg:flex">
          <div className="flex w-[30%] flex-col text-white">
            {options.map((option, index) => (
              <MenuItem
                key={option.key}
                id={Number(option.key)}
                name={option.label}
                isActive={activeItem === option.key}
                isFirst={index === 0}
                isLast={index === options.length - 1}
                onClick={handleSelectMenuChange}
              />
            ))}
          </div>

          <div className="w-[70%]">
            <FirstParagraph />
            <SecondParagraph />
            <ThirdParagraph />
          </div>
        </div>

        <div className="lg:hidden">
          <FirstParagraph />
          <SecondParagraph />
          <ThirdParagraph />
        </div>
      </div>
    </PageLayout>
  );
};

export default OcCelullarTherapyScreen;
