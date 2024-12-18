import { ReactNode } from "react";

export interface Section {
  href: string;
  text: string;
  icon?: JSX.Element;
  isLink?: boolean;
}

export interface PageLayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
  showHeader?: boolean;
  title?: string | JSX.Element;
  subtitle?: string;
  showSections?: boolean;
  sections?: Section[];
  mainOptions?: boolean;
  showIcons?: boolean;
  buttonText?: string;
  buttonIcon?: JSX.Element;
}
