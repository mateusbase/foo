import { useState, useMemo } from "react";
import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MedicalServiceCard from "@/components/MedicalServiceCard";
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

export default function ServiceSection({
  id,
  title,
  description,
  healthServices,
  medicalServices,
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

  const [selectedLetter, setSelectedLetter] = useState("A");
  const [valueSearch, setValueSearch] = useState("");

  const filteredHealthServices = useMemo(() => {
    return healthServices.filter((service) => {
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

  return (
    <div id={id} className="pt-8">
      <SectionHeader title={title} description={description} />

      <div className="mt-10 flex w-full lg:hidden">
        <BaseInput
          color="primary"
          placeholder="Buscar serviço"
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
          selectedLetter={selectedLetter}
          onLetterSelect={setSelectedLetter}
          searchPlaceholder="Buscar serviço"
          handleSearchChange={handleSearchChange}
          valueSearch={valueSearch}
        />
      </div>

      <div className="mt-10 hidden grid-cols-4 gap-[26px] md:grid">
        {filteredHealthServices.map((service) => (
          <Link key={service.id} href={`/servicos/${service.slug}`} passHref>
            <ServiceCard
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
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
          loop
          onBeforeInit={(swiper) => onBeforeInitCard(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {filteredHealthServices.map((service) => (
            <SwiperSlide key={service.id}>
              <Link
                href={`/servicos/${service.serviceTitle.replace(/\s+/g, "-").toLowerCase()}`}
                passHref
              >
                <div className="cursor-pointer">
                  <ServiceCard
                    serviceTitle={service.serviceTitle}
                    serviceDescription={service.serviceDescription}
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

      <div className="flex w-full justify-center">
        <Button
          color="primary"
          variant="bordered"
          radius="sm"
          className="mt-8 h-[50px] w-full rounded-md border-1 pl-3 text-left text-sm leading-[22px] text-primary md:w-[322px] lg:text-[18px]"
        >
          [+] Ver todos
        </Button>
      </div>

      <div className="relative mb-10 mt-20 w-full lg:hidden">
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
          {medicalServices.map((service) => (
            <SwiperSlide key={service.id}>
              <MedicalServiceCard
                serviceTitle={service.serviceTitle}
                serviceDescription={service.serviceDescription}
                actionButtonText={service.actionButtonText}
              />
            </SwiperSlide>
          ))}
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
        {medicalServices.map((service) => (
          <Link
            key={service.id}
            href={`/servicos/${service.serviceTitle.replace(/\s+/g, "-").toLowerCase()}`}
            passHref
          >
            <MedicalServiceCard
              subtitle="Exclusividade Oncoclínicas"
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
