import BaseButton from "@/components/Button";
import { useDeviceType } from "@/hooks/useDeviceType";
import Image from "next/image";
import UnitsAndTreatmentCard from "../UnitsAndTreatmentCard";
import unitsAndTreatmentsMock from "../../unitsAndTreatmentsMock";

const CountrySection = (): JSX.Element => {
  const deviceType = useDeviceType();

  return (
    <div className="container mx-auto px-4">
      <div className="lg:flex lg:items-center">
        <div className="mt-20 md:mt-0 md:w-full lg:mt-24 lg:w-1/2">
          <h1 className="w-3/5 text-2xl text-primary lg:w-full">
            Grande presença em território nacional
          </h1>
          <p className="mt-6 text-darkGray lg:mt-8">
            A OC Franquias foi criada para concretizar o modelo inovador de
            cuidado oncológico da Oncoclínicas&CO, e levar o tratamento de
            qualidade a todo o Brasil, tornando-o acessível em qualquer cidade
            como oportunidade para médicos especialistas interessados em
            investir.
          </p>
        </div>

        <div className="flex w-full justify-center md:hidden">
          <div className="mb-8 mt-10 flex flex-col items-center text-center text-3xl text-primary">
            <div className="mb-14 flex justify-center">
              <Image
                src="/assets/images/oc-franquia/country-info/image 66 (1).png"
                alt="OC Franquia"
                width={1920}
                height={1080}
                className="z-10 h-[330px] w-[316px] object-cover"
              />
            </div>

            <span>39 cidades brasileiras</span>
            <span>15 estados</span>
            <span>+ Distrito Federal</span>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:justify-between lg:hidden">
          <div className="mb-8 mt-80 flex w-1/2 flex-col text-left text-3xl text-primary">
            <span>39 cidades brasileiras</span>
            <span>15 estados</span>
            <span>+ Distrito Federal</span>
          </div>

          <div className="flex w-1/2 justify-center">
            <Image
              src="/assets/images/oc-franquia/country-info/image 66 (1).png"
              alt="OC Franquia"
              width={1920}
              height={1080}
              className="z-10 size-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-center lg:gap-8">
          <div className="flex w-1/2 items-center justify-center">
            <Image
              src="/assets/images/oc-franquia/country-info/image 66 (1).png"
              alt="OC Franquia"
              width={1920}
              height={1080}
              className="h-[464px] w-[443px] object-cover"
            />
          </div>

          <div className="flex w-1/2 flex-col items-center self-center text-center text-3xl text-primary">
            <span className="w-max whitespace-nowrap">
              39 cidades brasileiras
            </span>
            <span className="w-max whitespace-nowrap">15 estados</span>
            <span className="w-max whitespace-nowrap">+ Distrito Federal</span>
          </div>
        </div>
      </div>

      <div className="mb-9 flex flex-col items-center justify-center">
        <div className="lg:mt-20- mt-32 hidden flex-col gap-8 md:flex lg:flex-row">
          {unitsAndTreatmentsMock.map((unit) => (
            <UnitsAndTreatmentCard
              icon={unit.icon}
              text={unit.text}
              title={unit.title}
              key={unit.id}
            />
          ))}
        </div>
        <BaseButton className="mt-10 w-full rounded-md bg-purpleMedium text-white md:w-[322px] lg:mt-8">
          {deviceType === "mobile" ? "Faça o download" : "Saiba mais"}
        </BaseButton>
      </div>
    </div>
  );
};

export default CountrySection;
