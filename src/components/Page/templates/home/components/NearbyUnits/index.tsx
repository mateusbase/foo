import { useState, useMemo } from "react";
import BaseSelect from "@/components/Select";
import { Button } from "@/components/Button";
import UnitsCard from "./components/UnitsCard";

interface NearbyUnitsProps {
  title: string;
  buttonText: string;
  actionButton: string;
  moreInfoButtonText: string;
  appointmentPath?: string;
  entries: Array<{
    id: string;
    path: string;
    name: string;
    address: {
      street: string;
      number: string;
      complement?: string;
      cep: string;
      city: string;
      state: string;
      latitude: string;
      longitude: string;
      mapLink: string;
    };
    workingHours?: Array<{
      day: string;
      hour: string;
    }>;
    segmentation: {
      ocUnit: boolean;
      ocpmUnit: boolean;
      isPartner: boolean;
      type: string;
    };
    physicianSpecialties?: string[];
  }>;
}

export default function NearbyUnits({
  title,
  buttonText,
  actionButton,
  moreInfoButtonText,
  entries,
  appointmentPath,
}: NearbyUnitsProps): JSX.Element {
  const [selectedUF, setSelectedUF] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const ufOptions = Array.from(
    new Set(entries.map((unit) => unit.address.state)),
  ).map((uf) => ({
    value: uf,
    label: uf,
  }));

  const cityOptions = Array.from(
    new Set(
      entries
        .filter((unit) =>
          selectedUF ? unit.address.state === selectedUF : true,
        )
        .map((unit) => unit.address.city),
    ),
  ).map((city) => ({
    value: city,
    label: city,
  }));

  const filteredEntries = useMemo(() => {
    return entries.filter((unit) => {
      const matchUF = selectedUF ? unit.address.state === selectedUF : true;

      const matchCity = selectedCity
        ? unit.address.city === selectedCity
        : true;

      return matchUF && matchCity;
    });
  }, [entries, selectedUF, selectedCity]);

  return (
    <main className="mt-10 flex flex-col gap-8 p-8">
      <section className="flex items-center justify-between gap-5">
        <div className="w-full">
          <h1 className="text-3xl font-light text-primary">{title}</h1>
        </div>

        <div className="flex w-full justify-end gap-4">
          <BaseSelect
            placeholder="UF"
            className="max-w-[122px] border-primary text-primary"
            size="lg"
            options={ufOptions}
            value={selectedUF}
            onChange={(value) => {
              setSelectedUF(value);
              setSelectedCity("");
            }}
          />

          <BaseSelect
            placeholder="Cidade"
            className="max-w-xs border-primary text-primary"
            size="lg"
            options={cityOptions}
            value={selectedCity}
            onChange={(value) => setSelectedCity(value)}
          />

          <Button className="w-40 min-w-36 text-white">{buttonText}</Button>
        </div>
      </section>

      <section className="mx-auto my-5 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {filteredEntries.map((unit, index) => (
          <UnitsCard
            key={unit.id}
            id={index}
            unitName={unit.name}
            address={`${unit.address.street}, ${unit.address.number}`}
            complement={unit.address.complement || ""}
            city={`${unit.address.city} - ${unit.address.state}`}
            day={unit.workingHours?.[0]?.day || ""}
            hours={unit.workingHours?.[0]?.hour || ""}
            specialties={unit.physicianSpecialties || []}
            path={unit.path}
            appointmentPath={appointmentPath || ""}
            segmentation={unit.segmentation}
            actionButton={actionButton}
            moreInfoButtonText={moreInfoButtonText}
          />
        ))}
      </section>
    </main>
  );
}
