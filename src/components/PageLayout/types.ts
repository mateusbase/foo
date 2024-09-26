import { ReactNode } from "react";

export interface PageLayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
  showContactSection?: boolean;
}
