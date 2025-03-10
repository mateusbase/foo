import { Element } from "react-scroll";

const benefitItems = [
  {
    id: 1,
    name: "Mucosites",
  },
  {
    id: 2,
    name: "Dor",
  },
  {
    id: 3,
    name: "Trismo",
  },
  {
    id: 4,
    name: "Candidose",
  },
  {
    id: 5,
    name: "Herpes",
  },
  {
    id: 6,
    name: "Necroses ósseas",
  },
];

const LasertherapyUsage = (): JSX.Element => {
  return (
    <Element
      name="lasertherapy-usage"
      id="lasertherapy-usage"
      className="text-darkGray lg:mb-6"
    >
      <h1 className="text-2xl text-primary md:text-title-lg">
        O uso da laserterapia e seus benefícios
      </h1>
      <p className="mt-3 text-xl md:mt-6 lg:mt-4">
        Consagrada por seus resultados, a laserterapia atua na prevenção e no
        tratamento de reações em cavidade oral, tais como:
      </p>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-6 lg:grid-cols-3">
        {benefitItems.map((item) => (
          <div
            className="mt-4 flex h-[55px] items-center justify-center rounded-lg border border-primary text-center md:h-[105px]"
            key={item.id}
          >
            <p className="text-xl text-primary">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 md:text-xl">
        É um tratamento indolor, seguro e com baixa incidência de efeitos
        colaterais, realizado por um laser que acelera o processo de
        cicatrização e analgesia, atuando como ação anti-inflamatória.
      </p>
    </Element>
  );
};

export default LasertherapyUsage;
