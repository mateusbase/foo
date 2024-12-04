import { UserIcon } from "@/components/Icons";
import { Clock, House, MapPin } from "lucide-react";
import { Section } from "./components/Section";
import { IconWithTitle } from "./components/IconWithTitle";

const locationData = {
  id: 1,
  hours: "Segunda a Sexta-feira - Das 8h às 18h",
  address:
    "Avenida Brigadeiro Faria Lima, 4.300 - 6º e 10º Andar - Vila Olímpia São Paulo/SP",
  structure: [
    "12 consultórios",
    "17 leitos (7 suítes com vista)",
    "Sala de emergência",
    "Área arborizada",
  ],
  team: [
    "Nutricionistas",
    "Psicólogos",
    "Sala de emergência",
    "Massoterapeutas",
  ],
};

const LocationDetailsCard = (): JSX.Element => {
  return (
    <div className="flex flex-col rounded-[20px] bg-gray-100 p-10 md:rounded-none lg:h-[970px] lg:w-[506px] lg:rounded-[20px]">
      <div className="flex flex-col md:flex-row-reverse lg:flex-col">
        <div className="mb-2 w-full md:w-1/2 lg:w-full">
          <IconWithTitle
            icon={<Clock size={34} className="text-primary" />}
            title="Horário de funcionamento"
          />
          <p className="ml-10 mt-2 text-[18px] leading-[30px] text-darkGray">
            {locationData.hours}
          </p>
        </div>
        <div className="mb-2 w-full md:w-1/2 lg:w-full">
          <IconWithTitle
            icon={<MapPin size={34} className="text-primary" />}
            title="Endereço"
          />
          <p className="ml-10 mt-2 text-[18px] leading-[30px] text-darkGray">
            {locationData.address}
          </p>
        </div>
      </div>

      <div className="mb-6 max-w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7558529423423!2d-46.69341978502346!3d-23.569239884679595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce573e7920f963%3A0x183c9f1d5287695d!2sAv.%20Brigadeiro%20Faria%20Lima%2C%204300%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004527-120%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1692616753152!5m2!1spt-BR!2sus"
          width="100%"
          height="250"
          className="border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

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
    </div>
  );
};

export default LocationDetailsCard;
