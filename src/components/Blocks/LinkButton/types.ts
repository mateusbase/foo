export interface ButtonLinkBlockProps {
  text: string;

  link: {
    external: boolean;
    url?: string;
    path?: string;
    openOnNewTab?: boolean;
  };

  filling?: "filled" | "outlined" | "ghost";
}

export interface ButtonLinkBlock {
  type: "BUTTON_LINK";
  id: string;
  data: ButtonLinkBlockProps;
}
