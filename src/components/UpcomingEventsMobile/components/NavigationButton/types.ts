export type NavigationButtonProps = {
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
  ref?: React.Ref<HTMLButtonElement>; // Incluí a ref opcionalmente, já que você mencionou ser necessária
};
