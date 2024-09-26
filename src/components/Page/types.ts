import { ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
  title: string;
  description?: string;
}
