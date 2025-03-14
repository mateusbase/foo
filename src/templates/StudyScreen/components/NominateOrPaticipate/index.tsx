import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import { DateInput, Radio, RadioGroup } from "@heroui/react";
import { useState } from "react";
import { format } from "@react-input/mask";

interface NominateOrPaticipateProps {
  location: string;
  studyName: string;
}

export default function NominateOrPaticipate({
  location,
  studyName,
}: NominateOrPaticipateProps): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selected, setSelected] = useState("0");

  const toggleRadio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const rawValue = value.replace(/\D/g, "");
    if (rawValue.length > 11) return;

    const dynamicMask =
      rawValue.length > 10 ? "(__) _____-____" : "(__) ____-____";
    const formattedValue = format(rawValue, {
      mask: dynamicMask,
      replacement: { _: /\d/ },
    });

    setPhoneNumber(formattedValue);
  };

  const handleBlur = async (): Promise<void> => {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, "");

    const dynamicMask =
      rawPhoneNumber.length > 10 ? "(__) _____-____" : "(__) ____-____";
    const formattedPhone = format(rawPhoneNumber, {
      mask: dynamicMask,
      replacement: { _: /\d/ },
    });

    setPhoneNumber(formattedPhone);
  };

  return (
    <div className="w-full bg-gray-200 py-20">
      <div className="mx-auto max-w-screen-lg px-4 text-center lg:w-1/2">
        <h2 className="text-4xl font-bold text-primary">
          Pacientes, inscrevam-se. Médicos, indiquem um paciente. Utilize o
          formulário abaixo para ambos os casos.
        </h2>

        <div className="mt-10 space-y-6">
          <BaseSelect
            variant="bordered"
            labelColor="lightGray"
            label="Você é:"
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

          <DateInput
            label="Data de nascimento"
            size="lg"
            radius="full"
            variant="bordered"
            classNames={{
              inputWrapper:
                "w-full rounded-full border border-darkGray bg-white text-left",
            }}
            errorMessage="Data inválida"
          />

          <BaseInput
            placeholder="Telefone"
            size="lg"
            radius="full"
            variant="bordered"
            value={phoneNumber}
            onBlur={handleBlur}
            onChange={handleChange}
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
            size="lg"
            radius="full"
            value={studyName}
            disabled
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <BaseInput
            placeholder="Localidade do estudo"
            value={location}
            disabled
            size="lg"
            radius="full"
            variant="bordered"
            className="w-full overflow-hidden rounded-full border-1 border-darkGray bg-white"
          />

          <RadioGroup
            name="lgpdConsent"
            defaultValue="0"
            value={selected}
            onChange={toggleRadio}
          >
            <div className="flex items-start">
              <Radio value="1" size="md" className="-mt-1" />
              <p className="text-xs leading-5 md:text-[15px]">
                Ao disparar este formulário, seus dados pessoais estarão sendo
                compartilhados com terceiros, conforme Lei Geral de Proteção de
                Dados n 13.709/2018. Faz-se necessário que você tenha ciência
                deste compartilhamento e o autorize. Seus dados não serão, em
                nenhum momento, tornados públicos pelo profissional que o
                receber. A finalidade deste compartilhamento é apenas para
                possibilitar que a coordenação de pesquisa consiga informações
                para entrar em contato com o(a) senhor(a) para melhor entender
                sua história e de sua doença e verificar se temos alguma
                alternativa de tratamento através de alguma pesquisa para o(a)
                senhor(a).
              </p>
            </div>
          </RadioGroup>

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
