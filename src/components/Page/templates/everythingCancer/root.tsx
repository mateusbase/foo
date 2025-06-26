import PageLayout from "@/components/PageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import IconCard from "@/components/Page/templates/everythingCancer/components/IconCard";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import Link from "next/link";
import { Button } from "@/components/Button";
import BaseSwiper from "@/components/BaseSwiper";
import { useDeviceType } from "@/hooks/useDeviceType";
import GradientBanner from "@/components/Blocks/GradientBanner";
import { useState } from "react";
import RenderHTMLAllAboutCancer from "./components/RenderHTMLAllAboutCancer";
import { EveryThingCancerProps } from "./types";

export function EveryThingCancerRoot({
  data,
  breadcrumbs,
}: EveryThingCancerProps): JSX.Element {
  const [visibleCount, setVisibleCount] = useState(1);

  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";

  const {
    nextRef: nextRefCard,
    prevRef: prevRefCard,
    swiperRef: swiperRefCard,
    onBeforeInit: onBeforeInitCard,
    currentIndex: currentIndexCard,
  } = useSwiperNavigation();

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-10 flex justify-start lg:mt-0">
          <div className="flex w-full flex-col items-center text-left md:text-center">
            <h2 className="text-2xl text-primary md:text-title-xl md:leading-[74px]">
              {data.introduction.title}
            </h2>

            <p className="mt-4 text-base text-darkGray md:text-[28px] md:leading-[32px] lg:w-5/6">
              {data.introduction.description}
            </p>

            <h2 className="mt-14 hidden text-xl font-extralight text-primary md:block md:text-[28px] md:font-bold md:leading-[74px]">
              Leia o conteúdo abaixo
            </h2>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row lg:mt-20">
          <div className="w-full md:w-[70%] md:pr-3">
            <RenderHTMLAllAboutCancer html={data.introduction.aside} />
          </div>

          <div className="mt-10 hidden w-full md:mt-0 lg:grid lg:w-auto lg:grid-cols-2 lg:gap-6">
            {data.introduction.categories.map((categorie) => (
              <IconCard
                key={categorie.title}
                cardTitle={categorie.title}
                cardIcon={categorie.icon}
                cardDescription={categorie.description}
                showButton={false}
                variant="inline"
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center md:w-1/2 lg:hidden">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              onInit={(swiper) => onBeforeInitCard(swiper)}
              className="w-full max-w-lg"
            >
              {data.introduction.categories.map((service) => (
                <SwiperSlide
                  key={service.title}
                  className="flex items-center justify-center"
                >
                  <IconCard
                    cardTitle={service.title}
                    cardDescription={service.description}
                    cardIcon={service.icon}
                    showButton={false}
                    variant="stacked"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-6 flex justify-center space-x-4">
              <SliderArrows
                swiperRef={swiperRefCard}
                prevRef={prevRefCard}
                nextRef={nextRefCard}
                showSwiperPagination
                currentIndex={currentIndexCard}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-start text-left md:mt-32 md:justify-center md:text-center">
          <h2 className="font-lato-thin text-2xl text-primary md:text-5xl md:leading-[74px]">
            {data.commonCancers.title}
          </h2>

          <p className="mt-4 text-base text-darkGray md:text-[28px] md:font-medium md:leading-[32px]">
            {data.commonCancers.description}
          </p>

          <h2 className="mt-10 text-2xl font-normal text-primary md:mt-14 md:text-[28px] md:font-black md:leading-[74px]">
            Conheça os mais comuns:
          </h2>
        </div>

        <div className="my-10 flex flex-col justify-between gap-5 md:mt-20 lg:mt-10">
          <div className="grid w-full gap-6 md:hidden lg:grid lg:grid-cols-3">
            {data.commonCancers.cancers
              ?.slice(
                0,
                isMobile ? visibleCount : data.commonCancers.cancers.length,
              )
              .map((cancer) => (
                <IconCard
                  key={cancer.id}
                  cardTitle={cancer.name}
                  cardDescription={cancer.shortDescription}
                  cardIcon={cancer.icon}
                  variant="inline"
                />
              ))}

            {isMobile && visibleCount < data.commonCancers.cancers.length && (
              <Button
                className="text-white"
                onClick={() => setVisibleCount((prev) => prev + 1)}
              >
                Ver mais tipos de câncer
              </Button>
            )}
          </div>

          <BaseSwiper
            data={data.commonCancers.cancers}
            renderItem={(cancer) => (
              <IconCard
                key={cancer.id}
                cardTitle={cancer.name}
                cardDescription={cancer.shortDescription}
                cardIcon={cancer.icon}
                variant="inline"
              />
            )}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
            }}
            className="hidden w-full flex-col md:flex lg:hidden"
          />

          <div className="mt-10 hidden justify-start lg:flex">
            <Link href="/tudo-sobre-o-cancer/tipos-de-cancer">
              <Button className="w-full md:w-[224px]">
                {data.commonCancers.navigateButtonText}
              </Button>
            </Link>
          </div>
        </div>

        <div className="my-10 hidden grid-cols-3 gap-[26px] lg:grid">
          {data.links.map((link) => (
            <GradientBanner
              title={link.title}
              description={link.description}
              link={{
                variant: "chevron-right-button",
                target: {
                  url: link.link.url,
                  openOnNewTab: link.link.openOnNewTab,
                  external: link.link.external,
                },
              }}
              media={{
                side: "top",
                data: {
                  type: "image",
                  data: link.image,
                },
              }}
            />
          ))}
        </div>

        <div className="relative mb-10 mt-20 w-full self-center lg:hidden">
          <BaseSwiper
            data={data.links.map((link, index) => ({ ...link, id: index }))}
            renderItem={(link) => (
              <GradientBanner
                title={link.title}
                isSwiper
                roundCorner="bottom-left"
                description={link.description}
                link={{
                  variant: "chevron-right-button",
                  target: {
                    url: link.link.url,
                    openOnNewTab: link.link.openOnNewTab,
                    external: link.link.external,
                  },
                }}
                media={{
                  side: "top",
                  data: {
                    type: "image",
                    data: link.image,
                  },
                }}
              />
            )}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
            }}
          />
        </div>
      </PageLayout>
    </main>
  );
}
