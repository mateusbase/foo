import { useState, useMemo, useEffect } from "react";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import AlphabetSelector from "@/components/AlphabetSelector";
import BaseInput from "@/components/Input";
import { SearchIcon } from "@/components/Icons";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SectionHeader from "../SectionHeader";
import { ServiceSectionProps } from "../../types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServiceCard from "../ServiceCard";
import MedicalServiceCard from "../MedicalServiceCard";

export default function ServiceSection({
  id,
  title,
  description,
  healthServices,
  medicalServices,
  shouldShowButton = false,
  imageClassName = "",
  cardClassName = "",
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
    if (!selectedLetter) return healthServices;

    return healthServices?.filter((service) => {
      const matchesLetter = service.serviceTitle
        .toUpperCase()
        .startsWith(selectedLetter);

      const matchesSearch = valueSearch
        ? service.serviceTitle.toLowerCase().includes(valueSearch.toLowerCase())
        : true;

      return matchesLetter && matchesSearch;
    });
  }, [selectedLetter, valueSearch, healthServices]);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValueSearch(event.target.value);
  };

  const titleService: Record<string, string> = {
    diagnósticos: "diagnósticos",
    servicos: "serviços",
    tratamentos: "tratamentos ",
  };

  const handleShowMore = (): void => {
    setTimeout(() => {
      setVisibleCards((prev) => prev + (window.innerWidth >= 1025 ? 8 : 4));
    }, 100);
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
    <div id={id}>
      <SectionHeader title={title} description={description} />

      <div className="mt-10 flex w-full lg:hidden">
        <BaseInput
          color="primary"
          placeholder={`Buscar ${titleService[id]}`}
          placeholderColor="primary"
          size="lg"
          radius="full"
          variant="bordered"
          onChange={handleSearchChange}
          value={valueSearch}
          endContent={<SearchIcon className="text-primary" />}
        />
      </div>

      <div className="hidden lg:block">
        <AlphabetSelector
          selectedLetter={selectedLetter || ""}
          onLetterSelect={handleLetterSelect}
          searchPlaceholder={`Buscar ${titleService[id]}`}
          handleSearchChange={handleSearchChange}
          valueSearch={valueSearch}
        />
      </div>

      <div className="mt-10 hidden grid-cols-4 gap-[26px] md:grid lg:grid lg:gap-3">
        {displayedServices?.map((service) => (
          <Link key={service.id} href={`/servicos/${service.slug}`} passHref>
            <ServiceCard
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
              showButton={shouldShowButton}
              className={cardClassName}
            />
          </Link>
        ))}
      </div>

      <div className="relative mb-10 mt-20 w-full md:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            prevEl: prevRefCard.current,
            nextEl: nextRefCard.current,
          }}
          loop
          onBeforeInit={(swiper) => onBeforeInitCard(swiper)}
        >
          {displayedServices?.map((service) => (
            <SwiperSlide key={service.id}>
              <Link
                href={`/servicos/${service.serviceTitle.replace(/\s+/g, "-").toLowerCase()}`}
                passHref
              >
                <ServiceCard
                  serviceTitle={service.serviceTitle}
                  serviceDescription={service.serviceDescription}
                  showButton={shouldShowButton}
                  className={cardClassName}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex justify-center space-x-4 md:hidden">
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
          <div className="z-10 mt-12 flex w-full justify-center lg:justify-start">
            <Button
              color="primary"
              variant="bordered"
              radius="sm"
              onPress={handleShowMore}
              className="z-10 h-[50px] w-full rounded-md border-1 pl-3 text-left text-sm leading-[22px] text-primary md:w-[322px] lg:w-[176px] lg:text-lg"
            >
              [+] Ver mais
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
            1025: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {medicalServices?.map((service) => (
            <SwiperSlide key={service.id}>
              <MedicalServiceCard
                subtitle={service.subtitle}
                serviceTitle={service.serviceTitle}
                serviceDescription={service.serviceDescription}
                actionButtonText={service.actionButtonText}
                backgroundImageUrl={service.imageUrl}
                imageClassName={imageClassName}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mb-10 mt-4 flex justify-center space-x-4">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            showSwiperPagination
            currentIndex={currentIndex}
          />
        </div>
      </div>

      <div className="mt-28 hidden grid-cols-3 gap-[26px] lg:mb-10 lg:grid">
        {medicalServices?.map((service) => (
          <Link
            key={service.id}
            href={`/servicos/${service.serviceTitle.replace(/\s+/g, "-").toLowerCase()}`}
            passHref
          >
            <MedicalServiceCard
              subtitle={service.subtitle}
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
              actionButtonText={service.actionButtonText}
              backgroundImageUrl={service.imageUrl}
              imageClassName={imageClassName}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
