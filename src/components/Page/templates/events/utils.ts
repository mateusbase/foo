export const formatDate = (dateString: string): string => {
  const [year, month, day] = (dateString ?? "").split("-");
  return `${day}/${month}/${year}`;
};

export const getMonthAndYear = (dateString: string): string => {
  const [year, month] = (dateString ?? "").split("-");
  const date = new Date(Number(year), Number(month) - 1);
  const monthName = date
    .toLocaleString("pt-BR", { month: "long" })
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());

  return `${monthName} de ${year}`;
};

export const formatFullDate = (dateString: string): string => {
  const [year, month, day] = (dateString ?? "").split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  const dayFormatted = String(date.getDate()).padStart(2, "0");
  const monthName = date
    .toLocaleString("pt-BR", { month: "long" })
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());

  return `${dayFormatted} de ${monthName} de ${year}`;
};

export interface ValidationErrors {
  name: string;
  email: string;
  phone: string;
  crm: string;
  success: string;
}

export const validate = (
  name: string,
  email: string,
  phone: string,
  crm: string,
): { isValid: boolean; errors: ValidationErrors } => {
  let isValid = true;

  const newErrors: ValidationErrors = {
    name: "",
    email: "",
    phone: "",
    crm: "",
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

  if (crm.trim().length < 5) {
    newErrors.crm = "A mensagem deve ter pelo menos 5 caracteres.";
    isValid = false;
  }

  if (phone.trim().length < 5) {
    newErrors.crm = "A mensagem deve ter pelo menos 5 caracteres.";
    isValid = false;
  }

  return { isValid, errors: newErrors };
};
