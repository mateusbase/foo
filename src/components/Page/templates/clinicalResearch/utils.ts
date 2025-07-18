export interface ValidationErrors {
  name: string;
  birthDate: string;
  phone: string;
  location: string;
  cancerType: string;
  success: string;
}

export const validate = (
  name: string,
  birthDate: string,
  phone: string,
  location: string,
  cancerType: string,
  userType: string,
): { isValid: boolean; errors: ValidationErrors } => {
  let isValid = true;

  const newErrors: ValidationErrors = {
    name: "",
    birthDate: "",
    phone: "",
    location: "",
    cancerType: "",
    success: "",
  };

  if (!userType || (userType !== "PATIENT" && userType !== "PHYSICIAN")) {
    newErrors.success = "Selecione se você é Paciente ou Médico.";
    isValid = false;
  }

  if (name.trim().length < 3) {
    newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    isValid = false;
  }

  if (userType === "PATIENT") {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(birthDate.trim())) {
      newErrors.birthDate = "Data de nascimento inválida.";
      isValid = false;
    } else {
      const dateObj = new Date(birthDate.trim());
      const isValidDate = !Number.isNaN(dateObj.getTime());

      if (!isValidDate) {
        newErrors.birthDate = "Data de nascimento inválida.";
        isValid = false;
      }
    }
  }

  const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!phoneRegex.test(phone.trim())) {
    newErrors.phone = "Telefone inválido.";
    isValid = false;
  }

  if (location.trim().length < 2) {
    newErrors.location = "Informe a localidade.";
    isValid = false;
  }

  if (cancerType.trim().length < 3) {
    newErrors.cancerType = "Informe o tipo de câncer.";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};
