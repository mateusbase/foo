// Define the type for the mock data
type TeleconsultPreparation = {
  id: number;
  title: string;
  description: string;
};

const teleconsultPreparations: TeleconsultPreparation[] = [
  {
    id: 1,
    title: "Verifique a bateria do seus dispositivo",
    description:
      "O computador, celular ou tablet devem estar bem carregados para garantir que a consulta ocorra tranquilamente e sem interrupções.",
  },
  {
    id: 2,
    title: "Conecte-se com antecedência",
    description:
      "Para evitar contratempos, tente acessar a plataforma OC Telemedicina com alguns minutos de antecedência e aguarde o médico na sala de espera.",
  },
  {
    id: 3,
    title: "Peça ajuda ao concierge",
    description:
      "Caso enfrente alguma dificuldade ou problema para acessar à plataforma ou se conectar, comunique a situação ao concierge da unidade.",
  },
  {
    id: 4,
    title: "Evite distrações",
    description:
      "A qualidade da consulta também depende de concentração. Busque um local calmo e sem barulhos para evitar ruídos na comunicação com o médico.",
  },
];

export default teleconsultPreparations;
