import BaseSwiper from "@/components/BaseSwiper";
import BaseContainer from "@/components/Container";
import newsMock from "../../newsMock";
import NewsCard from "../NewsCard";

const LatestNewsSection = (): JSX.Element => {
  return (
    <div className="full-bleed-lg mt-16 h-[601px] bg-gray-foreground pt-14 lg:-mb-12">
      <BaseContainer>
        <h1 className="mb-10 text-2xl font-light text-primary md:text-4xl lg:mb-14 lg:text-6xl">
          Últimas notícias
        </h1>
        <BaseSwiper
          data={newsMock}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 10 },
            1025: { slidesPerView: 4, spaceBetween: 10 },
          }}
          renderItem={(news) => (
            <NewsCard
              key={news.id}
              image={news.imagem}
              title={news.titulo}
              subtitle={news.subtitulo}
              description={news.descricao}
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
