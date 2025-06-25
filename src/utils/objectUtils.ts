import {
  CalendarIcon,
  DocumentIcon,
  PinIcon,
  UserIcon,
} from "@/components/Icons";

/* eslint-disable prettier/prettier */
export const clone = <T extends object>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const generateId = (): number => {
  const random = new Uint32Array(1);
  window.crypto.getRandomValues(random);
  return -random[0];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (value: unknown): value is Record<string, any> => {
  if (!value) {
    return false;
  }
  if (typeof value !== "object") {
    return false;
  }
  return !(value instanceof Date);
};

export interface HasTypename {
  [x: string]: unknown;
  __typename: string;
}

export const hasTypename = (value: unknown): value is HasTypename => {
  return isObject(value) && Reflect.has(value, "__typename");
};

export function getObjectKeyByValue(
  object: Record<string, unknown>,
  value: string,
): string | undefined {
  return Object.keys(object).find((key) => object[key] === value);
}

export const options = [
  {
    id: 1,
    title: "Agende uma consulta ou exame",
    icon: CalendarIcon,
    link: "/agende-sua-consulta",
  },
  {
    id: 2,
    title: "Encontre uma unidade",
    icon: PinIcon,
    link: "/encontre-uma-unidade",
  },
  {
    id: 3,
    title: "Encontre um médico",
    icon: UserIcon,
    link: "/encontre-um-medico",
  },
  {
    id: 4,
    title: "Resultado de Exames",
    icon: DocumentIcon,
    link: "/resultados",
  },
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthday: string;
  optIn: boolean;
};

export function isFormDataValid(formData: FormData): boolean {
  return (
    formData.name.trim() !== "" &&
    formData.phone.replace(/\D/g, "").length >= 10 &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.cpf.replace(/\D/g, "").length === 11 &&
    /^\d{2}\/\d{2}\/\d{4}$/.test(formData.birthday) &&
    formData.optIn
  );
}

export function isValidDate(dateString: string): boolean {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return false;

  const [day, month, year] = dateString.split("/").map(Number);
  const currentYear = new Date().getFullYear();

  if (/^(\d)\1{3}$/.test(String(year))) return false;

  if (year < 1900 || year > currentYear) return false;

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export const localeMap = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};
