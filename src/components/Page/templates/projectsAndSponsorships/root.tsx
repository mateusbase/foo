import PageLayout from "@/components/PageLayout";
import BaseSwiper from "@/components/BaseSwiper";
import Image from "next/image";
import ShareOptions from "@/components/Blocks/ShareOptions";
import socialNetwork from "@/components/Blocks/ShareOptions/socialNetwork";
import GradientBanner from "@/components/Blocks/GradientBanner";
import GradientBannerGrid from "@/components/Blocks/GradientBannerGrid";
import { useDeviceType } from "@/hooks/useDeviceType";
import { ProjectDescription, ProjectsAndSponsorshipsRootProps } from "./types";
import ProjectCards from "./components/ProljectCards";
import ProjectsDescriptionCards from "./components/ProjectsDescriptionCards";
import LatestNewsSection from "./components/LatestNewsSection";

export function ProjectsAndSponsorshipsRoot({
  data,
  breadcrumbs,
}: ProjectsAndSponsorshipsRootProps): JSX.Element {
  const deviceType = useDeviceType();

  const getColumnsNumber = (): number => {
    if (deviceType === "desktop") {
      return 3;
    }

    if (deviceType === "tablet") {
      return 2;
    }

    return 1;
  };

  const mappedDescriptions: ProjectDescription[] = data.events.map(
    (event, index) => ({
      id: index,
      icon: event.image.url,
      title: event.title,
      description: event.description,
    }),
  );

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <GradientBanner
          media={{
            data: {
              type: data.mainBanner.media.type,
              data: data.mainBanner.media.data,
            },
            side: "left",
          }}
          description={data.mainBanner.text}
        />

        <div className="mt-10">
          <h1 className="mb-3 text-2xl text-primary md:text-4xl">
            {data.location.title}
          </h1>

          <span className="mb-6 text-darkGray md:text-xl">
            {data.location.description}
          </span>

          <BaseSwiper
            data={data.location.images.map((img, index) => ({
              ...img,
              id: index,
            }))}
            className="mx-auto w-full md:mb-14 md:mt-20"
            renderItem={(item) => (
              <Image
                src={item.url}
                width={1920}
                height={1080}
                className="mb-6 mt-5 w-full lg:mb-10"
                alt={item.alt}
              />
            )}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 10 },
              1025: { slidesPerView: 3, spaceBetween: 20 },
            }}
          />
        </div>

        <div className="my-10">
          <h1 className="mb-3 text-2xl text-primary md:text-4xl">
            {data.cards.title}
          </h1>

          <span className="mt-4 text-base text-darkGray md:text-xl">
            {data.cards.description}
          </span>

          <ProjectCards
            projects={data.cards.cards.map((card, index) => ({
              id: index,
              image: card.image.url,
              title: card.title,
              text: card.description,
            }))}
          />
        </div>

        <div className="mt-12">
          <GradientBannerGrid
            banners={data.projects.banners.map((banner) => ({
              title: banner.title,
              description: banner.description,
              linkText: banner.linkText,
              link: {
                variant: "button",
                text: banner.linkText,
                target: banner.link,
              },
              media: {
                side: "top",
                data: {
                  type: "image",
                  data: banner.image,
                },
              },
            }))}
            title={data.projects.title}
            description={data.projects.description}
            columns={getColumnsNumber().toString()}
          />
        </div>

        <div>
          <BaseSwiper
            data={mappedDescriptions}
            renderItem={(event) => (
              <ProjectsDescriptionCards
                key={event.id}
                description={event.description}
                icon={event.icon}
                title={event.title}
              />
            )}
            className="mt-20 md:hidden"
          />

          <div className="mb-20 mt-10 hidden w-full flex-col justify-center gap-6 md:flex lg:grid lg:grid-cols-2">
            {mappedDescriptions.map((event) => (
              <ProjectsDescriptionCards
                key={event.id}
                description={event.description}
                icon={event.icon}
                title={event.title}
              />
            ))}
          </div>
        </div>

        <span className="mb-4 text-center text-lg text-lightGray md:text-2xl">
          {data.disclaimer}
        </span>

        <GradientBanner
          media={{
            data: {
              type: "image",
              data: data.banner.image,
            },
            side: "right",
          }}
          link={{
            variant: "button",
            text: data.banner.linkText,
            target: data.banner.link,
          }}
          title={data.banner.title}
          description={data.banner.description}
        />

        <ShareOptions options={socialNetwork} />
      </PageLayout>

      <div className="mt-10">
        <LatestNewsSection
          title={data.news.title}
          entries={data.news.entries}
        />
      </div>
    </main>
  );
}
