import { CardDoctor } from "@/components/CardDoctors";
import { Input, Button } from "@nextui-org/react";
import { Search, Plus } from "lucide-react";

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
      <div className="mt-32 flex items-center justify-between">
        <h2 className="text-[42px] font-bold leading-[50px] text-primary">
          Corpo Clínico
        </h2>

        <div className="flex gap-5">
          <Input
            placeholder="Especialidade"
            size="lg"
            radius="full"
            variant="bordered"
            endContent={<Search className="text-2xl text-default-400" />}
            className="h-[50px] w-[280px]"
          />

          <Input
            placeholder="Buscar por nome ou CRM"
            size="lg"
            radius="full"
            variant="bordered"
            endContent={<Search className="text-2xl text-default-400" />}
            className="h-[50px] w-[280px]"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-between gap-5">
        {doctors.map((doctor) => (
          <CardDoctor key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <Button
        color="primary"
        variant="bordered"
        radius="sm"
        startContent={<Plus />}
        className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-primary"
      >
        Ver todos
      </Button>
    </div>
  );
};

export default ClinicalBody;
