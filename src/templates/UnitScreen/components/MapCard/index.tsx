import { TourGuideIcon, UserIcon } from "@/components/Icons";
import { Clock, House, MapPin, Phone } from "lucide-react";
import BaseButton from "@/components/Button";
import { Section } from "./components/Section";
import { IconWithTitle } from "./components/IconWithTitle";
import { locationData } from "./mocks";

const LocationDetailsCard = (): JSX.Element => {
  return (
    <div className="] flex flex-col rounded-[20px] bg-gray-100 pt-6 md:rounded-none lg:min-h-[970px] lg:rounded-[20px]">
      <div className="mb-5 flex flex-col px-6 md:flex-row-reverse md:gap-4 lg:flex-col">
        <div className="mb-2 w-full lg:w-full">
          <IconWithTitle
            icon={<Phone size={34} className="text-primary" />}
            title="Telefone"
          />
          <p className="ml-10 mt-2 text-[18px] leading-[30px] text-darkGray">
            {locationData.phone}
          </p>
        </div>
        <div className="mb-2 w-full lg:w-full">
          <IconWithTitle
            icon={<Clock size={34} className="text-primary" />}
            title="Horário de funcionamento"
          />
          <p className="ml-10 mt-2 text-[18px] leading-[30px] text-darkGray">
            {locationData.hours}
          </p>
        </div>
        <div className="mb-2 w-full lg:w-full">
          <IconWithTitle
            icon={<MapPin size={34} className="text-primary" />}
            title="Endereço"
          />
          <p className="ml-10 mt-2 text-[18px] leading-[30px] text-darkGray">
            {locationData.address}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7558529423423!2d-46.69341978502346!3d-23.569239884679595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce573e7920f963%3A0x183c9f1d5287695d!2sAv.%20Brigadeiro%20Faria%20Lima%2C%204300%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004527-120%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1692616753152!5m2!1spt-BR!2sus"
          height="250"
          className="w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <BaseButton
          className="z-10 mb-10 mt-6 hidden md:flex lg:hidden"
          startContent={<TourGuideIcon />}
        >
          <p className="ml-4 text-white">
            Faça um tour virtual e conheça nossa unidade
          </p>
        </BaseButton>
      </div>

      <div className="mt-9 hidden px-6 lg:block">
        <Section
          icon={<House className="text-primary" />}
          title="Estrutura da Unidade"
          items={locationData.structure}
        />

        <Section
          icon={<UserIcon color="text-primary" size={0.8} />}
          title="Composição da Equipe"
          items={locationData.team}
        />
        <BaseButton
          className="mb-16 mt-6 hidden h-[65px] w-full items-center justify-center pb-2 pt-3 lg:flex"
          startContent={<TourGuideIcon className="shrink-0" />}
        >
          <p className="text-wrap text-white">
            Faça um tour virtual e conheça nossa unidade
          </p>
        </BaseButton>
      </div>
    </div>
  );
};

export default LocationDetailsCard;
