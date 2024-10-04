import { PinIcon, UserIcon } from "@/components/icons";
import DocumentIcon from "@/components/icons/DocumentIcon";
import { FaFile, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";

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
    icon: IoIosCalendar,
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
