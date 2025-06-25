import { ReactNode } from "react";

export interface BaseAccordionProps {
  content: ContentAccordion[];
  titleClassName?: string;
  contentClassName?: string;
  indicator?: ReactNode;
}

export interface AccordionItemClasses {
  title?: string;
  subtitle?: string;
  content?: string;
}

export interface ContentAccordion {
  id: string;
  title: string;
  subtitle?: string;
  content: string | ReactNode;
}
