import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import unitiesInformation from "../../unitiesInformation";

const VaccineLocations = (): JSX.Element => {
  const [selectedLocation, setSelectedLocation] = useState("Paraná");

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
    <div className="mb-8 mt-2 flex w-full flex-col md:mt-12 lg:mt-28">
      <div className="flex w-full flex-col items-center md:flex-row md:gap-3">
        <h1 className="mb-4 text-wrap text-center font-lato-bold text-2xl leading-relaxed text-primary md:mb-0 md:mr-4 md:w-[45%] md:text-left md:text-3xl lg:w-full lg:text-center lg:text-6xl">
          Consulte as vacinas oferecidas na sua cidade
        </h1>

        <BaseSelect
          color="primary"
          variant="bordered"
          label="Escolha seu Estado"
          labelPlacement="inside"
          labelColor="primary"
          radius="full"
          defaultSelectedKey="1"
          size="lg"
          className="w-[95%] max-w-md text-primary-foreground md:w-1/2 lg:hidden"
          borderStyle="border-primary"
          startContent={<RxHamburgerMenu size={20} className="text-primary" />}
          options={unitiesInformation.map((unity) => ({
            key: unity.id,
            value: unity.state,
            label: unity.state,
          }))}
          optionsColor="primary"
          onChange={(selectedValue: string | number) => {
            handleLocationChange(Number(selectedValue));
          }}
        />
      </div>

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
            <h3 className="my-4 mt-6 font-lato-bold text-2xl text-primary lg:text-4xl">
              {filteredLocationInfo.title}
            </h3>
            <p className="my-4 text-lg text-darkGray">
              {filteredLocationInfo.address}
            </p>

            <div className="grid grid-cols-1 gap-x-10 lg:h-auto lg:w-4/5 lg:grid-cols-2">
              {filteredLocationInfo.availableVaccines.map((vaccine) => (
                <div
                  className="mb-1 list-inside list-disc text-base text-darkGray"
                  key={vaccine}
                >
                  <li>{vaccine}</li>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VaccineLocations;
