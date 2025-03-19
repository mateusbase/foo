import { FormValues, useValidation } from "@/hooks/useValidation";
import { useForm } from "react-hook-form";
import BaseInput from "../Input";

interface EmailInputProps {
  placeholder?: string;
  className?: string;
}

const EmailInput = ({
  placeholder,
  className,
}: EmailInputProps): JSX.Element => {
  const resolve = useValidation({ validateEmail: true });

  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolve,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  return (
    <BaseInput
      placeholder={placeholder || "E-mail"}
      className={className}
      register={register}
      name="email"
      error={errors.email?.message}
    />
  );
};

export default EmailInput;
