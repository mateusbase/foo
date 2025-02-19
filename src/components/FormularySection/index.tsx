import { useState } from "react";
import { Textarea } from "@heroui/react";
import BaseInput from "../Input";
import BaseButton from "../Button";
import BaseSelect from "../Select";
import { ArrowDownIcon } from "../Icons";

interface Field {
  name: string;
  label: string;
  type?: "input" | "textarea" | "select";
  options?: { key: string; value: string; label: string }[];
}

interface GenericFormProps {
  additionalFields?: Field[];
  background?: boolean;
  onSubmit: (data: Record<string, string>) => void;
  className?: string;
  hasTelephone?: boolean;
  buttonStyle?: string;
  buttonText?: string;
}

export default function GenericForm({
  additionalFields = [],
  background = false,
  onSubmit,
  className = "",
  hasTelephone = false,
  buttonStyle = "",
  buttonText = "Enviar",
}: GenericFormProps): JSX.Element {
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
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-lg p-6 ${background ? "bg-gray-foreground" : "bg-white"} ${className}`}
    >
      <div className="mb-4">
        <BaseInput label="Nome Completo" onChange={handleChange} />
      </div>

      <div className="mb-4">
        <BaseInput label="E-mail" onChange={handleChange} />
      </div>

      {hasTelephone && (
        <div className="mb-4">
          <BaseInput label="Telefone" onChange={handleChange} />
        </div>
      )}

      {additionalFields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-gray-700">{field.label}</label>

          {(() => {
            switch (field.type) {
              case "textarea":
                return (
                  <Textarea
                    name={field.name}
                    placeholder="Digite sua mensagem"
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  />
                );

              case "select":
                return (
                  <BaseSelect
                    labelPlacement="outside"
                    labelColor="darkGray"
                    defaultSelectedKey="1"
                    endContent={<ArrowDownIcon color="text-primary" />}
                    options={field.options || []}
                  />
                );

              case "input":
              default:
                return (
                  <BaseInput label={field.label} onChange={handleChange} />
                );
            }
          })()}
        </div>
      ))}

      <BaseButton className={`mt-4 ${buttonStyle}`}>{buttonText}</BaseButton>
    </form>
  );
}
