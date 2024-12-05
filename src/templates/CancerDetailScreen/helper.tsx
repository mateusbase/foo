import WhatIsCancer from "./components/WhatIsCancer";

type MenuContent = {
  [key: number]: JSX.Element;
};

export const menuContent: MenuContent = {
  1: <WhatIsCancer />,
  2: <div />,
  3: <div />,
  4: <div />,
  5: <div />,
  6: <div />,
  7: <div />,
  8: <div />,
};

export const menuItems = [
  { id: 1, name: "O que é o câncer de mama" },
  { id: 2, name: "Subtipos de câncer de mama" },
  { id: 3, name: "Sintomas e sinais" },
  { id: 4, name: "Diagnóstico" },
  { id: 5, name: "Tratamento" },
  { id: 6, name: "Prevenção" },
];
