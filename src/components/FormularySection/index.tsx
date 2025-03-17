import { useCallback, useState } from "react";
import { Textarea } from "@heroui/react";
import { format } from "@react-input/mask";
import { FormValues, useValidation } from "@/hooks/useValidation";
import { useForm } from "react-hook-form";
import BaseInput from "../Input";
import BaseButton from "../Button";
import BaseSelect from "../Select";

export interface Field {
  name: string;
  label: string;
  type?: "input" | "textarea" | "select";
  options?: { key: string; value: string; label: string }[];
}

interface FormularySectionProps {
  title?: string;
  subtitle?: string;
  additionalFields?: Field[];
  background?: boolean;
  onSubmit?: (data: Record<string, string>) => void;
  className?: string;
  hasTelephone?: boolean;
  buttonStyle?: string;
  style?: Record<string, string>;
  buttonText?: string;
}

export default function FormularySection({
  title = "",
  subtitle = "",
  additionalFields = [],
  background = false,
  onSubmit,
  className = "",
  hasTelephone = false,
  buttonStyle = "",
  buttonText = "Enviar",
  style = {},
}: FormularySectionProps): JSX.Element {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const resolve = useValidation({ validateEmail: true, validatePhone: true });

  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormValues>({
    resolver: resolve,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const handlePhoneChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      let rawValue = event.target.value.replace(/\D/g, "");
      if (rawValue.length > 11) return;

      if (rawValue.length > 11) {
        rawValue = rawValue.slice(0, 11);
      }

      const dynamicMask =
        rawValue.length > 10 ? "(__) _____-____" : "(__) ____-____";

      const formattedValue = format(rawValue, {
        mask: dynamicMask,
        replacement: { _: /\d/ },
      });

      setPhoneNumber(formattedValue);
      setValue("phone", rawValue);
      if (rawValue.length < 11) {
        trigger("phone");
      }
    },
    [setValue, trigger],
  );

  const handlePhoneBlur = useCallback(async (): Promise<void> => {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, "");

    const dynamicMask =
      rawPhoneNumber.length > 10 ? "(__) _____-____" : "(__) ____-____";

    const formattedPhone = format(rawPhoneNumber, {
      mask: dynamicMask,
      replacement: { _: /\d/ },
    });

    setPhoneNumber(formattedPhone);
    setValue("phone", rawPhoneNumber);
    await trigger("phone");
  }, [phoneNumber, setValue, trigger]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={style}
      className={`flex w-full max-w-lg flex-col items-center gap-7 p-8 pt-16 text-center ${background ? "bg-gray-foreground" : "bg-white"} ${className}`}
    >
      {title && <h1 className="mb-4 text-4xl text-primary">{title}</h1>}
      {subtitle && (
        <p className="mb-9 text-xl font-light text-darkGray">{subtitle}</p>
      )}
      <div className="mb-4">
        <BaseInput
          placeholder="Nome completo"
          backgroundColor="white"
          onChange={handleChange}
          borderColor="darkGray"
          className="w-[322px] md:w-[676px]"
        />
      </div>

      {hasTelephone && (
        <div className="mb-4">
          <BaseInput
            placeholder="Telefone"
            borderColor="darkGray"
            className="w-[322px] md:w-[676px]"
            backgroundColor="white"
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
            register={register}
            name="phone"
            error={errors.phone?.message}
            value={phoneNumber}
          />
        </div>
      )}

      <div className="mb-4">
        <BaseInput
          placeholder="E-mail"
          backgroundColor="white"
          borderColor="darkGray"
          className="w-[322px] md:w-[676px]"
          register={register}
          name="email"
          error={errors.email?.message}
          onChange={handleChange}
        />
      </div>

      {additionalFields.map((field) => (
        <div key={field.name} className="mb-4">
          {(() => {
            switch (field.type) {
              case "textarea":
                return (
                  <Textarea
                    name={field.name}
                    placeholder="Mensagem"
                    onChange={handleChange}
                    className="h-[257px] w-[322px] rounded-[13px] border border-darkGray !bg-white p-2 md:w-[676px]"
                    classNames={{
                      input:
                        "!bg-white text-[16px] text-darkGray placeholder:text-darkGray hover:!bg-white focus:!bg-white active:!bg-white focus:ring-0 focus:outline-none",
                      inputWrapper:
                        "!bg-white hover:!bg-white focus:!bg-white active:!bg-white",
                      base: "!bg-white",
                    }}
                  />
                );

              case "select":
                return (
                  <BaseSelect
                    placeholder={field.label}
                    labelPlacement="outside-left"
                    className="-ml-4 w-[322px] md:w-[676px]"
                    classNames={{
                      trigger:
                        "bg-white h-[50px] w-[322px] md:w-[676px] text-darkGray placeholder:text-darkGray ",
                      value: "text-lightGray",
                      label: "hidden",
                    }}
                    options={field.options || []}
                  />
                );

              case "input":
              default:
                return (
                  <BaseInput
                    placeholder={field.label}
                    borderColor="darkGray"
                    backgroundColor="white"
                    className="w-[322px] md:w-[676px]"
                    onChange={handleChange}
                  />
                );
            }
          })()}
        </div>
      ))}

      <BaseButton className={`mb-14 mt-4 w-[322px] text-white ${buttonStyle}`}>
        {buttonText}
      </BaseButton>
    </form>
  );
}
