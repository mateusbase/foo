import { cn } from "@/styles/classes";
import { cva } from "class-variance-authority";
import { BaseInputProps } from "./types";

const inputVariants = cva(
  [
    "border border-lightGray bg-white disabled:cursor-not-allowed w-full rounded-full border-gray-300 hover:border-gray-500 placeholder:text-darkGray outline-current",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8 min-h-8 px-2",
        md: "h-10 min-h-10 px-4",
        lg: "h-[54px] min-h-[54px] px-4",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export default function BaseInput({
  label,
  placeholder = "Digite aqui",
  size = "lg",
  className = "w-full",
  value,
  onChange,
  onBlur,
  register,
  error,
  name,
  maxLength,
  defaultValue,
  disabled = false,
  endContent,
}: BaseInputProps): JSX.Element {
  return (
    <div className="relative w-full">
      {label && (
        <label className="mb-2 ml-5 block text-left text-base font-bold text-lightGray">
          {label}
        </label>
      )}

      <input
        placeholder={placeholder}
        className={cn(
          inputVariants({
            size,
            className: cn(className, endContent && "pr-10"),
          }),
        )}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        maxLength={maxLength}
        {...(register && name
          ? {
              ...register(name),
              onChange: (e) => {
                register(name).onChange(e);
                onChange?.(e);
              },
              onBlur: (e) => {
                register(name).onBlur(e);
                onBlur?.();
              },
            }
          : {
              onChange: (e) => {
                onChange?.(e);
              },
              onBlur: () => {
                onBlur?.();
              },
            })}
      />

      {endContent && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {endContent}
        </div>
      )}

      {error && (
        <p className="text-danger ml-5 mt-2 text-sm text-red-500">
          {typeof error === "string" ? error : error.message}
        </p>
      )}
    </div>
  );
}
