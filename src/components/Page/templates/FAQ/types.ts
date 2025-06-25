export interface FAQRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };
    content: {
      heading: string;
    };
    questions: FAQQuestion[];
  };
}

export interface FAQQuestion {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  path: string;
  icon: {
    alt: string;
    url: string;
    width: number;
    height: number;
    key: string;
  };
}
