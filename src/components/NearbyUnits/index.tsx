import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import UnitsCard from "./components/UnitsCard";
import { unitsData } from "./components/utils";

export default function NearbyUnits(): JSX.Element {
  return (
    <main className="container mt-10 flex flex-col gap-14 p-8">
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-extralight text-primary">
          Encontre uma unidade Oncoclínicas próxima a você
        </h1>

        <Select
          color="primary"
          variant="bordered"
          label="UF"
          className="max-w-[122px]"
          radius="full"
        >
          <SelectItem key={1} value="1">
            SP
          </SelectItem>
          <SelectItem key={2} value="2">
            RJ
          </SelectItem>
        </Select>

        <Select
          color="primary"
          variant="bordered"
          label="Cidade"
          className="max-w-xs"
          radius="full"
        >
          <SelectItem key={1} value="1">
            São Paulo
          </SelectItem>
          <SelectItem key={2} value="2">
            Ibituruna
          </SelectItem>
        </Select>

        <Button color="primary" className="text-white">
          Buscar Unidades
        </Button>
      </section>

      <section className="mb-10 flex justify-between">
        {unitsData.map((unit) => (
          <UnitsCard key={unit.id} {...unit} />
        ))}
      </section>
    </main>
  );
}
