import { Template, TemplatePropsMap } from "@/components/Page/templates";

export type Breadcrumb = { name: string; path: string };

export type MediaImage = {
  alt: string;
  width: number;
  height: number;
  key: string;
  url: string;
};

export type HeaderLink = {
  link: {
    external: boolean;
    url?: string;
    path?: string;
    openOnNewTab?: boolean;
  };
  text: string;
};

export type HeaderCTA = {
  icon: MediaImage;
  link: { external: boolean; url: string };
  text: string;
  mobileText: string;
};

export type HeaderLogin = {
  icon: MediaImage;
  links: HeaderLink[];
  text: string;
};

export type PageHeader = {
  logo: MediaImage;
  cta: HeaderCTA;
  links: HeaderLink[];
  login: HeaderLogin;
};

export type FooterLink = {
  link: { external: boolean; url?: string; path?: string };
  name: string;
};

export type FooterLinkGroup = { name: string; links: FooterLink[] };

export type FooterAction = {
  link: { external: boolean; url: string };
  icon: MediaImage;
  text: string;
};

export type FooterAppStore = {
  link: { external: boolean; url: string };
  image: MediaImage;
};

export type FooterApp = { stores: FooterAppStore[]; text: string };

export type FooterSocialItem = { link: string; logo: MediaImage };

export type FooterSocial = { social: FooterSocialItem[]; text: string };

export type PageFooter = {
  app: FooterApp;
  logo: MediaImage;
  linkGroups: FooterLinkGroup[];
  referenceText: string;
  actions: FooterAction[];
  social: FooterSocial;
};

export type ArticleJSON = {
  "@context": "https://schema.org";
  "@type": "NewsArticle";
  headline: string;
  datePublished: string;
  dateModified: string;
  description: string;
  isAccessibleForFree: boolean;
  author: {
    "@type": "Person";
    name: string;
  };
};

export type GetPageByPathResult<T extends Template = Template> = {
  path: string;

  language: "pt" | "en" | "es";

  breadcrumbs: Breadcrumb[];

  kind: T;

  meta: {
    title: string;
    description: string;
    keywords: string[];
    image?: { url: string; alt: string } | null;
  };

  type: T;

  id?: string;

  data: TemplatePropsMap[T]["data"];

  header?: PageHeader;

  footer?: PageFooter;

  articleJSON?: ArticleJSON;
};
