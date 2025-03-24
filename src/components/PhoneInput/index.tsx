import { FormValues, useValidation } from "@/hooks/useValidation";
import { useForm } from "react-hook-form";
import { usePhoneMask } from "@/hooks/usePhoneMask";
import BaseInput from "../Input";

interface PhoneInputProps {
  placeholder?: string;
  className?: string;
}

const PhoneInput = ({
  placeholder,
  className,
}: PhoneInputProps): JSX.Element => {
  const resolve = useValidation({ validatePhone: true });
  const { phoneNumber, handlePhoneChange, handlePhoneBlur } = usePhoneMask();

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
      placeholder={placeholder || "Telefone"}
      value={phoneNumber}
      onChange={handlePhoneChange}
      onBlur={handlePhoneBlur}
      maxLength={15}
      register={register}
      name="phone"
      error={errors.phone?.message}
      className={className}
    />
  );
};
export default PhoneInput;
