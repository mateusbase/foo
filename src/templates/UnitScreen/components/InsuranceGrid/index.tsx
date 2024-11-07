import { SearchIcon } from "@/components/Icons";
import BaseInput from "@/components/Input";
import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";

const InsuranceGrid = (): JSX.Element => {
  const insurances = [
    { id: 1, name: "Amil Assistência Médica" },
    { id: 2, name: "Assim Saúde" },
    { id: 3, name: "Bradesco Seguros" },
    { id: 4, name: "Central Nacional Unimed" },
    { id: 5, name: "(CNU) NotreDame Intermédica" },
    { id: 6, name: "Prevent Sênior São Francisco" },
    { id: 7, name: "Assim Saúde" },
    { id: 8, name: "Central Nacional Unimed" },
    { id: 9, name: "(CNU) NotreDame Intermédica" },
    { id: 10, name: "Amil Assistência Médica" },
    { id: 11, name: "Assim Saúde" },
    { id: 12, name: "Central Nacional Unimed" },
    { id: 13, name: "Bradesco Seguros" },
    { id: 14, name: "Prevent Sênior São Francisco" },
  ];

  return (
    <div>
      <div className="mt-20 flex flex-col justify-between gap-6 md:mt-32 md:flex-row">
        <h2 className="text-2xl font-extralight text-primary md:text-3xl md:font-bold md:leading-[50px]">
          Convênios atendidos nesta unidade
        </h2>

        <div className="flex h-[50px] w-full md:w-[350px]">
          <BaseInput
            color="primary"
            placeholder="Buscar convênio"
            size="lg"
            radius="full"
            variant="bordered"
            className="h-[50px] w-full md:w-[350px]"
            endContent={<SearchIcon className="text-primary" />}
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 text-base font-bold text-darkGray sm:grid-cols-2 lg:grid-cols-3">
        {insurances.map((insurance) => (
          <div key={insurance.id} className="flex items-center">
            {insurance.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceGrid;
