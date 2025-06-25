export interface MenuHeadingLinkProps {
  name: string;
  link: {
    external?: boolean;
    url?: string;
    path?: string;
    openOnNewTab?: boolean;
  };
  textSize?: string;
  isFirst?: boolean;
  isLast?: boolean;
}
