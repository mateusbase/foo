import { UserIcon } from "@/components/Icons";
import { Clock, House, MapPin, Phone } from "lucide-react";
import { Section } from "./components/Section";
import { IconWithTitle } from "./components/IconWithTitle";
import { MapCardProps } from "./types";
import { GuidedTourButton } from "../GuidedTourButton";

const MapCard = ({
  address,
  workingHours,
  structure,
  team,
  contact,
  handleVirtualTourClick,
  shouldShowVirtualTourButton,
}: MapCardProps): JSX.Element => {
  const generateIframeLink = (rawLink: string): string => {
    const placeNameMatch = rawLink.match(/maps\/place\/([^/@]+)/);

    const placeName = placeNameMatch
      ? decodeURIComponent(placeNameMatch[1].replace(/\+/g, " "))
      : null;

    if (!placeName) return "";

    const encodedQuery = encodeURIComponent(placeName);

    return `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
  };

  return (
    <div className="flex h-fit flex-col rounded-[20px] bg-gray-100 md:rounded-none lg:min-w-[300px] lg:rounded-[20px]">
      <div className="flex flex-col p-10 md:flex-row-reverse lg:flex-col">
        <div className="mb-2 w-full lg:w-full">
          <IconWithTitle
            icon={<Phone size={34} className="text-primary" />}
            title="Telefone"
          >
            <span className="mt-2 text-lg text-darkGray">{contact?.phone}</span>
          </IconWithTitle>
        </div>

        <div className="mb-2 w-full lg:w-full">
          <IconWithTitle
            icon={<Clock size={34} className="text-primary" />}
            title="Horário de funcionamento"
          >
            {workingHours &&
              workingHours.map((hour) => (
                <div
                  key={`${hour?.day} - ${hour?.hour}`}
                  className="text-lg text-darkGray"
                >
                  {`${hour?.day} - ${hour?.hour}`}
                </div>
              ))}
          </IconWithTitle>
        </div>

        <div className="mb-2 w-full lg:w-full">
          <IconWithTitle
            icon={<MapPin size={34} className="text-primary" />}
            title="Endereço"
          >
            <div className="mt-2 text-lg text-darkGray">
              <span>{`${address?.street}, ${address?.number}`}</span>

              {address?.complement && <span>{address?.complement}</span>}

              <span>{`${address?.city} - ${address?.state}`}</span>
            </div>
          </IconWithTitle>
        </div>
      </div>

      <div className="max-w-full">
        <iframe
          title="map"
          src={generateIframeLink(address?.mapLink)}
          width="100%"
          height="250"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="mb-10 mt-6 hidden px-10 md:flex lg:hidden">
          <GuidedTourButton
            handleClick={handleVirtualTourClick}
            shouldShow={shouldShowVirtualTourButton}
          />
        </div>
      </div>

      <div className="hidden p-10 lg:block">
        <Section
          icon={<House className="text-primary" />}
          title="Estrutura da Unidade"
          items={structure}
        />

        <Section
          icon={<UserIcon color="text-primary" size={0.8} />}
          title="Composição da Equipe"
          items={team}
        />

        <GuidedTourButton
          handleClick={handleVirtualTourClick}
          shouldShow={shouldShowVirtualTourButton}
        />
      </div>
    </div>
  );
};

export default MapCard;
