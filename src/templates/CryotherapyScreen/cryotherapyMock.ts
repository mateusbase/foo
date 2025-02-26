interface CryotherapyMock {
  id: number;
  text: string;
  icon: string;
}

const iconBaseUrl = "/assets/images/crioterapia/icons/";

const cryotherapyMediumMock: CryotherapyMock[] = [
  {
    id: 1,
    text: "Nosso médico especialista faz o diagnóstico da doença e identifica o tratamento mais adequado para o paciente.",
    icon: `${iconBaseUrl}image.svg`,
  },
  {
    id: 2,
    text: "Já a nossa equipe de concierges está sempre pronta para ajudar. Ela recebe orientações sobre o que deve ser feito, agiliza a autorização e facilita o início do tratamento.",
    icon: `${iconBaseUrl}image (1).svg`,
  },
  {
    id: 1,
    text: "Assim, garantimos em todas as etapas do tratamento cuidados voltados para o bem-estar do paciente, atendimento médico de qualidade e unidades totalmente preparadas.",
    icon: `${iconBaseUrl}image (2).svg`,
  },
];

const cryotherapyMock: CryotherapyMock[] = [
  {
    id: 1,
    text: "A crioterapia utiliza um método de resfriamento do couro cabeludo, uma técnica simples que previne a queda do cabelo causada pela quimioterapia.",
    icon: `${iconBaseUrl}image.svg`,
  },
  {
    id: 2,
    text: "O resfriamento gerado pelas toucas é eficaz no combate à alopecia (queda de cabelo) que pode acontecer durante a quimioterapia.",
    icon: `${iconBaseUrl}image (1).svg`,
  },
  {
    id: 1,
    text: "Os resultados variam de acordo com o tratamento e a resposta de cada paciente.",
    icon: `${iconBaseUrl}image (2).svg`,
  },
];

export { cryotherapyMediumMock, cryotherapyMock };
