import PageLayout from "@/components/PageLayout";
import MenuItem from "@/components/MenuItem";
import { useState } from "react";
import pacientSupportMock from "./pacientSupportMock";

const PacientSupportScreen = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<number | null>(
    pacientSupportMock[0].id,
  );

  const currentItem = pacientSupportMock.find(
    (item) => item.id === selectedItem,
  );

  return (
    <PageLayout title="Programas de Suporte ao Paciente">
      <div className="flex flex-row gap-14">
        <div className="w-1/4">
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

        <div className="w-3/4 font-lato-regular text-lg text-darkGray">
          {currentItem && (
            <>
              <h1 className="mb-5 text-4xl text-primary">
                {currentItem.label}
              </h1>
              <p>{currentItem.description}</p>
              <ul className="ml-4 list-outside list-disc">
                <li>{currentItem.test}</li>
              </ul>
              <p>{currentItem.criteriaDescription}</p>
              <ul className="ml-4 list-outside list-disc">
                <li>{currentItem.criteria}</li>
              </ul>

              <p className="mt-9">{currentItem.informationText}</p>
              <p>{currentItem.whatsappContact}</p>
              <p>{currentItem.emailContact}</p>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default PacientSupportScreen;
