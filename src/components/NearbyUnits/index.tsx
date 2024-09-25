import UnitsCard from "./components/UnitsCard";
import { unitsData } from "./components/utils";
import BaseSelect from "../Select";
import BaseButton from "../Button";

export default function NearbyUnits(): JSX.Element {
  return (
    <main className="mt-10 flex flex-col gap-14 p-8">
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-extralight text-primary">
          Encontre uma unidade Oncoclínicas próxima a você
        </h1>

        <BaseSelect
          color="primary"
          variant="bordered"
          label="UF"
          className="max-w-[122px]"
          radius="full"
          options={[
            { key: 1, value: "1", label: "SP" },
            { key: 2, value: "2", label: "RJ" },
          ]}
        />

        <BaseSelect
          color="primary"
          variant="bordered"
          label="Cidade"
          className="max-w-xs"
          radius="full"
          options={[
            { key: 1, value: "1", label: "São Paulo" },
            { key: 2, value: "2", label: "Ibituruna" },
          ]}
        />

        <BaseButton color="primary" className="w-56 text-white">
          Buscar Unidades
        </BaseButton>
      </section>
      <section className="mb-10 flex justify-between">
        {unitsData.map((unit) => (
          <UnitsCard key={unit.id} {...unit} />
        ))}
      </section>
    </main>
  );
}
