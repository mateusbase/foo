import PageLayout from "@/components/PageLayout";
import MenuItem from "@/components/MenuItem";
import { useState } from "react";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";
import pacientSupportMock from "./pacientSupportMock";
import InformationSection from "./components/InformationSection";

const PacientSupportScreen = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<number | null>(
    pacientSupportMock[0].id,
  );

  const currentItem = pacientSupportMock.find(
    (item) => item.id === selectedItem,
  );

  return (
    <PageLayout title="Programas de Suporte ao Paciente">
      <div className="mt-4 flex flex-col gap-14 lg:mt-16 lg:flex-row">
        <div className="lg:hidden">
          <BaseSelect
            color="primary"
            variant="bordered"
            className="font-extrabold text-primary md:w-[55%]"
            size="lg"
            labelPlacement="outside"
            defaultSelectedKey={String(pacientSupportMock[0].id)}
            onChange={(value) => setSelectedItem(Number(value))}
            startContent={
              <IoMenu className="font-extrabold text-primary" size={28} />
            }
            radius="full"
            options={pacientSupportMock.map((item) => ({
              key: item.id,
              value: item.id,
              label: item.label,
            }))}
          />
        </div>

        <div className="hidden w-2/5 flex-col lg:flex">
          {pacientSupportMock.map((item) => (
            <div key={item.id} className="font-lato-regular text-white">
              <MenuItem
                key={item.id}
                id={item.id}
                isFirst={item.id === 1}
                isLast={item.id === pacientSupportMock.length}
                name={item.label}
                isActive={selectedItem === item.id}
                onClick={(value) => setSelectedItem(Number(value))}
              />
            </div>
          ))}
        </div>

        <div className="font-lato-regular text-lg text-darkGray lg:w-3/5">
          {currentItem && (
            <>
              <h1 className="mb-5 text-2xl text-primary md:text-4xl">
                {currentItem.label}
              </h1>
              <div className="text-base md:text-xl">
                <p>{currentItem.description}</p>
                <ul className="ml-4 list-outside list-disc">
                  <li>{currentItem.test}</li>
                </ul>
                <p>{currentItem.criteriaDescription}</p>
                <ul className="ml-4 list-outside list-disc">
                  <li>{currentItem.criteria}</li>
                </ul>
                <InformationSection {...currentItem} />
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default PacientSupportScreen;
