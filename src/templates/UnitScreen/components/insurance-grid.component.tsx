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
      <div className="mt-32 flex items-center justify-between pt-2">
        <h2
          className="font-bold"
          style={{ fontSize: "42px", lineHeight: "50px", color: "#007D77" }}
        >
          Convênios atendidos nesta unidade
        </h2>

        <Input
          placeholder="Buscar convênio"
          size="lg"
          radius="full"
          variant="bordered"
          endContent={<Search className="text-2xl text-default-400" />}
          className="h-[50px] w-[280px]"
        />
      </div>

      <div className="mt-20 grid grid-cols-1 gap-x-20 gap-y-4 font-bold sm:grid-cols-2 lg:grid-cols-3">
        {insurances.map((insurance) => (
          <div
            key={insurance.id}
            className="flex items-center"
            style={{ fontSize: "20px", color: "#5C5C5C" }}
          >
            {insurance.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceGrid;
