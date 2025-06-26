import { ReactNode } from "react";

export interface MedicalServiceCardProps {
  roundedSide?: string;
  subtitle?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  actionButtonText?: string;
  serviceIcon?: JSX.Element;
  customPadding?: number;
  backgroundImageUrl?: string;
  children: ReactNode;
  isBackgroundUrl?: boolean;

  imageUrl?: string;
}
