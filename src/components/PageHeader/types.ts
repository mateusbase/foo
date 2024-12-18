export type Section = {
  href: string;
  text: string;
  icon?: JSX.Element;
  isLink?: boolean;
};

export type PageHeaderProps = {
  preTitle?: string;
  title: string | JSX.Element;
  subtitle?: string;
  buttonText?: string;
  buttonIcon?: JSX.Element;
  showSections?: boolean;
  showIcons?: boolean;
  sections?: Section[];
};
