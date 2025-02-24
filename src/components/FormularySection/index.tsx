import { useState } from "react";
import { Textarea } from "@heroui/react";
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
}: FormularySectionProps): JSX.Element {
  const [formData, setFormData] = useState<Record<string, string>>({});

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
            onChange={handleChange}
          />
        </div>
      )}

      <div className="mb-4">
        <BaseInput
          placeholder="E-mail"
          backgroundColor="white"
          borderColor="darkGray"
          className="w-[322px] md:w-[676px]"
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
                    className="h-[257px] w-[322px] rounded-[13px] border border-darkGray bg-white p-2 md:w-[676px]"
                    classNames={{
                      input:
                        "text-[16px] text-darkGray placeholder:text-darkGray bg-white",
                      inputWrapper: "bg-white",
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
