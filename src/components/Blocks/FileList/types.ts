export interface FileListProps {
  title?: string;
  description?: string;
  columns?: "1" | "2" | "3" | "4" | "5" | "6";

  files: Array<{
    name: string;
    description?: string;

    icon?: {
      url: string;
      alt?: string;
      width: number;
      height: number;
    };

    file: {
      name: string;
      type: string;
      url: string;
      key: string;
    };
  }>;
}

export interface FileListPropsBlock {
  type: "FILE_LIST";
  id: string;
  data: FileListProps;
}
