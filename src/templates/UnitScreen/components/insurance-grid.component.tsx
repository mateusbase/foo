import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";

const InsuranceGrid = (): JSX.Element => {
  const insurances = [
    "Amil Assistência Médica",
    "Assim Saúde",
    "Bradesco Seguros",
    "Central Nacional Unimed",
    "(CNU) NotreDame Intermédica",
    "Prevent Sênior São Francisco",
    "Assim Saúde",
    "Central Nacional Unimed",
    "(CNU) NotreDame Intermédica",
    "Amil Assistência Médica",
    "Assim Saúde",
    "Central Nacional Unimed",
    "Bradesco Seguros",
    "Prevent Sênior São Francisco",
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
        {insurances.map((insurance, index) => (
          <div
            key={index}
            className="flex items-center"
            style={{ fontSize: "20px", color: "#5C5C5C" }}
          >
            {insurance}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceGrid;
