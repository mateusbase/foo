export interface FilterItemProps {
  id: string;
  name: string;

  icon: {
    alt: string;
    width: number;
    key: string;
    url: string;
    height: number;
  };

  active?: boolean;
}
