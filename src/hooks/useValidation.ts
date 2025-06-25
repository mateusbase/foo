import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver } from "react-hook-form";
import { useMemo } from "react";

export type FormValues = {
  name: string;
  patientName?: string | null | undefined;
  email?: string | null | undefined;
  phone?: string | null | undefined;
  message: string;
};

const getValidationSchema = (options?: {
  validateEmail?: boolean;
  validatePhone?: boolean;
  requirePatientName?: boolean;
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
          .required("Telefone obrigatório")
          .transform((value) => (value ? value.replace(/\D/g, "") : value))
          .min(11, "Telefone inválido")
      : yup.string().notRequired(),
    message: yup
      .string()
      .required("Mensagem obrigatória")
      .min(10, "Mensagem deve ter no mínimo 10 caracteres"),
    patientName: yup.string().when([], {
      is: () => options?.requirePatientName === true,
      then: (schema) =>
        schema
          .required("Nome do paciente obrigatório")
          .typeError("Nome do paciente inválido")
          .matches(
            /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
            "Nome do paciente deve conter apenas letras",
          )
          .min(3, "Nome do paciente deve ter no mínimo 3 caracteres"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
  });
};

export const useValidation = (options?: {
  validateEmail?: boolean;
  validatePhone?: boolean;
  requirePatientName?: boolean;
}): Resolver<FormValues> => {
  const schema = useMemo(() => getValidationSchema(options), [options]);
  return yupResolver(schema);
};
