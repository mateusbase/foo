import BaseSwiper from "@/components/BaseSwiper";
import newsMock from "../../newsMock";
import NewsCard from "../NewsCard";

const LatestNewsSection = (): JSX.Element => {
  return (
    <div className="full-bleed-lg mt-16 h-[601px] bg-gray-foreground pl-10 pr-9 pt-14 lg:-mb-12">
      <h1 className="mb-10 text-2xl text-primary">Últimas notícias</h1>
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
        className="mx-auto flex w-[90%] items-center justify-self-center align-middle"
      />
    </div>
  );
};

export default LatestNewsSection;
