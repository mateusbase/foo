import { SearchIcon } from "@/components/Icons";
import BaseInput from "@/components/Input";
import BaseSwiper from "@/components/BaseSwiper";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useState } from "react";
import { InsuranceGridProps } from "./types";

const InsuranceGrid = ({ insurance }: InsuranceGridProps): JSX.Element => {
  const deviceType = useDeviceType();
  const [searchedTerm, setSearchedTerm] = useState("");

  const filteredInsurance = insurance?.filter((plan) =>
    plan.name.toLowerCase().includes(searchedTerm.toLowerCase()),
  );

  function chunkArray<T>(
    array: T[],
    chunkSize: number,
  ): { id: string; items: T[] }[] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push({
        id: `group-${i / chunkSize}`,
        items: array.slice(i, i + chunkSize),
      });
    }
    return result;
  }

  const groupedInsurances = chunkArray(filteredInsurance || [], 8);

  return (
    <div className="w-full lg:mt-52">
      <div className="mt-20 flex flex-col justify-between gap-6 md:mt-32 lg:flex-row">
        <h2 className="text-2xl text-primary md:text-3xl md:leading-[50px]">
          Convênios atendidos nesta unidade
        </h2>

        <div className="flex h-[50px] w-full md:w-[350px]">
          <BaseInput
            placeholder="Buscar convênio"
            size="lg"
            className="h-[50px] w-full text-primary placeholder:text-primary md:w-[350px]"
            endContent={<SearchIcon className="text-primary" />}
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-10 w-full">
        <BaseSwiper
          data={groupedInsurances}
          hasArrows={deviceType !== "desktop"}
          renderItem={(group) => (
            <div className="gap-4">
              {group.items.map((plan) => (
                <div
                  key={plan.name}
                  className="mt-2 text-left text-lg text-darkGray"
                >
                  {plan.name}
                </div>
              ))}
            </div>
          )}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        />
      </div>
    </div>
  );
};

export default InsuranceGrid;
