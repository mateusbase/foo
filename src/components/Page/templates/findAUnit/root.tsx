import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import LocationIcon from "@/components/Icons/LocationIcon";
import { useState } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useLocationContext } from "@/contexts/LocationContext";
import { FindAUnitsRootProps } from "./type";
import UnitsCard from "./components/UnitsCards";

export function FindAUnitsRoot({
  data,
  breadcrumbs,
}: FindAUnitsRootProps): JSX.Element {
  const deviceType = useDeviceType();
  const { state: userState } = useLocationContext();

  const { search, unitActions, units } = data;

  const stateArrays = Array.from(
    new Set(data.units.map((unit) => unit.address.state)),
  ).map((stateCode) => ({
    value: stateCode.toLowerCase(),
    label: stateCode,
  }));

  const cityArrays = Array.from(
    new Set(data.units.map((unit) => unit.address.city)),
  ).map((city) => ({
    value: city.toLowerCase(),
    label: city,
  }));

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [unitName, setUnitName] = useState("");
  const [locationError, setLocationError] = useState<string | null>(null);
  const [appliedFilters, setAppliedFilters] = useState({
    state: "",
    city: "",
    name: "",
  });

  const numberOfVisibleCards = deviceType === "desktop" ? 6 : 3;

  const [visibleCount, setVisibleCount] = useState(numberOfVisibleCards);

  const handleLoadMore = (): void => {
    setVisibleCount((prevCount) => prevCount + numberOfVisibleCards);
  };

  const handleFilterChange = (): void => {
    setAppliedFilters({
      state: selectedState,
      city: selectedCity,
      name: unitName,
    });
  };

  const handleLocationClick = (): void => {
    if (!userState) {
      setLocationError(
        "Ative sua localização para encontrar unidades mais próximas.",
      );
      return;
    }

    const alreadyExists = stateArrays.some((item) => item.value === userState);

    if (!alreadyExists) {
      setSelectedState(userState);
      setSelectedCity("");
    }

    setLocationError(null);

    setAppliedFilters({
      state: userState,
      city: "",
      name: "",
    });
  };

  const filteredUnits = units?.filter(
    (unit) =>
      (!appliedFilters.state || unit.address.state === appliedFilters.state) &&
      (!appliedFilters.city || unit.address.city === appliedFilters.city) &&
      (!appliedFilters.name ||
        unit.name.toLowerCase().includes(appliedFilters.name.toLowerCase())),
  );

  return (
    <main>
      <PageLayout
        title={data.header.title}
        subtitle={data.header.description}
        breadcrumbs={breadcrumbs}
      >
        <h1 className="mt-10 hidden text-4xl leading-[48px] text-primary md:block lg:mt-0">
          {search.title}
        </h1>

        <div className="mt-8 flex flex-col gap-5 md:mt-14 md:flex-col lg:mt-8 lg:flex-row lg:items-center lg:justify-center">
          <div className="w-full md:flex md:flex-row">
            <div className="mb-4 mr-4 w-full md:mb-0 md:w-1/3">
              <BaseSelect
                placeholder="UF"
                className="w-full border-primary text-primary lg:max-w-[300px]"
                options={stateArrays.map((state) => ({
                  value: state.value,
                  label: state.label,
                }))}
                onChange={(option) => setSelectedState(option || "")}
              />
            </div>

            <div className="w-full md:w-2/3 lg:max-w-xs">
              <BaseSelect
                placeholder="Cidade"
                className="w-full border-primary text-primary lg:max-w-xs"
                options={cityArrays.map((city) => ({
                  value: city.value,
                  label: city.label,
                }))}
                onChange={(option) => setSelectedCity(option || "")}
              />
            </div>
          </div>

          <BaseInput
            placeholder="Nome da unidade"
            size="lg"
            className="border-primary text-primary placeholder:text-primary"
            onChange={(e) => setUnitName(e.target.value)}
          />

          <div className="flex w-full flex-col items-center gap-4 md:flex-row lg:flex-row lg:gap-4">
            <Button
              className="w-full font-normal text-white lg:w-[322px]"
              onClick={handleFilterChange}
            >
              {search.searchButtonText}
            </Button>

            <Button
              className="w-full font-normal lg:w-auto"
              variant="outlined"
              onClick={handleLocationClick}
            >
              <LocationIcon className="size-7 shrink-0" />
              {search.locationButtonText}
            </Button>
          </div>

          {locationError && (
            <span className="text-md mt-4 font-normal leading-[26px] text-red-600 lg:flex">
              {locationError}
            </span>
          )}
        </div>

        <span className="mt-8 flex text-xl font-normal leading-[26px] text-darkGray">
          Sua pesquisa encontrou
          <span className="mx-2 font-bold text-primary">
            {filteredUnits && filteredUnits.length === 1
              ? `${filteredUnits.length} unidade`
              : `${filteredUnits.length} unidades`}
          </span>
        </span>

        <div className="mx-auto my-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredUnits
            ?.slice(0, visibleCount)
            .map((unit) => (
              <UnitsCard
                key={unit.id}
                {...unit}
                actionButtonText={unitActions.actionButtonText}
                infoButtonText={unitActions.infoButtonText}
                isSmallCard
              />
            ))}
        </div>

        {filteredUnits.length > 1 && (
          <div className="mb-10 flex justify-center lg:hidden">
            <Button
              variant="outlined"
              className="border-1 w-full rounded-md border border-primary md:w-36"
              onClick={handleLoadMore}
            >
              [+] Ver mais
            </Button>
          </div>
        )}
      </PageLayout>
    </main>
  );
}
