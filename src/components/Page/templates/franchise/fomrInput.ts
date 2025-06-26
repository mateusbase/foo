const formInputs = [
  { name: "document", type: "input", label: "CPF" },
  { name: "city", type: "input", label: "Cidade" },
  {
    name: "isDoctor",
    type: "select",
    label: "É médico?",
    options: [
      { key: "1", value: "1", label: "Sim" },
      { key: "2", value: "2", label: "Não" },
    ],
  },
  {
    name: "hasInfutsion",
    type: "select",
    label: "Já possui clínica de infusão?",
    options: [
      { key: "1", value: "1", label: "Sim" },
      { key: "2", value: "2", label: "Não" },
    ],
  },
];

export default formInputs;
