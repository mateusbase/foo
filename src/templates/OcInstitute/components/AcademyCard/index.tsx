export default function AcademyCard(): JSX.Element {
  const options = [
    { id: 1, title: "Cirurgia robótica", link: "/#" },
    { id: 2, title: "Odontoclínica", link: "/#" },
    { id: 3, title: "Cirurgia robótica", link: "/#" },
    { id: 4, title: "Oncologia de precisão", link: "/#" },
  ];

  return (
    <div className="flex w-full flex-col justify-between text-white lg:flex-row">
      <div className="flex flex-col justify-center gap-4 bg-gradient-to-t from-purpleDark to-purpleLight p-10 lg:w-1/2 lg:rounded-bl-[100px] lg:p-20">
        <p className="text-2xl font-normal lg:text-4xl">OC Academia</p>
        <p className="mt-6 text-3xl font-light lg:text-5xl">
          Multiplataforma Educacional do Instituto Onoclínicas
        </p>
        <p className="mt-4 text-lg lg:text-2xl">
          Acesse a plataforma e navegue por conteúdos educativos criados pelos
          melhores especialistas
        </p>
      </div>

      <div className="mt-10 grid w-full grid-cols-2 gap-5 lg:mt-0 lg:w-1/2 lg:pl-10">
        {options.map((option, index) => {
          const isEven = Math.floor(index / 2) % 2 === index % 2;
          const bgColor = isEven
            ? "bg-primary text-white"
            : "bg-primary-foreground text-greenDark";

          return (
            <div
              key={option.id}
              className={`flex min-h-28 min-w-40 items-end justify-start rounded-2xl p-7 lg:min-h-64 lg:min-w-28 ${bgColor}`}
            >
              <p className="text-sm font-bold lg:text-3xl lg:font-semibold lg:leading-10 2xl:text-title-lg">
                {option.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
