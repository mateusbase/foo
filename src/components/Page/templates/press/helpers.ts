export interface ValidationErrors {
  name: string;
  email: string;
  message: string;
  success: string;
}

export const validate = (
  name: string,
  email: string,
  message: string,
): { isValid: boolean; errors: ValidationErrors } => {
  let isValid = true;

  const newErrors: ValidationErrors = {
    name: "",
    email: "",
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

  if (message.trim().length < 5) {
    newErrors.message = "A mensagem deve ter pelo menos 5 caracteres.";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};
