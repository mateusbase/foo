import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver } from "react-hook-form";
import { useMemo } from "react";

export type FormValues = {
  name: string;
  email?: string | null | undefined;
  phone?: string | null | undefined;
};

const getValidationSchema = (options?: {
  validateEmail?: boolean;
  validatePhone?: boolean;
}): yup.ObjectSchema<FormValues> => {
  return yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .typeError("Nome inválido")
      .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Nome deve conter apenas letras")
      .min(3, "Nome deve ter no mínimo 3 caracteres"),
    email: options?.validateEmail
      ? yup.string().email("Email inválido").required("Email obrigatório")
      : yup.string().nullable().notRequired(),
    phone: options?.validatePhone
      ? yup
          .string()
          .matches(/^\d{10,11}$/, "Telefone inválido")
          .required("Telefone obrigatório")
          .transform((value) => (value ? value.replace(/\D/g, "") : value))
          .min(10, "Telefone inválido")
          .max(11, "Telefone inválido")
      : yup.string().notRequired(),
  });
};

export const useValidation = (options?: {
  validateEmail?: boolean;
  validatePhone?: boolean;
}): Resolver<FormValues> => {
  const schema = useMemo(() => getValidationSchema(options), [options]);
  return yupResolver(schema);
};
