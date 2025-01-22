import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { menuContent, menuItems } from "@/templates/GenomicsScreen/helper";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import genomicsExamsMock from "./genomicsExamsMock";

const GenomicsScreen = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<number>(1);

  const activeContent = menuContent[activeItem];

  return (
    <PageLayout title="Nossos exames">
      <div className="flex w-full flex-col gap-10 lg:mt-12 lg:flex-row xl:gap-16">
        <div className="text-white lg:w-[398px]">
          <div className="mb-2 block md:max-w-[302px] lg:hidden">
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

          <div className="hidden w-[398px] font-lato-bold text-white lg:block">
            {genomicsExamsMock.map((item) => (
              <div key={item.value} className="font-lato-regular text-white">
                <MenuItem
                  key={item.value}
                  id={Number(item.value)}
                  isFirst={item.value === "1"}
                  isLast={Number(item.value) === genomicsExamsMock.length}
                  name={item.label}
                  isActive={activeItem === Number(item.value)}
                  onClick={(value) => setActiveItem(Number(value))}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[1061px]">{activeContent}</div>
      </div>
    </PageLayout>
  );
};

export default GenomicsScreen;
