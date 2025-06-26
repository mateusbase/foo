export interface ValidationErrors {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  city: string;
  isDoctor: string;
  hasClinic: string;
  success: string;
}

export const validate = (
  name: string,
  email: string,
  phone: string,
  cpf: string,
  city: string,
  isDoctor: boolean,
  hasClinic: boolean,
): { isValid: boolean; errors: ValidationErrors } => {
  let isValid = true;

  const newErrors: ValidationErrors = {
    name: "",
    email: "",
    phone: "",
    cpf: "",
    city: "",
    isDoctor: "",
    hasClinic: "",
    success: "",
  };

  if (name.trim().length < 3) {
    newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    newErrors.email = "E-mail inválido.";
    isValid = false;
  }

  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  if (!phoneRegex.test(phone.trim())) {
    newErrors.phone = "Telefone inválido.";
    isValid = false;
  }

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfRegex.test(cpf.trim())) {
    newErrors.cpf = "CPF inválido. Use o formato 000.000.000-00.";
    isValid = false;
  }

  if (city.trim().length < 2) {
    newErrors.city = "Cidade obrigatória.";
    isValid = false;
  }

  if (typeof isDoctor !== "boolean") {
    newErrors.isDoctor = "Informe se é médico.";
    isValid = false;
  }

  if (typeof hasClinic !== "boolean") {
    newErrors.hasClinic = "Informe se já possui clínica.";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};
