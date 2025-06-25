import { Button } from "@/components/Button";
import EmailInput from "@/components/EmailInput";
import BaseInput from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";
import BaseSelect from "@/components/Select";
import { FormValues, useValidation } from "@/hooks/useValidation";
import { useForm } from "react-hook-form";

interface ScheduleFormProps {
  formData: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export default function ScheduleForm({
  formData,
}: ScheduleFormProps): JSX.Element {
  const resolve = useValidation();

  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolve,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  return (
    <div className="w-full lg:w-1/2">
      <h1 className="text-title-lg text-primary">{formData.title}</h1>
      <p className="mt-2 text-2xl text-primary">{formData.description}</p>

      <div className="mt-10">
        <BaseInput
          placeholder="Nome completo"
          size="lg"
          register={register}
          name="name"
          error={errors.name?.message}
        />
      </div>

      <div className="mt-6 flex gap-4">
        <EmailInput placeholder="E-mail" />
        <PhoneInput placeholder="Telefone" />
      </div>

      <div className="mt-6 flex gap-4">
        <BaseSelect
          placeholder="UF"
          options={[
            { value: "1", label: "SP" },
            { value: "2", label: "RJ" },
          ]}
        />
        <BaseSelect
          placeholder="Cidade"
          options={[
            { value: "1", label: "São Paulo" },
            { value: "2", label: "Rio de Janeiro" },
          ]}
        />
      </div>

      <div className="mt-6">
        <BaseSelect
          placeholder="Unidade"
          options={[
            { value: "1", label: "Unidade A" },
            { value: "2", label: "Unidade B" },
          ]}
        />
      </div>

      <div className="mt-6 flex justify-center">
        <Button color="primary" className="w-full text-white lg:w-[322px]">
          {formData.buttonText}
        </Button>
      </div>
    </div>
  );
}
