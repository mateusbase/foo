import BaseButton from "@/components/Button";
import { CardDoctor } from "@/components/CardDoctors";
import { SearchIcon } from "@/components/Icons";
import BaseSelect from "@/components/Select";
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
        <h2 className="text-2xl font-normal text-primary md:text-3xl md:leading-[50px]">
          Corpo Clínico
        </h2>

        <div className="flex flex-col gap-5 sm:flex-row">
          <BaseSelect
            label="Especialidade"
            labelColor="primary"
            color="primary"
            radius="full"
            variant="bordered"
            className="w-full sm:w-[280px]"
            options={[
              { key: 1, value: "1", label: "Otorrino" },
              { key: 1, value: "2", label: "Cardiologista" },
            ]}
          />

          <BaseSelect
            label="Buscar por nome ou CRM"
            labelColor="primary"
            color="primary"
            radius="full"
            variant="bordered"
            className="w-full sm:w-[280px]"
            options={[
              { key: 1, value: "1", label: "" },
              { key: 1, value: "2", label: "" },
            ]}
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <CardDoctor key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <BaseButton
        color="primary"
        variant="bordered"
        className="mt-8 border-1 text-[18px] leading-[22px] text-primary sm:w-[176px] md:w-60"
      >
        [+] Ver todos
      </BaseButton>
    </div>
  );
};

export default ClinicalBody;
