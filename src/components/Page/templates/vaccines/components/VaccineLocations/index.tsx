import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import { Unit } from "../../type";

const VaccineLocations = ({
  title,
  entries,
}: {
  title: string;
  entries: Unit[];
}): JSX.Element => {
  const [selectedLocation, setSelectedLocation] = useState("pr");

  const filteredLocationInfo = entries?.find(
    (unity) => unity.address.state.toLowerCase() === selectedLocation,
  );

  return (
    <div className="mb-8 mt-2 flex w-full flex-col md:mt-12 lg:mt-28">
      <div className="flex w-full flex-col items-center md:flex-row md:gap-20">
        <h1 className="mb-4 w-full text-center font-lato-bold text-3xl leading-relaxed text-primary md:mb-0 md:w-[45%] md:text-3xl lg:mx-auto lg:mb-7 lg:w-full lg:text-6xl">
          {title}
        </h1>

        <BaseSelect
          placeholder="Escolha seu Estado"
          value={selectedLocation}
          size="lg"
          className="w-[95%] max-w-md border-primary text-primary md:w-1/2 lg:hidden"
          onChange={setSelectedLocation}
          startContent={<RxHamburgerMenu size={20} className="text-primary" />}
          options={Array.from(
            new Set(entries.map((entry) => entry.address.state.toLowerCase())),
          ).map((state) => ({
            value: state,
            label: state.toUpperCase(),
            key: state,
          }))}
        />
      </div>

      <div className="flex flex-row justify-start">
        <div className="mr-10 mt-10 hidden w-1/4 items-start justify-start font-lato-regular text-white lg:block lg:text-sm">
          {Array.from(
            new Set(entries.map((entry) => entry.address.state.toLowerCase())),
          ).map((state, index, array) => (
            <MenuItem
              key={state}
              isFirst={index === 0}
              isLast={index === array.length - 1}
              id={state}
              name={state.toUpperCase()}
              isActive={selectedLocation === state}
              onClick={() => setSelectedLocation(state)}
            />
          ))}
        </div>

        <div className="my-3 font-lato-regular lg:w-2/3">
          {filteredLocationInfo && (
            <>
              <h3 className="my-4 mt-6 font-lato-bold text-2xl text-primary lg:text-4xl">
                {filteredLocationInfo.name}
              </h3>

              <p className="my-4 text-lg text-darkGray">
                {`${filteredLocationInfo.address.street}, ${filteredLocationInfo.address.number} - ${filteredLocationInfo.address.city} - ${filteredLocationInfo.address.state}`}
              </p>

              <div className="grid grid-cols-1 lg:w-3/4 lg:grid-cols-2 lg:gap-x-10">
                <ul className="list-outside list-disc space-y-1 pl-4">
                  {filteredLocationInfo.vaccines.length > 0 &&
                    filteredLocationInfo.vaccines
                      .slice(
                        0,
                        Math.ceil(filteredLocationInfo.vaccines.length / 2),
                      )
                      .map((vaccine) => (
                        <li
                          key={vaccine}
                          className="ml-4 text-base text-darkGray"
                        >
                          {vaccine}
                        </li>
                      ))}
                </ul>

                <ul className="list-outside list-disc space-y-1 pl-4">
                  {filteredLocationInfo.vaccines.length > 0 &&
                    filteredLocationInfo.vaccines
                      .slice(
                        Math.ceil(filteredLocationInfo.vaccines.length / 2),
                      )
                      .map((vaccine) => (
                        <li
                          key={vaccine}
                          className="ml-4 text-base text-darkGray"
                        >
                          {vaccine}
                        </li>
                      ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VaccineLocations;
