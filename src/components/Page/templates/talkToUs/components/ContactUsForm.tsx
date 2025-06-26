import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { FormValues, useValidation } from "@/hooks/useValidation";

import { RadioGroup, Radio } from "@/components/Radio";
import apiClient from "@/services/apiClient";
import { usePhoneMask } from "@/hooks/usePhoneMask";

interface ContactUsFormProps {
  units: Array<{
    id: string;
    name: string;
    address: {
      state: string;
    };
  }>;
}

export default function ContactUsForm({
  units,
}: ContactUsFormProps): JSX.Element {
  const { phoneNumber, setPhoneNumber, handlePhoneChange, handlePhoneBlur } =
    usePhoneMask();

  const [fileName, setFileName] = useState<string>("");

  const [topicSelected, setTopicSelected] = useState<string>();

  const [isPatient, setIsPatient] = useState<string>("");

  const [shouldReturn, setShouldReturn] = useState<string>("");

  const [selectedState, setSelectedState] = useState<string>("");

  const [selectedUnit, setSelectedUnit] = useState<string>("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [pacientName, setPacientName] = useState<string>("");

  const [fileKey, setFileKey] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const shouldShowPacientNameInput =
    topicSelected === "reclamações" && shouldReturn === "yes";

  const resolve = useValidation({
    validateEmail: true,
    requirePatientName: shouldShowPacientNameInput,
  });

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolve,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    setSelectedFile(file);

    try {
      const { data } = await apiClient.post("/api/uploads/upload-url", {
        contentType: file.type,
        size: file.size,
        name: file.name,
      });

      const { uploadURL, fileKey: receivedFileKey } = data;

      await fetch(uploadURL, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      setFileKey(receivedFileKey);
    } catch (err) {
      err;
    }
  };

  const onSubmit = async (): Promise<void> => {
    setIsLoading(true);

    const values = getValues();

    const payload = {
      name: values.name?.trim(),
      email: values.email?.trim(),
      phone: phoneNumber.replace(/\D/g, ""),
      state: selectedState || "",
      unit: selectedUnit || "",
      subject: topicSelected || "",
      isPatient: isPatient === "yes",
      requestsAnswer:
        topicSelected === "reclamações" ? shouldReturn === "yes" : undefined,
      message: values.message?.trim(),
      patientName: shouldShowPacientNameInput ? pacientName : undefined,
      file:
        fileKey && selectedFile
          ? {
              key: fileKey,
              name: fileName,
              type: selectedFile.type,
            }
          : undefined,
    };

    try {
      await apiClient.post("/api/pages/action", {
        kind: "CONTACT_US",
        action: "CONTACT_SUBMIT",
        payload,
      });

      reset();
      setPhoneNumber("");
      setFileName("");
      setSelectedFile(null);
      setFileKey("");
      setIsPatient("");
      setShouldReturn("");
      setSelectedState("");
      setSelectedUnit("");
      setTopicSelected("");
      setPacientName("");
      setSuccessMessage("Mensagem enviada com sucesso!");

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      err;
    }
  };

  const stateOptions = Array.from(
    new Set(units.map((unit) => unit.address.state)),
  ).map((state) => ({
    value: state,
    label: state,
  }));

  return (
    <form
      className="w-full space-y-6 lg:mt-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex pl-2">
        <RadioGroup
          label="Você é paciente da Oncoclínicas?"
          labelClassname="text-lg font-bold mb-2"
          orientation="horizontal"
          value={isPatient}
          onValueChange={setIsPatient}
        >
          <Radio value="yes">Sim</Radio>

          <Radio value="no">Não</Radio>
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
        <BaseInput
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <BaseInput
          placeholder="Telefone"
          name="phone"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          error={errors.phone?.message}
        />
      </div>

      <div className="flex flex-col gap-6 md:flex-row lg:flex-row">
        <BaseSelect
          placeholder="Selecione o estado"
          onChange={setSelectedState}
          value={selectedState}
          options={stateOptions}
        />

        <BaseSelect
          placeholder="Selecione a unidade"
          onChange={setSelectedUnit}
          value={selectedUnit}
          options={units.map((unit) => ({
            value: unit.id,
            label: unit.name,
          }))}
        />
      </div>

      <BaseSelect
        placeholder="Selecione o assunto"
        onChange={setTopicSelected}
        value={topicSelected}
        options={[
          { value: "exames", label: "Exames" },
          { value: "elogios", label: "Elogios" },
          { value: "dúvidas", label: "Dúvidas" },
          { value: "informações", label: "Informações" },
          { value: "reclamações", label: "Reclamações" },
          { value: "sugestões", label: "Sugestões" },
          { value: "outros", label: "Outros" },
        ]}
      />

      {topicSelected === "reclamações" && (
        <div className="flex flex-col gap-4 pl-2 lg:flex-row">
          <div className="flex lg:w-1/2">
            <RadioGroup
              label="Deseja receber retorno de sua manifestação?"
              orientation="horizontal"
              value={shouldReturn}
              onValueChange={setShouldReturn}
            >
              <Radio value="yes" size="md">
                Sim
              </Radio>

              <Radio value="no" size="md">
                Não
              </Radio>
            </RadioGroup>
          </div>
        </div>
      )}

      {shouldShowPacientNameInput && (
        <BaseInput
          placeholder="Nome do paciente"
          value={pacientName}
          error={errors.patientName?.message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPacientName(e.target.value)
          }
        />
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

      <div className="flex w-full flex-col">
        <Textarea
          label="Mensagem"
          placeholder="Escreva sua mensagem aqui..."
          className="w-full overflow-hidden bg-white"
          style={{ height: "230px" }}
          {...register("message")}
        />

        {errors.message?.message && (
          <span className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </span>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          loading={isLoading}
          className="w-full text-white md:w-80"
        >
          Enviar
        </Button>
      </div>

      {successMessage && (
        <p
          className={`text-center text-sm font-medium ${
            successMessage.includes("sucesso")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {successMessage}
        </p>
      )}
    </form>
  );
}
