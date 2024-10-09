import { ReactNode } from "react";

export interface MedicalServiceCardProps {
  subtitle?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  actionButtonText?: string;
  serviceIcon?: JSX.Element;
  backgroundImageUrl?: string;
  children: ReactNode;
}
