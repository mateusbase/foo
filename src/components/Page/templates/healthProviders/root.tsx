import PageLayout from "@/components/PageLayout";
import AlertComponent from "@/components/Blocks/Alert";
import { Button } from "@/components/Button";
import BaseSelect from "@/components/Select";
import { useState } from "react";
import { HealthProvidersRootProps } from "./types";
import CardSwiper from "./components/CardSwiper";

export function HealthProvidersRoot({
  data,
  breadcrumbs,
}: HealthProvidersRootProps): JSX.Element {
  const { alert, unitActions, units } = data;

  const { title, icon, description } = alert;

  const { actionButtonText, infoButtonText } = unitActions;

  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [filteredUnits, setFilteredUnits] = useState(units);

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

  const handleSearch = (): void => {
    let result = units;

    if (selectedState) {
      result = result.filter(
        (unit) =>
          unit.address.state.toLowerCase() === selectedState.toLowerCase(),
      );
    }

    if (selectedCity) {
      result = result.filter(
        (unit) =>
          unit.address.city.toLowerCase() === selectedCity.toLowerCase(),
      );
    }

    setFilteredUnits(result);
  };

  return (
    <PageLayout
      title={data.header.title}
      subtitle={data.header.description}
      breadcrumbs={breadcrumbs}
    >
      <AlertComponent description={description} icon={icon} title={title} />

      <div className="my-10 flex flex-col items-center gap-4 lg:flex-row lg:items-center">
        <BaseSelect
          className="w-full border-primary text-primary lg:max-w-[255px]"
          placeholder="Convênio"
          options={[
            { value: "1", label: "Unimed" },
            { value: "2", label: "Sul América Saúde" },
          ]}
        />

        <BaseSelect
          className="w-full border-primary text-primary lg:max-w-[160px]"
          placeholder="UF"
          onChange={(option) => setSelectedState(option || "")}
          options={stateArrays.map((state) => ({
            value: state.value,
            label: state.label,
          }))}
        />

        <BaseSelect
          className="w-full border-primary text-primary lg:max-w-[255px]"
          placeholder="Cidade"
          onChange={(option) => setSelectedCity(option || "")}
          options={cityArrays.map((city) => ({
            value: city.value,
            label: city.label,
          }))}
        />

        <Button
          size="md"
          className="w-full text-lg text-white lg:w-[239px]"
          onClick={handleSearch}
        >
          <span>Buscar</span>
        </Button>
      </div>

      <span className="mb-10 flex text-xl font-normal text-darkGray">
        Sua pesquisa encontrou
        <span className="mx-2 font-bold text-primary">
          {(units && units.length === 1) || units?.length !== 0
            ? `${units.length} unidade`
            : `${units.length} unidades`}
        </span>
      </span>

      <CardSwiper
        actionButtonText={actionButtonText}
        infoButtonText={infoButtonText}
        units={filteredUnits || []}
      />

      <div className="mb-10">
        <AlertComponent description={description} icon={icon} title={title} />
      </div>
    </PageLayout>
  );
}
