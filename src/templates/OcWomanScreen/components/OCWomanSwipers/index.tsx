import BaseSwiper from "@/components/BaseSwiper";
import womanBenefitsMock from "../../data/woman-benefits.mock";
import BenefitsCards from "../benefitsCards";
import VideoCard from "../videoCard";
import { unitsData } from "../../data/unitsData";
import UnitsCard from "../UnitsCards";
import { UnitCardProps, VideoProps, WomanBenefitsMock } from "../../interfaces";

const CardsSwiper = (): JSX.Element => (
  <BaseSwiper<WomanBenefitsMock>
    data={womanBenefitsMock}
    className="md:hidden"
    renderItem={(benefit) => (
      <BenefitsCards
        id={benefit.id}
        title={benefit.title}
        description={benefit.description}
      />
    )}
  />
);

const VideosSwiper = (): JSX.Element => (
  <BaseSwiper<VideoProps>
    data={[
      {
        id: 1,
        src: "https://www.youtube.com/embed/GoHN_plQBqs",
        description: "OC Mulher",
      },
      {
        id: 2,
        src: "https://www.youtube.com/embed/GoHN_plQBqs",
        description: "OC Mulher",
      },
      {
        id: 3,
        src: "https://www.youtube.com/embed/GoHN_plQBqs",
        description: "OC Mulher",
      },
    ]}
    renderItem={(video) => (
      <VideoCard src={video.src} description={video.description} />
    )}
    slidesPerView={1}
    className="mb-7"
    spaceBetween={30}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3, spaceBetween: 10 },
    }}
  />
);

const LocationsSwiper = (): JSX.Element => (
  <BaseSwiper<UnitCardProps>
    data={unitsData}
    renderItem={(unit) => (
      <UnitsCard
        id={unit.id}
        address={unit.address}
        src={unit.image}
        complement={unit.complement}
        unitName={unit.unitName}
        city={unit.city}
        hours={unit.hours}
      />
    )}
    slidesPerView={1}
    spaceBetween={20}
    breakpoints={{
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 2, spaceBetween: 30 },
    }}
    className="mt-14 lg:w-3/5"
  />
);

export { CardsSwiper, VideosSwiper, LocationsSwiper };
