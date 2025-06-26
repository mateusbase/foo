import Image from "next/image";

interface AccreditationEntry {
  name: string;
  image: {
    alt: string;
    width: number;
    key: string;
    url: string;
    height: number;
  };
}

interface AccreditationsSectionProps {
  title: string;
  entries: AccreditationEntry[];
}

const AccreditationsSection = ({
  title,
  entries,
}: AccreditationsSectionProps): JSX.Element => {
  return (
    <div className="mt-20 flex min-h-[400px] w-full flex-col items-center bg-gray-foreground text-center md:-mb-7 md:mt-20 md:h-auto lg:mb-0">
      <div className="flex flex-col md:mt-8 md:flex-row md:items-center md:gap-2 lg:mt-14">
        <h1 className="mt-14 font-lato-black text-2xl text-primary md:mt-0 lg:text-6xl">
          {title}
        </h1>
      </div>

      <div className="mb-9 mt-14 flex flex-col items-center gap-6 md:mb-10 md:w-[90%] md:flex-row md:flex-wrap lg:mb-24 lg:justify-center">
        {entries.map((entry) => (
          <div
            key={entry.name}
            className="flex min-h-[250px] w-[300px] flex-col items-center justify-center rounded-3xl bg-white px-1 py-9"
          >
            <Image
              src={entry.image.url}
              alt={entry.image.alt}
              width={entry.image.width}
              height={entry.image.height}
              className="mb-4"
            />

            {entry.name.split("\n").map((line) => (
              <span
                key={line}
                className="text-center font-lato-thin text-base text-darkGray md:text-xs"
              >
                {line}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccreditationsSection;
