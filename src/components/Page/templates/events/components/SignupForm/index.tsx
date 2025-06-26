import { Button } from "@/components/Button";
import BaseInput from "@/components/Input";
import apiClient from "@/services/apiClient";
import React, { useState } from "react";
import { validate } from "../../utils";

interface SignupFormProps {
  id: string;
}

export default function SignupForm({ id }: SignupFormProps): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [crm, setCrm] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    crm: "",
    success: "",
  });

  const handleSubmit = async (): Promise<void> => {
    const { isValid, errors: validationErrors } = validate(
      name,
      email,
      phone,
      crm,
    );

    if (!isValid) {
      setErrors(validationErrors);

      return;
    }

    setIsLoading(true);

    try {
      await apiClient.post("/api/pages/action", {
        kind: "EVENT",
        action: "SUBSCRIBE",
        payload: {
          eventId: id,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          crm: crm.trim(),
        },
      });

      setIsLoading(false);

      setName("");

      setEmail("");

      setPhone("");

      setCrm("");

      setErrors({
        name: "",
        email: "",
        phone: "",
        crm: "",
        success: "Mensagem enviada com sucesso!",
      });
    } catch (err) {
      err;

      setIsLoading(false);

      setErrors({
        name: "",
        email: "",
        phone: "",
        crm: "",
        success: "Erro ao enviar. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <div className="flex h-auto flex-col justify-between bg-primary p-6 md:w-[328px] md:rounded-3xl lg:w-[480px] lg:p-16">
      <h2 className="text-left text-title-lg text-white">Inscreva-se</h2>

      <div className="mt-10 flex grow flex-col justify-between">
        <div className="space-y-4">
          <p className="font-medium text-white">Nome completo</p>

          <BaseInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Preencha seu nome"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}

          <p className="font-medium text-white">E-mail</p>

          <BaseInput value={email} onChange={(e) => setEmail(e.target.value)} />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}

          <p className="font-medium text-white">Telefone</p>

          <BaseInput value={phone} onChange={(e) => setPhone(e.target.value)} />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}

          <p className="font-medium text-white">CRM</p>

          <BaseInput
            value={crm}
            onChange={(e) => setCrm(e.target.value)}
            placeholder="Preencha seu CRM"
          />

          {errors.crm && (
            <p className="mt-1 text-sm text-red-500">{errors.crm}</p>
          )}
        </div>

        <Button
          size="lg"
          className="mt-6 w-full border border-white text-lg text-white"
          loading={isLoading}
          onClick={handleSubmit}
        >
          Confirmar
        </Button>

        <div className="mt-16 flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            className="cursor-pointer after:mask-checkbox after:mask-size-contain relative size-7 shrink-0 appearance-none rounded border-2 border-white bg-transparent after:absolute after:left-1/2 after:top-1/2 after:hidden after:size-4 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white after:content-[''] checked:bg-transparent checked:after:block focus:ring-0 focus:ring-offset-0"
          />

          <label
            htmlFor="terms"
            className="-mt-1 text-left text-[14px] leading-[18px] text-white cursor-pointer"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex
            id sem ullamcorper. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </label>
        </div>
      </div>
    </div>
  );
}
