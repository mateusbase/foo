import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import { IoChevronForwardCircleOutline, IoMenu } from "react-icons/io5";
import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import pathologicExamsMock from "./pathologicExamsMock";

const PathologicExamsScreen = (): JSX.Element => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(1);

  const selectedItem = pathologicExamsMock.find(
    (item) => Number(item.value) === selectedMenuItem,
  );

  return (
    <PageLayout title="Nossos exames">
      <div className="mt-5 flex flex-col gap-16 lg:flex-row">
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
            options={pathologicExamsMock.map((item) => ({
              key: item.value,
              value: item.value,
              label: item.label,
            }))}
            onChange={(value) => setSelectedMenuItem(Number(value))}
          />
        </div>

        <div className="hidden w-[398px] font-lato-bold text-white lg:block">
          {pathologicExamsMock.map((item) => (
            <div key={item.value} className="font-lato-regular text-white">
              <MenuItem
                key={item.value}
                id={Number(item.value)}
                isFirst={item.value === "1"}
                isLast={Number(item.value) === pathologicExamsMock.length}
                name={item.label}
                isActive={selectedMenuItem === Number(item.value)}
                onClick={(value) => setSelectedMenuItem(Number(value))}
              />
            </div>
          ))}
        </div>

        <div className="mb-10 flex w-full flex-col gap-7 lg:w-3/4">
          {selectedItem && (
            <>
              <h1 className="mb-4 font-lato-bold text-2xl text-primary md:text-[40px]">
                {selectedItem.label}
              </h1>
              <p className="font-lato-regular text-sm text-darkGray md:text-xl">
                {selectedItem.description}
              </p>
              <BaseButton className="mb-5 h-14 w-full rounded-md px-32 py-3 font-lato-thin text-white md:w-1/2 lg:w-[245px]">
                Solicitar exame
              </BaseButton>

              <h3 className="font-lato-regular text-2xl text-primary">
                Tipos Tumorais Relacionados
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {selectedItem.relatedTumoralTypes.map((exam) => (
                  <div
                    key={exam.value}
                    className="flex h-[105px] w-full cursor-pointer items-center gap-4 rounded-lg border border-primary px-5 py-3 text-primary lg:h-[150px]"
                  >
                    <h2 className="grow font-lato-bold text-xl">
                      {exam.label}
                    </h2>
                    <IoChevronForwardCircleOutline className="shrink-0 text-3xl text-primary" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default PathologicExamsScreen;
