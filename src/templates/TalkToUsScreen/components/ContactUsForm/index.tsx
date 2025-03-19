import BaseButton from "@/components/Button";
import EmailInput from "@/components/EmailInput";
import BaseInput from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";
import BaseRadio from "@/components/Radio";
import BaseSelect from "@/components/Select";
import { FormValues, useValidation } from "@/hooks/useValidation";
import { RadioGroup, Textarea } from "@heroui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactUsForm(): JSX.Element {
  const [fileName, setFileName] = useState<string>("");
  const [topicSelected, setTopicSelected] = useState<string | number>();
  const [isPatient, setIsPatient] = useState<string>("");
  const [shouldReturn, setShouldReturn] = useState<string>("");

  const resolve = useValidation({ validateEmail: true });

  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolve,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div className="w-full space-y-6 lg:mt-2">
      <div className="flex">
        <RadioGroup
          label="Você é paciente da Oncoclínicas?"
          orientation="horizontal"
          value={isPatient}
          onValueChange={setIsPatient}
          classNames={{
            label: "text-lg font-bold mb-2",
          }}
        >
          <BaseRadio className="mr-2" value="yes" size="md">
            Sim
          </BaseRadio>
          <BaseRadio value="no" size="md">
            Não
          </BaseRadio>
        </RadioGroup>
      </div>

      <BaseInput
        className=""
        placeholder="Nome"
        register={register}
        name="name"
        error={errors.name?.message}
      />

      <div className="flex flex-col gap-6 md:flex-row lg:flex-row">
        <EmailInput />

        <PhoneInput />
      </div>

      <div className="flex flex-col gap-6 md:flex-row lg:flex-row">
        <BaseSelect
          variant="bordered"
          color="default"
          label="Selecione o estado"
          className="w-full"
          radius="full"
          size="sm"
          options={[
            { key: 1, value: "1", label: "SP" },
            { key: 2, value: "2", label: "RJ" },
          ]}
        />

        <BaseSelect
          variant="bordered"
          color="default"
          label="Selecione a cidade"
          className="w-full"
          radius="full"
          size="sm"
          options={[
            { key: 1, value: "1", label: "São Paulo" },
            { key: 2, value: "2", label: "Rio de Janeiro" },
          ]}
        />
      </div>

      <BaseSelect
        variant="bordered"
        color="default"
        label="Selecione a unidade"
        className="w-full"
        radius="full"
        size="sm"
        options={[
          { key: 1, value: "1", label: "Onco RJ" },
          { key: 2, value: "2", label: "Onco SP" },
        ]}
      />

      <BaseSelect
        variant="bordered"
        color="default"
        label="Selecione o assunto"
        className="w-full"
        radius="full"
        size="sm"
        onChange={setTopicSelected}
        options={[
          { key: 1, value: "1", label: "Reclamação" },
          { key: 2, value: "2", label: "Elogio" },
        ]}
      />

      {topicSelected === "1" && (
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex lg:w-1/2">
            <RadioGroup
              label="Deseja receber retorno de sua manifestação?"
              orientation="horizontal"
              value={shouldReturn}
              onValueChange={setShouldReturn}
              classNames={{
                label: "text-base font-bold mb-2",
              }}
            >
              <BaseRadio value="yes" size="md">
                Sim
              </BaseRadio>
              <BaseRadio value="no" size="md">
                Não
              </BaseRadio>
            </RadioGroup>
          </div>
          <div className="flex lg:w-1/2">
            <BaseInput
              placeholder="Digite o seu nome completo"
              className="text-base font-bold"
            />
          </div>
        </div>
      )}

      <div className="relative flex w-full flex-col">
        <BaseInput
          placeholder="Anexar arquivo (jpg, jpeg, png, pdf, doc, docx)"
          value={fileName}
        />

        <input
          id="file-upload"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={handleFileChange}
        />
      </div>

      <Textarea
        label="Mensagem"
        variant="bordered"
        className="h-[250px] w-full overflow-hidden bg-white"
        style={{ height: "250px" }}
        size="lg"
      />
      <div className="flex justify-center">
        <BaseButton
          className="w-full text-white md:w-80"
          color="primary"
          variant="solid"
        >
          Enviar
        </BaseButton>
      </div>
    </div>
  );
}
