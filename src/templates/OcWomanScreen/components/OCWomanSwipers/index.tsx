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
    className="mb-12 md:hidden"
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
        imageSrc: "/assets/images/ocMulher/image (13).png",
      },
      {
        id: 2,
        src: "https://www.youtube.com/embed/GoHN_plQBqs",
        description: "OC Mulher",
        imageSrc: "/assets/images/ocMulher/image (13).png",
      },
      {
        id: 3,
        src: "https://www.youtube.com/embed/GoHN_plQBqs",
        description: "OC Mulher",
        imageSrc: "/assets/images/ocMulher/image (13).png",
      },
    ]}
    renderItem={(video) => (
      <VideoCard
        src={video.src}
        description={video.description}
        imageSrc={video.imageSrc}
      />
    )}
    className="mb-[69px] md:mb-2"
    slidesPerView={1}
    breakpoints={{
      768: { slidesPerView: 2, spaceBetween: 40 },
      1025: { slidesPerView: 3, spaceBetween: 40 },
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
    className="mt-[45px] md:-mt-3 lg:mt-0 lg:w-3/5"
  />
);

export { CardsSwiper, VideosSwiper, LocationsSwiper };
