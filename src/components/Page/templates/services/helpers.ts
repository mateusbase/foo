export interface BasicValidationErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
  success: string;
}

export const validate = (
  name: string,
  email: string,
  phone: string,
  message: string,
): { isValid: boolean; errors: BasicValidationErrors } => {
  let isValid = true;

  const newErrors: BasicValidationErrors = {
    name: "",
    email: "",
    phone: "",
    message: "",
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

  if (message.trim().length < 10) {
    newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};
