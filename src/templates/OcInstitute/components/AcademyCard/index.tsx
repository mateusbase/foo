export default function AcademyCard(): JSX.Element {
  const options = [
    { id: 1, title: "Cirurgia robótica", link: "/#" },
    { id: 2, title: "Odontoclínica", link: "/#" },
    { id: 3, title: "Cirurgia robótica", link: "/#" },
    { id: 4, title: "Oncologia de precisão", link: "/#" },
  ];

  return (
    <div className="flex h-[536px] w-full flex-col justify-between text-white lg:flex-row">
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

      <div className="mt-10 grid size-full grid-cols-2 gap-5 lg:mt-0 lg:w-1/2 lg:pl-10">
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`flex min-h-24 min-w-40 items-end justify-start rounded-2xl p-7 lg:min-h-64 lg:min-w-28 ${(Math.floor(index / 2) + (index % 2)) % 2 === 0
                ? "bg-primary text-white"
                : "bg-primary-foreground text-greenDark"
              }`}
          >
            <p className="eading-10 text-sm font-bold lg:text-[40px] lg:font-semibold">
              {option.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
