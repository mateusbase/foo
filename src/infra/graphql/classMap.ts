import { ClassConstructor } from "class-transformer";

export const classMap = new Map<string, ClassConstructor<unknown>>();

export function Typename(value: string) {
  return (target: ClassConstructor<unknown>) => {
    classMap.set(value, target);
  };
}
