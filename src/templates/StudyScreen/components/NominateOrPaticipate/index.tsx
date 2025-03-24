import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import { DateInput, Radio, RadioGroup } from "@heroui/react";
import { useEffect, useState } from "react";
import PhoneInput from "@/components/PhoneInput";

interface NominateOrPaticipateProps {
  location: string;
  studyName: string;
}

export default function NominateOrPaticipate({
  location,
  studyName,
}: NominateOrPaticipateProps): JSX.Element {
  const [selected, setSelected] = useState("0");

  const toggleRadio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.target.value);
  };

  const [maxWidth, setMaxWidth] = useState<string>("100vw");

  useEffect(() => {
    const updateWidth = (): void => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setMaxWidth(`calc(100vw - ${scrollbarWidth}px)`);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div
      className="relative left-1/2 w-screen max-w-none -translate-x-1/2 bg-gray-200 py-20"
      style={{ maxWidth }}
    >
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

          <PhoneInput className="rounded-full border border-darkGray bg-white" />

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
