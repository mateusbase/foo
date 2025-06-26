import PageLayout from "@/components/PageLayout";
import DynamicBanner from "@/components/Blocks/DynamicBanner";
import { RichText } from "@/components/Blocks/RichText";
import BaseSwiper from "@/components/BaseSwiper";
import { CampaignsRootProps } from "./types";

export function CampaignsRoot({
  data,
  breadcrumbs,
}: CampaignsRootProps): JSX.Element {
  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <DynamicBanner
          title={data.mainBanner.title}
          description={data.mainBanner.description}
          actionButtonText={data.mainBanner.linkText}
          image={data.mainBanner.media.data}
          campaigns
        />

        <div className="container mt-14">
          <h2 className="mb-14 w-[90%] text-wrap font-lato-thin text-3xl text-primary">
            {data.content.title}
          </h2>

          <div className="mb-16 flex flex-col items-center gap-6 font-lato-regular text-base text-darkGray">
            <RichText
              content={data.content.body}
              className="[&_p.editor-paragraph]:whitespace-normal [&_p.editor-paragraph]:break-words [&_p.editor-paragraph]:text-2xl"
            />
          </div>
        </div>

        <div className="mb-16">
          <h1 className="mb-6 w-full text-center text-3xl text-primary md:text-4xl lg:text-left">
            {data.campaigns.title}
          </h1>

          <BaseSwiper
            data={data.campaigns.campaigns.map((item) => ({
              ...item,
              id: item.image.key,
            }))}
            shouldLoop={false}
            breakpoints={{
              "768": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "1025": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            renderItem={(banner) => (
              <a
                href={banner.link.url}
                target={banner.link.external ? "_blank" : "_self"}
                rel={banner.link.external ? "noopener noreferrer" : undefined}
              >
                <img
                  src={banner.image.url}
                  alt={banner.image.alt}
                  width={banner.image.width}
                  height={banner.image.height}
                  className="w-full rounded-md object-cover"
                />
              </a>
            )}
          />
        </div>
      </PageLayout>
    </main>
  );
}
