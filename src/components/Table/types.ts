export type TableProps = {
  columns: {
    key: string;
    label: string;
  }[];
  rows: {
    key: string;
    [key: string]: unknown;
  }[];
};
