import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import { Checkbox } from "@heroui/react";

export default function NominateOrPaticipate(): JSX.Element {
  return (
    <div className="w-full bg-gray-200 py-20">
      <div className="mx-auto max-w-screen-lg px-4 text-center lg:w-1/2">
        <h2 className="text-4xl font-bold text-primary">
          Pacientes, inscrevam-se. Médicos, indiquem um paciente. Utilize o
          formulário abaixo para ambos os casos.
        </h2>

        <div className="mt-10 space-y-6">
          <BaseSelect
            // color="primary"
            variant="bordered"
            label="Paciente"
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

          <div className="flex items-start">
            <Checkbox defaultSelected className="-mt-1" radius="full" size="sm">
              {" "}
            </Checkbox>
            <p className="leading-5">
              Ao disparar este formulário, seus dados pessoais estarão sendo
              compartilhados com terceiros, conforme Lei Geral de Proteção de
              Dados n 13.709/2018, faz-se necessário que você tenha ciência
              deste compartilhamento e o autorize. Seus dados não serão, em
              nenhum momento tornados públicos pelo profissional que o receber,
              a finalidade deste compartilhamento é apenas para possibilitar que
              a coordenação de pesquisa consiga informações para entrar em
              contato com o(a) senhor(a) para melhor entender sua história e de
              sua doença e verificar se temos alguma alternativa de tratamento
              através de alguma pesquisa para o(a) senhor(a).
            </p>
          </div>

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
