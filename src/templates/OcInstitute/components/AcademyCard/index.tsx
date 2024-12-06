import PurpleBanner from "@/components/PurpleBanner";

export default function AcademyCard(): JSX.Element {
  const options = [
    { id: 1, title: "Cirurgia robótica", link: "/#" },
    { id: 2, title: "Odontoclínica", link: "/#" },
    { id: 3, title: "Cirurgia robótica", link: "/#" },
    { id: 4, title: "Oncologia de precisão", link: "/#" },
  ];

  return (
    <div className="flex w-full flex-col justify-between text-white lg:flex-row">
      <PurpleBanner
        title="OC Academia"
        subtitle="Multiplataforma Educacional do Instituto Onoclínicas"
        description="Acesse a plataforma e navegue por conteúdos educativos criados pelos melhores especialistas"
      />

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
              <p className="text-sm font-bold lg:text-3xl lg:font-semibold lg:leading-10 2xl:text-[40px]">
                {option.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
