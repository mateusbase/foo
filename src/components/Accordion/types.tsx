export interface BaseAccordionProps {
  content: ContentAccordion[];
  itemClasses?: AccordionItemClasses;
}

export interface AccordionItemClasses {
  title?: string;
  subtitle?: string;
  content?: string;
}

export interface ContentAccordion {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
}
