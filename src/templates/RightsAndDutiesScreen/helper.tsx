import General from "./General";

type MenuContent = {
  [key: number]: JSX.Element;
};

export const menuItems = [
  { id: 1, name: "Geral" },
  { id: 2, name: "Saúde" },
  { id: 3, name: "Facilidades" },
  { id: 4, name: "Benefícios tributários" },
  { id: 5, name: "Trabalho" },
  { id: 6, name: "Diretrizes" },
];

export const menuContent: MenuContent = {
  1: <General />,
  2: <div />,
  3: <div />,
  4: <div />,
  5: <div />,
  6: <div />,
  7: <div />,
  8: <div />,
};
