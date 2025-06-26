import BaseSelect from "@/components/Select";
import BaseInput from "@/components/Input";
import { Button } from "@/components/Button";
import LocationIcon from "@/components/Icons/LocationIcon";
import { useLocationContext } from "@/contexts/LocationContext";
import { useEffect, useState } from "react";

interface DoctorSearchFiltersProps {
  search?: {
    title: string;
    searchButtonText: string;
    locationButtonText: string;
  };
  stateArrays: Array<{ value: string; label: string }>;
  unityArrays: Array<{ value: string; label: string }>;
  specialtyArrays: Array<{
    value: string;
    label: string;
  }>;
  values: {
    state: string;
    unit: string;
    specialty: string;
    query: string;
  };
  onChange: (values: DoctorSearchFiltersProps["values"]) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  doctorsLength?: number;
  hasSearched?: boolean;
}

export function DoctorSearchFilters({
  search,
  stateArrays,
  unityArrays,
  specialtyArrays,
  values,
  onChange,
  onSubmit,
  isLoading,
  doctorsLength,
  hasSearched,
}: DoctorSearchFiltersProps): JSX.Element {
  const { state: userState } = useLocationContext();

  const count = doctorsLength ?? 0;

  const [localStateArrays, setLocalStateArrays] = useState(stateArrays);

  const [autoSubmit, setAutoSubmit] = useState(false);

  const [locationError, setLocationError] = useState<string | null>(null);

  const handleLocationClick = (): void => {
    if (!userState) {
      setLocationError(
        "Ative sua localização para encontrar médicos mais próximos.",
      );

      return;
    }

    const alreadyExists = localStateArrays.some(
      (item) => item.value === userState,
    );

    if (!alreadyExists) {
      setLocalStateArrays((prev) => [
        ...prev,
        { value: userState, label: userState },
      ]);
    }

    onChange({ ...values, state: userState });

    setAutoSubmit(true);
  };

  useEffect(() => {
    if (autoSubmit && values.state === userState) {
      onSubmit();
      setAutoSubmit(false);
    }
  }, [values.state, autoSubmit, userState, onSubmit]);

  return (
    <>
      <h1 className="mt-5 hidden text-4xl leading-[48px] text-primary md:block lg:mt-0">
        {search?.title}
      </h1>

      <div className="mt-10 flex flex-col gap-5 md:mt-10 lg:w-full lg:flex-row lg:items-start lg:gap-2">
        <div className="flex flex-col gap-5 md:flex md:flex-row lg:w-1/5 lg:gap-3">
          <BaseSelect
            placeholder="UF"
            className="w-full border-primary text-primary md:w-1/3 lg:w-[100px]"
            options={localStateArrays}
            value={values.state}
            onChange={(state) => onChange({ ...values, state })}
          />

          <BaseSelect
            placeholder="Unidade"
            className="w-full border-primary text-primary md:w-2/3 lg:w-[200px]"
            options={unityArrays}
            value={values.unit}
            onChange={(unit) => onChange({ ...values, unit })}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex md:flex-row lg:flex-1 lg:gap-3">
          <BaseSelect
            placeholder="Especialidade"
            className="w-full border-primary text-primary md:w-2/3"
            options={specialtyArrays}
            value={values.specialty}
            onChange={(specialty) => onChange({ ...values, specialty })}
          />

          <BaseInput
            placeholder="Nome ou CRM"
            value={values.query}
            className="border-primary text-primary placeholder:text-primary"
            onChange={(e) => onChange({ ...values, query: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-4 md:flex md:flex-row lg:flex-1">
          <Button
            color="primary"
            className="w-full text-white lg:flex-1"
            onClick={onSubmit}
            loading={isLoading}
          >
            {search?.searchButtonText}
          </Button>

          <Button
            className="w-full font-bold lg:flex-1 lg:px-12"
            variant="outlined"
            onClick={handleLocationClick}
          >
            <LocationIcon className="size-7 shrink-0" />

            <span>{search?.locationButtonText}</span>
          </Button>
        </div>
      </div>

      {hasSearched && count ? (
        <span className="mt-10 text-[20px] font-normal leading-[26px] text-darkGray lg:flex">
          Sua pesquisa encontrou&nbsp;
          <span className="text-primary">
            {count} {count === 1 ? "médico" : "médicos"}
          </span>
        </span>
      ) : (
        <span className="mb-40 mt-10 text-[20px] font-normal leading-[26px] text-darkGray lg:flex">
          Busque um médico através do nome do profissional, especialidade ou
          local.
        </span>
      )}

      {locationError && (
        <span className="text-md mt-4 font-normal leading-[26px] text-red-600 lg:flex">
          {locationError}
        </span>
      )}
    </>
  );
}
