const cardData = [
  {
    id: 1,
    title: "Minimizar o risco de infecções e interrupções no tratamento",
    text: "Garantir que o paciente possa manter suas atividades diárias o mais próximo possível da normalidade e segurança.",
  },
  {
    id: 2,
    title: "Reduzir os desconfortos na cavidade oral",
    text: "Elevar significativamente a qualidade de vida do paciente, proporcionando alívio efetivo da dor e impactando positivamente alimentação, fala e qualidade do sono.",
  },
];

const ObjectivesSection = (): JSX.Element => {
  return (
    <section className="mb-8 text-darkGray">
      <h1 className="mb-6 text-2xl text-primary md:text-[40px]">Objetivos</h1>
      <div className="flex flex-col gap-6 lg:flex-row">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="mb-8 flex h-[270px] flex-col items-center justify-center rounded-2xl border-4 border-primary px-[31px] py-[41.5px] text-center md:h-[310px] lg:h-[350px] lg:w-1/2 xl:h-[282px]"
          >
            <h2 className="mb-4 text-xl font-bold md:w-4/5 md:text-3xl lg:text-lg xl:text-2xl">
              {card.title}
            </h2>
            <p className="text-lg md:w-4/5 md:text-2xl lg:text-base xl:text-xl">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ObjectivesSection;
