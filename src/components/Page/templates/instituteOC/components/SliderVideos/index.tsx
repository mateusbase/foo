import BaseSwiper from "@/components/BaseSwiper";
import VideoCard from "../VideoCard";
import "swiper/css";
import "swiper/css/navigation";
import { SliderVideosProps } from "./types";

export default function SliderVideos({
  medias,
}: SliderVideosProps): JSX.Element {
  return (
    <BaseSwiper
      data={medias.map((item, index) => ({ ...item, id: index }))}
      renderItem={(item) => (
        <VideoCard
          title={item.title}
          description={item.description}
          mediaData={item.media.data}
        />
      )}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
      }}
    />
  );
}
