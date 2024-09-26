import { ReactNode } from "react";

export interface PageLayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
  showContactSection?: boolean;
  mainOptions?: boolean;
  contactLinks?: {
    whatsappText: string;
    whatsappLink: string;
    phoneText: string;
    phoneLink: string;
    mapText: string;
    mapLink: string;
  };
}
