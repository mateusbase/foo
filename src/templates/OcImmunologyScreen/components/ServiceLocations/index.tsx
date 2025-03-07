import BaseSwiper from "@/components/BaseSwiper";
import BaseSelect from "@/components/Select";
import { unitsData } from "@/templates/OcWomanScreen/data/unitsData";
import { UnitCardProps } from "@/templates/OcWomanScreen/interfaces";
import { ArrowDownIcon } from "lucide-react";
import UnitsCard from "../UnitsCards";

const ServicesLocations = (): JSX.Element => {
  return (
    <div className="mb-10 flex w-full flex-col lg:h-[694px] lg:flex-row lg:gap-8">
      <div className="full-bleed mb-11 bg-custom-gradient-dark pb-10 pl-10 pr-7 pt-9 text-white lg:mb-0 lg:w-2/5 lg:pb-[256px] lg:pl-16 lg:pr-24 lg:pt-16">
        <span className="text-2xl lg:text-5xl">
          Um serviço contínuo que acompanha o paciente do início ao final do
          tratamento.
        </span>
        <p className="mb-3 mt-12 text-xl">Entre em contato:</p>
        <BaseSelect
          color="default"
          labelPlacement="outside"
          labelColor="darkGray"
          noBorder
          defaultSelectedKey="1"
          endContent={<ArrowDownIcon color="text-primary" />}
          className="h-[54px] w-full rounded-[35px] border border-darkGray bg-white px-5 py-[10px] text-darkGray md:w-2/5 lg:w-[70%]"
          options={[
            { key: "1", value: "SP", label: "SP" },
            { key: "2", value: "RJ", label: "RJ" },
          ]}
        />
      </div>

      <BaseSwiper<UnitCardProps>
        data={unitsData}
        renderItem={(unit) => (
          <UnitsCard
            id={unit.id}
            address={unit.address}
            src={unit.image}
            complement={unit.complement}
            unitName={unit.unitName}
            city={unit.city}
            hours={unit.hours}
          />
        )}
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
        className="lg:w-3/5"
      />
    </div>
  );
};

export default ServicesLocations;
