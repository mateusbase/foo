import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";

export default function NominateOrPaticipate(): JSX.Element {
  return (
    <div className="w-full bg-gray-200 py-20">
      <div className="mx-auto w-1/3 max-w-screen-lg px-4 text-center">
        <h2 className="text-4xl font-bold text-primary">
          Indique ou Participe
        </h2>

        <div className="mt-10 space-y-6">
          <BaseSelect
            // color="primary"
            variant="bordered"
            label="Você é medico ou paciente?"
            labelColor="lightGray"
            className="rounded-full border-1 border-darkGray bg-white"
            radius="full"
            options={[
              { key: 1, value: 1, label: "Paciente" },
              { key: 2, value: 2, label: "Médico" },
            ]}
          />

          <BaseInput
            placeholder="Nome completo"
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseInput
            placeholder="Data de nascimento"
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseInput
            placeholder="Telefone"
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseInput
            placeholder="Localidade"
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseInput
            placeholder="Tipo de câncer"
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseInput
            placeholder="Nome do estudo"
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseInput
            placeholder="Localidade do estudo"
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseButton
            className="w-[322px] font-bold text-white"
            color="primary"
            variant="solid"
          >
            Enviar
          </BaseButton>
        </div>
      </div>
    </div>
  );
}
