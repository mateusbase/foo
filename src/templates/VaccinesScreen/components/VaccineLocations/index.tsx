import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import unitiesInformation from "../../unitiesInformation";

const VaccineLocations = (): JSX.Element => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (location: string | number): void => {
    if (typeof location === "string") {
      setSelectedLocation(location);
    } else {
      const selectedState = unitiesInformation.find(
        (unity) => unity.id === location,
      )?.state;
      if (selectedState) {
        setSelectedLocation(selectedState);
      }
    }
  };

  const filteredLocationInfo = unitiesInformation.find(
    (unity) => unity.state === selectedLocation,
  );

  return (
    <div className="mb-8 mt-2 flex w-full flex-col lg:mt-10">
      <h1 className="mb-4 text-center font-lato-bold text-2xl text-primary lg:text-title-xl">
        Consulte as vacinas oferecidas na sua cidade
      </h1>

      <BaseSelect
        color="primary"
        variant="bordered"
        label="Estado"
        labelPlacement="inside"
        radius="full"
        size="lg"
        className="w-[95%] max-w-md text-primary-foreground lg:hidden"
        borderStyle="border-primary"
        startContent={<RxHamburgerMenu size={20} className="text-primary" />}
        options={unitiesInformation.map((unity) => ({
          key: unity.id,
          value: unity.state,
          label: unity.state,
        }))}
        onChange={(selectedValue: string | number) => {
          handleLocationChange(Number(selectedValue));
        }}
      />

      <div className="flex flex-row justify-start">
        <div className="mr-20 mt-10 hidden w-[398px] items-start justify-start font-lato-regular text-white lg:block lg:text-sm">
          {unitiesInformation.map((unity) => (
            <MenuItem
              key={unity.id}
              isFirst={unity.id === 1}
              isLast={unity.id === unitiesInformation.length}
              id={unity.id}
              name={unity.state}
              isActive={selectedLocation === unity.state}
              onClick={() => handleLocationChange(unity.state)}
            />
          ))}
        </div>

        {filteredLocationInfo && (
          <div className="my-3 w-[90%] font-lato-regular">
            <h3 className="my-4 mt-6 font-lato-bold text-2xl text-primary">
              {filteredLocationInfo.title}
            </h3>
            <p className="my-4 text-lg text-darkGray">
              {filteredLocationInfo.address}
            </p>

            <div className="lg:max-h-[250px] lg:w-[70%] lg:columns-2 lg:gap-0">
              {filteredLocationInfo.availableVaccines.map((vaccine) => (
                <ul
                  className="mb-1 list-inside list-disc break-inside-avoid text-base text-darkGray"
                  key={vaccine}
                >
                  <li>{vaccine}</li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VaccineLocations;
