export interface AlertProps {
  title: string;
  description: string;
  icon?: {
    alt: string;
    width: number;
    height: number;
    key: string;
    url: string;
  };
  link?: {
    url: string;
    external: boolean;
    openOnNewTab: boolean;
    text?: string;
  };
}

export interface AlertBlock {
  type: "ALERT";
  id: string;
  data: AlertProps;
}
