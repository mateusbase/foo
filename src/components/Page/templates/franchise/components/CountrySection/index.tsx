import { useDeviceType } from "@/hooks/useDeviceType";
import Image from "next/image";
import Link from "next/link";
import UnitsAndTreatmentCard from "../UnitsAndTreatmentCard";
import { CountrySectionProps } from "./types";

const CountrySection = ({
  location,
  cards,
}: CountrySectionProps): JSX.Element => {
  const deviceType = useDeviceType();
  const sideTextLines = location.sideText.split("\n");

  return (
    <div className="container mx-auto px-4">
      <div className="lg:flex lg:items-center">
        <div className="mt-4 md:mt-0 md:w-full lg:mt-24 lg:w-1/2">
          <h1 className="w-3/5 text-2xl text-primary lg:w-full">
            {location.title}
          </h1>

          <p className="mt-6 text-darkGray lg:mt-8">{location.description}</p>
        </div>

        <div className="flex w-full justify-center md:hidden">
          <div className="mb-8 mt-10 flex flex-col items-center text-center text-3xl text-primary">
            <div className="mb-14 flex justify-center">
              <Image
                src={location.map.url}
                alt={location.map.alt}
                width={location.map.width}
                height={location.map.height}
                className="z-10 h-[330px] w-[316px] object-cover"
              />
            </div>

            {sideTextLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:justify-between lg:hidden">
          <div className="mb-8 mt-80 flex w-1/2 flex-col text-left text-3xl text-primary">
            {sideTextLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>

          <div className="flex w-1/2 justify-center">
            <Image
              src={location.map.url}
              alt={location.map.alt}
              width={location.map.width}
              height={location.map.height}
              className="z-10 size-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-center lg:gap-8">
          <div className="flex w-1/2 items-center justify-center">
            <Image
              src={location.map.url}
              alt={location.map.alt}
              width={location.map.width}
              height={location.map.height}
              className="h-[464px] w-[443px] object-cover"
            />
          </div>

          <div className="flex w-1/2 flex-col items-center self-center text-center text-3xl text-primary">
            {sideTextLines.map((line) => (
              <span key={line} className="w-max whitespace-nowrap">
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-9 flex flex-col items-center justify-center">
        <div className="lg:mt-20- mt-32 hidden flex-col gap-8 md:flex lg:flex-row">
          {cards.cards.map((unit) => (
            <UnitsAndTreatmentCard
              icon={unit.image.url}
              text={unit.description}
              title={unit.title}
              key={unit.title}
            />
          ))}
        </div>

        <Link
          href={cards?.link?.target.url}
          target={cards?.link?.target.external ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="mt-10 w-full rounded-md bg-purpleMedium px-4 py-3 text-center text-lg text-white md:w-[322px] lg:mt-8"
        >
          {deviceType === "mobile" ? "Faça o download" : "Saiba mais"}
        </Link>
      </div>
    </div>
  );
};

export default CountrySection;
