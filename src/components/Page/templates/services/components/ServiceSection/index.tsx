import { useState, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import BaseInput from "@/components/Input";
import { SearchIcon } from "@/components/Icons";
import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import AlphabetSelector from "@/components/AlphabetSelector";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/Button";
import ServiceCard from "../ServiceCard";
import MedicalServiceCard from "../MedicalServiceCard";
import SectionHeader from "../SectionHeader";
import { ServiceSectionProps } from "../../types";

export default function ServiceSection({
  id,
  title,
  description,
  data,
  links,
  searchPlaceholder,
  expandButtonText,
}: ServiceSectionProps): JSX.Element {
  const {
    nextRef: nextRefCard,
    prevRef: prevRefCard,
    swiperRef: swiperRefCard,
    currentIndex: currentIndexCard,
    onBeforeInit: onBeforeInitCard,
  } = useSwiperNavigation();
  const { nextRef, prevRef, swiperRef, currentIndex, onBeforeInit } =
    useSwiperNavigation();

  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [valueSearch, setValueSearch] = useState("");
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateVisibleCards = (): void => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(8);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const filteredHealthServices = useMemo(() => {
    if (!selectedLetter) return data;

    return data?.filter((service) => {
      const matchesLetter = service.title
        .toUpperCase()
        .startsWith(selectedLetter);

      const matchesSearch = valueSearch
        ? service.title.toLowerCase().includes(valueSearch.toLowerCase())
        : true;

      return matchesLetter && matchesSearch;
    });
  }, [selectedLetter, valueSearch, data]);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValueSearch(event.target.value);
  };

  const handleShowMore = (): void => {
    setVisibleCards((prev) => prev + (window.innerWidth >= 1024 ? 8 : 4));
  };

  const handleLetterSelect = (letter: string): void => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
    }
  };

  const displayedServices = filteredHealthServices?.slice(0, visibleCards);

  return (
    <div id={id} className="scroll-mt-28">
      <SectionHeader title={title} description={description} />

      <div className="mt-10 flex w-full lg:hidden">
        <BaseInput
          placeholder={searchPlaceholder}
          size="lg"
          onChange={handleSearchChange}
          value={valueSearch}
          endContent={<SearchIcon className="text-primary" />}
          className="placeholder:text-primar border-primary text-primary"
        />
      </div>

      <div className="mt-10 hidden lg:block">
        <AlphabetSelector
          searchPlaceholder={searchPlaceholder}
          selectedLetter={selectedLetter || ""}
          onLetterSelect={handleLetterSelect}
          handleSearchChange={handleSearchChange}
          valueSearch={valueSearch}
        />
      </div>

      <div className="mt-10 hidden grid-cols-4 gap-[26px] md:grid">
        {displayedServices?.map((service) => (
          <Link key={service.id} href={`${service.slug}`} passHref>
            <ServiceCard
              serviceTitle={service.title}
              serviceDescription={service.description}
              showButton
              serviceIcon={service.icon!.url}
            />
          </Link>
        ))}
      </div>

      <div className="relative mb-10 mt-20 w-full md:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            prevEl: prevRefCard.current,
            nextEl: nextRefCard.current,
          }}
          loop={displayedServices && displayedServices?.length > 2}
          onBeforeInit={(swiper) => onBeforeInitCard(swiper)}
        >
          {displayedServices?.map((service) => (
            <SwiperSlide key={service.id}>
              <Link key={service.id} href={`${service.slug}`} passHref>
                <div className="cursor-pointer">
                  <ServiceCard
                    serviceTitle={service.title}
                    serviceDescription={service.description}
                    showButton
                    serviceIcon={service.icon!.url}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex justify-center space-x-4 md:hidden">
          <SliderArrows
            swiperRef={swiperRefCard}
            prevRef={prevRefCard}
            nextRef={nextRefCard}
            showSwiperPagination
            currentIndex={currentIndexCard}
          />
        </div>
      </div>

      {filteredHealthServices &&
        visibleCards < filteredHealthServices.length && (
          <div className="flex w-full justify-center">
            <Button
              color="primary"
              variant="outlined"
              onClick={handleShowMore}
              className="border-1 mt-8 h-[50px] w-full rounded-md border border-primary pl-3 text-left text-sm leading-[22px] text-primary md:w-[322px] lg:text-[18px]"
            >
              [+] {expandButtonText}
            </Button>
          </div>
        )}

      <div className="relative mt-20 w-full lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop
          onBeforeInit={(swiper) => onBeforeInit(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {links?.map((service) => {
            let href = `/${service.title.replace(/\s+/g, "-").toLowerCase()}`;

            if (service.link.external && service.link.url) {
              href = service.link.url;
            } else if (!service.link.external && service.link.path) {
              href = `/${service.link.path}`;
            }

            return (
              <SwiperSlide key={service.id}>
                <Link
                  href={href}
                  target={service.link.openOnNewTab ? "_blank" : "_self"}
                  rel={
                    service.link.external ? "noopener noreferrer" : undefined
                  }
                  passHref
                >
                  <MedicalServiceCard
                    subtitle={service.subTitle}
                    serviceTitle={service.title}
                    serviceDescription={service.description}
                    backgroundImageUrl={service.image.url}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="mt-4 flex justify-center space-x-4">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            showSwiperPagination
            currentIndex={currentIndex}
          />
        </div>
      </div>

      <div className="mt-28 hidden grid-cols-3 gap-[26px] lg:grid">
        {links?.map((service) => {
          let href = `/${service.title.replace(/\s+/g, "-").toLowerCase()}`;

          if (service.link.external && service.link.url) {
            href = service.link.url;
          } else if (!service.link.external && service.link.path) {
            href = `/${service.link.path}`;
          }

          return (
            <Link
              key={service.id}
              href={href}
              target={service.link.openOnNewTab ? "_blank" : "_self"}
              rel={service.link.external ? "noopener noreferrer" : undefined}
              passHref
            >
              <MedicalServiceCard
                subtitle={service.subTitle}
                serviceTitle={service.title}
                serviceDescription={service.description}
                backgroundImageUrl={service.image.url}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
