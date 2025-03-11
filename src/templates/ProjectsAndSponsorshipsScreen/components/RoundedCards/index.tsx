import BaseButton from "@/components/Button";
import InfoCard from "@/components/InfoCard";
import { Project } from "../../supportedProjects";

interface CardsData {
  data: Project[];
}

const RoundedCards = ({ data }: CardsData): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {data.map((item) => (
        <InfoCard
          key={item.id}
          backgroundImageUrl={item.image}
          roundedSide="left"
          isBackgroundUrl
          customPadding={7}
        >
          <h3 className="text-2xl font-bold text-white xl:text-4xl">
            {item.title}
          </h3>
          <p className="-mt-8 mb-5 text-sm text-white xl:text-2xl">
            {item.description}
          </p>

          <BaseButton className="-mt-12 mb-7 h-12 w-60 border border-white bg-transparent text-lg text-white">
            Saiba mais
          </BaseButton>
        </InfoCard>
      ))}
    </div>
  );
};

export default RoundedCards;
