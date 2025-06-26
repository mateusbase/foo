export interface RichTextProps {
  content: string;
  className?: string;
}

export interface RichTextBlock {
  type: "RICHTEXT";
  id: string;
  data: RichTextProps;
}
