import UnitsCard from "./components/UnitsCard";
import { unitsData } from "./components/utils";
import BaseSelect from "../Select";
import BaseButton from "../Button";

export default function NearbyUnits(): JSX.Element {
  return (
    <main className="mt-10 flex flex-col gap-14 p-8">
      <section className="flex items-center justify-between gap-5">
        <div className="w-full">
          <h1 className="text-3xl font-light text-primary">
            Encontre uma unidade Oncoclínicas próxima a você
          </h1>
        </div>

        <div className="flex w-full justify-end gap-4">
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

          <BaseButton color="primary" className="w-40 min-w-36 text-white">
            Buscar Unidades
          </BaseButton>
        </div>
      </section>

      <section className="mx-auto my-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {unitsData.map((unit) => (
          <UnitsCard key={unit.id} {...unit} />
        ))}
      </section>
    </main>
  );
}
