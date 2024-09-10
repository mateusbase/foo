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
        <h2 className="text-[42px] font-bold leading-[50px] text-[#007D77]">
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

      <div className="mt-10 flex justify-between">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex h-[552px] w-[352px] flex-col items-start rounded-bl-[30px] border border-[#707070]"
          >
            <img
              src={doctor.imgSrc}
              alt={`Foto de ${doctor.name}`}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-[24px] font-bold text-[#007D77]">
                {doctor.name}
              </h3>
              <p className="mt-1 font-bold text-gray-600">CRM: {doctor.crm}</p>
              <p className="mt-2 text-gray-600">{doctor.specialty}</p>
              <p className="mt-4 font-bold text-[#007D77]">RQE</p>
              <p className="mt-1 text-gray-600">{doctor.rqe}</p>
              <p className="mt-4 font-bold text-[#007D77]">
                Local de Atendimento
              </p>
              <p className="mt-1 text-gray-600">{doctor.location}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        color="primary"
        variant="bordered"
        radius="sm"
        startContent={<Plus />}
        className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-[#007D77]"
      >
        Ver todos
      </Button>
    </div>
  );
};

export default ClinicalBody;
