import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import BaseContainer from "@/components/Container";
import BaseSwiper from "@/components/BaseSwiper";
import clsx from "clsx";
import { InstituteOcRootProps, LinkPath } from "./types";
import EducationalCard from "./components/EducationalCard";
import AcademyCard from "./components/AcademyCard";
import SliderVideos from "./components/SliderVideos";
import SliderMedicalService from "./components/SliderMedicalService";
import Agenda from "./components/Agenda";

export function InstituteOcRoot({
  data,
  breadcrumbs,
}: InstituteOcRootProps): JSX.Element {
  const {
    imageLinks,
    mainBanner,
    mediaRow,
    bannerCards,
    bannerLinks,
    partners,
    events,
  } = data;

  const { entries } = events;

  const getHref = (link: LinkPath): string => {
    if (link?.variant === "external" && link.url) return link.url;

    if (!link?.variant && link.path) return `/${link.path}`;

    return "";
  };

  const topClasses = ["top-12", "top-[120px]", "top-[69px]"];

  return (
    <>
      <PageLayout
        title={data.header.title}
        subtitle={data.header.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="my-10 grid grid-cols-1 gap-6 md:mt-11 md:grid-cols-2 md:gap-8 lg:mb-8 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-12">
          {imageLinks.map((item, index) => (
            <Link key={item.title} href={getHref(item.link)}>
              <div className="relative h-[265px] rounded-lg">
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="size-full rounded-lg object-cover brightness-[0.5]"
                />

                <div
                  className={`absolute bottom-20 left-8 ${topClasses[index]} z-20 text-white`}
                >
                  <h3
                    className={clsx(
                      "mb-4 font-lato-black text-3xl",
                      index === 0 && "w-[30%] text-wrap",
                      index === 2 && "w-1/2",
                    )}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={clsx(
                      "line-clamp-4 font-lato-bold text-sm",
                      index === 0 && "w-[55%]",
                      index === 1 && "w-3/5",
                      index === 2 && "w-2/5",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <EducationalCard
          title={mainBanner.title}
          subtitle={mainBanner.subtitle}
        />

        <AcademyCard
          title={bannerCards.title}
          subtitle={bannerCards.subTitle}
          description={bannerCards.description}
          cards={bannerCards.cards}
        />

        <div className="flex flex-col space-y-4 lg:mt-10 lg:items-center lg:text-center">
          <div className="my-10">
            <h3 className="mb-4 text-2xl text-primary lg:text-6xl">
              {mediaRow.title}
            </h3>

            <p className="text-darkGray lg:text-2xl">{mediaRow.description}</p>
          </div>

          <SliderVideos medias={mediaRow.medias} />

          <Agenda
            title={events.title}
            subtitle={events.description}
            events={entries}
            calendarButtonText={events.calendarButtonText}
            subscribeButtonText={events.subscribeButtonText}
          />

          <SliderMedicalService bannerLinks={bannerLinks} />
        </div>
      </PageLayout>

      <div className="mt-10 flex bg-gray-foreground py-20">
        <BaseContainer className="w-11/12 md:w-full">
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-center text-2xl text-primary md:text-6xl md:font-light">
                {partners.title}
              </h1>

              <p className="text-center text-darkGray md:text-[26px]">
                {partners.description}
              </p>
            </div>

            <div className="mt-20">
              <BaseSwiper
                data={partners.images.map((image) => ({
                  ...image,
                  id: image.key,
                }))}
                renderItem={(partner) => (
                  <Image
                    src={partner.url}
                    key={partner.key}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="mb-6 h-[88px] object-contain"
                  />
                )}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                }}
              />
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
}
