import IntegrativeMedicine from "./IntegrativeMedicine";

type MenuContent = {
  [key: number]: JSX.Element;
};

export const menuContent: MenuContent = {
  1: <IntegrativeMedicine />,
  2: <div />,
  3: <div />,
};

export const menuItems = [
  {
    id: 1,
    key: 1,
    name: "Importância da medicina integrativa durante o tratamento de câncer",
  },
  {
    id: 2,
    key: 2,
    name: "Importância da medicina integrativa durante o tratamento de câncer",
  },
  {
    id: 3,
    key: 3,
    name: "Que médicos devem orientar sobre medicina integrativa durante o tratamento oncológico",
  },
];
