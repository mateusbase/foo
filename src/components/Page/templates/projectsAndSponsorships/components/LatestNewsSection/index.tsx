import BaseSwiper from "@/components/BaseSwiper";
import BaseContainer from "@/components/Container";
import { LatestNewsSectionProps } from "./types";
import NewsPreviewCard from "../../../news/components/NewsPreviewCard";

const LatestNewsSection = ({
  title,
  entries,
}: LatestNewsSectionProps): JSX.Element => {
  return (
    <div className="bg-gray-foreground py-20">
      <BaseContainer>
        <h1 className="mb-10 text-2xl font-light text-primary md:text-4xl lg:mb-14 lg:text-6xl">
          {title}
        </h1>

        <BaseSwiper
          data={entries.map((entry) => ({
            ...entry,
            id: entry.title,
          }))}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 10 },
            1025: { slidesPerView: 4, spaceBetween: 10 },
          }}
          renderItem={(news) => (
            <NewsPreviewCard
              key={news.id}
              image={news.image}
              name={news.title}
              description={news.description}
              date={news.subtitle}
              path={news.link.url}
            />
          )}
          hasArrows={false}
          className="mx-auto flex"
        />
      </BaseContainer>
    </div>
  );
};

export default LatestNewsSection;
