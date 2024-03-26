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
  value: string
): string | undefined {
  return Object.keys(object).find((key) => object[key] === value);
}
