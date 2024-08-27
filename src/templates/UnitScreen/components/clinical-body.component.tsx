import { Input, Button } from "@nextui-org/react";
import { Search, Plus } from "lucide-react";

const ClinicalBody = () => {
  const doctors = [
    {
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/medico-alegre-um-rosto-feliz-na-profissao-medica-isolado-em-um-fundo-branco_94628-20220.jpg?w=1800",
    },
    {
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/a-presenca-iluminadora-da-enfermeira-isolada-em-um-fundo-branco-ai-generativo_94628-9638.jpg?w=1800",
    },
    {
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
      <div className="flex justify-between items-center mt-32">
        <h2 className="font-bold text-[#007D77] text-[42px] leading-[50px]">
          Corpo Clínico
        </h2>

        <div className="flex gap-5">
          <Input
            placeholder="Especialidade"
            size="lg"
            radius="full"
            variant="bordered"
            endContent={<Search className="text-2xl text-default-400" />}
            className="w-[280px] h-[50px]"
          />

          <Input
            placeholder="Buscar por nome ou CRM"
            size="lg"
            radius="full"
            variant="bordered"
            endContent={<Search className="text-2xl text-default-400" />}
            className="w-[280px] h-[50px]"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="w-[352px] h-[552px] border border-[#707070] rounded-bl-[30px] flex flex-col items-start"
          >
            <img
              src={doctor.imgSrc}
              alt={`Foto de ${doctor.name}`}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-[24px] text-[#007D77]">
                {doctor.name}
              </h3>
              <p className="font-bold text-gray-600 mt-1">CRM: {doctor.crm}</p>
              <p className="text-gray-600 mt-2">{doctor.specialty}</p>
              <p className="mt-4 font-bold text-[#007D77]">RQE</p>
              <p className="text-gray-600 mt-1">{doctor.rqe}</p>
              <p className="mt-4 font-bold text-[#007D77]">Local de Atendimento</p>
              <p className="text-gray-600 mt-1">{doctor.location}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        color="primary"
        variant="bordered"
        radius="sm"
        startContent={<Plus />}
        className="w-[176px] h-[50px] text-left font-black text-[18px] leading-[22px] text-[#007D77] pl-3 mt-8"
      >
        Ver todos
      </Button>
    </div>
  );
};

export default ClinicalBody;
