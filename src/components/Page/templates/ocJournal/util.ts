export interface ValidationEditionErrors {
  name: string;
  email: string;
  crm: string;
  specialty: string;
  uf: string;
  success: string;
}

interface CRMData {
  number: string;
  state: string;
}

export const validateEdition = (
  name: string,
  email: string,
  crm: CRMData,
  specialty: string,
): { isValid: boolean; errors: ValidationEditionErrors } => {
  let isValid = true;

  const newErrors: ValidationEditionErrors = {
    name: "",
    email: "",
    crm: "",
    specialty: "",
    uf: "",
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

  const crmNumberRegex = /^\d{4,8}$/;
  if (!crmNumberRegex.test(crm.number.trim())) {
    newErrors.crm = "Número do CRM inválido. Deve conter de 4 a 8 dígitos.";
    isValid = false;
  }

  const validUFs = ["SP", "RJ", "MG"];
  if (!validUFs.includes(crm.state)) {
    newErrors.uf = "Selecione uma UF válida.";
    isValid = false;
  }

  if (specialty.trim().length < 2) {
    newErrors.specialty = "Especialidade obrigatória.";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};
