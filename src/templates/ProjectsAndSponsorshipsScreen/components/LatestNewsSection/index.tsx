import BaseSwiper from "@/components/BaseSwiper";
import BaseContainer from "@/components/Container";
import { useState, useEffect } from "react";
import newsMock from "../../newsMock";
import NewsCard from "../NewsCard";

const LatestNewsSection = (): JSX.Element => {
  const [maxWidth, setMaxWidth] = useState<string>("100vw");

  useEffect(() => {
    const updateWidth = (): void => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setMaxWidth(`calc(100vw - ${scrollbarWidth}px)`);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className="relative left-1/2 mt-16 h-[601px] w-screen max-w-none -translate-x-1/2 bg-gray-foreground pt-14 lg:-mb-12"
      style={{ maxWidth }}
    >
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
