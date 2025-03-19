import { format } from "@react-input/mask";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const dynamicMask = "(__) _____-____";

export const usePhoneMask = (): {
  phoneNumber: string;
  handlePhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneBlur: () => Promise<void>;
} => {
  const { setValue, trigger } = useFormContext();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const rawValue = event.target.value.replace(/\D/g, "");

    if (rawValue.length > 11) return;

    const formattedValue = format(rawValue, {
      mask: dynamicMask,
      replacement: { _: /\d/ },
    });

    setPhoneNumber(formattedValue);
    setValue("phone", rawValue);
    trigger("phone");
  };

  const handlePhoneBlur = async (): Promise<void> => {
    const rawPhoneNumber = phoneNumber.replace(/\D/g, "");

    const formattedPhone = format(rawPhoneNumber, {
      mask: dynamicMask,
      replacement: { _: /\d/ },
    });

    setPhoneNumber(formattedPhone);
    setValue("phone", rawPhoneNumber);
    await trigger("phone");
  };

  return { phoneNumber, handlePhoneChange, handlePhoneBlur };
};
