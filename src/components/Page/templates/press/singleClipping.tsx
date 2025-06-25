import PageLayout from "@/components/PageLayout";
import BaseContainer from "@/components/Container";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import { RichText } from "@/components/Blocks/RichText";
import { SingleClippingRootProps } from "./types";
import NewsPreviewCard from "../news/components/NewsPreviewCard";
import { formatFullDate } from "../events/utils";

export function SingleClippingRoot({
  data,
  breadcrumbs,
}: SingleClippingRootProps): JSX.Element {
  return (
    <>
      <PageLayout
        title={data.name}
        subtitle={data.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mb-10 mt-20 flex flex-col items-center justify-center px-4 md:px-0">
          <h5 className="text-xl text-darkGray">{formatFullDate(data.date)}</h5>

          <h1 className="my-4 max-w-7xl text-center text-2xl font-light text-primary md:text-6xl">
            {data.name}
          </h1>
        </div>

        <h3 className="mt-6 text-left text-2xl font-bold leading-7 text-darkGray md:text-2xl">
          {data.description}
        </h3>

        <div className="mt-6 space-y-6 text-left leading-7 text-darkGray md:text-xl">
          <RichText content={data.content} />
        </div>

        <div className="my-10 flex">
          <ShareOptions options={socialNetwork} />
        </div>
      </PageLayout>

      <div className="hidden bg-gray-foreground py-20 lg:flex">
        <BaseContainer className="flex flex-col justify-start">
          <h1 className="mb-6 self-start text-6xl font-light text-primary">
            Itens Relacionados
          </h1>

          <div className="mt-10 grid w-full grid-cols-4">
            {data.relatedArticles.map((news) => (
              <NewsPreviewCard
                key={news.name}
                name={news.name}
                date={news.date}
                description={news.description}
                author={news.author}
                path={news.path}
              />
            ))}
          </div>
        </BaseContainer>
      </div>
    </>
  );
}
