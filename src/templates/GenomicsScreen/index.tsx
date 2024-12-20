import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import genomicsExamsMock from "./genomicsExamsMock";

const GenomicsScreen = (): JSX.Element => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(1);

  const selectedItem = genomicsExamsMock.find(
    (item) => Number(item.value) === selectedMenuItem,
  );

  return (
    <PageLayout title="Nossos exames">
      <div className="mt-5 flex flex-row gap-16">
        <div className="w-1/4 font-lato-bold text-white">
          {genomicsExamsMock.map((item) => (
            <div key={item.value} className="font-lato-regular text-white">
              <MenuItem
                key={item.value}
                id={Number(item.value)}
                isFirst={item.value === "1"}
                isLast={Number(item.value) === genomicsExamsMock.length}
                name={item.label}
                isActive={selectedMenuItem === Number(item.value)}
                onClick={(value) => setSelectedMenuItem(Number(value))}
              />
            </div>
          ))}
        </div>
        <div className="flex w-3/4 flex-col gap-7 border border-red-500">
          {selectedItem && (
            <>
              <h1 className="mb-12 font-lato-bold text-5xl text-primary">
                {selectedItem.label}
              </h1>
              {selectedItem.exams.map((exam) => (
                <div
                  key={exam.value}
                  className="relative flex h-[89px] w-full max-w-[758px] cursor-pointer flex-row items-center rounded-2xl bg-primary px-7 py-8 text-white sm:w-[90%] lg:w-[758px]"
                >
                  <h2 className="font-lato-bold text-2xl">{exam.label}</h2>
                  <IoChevronForwardCircleOutline className="absolute right-[38px] text-3xl text-white" />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default GenomicsScreen;
