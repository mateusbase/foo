import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import Image from "next/image";
import { RichText } from "@/components/Blocks/RichText";
import BaseContainer from "@/components/Container";
import BaseSwiper from "@/components/BaseSwiper";
import { SingleNewRootProps } from "./types";
import { formatFullDate } from "../events/utils";
import NewsPreviewCard from "./components/NewsPreviewCard";

export function SingleNewRoot({
  data,
  breadcrumbs,
}: SingleNewRootProps): JSX.Element {
  const { title, date, category, content, relatedArticles } = data;
  const { icon } = category || {};
  const { url, alt, width, height } = icon || {};

  return (
    <main>
      <PageLayout breadcrumbs={breadcrumbs} title={data.title}>
        <div className="mt-10 flex flex-col items-center">
          <h4 className="text-sm text-lightGray md:text-xl">
            {formatFullDate(date)}
          </h4>

          <Button
            className="mt-10 max-h-9 text-sm md:w-52"
            variant="outlined"
            color="secondary"
          >
            <Image src={url ?? ""} width={width} height={height} alt={alt} />
            {category.name}
          </Button>

          <h1 className="mt-10 text-center text-xl font-light text-darkGray md:text-4xl md:text-primary lg:w-3/4 lg:text-5xl">
            {title}
          </h1>

          <div className="mt-10">
            <RichText
              content={content}
              className="text-sm font-bold text-lightGray md:text-base lg:text-2xl"
            />
          </div>
        </div>
      </PageLayout>

      <div className="mt-14 hidden items-start bg-gray-foreground py-20 lg:flex">
        <BaseContainer>
          <h1 className="mb-6 self-start text-6xl font-light text-primary">
            Itens relacionados
          </h1>

          <div className="mt-10 grid w-full grid-cols-4">
            {relatedArticles?.map((news) => (
              <NewsPreviewCard
                key={news.id}
                author={news.author}
                name={news.title}
                date={news.date}
                description={news.shortDescription}
                path={news.path}
              />
            ))}
          </div>
        </BaseContainer>
      </div>

      <div className="flex w-full bg-gray-foreground py-20 lg:hidden">
        <BaseContainer className="w-full">
          <h1 className="mb-6 self-start text-6xl font-light text-primary">
            Itens relacionados
          </h1>

          <BaseSwiper
            data={relatedArticles}
            renderItem={(news) => (
              <NewsPreviewCard
                key={news.id}
                author={news.author}
                name={news.title}
                date={news.date}
                description={news.shortDescription}
                path={news.path}
              />
            )}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              760: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          />
        </BaseContainer>
      </div>
    </main>
  );
}
