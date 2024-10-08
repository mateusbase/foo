import { CardDoctor } from "@/components/CardDoctors";
import { SearchIcon } from "@/components/Icons";
import { Input, Button } from "@nextui-org/react";
import { Plus } from "lucide-react";

const ClinicalBody = (): JSX.Element => {
  const doctors = [
    {
      id: 1,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/medico-alegre-um-rosto-feliz-na-profissao-medica-isolado-em-um-fundo-branco_94628-20220.jpg?w=1800",
    },
    {
      id: 2,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/a-presenca-iluminadora-da-enfermeira-isolada-em-um-fundo-branco-ai-generativo_94628-9638.jpg?w=1800",
    },
    {
      id: 3,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
  ];

  return (
    <div>
      <div className="mt-20 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-32">
        <h2 className="text-2xl font-extralight text-primary md:text-3xl md:leading-[50px]">
          Corpo Clínico
        </h2>

        <div className="flex flex-col gap-5 sm:flex-row">
          <Input
            placeholder="Especialidade"
            size="lg"
            radius="full"
            variant="bordered"
            endContent={<SearchIcon className="text-default" />}
            className="w-full sm:w-[280px]"
          />

          <Input
            placeholder="Buscar por nome ou CRM"
            size="lg"
            radius="full"
            variant="bordered"
            endContent={<SearchIcon className="text-default" />}
            className="w-full sm:w-[280px]"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <CardDoctor key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <Button
        color="primary"
        variant="bordered"
        radius="sm"
        startContent={<Plus />}
        className="mt-8 h-[50px] w-full pl-3 text-left text-[18px] font-black leading-[22px] text-primary sm:w-[176px]"
      >
        Ver todos
      </Button>
    </div>
  );
};

export default ClinicalBody;
