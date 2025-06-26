import PageLayout from "@/components/PageLayout";
import AlertComponent from "@/components/Blocks/Alert";
import GradientBanner from "@/components/Blocks/GradientBanner";
import CTACard from "@/components/Blocks/CTACard";
import CardGrid from "@/components/Blocks/CardGrid";
import GradientBannerGrid from "@/components/Blocks/GradientBannerGrid";
import { WorkWithUsRootProps } from "./types";

export function WorkWithUsRoot({
  data,
  breadcrumbs,
}: WorkWithUsRootProps): JSX.Element {
  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <main className="mb-8 mt-10 flex flex-col gap-10">
          <AlertComponent
            title={data.alert.title}
            description={data.alert.description}
            icon={data.alert.icon}
          />

          <GradientBanner
            subtitle={data.mainBanner.subtitle}
            title={data.mainBanner.title}
            gradientType="dark-purple"
            media={{
              data: {
                type: "image",
                data: data.mainBanner.image,
              },
              side: "right",
            }}
            link={{
              text: data.mainBanner.text,
              target: {
                url: data.mainBanner.target.url,
                openOnNewTab: data.mainBanner.target.openOnNewTab,
                external: data.mainBanner.target.external,
              },
              variant: "button",
            }}
          />

          <GradientBanner
            description={data.secondaryBanner.text}
            listItems={data.secondaryBanner.values}
            gradientType="gradient"
            media={{
              data: {
                type: "image",
                data: data.secondaryBanner.image,
              },
              side: "left",
            }}
          />

          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            {data.ctaCards.map((card) => (
              <CTACard
                key={`${card.cta.text}-${card.cta.link.url}`}
                title=""
                richTextContent={card.text}
                variant={card.variant}
                text={card.cta.text}
                link={card.cta.link}
              />
            ))}
          </div>

          <CardGrid
            title={data.featureCards.title}
            description={data.featureCards.description}
            columns="3"
            centerText
            backgroundColor="white"
            cards={data.featureCards.cards.map((card) => ({
              title: card.title,
              description: card.description,
              icon: card.image,
            }))}
            titlePosition="side"
          />

          <GradientBannerGrid
            columns="2"
            banners={[
              {
                title: data.banner.left.title,
                description: data.banner.left.description,
                media: {
                  data: {
                    type: "image",
                    data: data.banner.left.image,
                  },
                  side: "top",
                },
                link: {
                  text: data.banner.left.link.text,
                  target: {
                    url: data.banner.left.link.target.url,
                    openOnNewTab: data.banner.left.link.target.openOnNewTab,
                    external: data.banner.left.link.target.external,
                  },
                  variant: "button",
                },
              },
              {
                title: data.banner.right.title,
                description: data.banner.right.description,
                media: {
                  data: {
                    type: "image",
                    data: data.banner.right.image,
                  },
                  side: "top",
                },
                link: {
                  text: data.banner.right.link.text,
                  target: {
                    url: data.banner.right.link.target.url,
                    openOnNewTab: data.banner.right.link.target.openOnNewTab,
                    external: data.banner.right.link.target.external,
                  },
                  variant: "button",
                },
              },
            ]}
          />
        </main>
      </PageLayout>
    </main>
  );
}
