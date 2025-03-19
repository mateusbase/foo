import BaseSwiper from "@/components/BaseSwiper";
import BaseSelect from "@/components/Select";
import { unitsData } from "@/templates/OcWomanScreen/data/unitsData";
import { UnitCardProps } from "@/templates/OcWomanScreen/interfaces";
import { ArrowDownIcon } from "lucide-react";
import UnitsCard from "@/templates/OcWomanScreen/components/UnitsCards";
import InfoSection from "@/components/ServicesLocation/components/InfoSection";

interface ServicesLocationsProps {
  title?: string;
  content?: string | string[];
}

const ServicesLocations = ({
  title,
  content,
}: ServicesLocationsProps): JSX.Element => {
  return (
    <div className="mb-10 flex w-full flex-col lg:h-[694px] lg:flex-row lg:gap-8">
      <InfoSection title={title} content={content || ""}>
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
      </InfoSection>

      <BaseSwiper<UnitCardProps>
        data={unitsData}
        renderItem={(unit) => (
          <UnitsCard
            id={unit.id}
            address={unit.address}
            complement={unit.complement}
            unitName={unit.unitName}
            city={unit.city}
            hours={unit.hours}
          />
        )}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
        className="lg:w-3/5"
      />
    </div>
  );
};

export default ServicesLocations;
