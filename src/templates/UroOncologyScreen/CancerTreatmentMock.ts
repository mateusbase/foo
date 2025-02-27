interface CancerTreatmentProps {
  id: number;
  title: string;
  description: string;
}

const cancerTreatmentMock: CancerTreatmentProps[] = [
  {
    id: 1,
    title: "Quimioterapia",
    description:
      "Um dos tratamentos mais usados contra o câncer. É feito por medicamentos que se misturam à corrente sanguínea e são levados a todo o corpo, destruindo as células cancerígenas para impedir o crescimento de tumores.",
  },
  {
    id: 2,
    title: "Radioterapia",
    description:
      "Um dos tratamentos mais usados para pacientes com câncer. Através da radiação, pode destruir ou incapacitar a duplicação de células causadoras de tumores e, assim, ajudar no combate e controle da doença.",
  },
  {
    id: 3,
    title: "Cirurgia oncológica",
    description:
      "Variedade de procedimentos cirúrgicos minimamente invasivos para remover tumores, incluindo cirurgia robótica.",
  },
  {
    id: 4,
    title: "Hormonioterapia",
    description:
      "Tratamento que bloqueia a produção, ou interfere no local onde a testosterona age, retardando ou interrompendo o crescimento de tumor na próstata.",
  },
  {
    id: 5,
    title: "Imunoterapia",
    description:
      "Tem como principal finalidade permitir que as células imunes do paciente possam reagir contra as células tumorais, eliminando-as do organismo. É frequentemente empregada em casos de tumores renais e de bexiga.",
  },
  {
    id: 6,
    title: "Drogas-alvo moleculares",
    description:
      "Tratamento inovador que bloqueia proteínas e alvos específicos das células tumorais. Em muitos casos, seu uso está associado à realização de teste genético para estudo do tumor.",
  },
];

export default cancerTreatmentMock;
