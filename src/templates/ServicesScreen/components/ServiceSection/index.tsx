import { useState, useMemo } from "react";
import { Button, Input } from "@nextui-org/react";
import { TbCodePlus } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HealthServiceCard from "@/components/HealthServiceCard";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import Link from "next/link";
import { Search } from "lucide-react";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionHeader from "../SectionHeader";
import AlphabetSelector from "../AlphabetSelector";
import { ServiceSectionProps } from "../../types";

export default function ServiceSection({
  id,
  title,
  description,
  healthServices,
  medicalServices,
}: ServiceSectionProps): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [selectedLetter, setSelectedLetter] = useState("A");

  const filteredHealthServices = useMemo(() => {
    return healthServices.filter((service) =>
      service.serviceTitle.toUpperCase().startsWith(selectedLetter),
    );
  }, [selectedLetter, healthServices]);

  return (
    <section id={id} className="pt-8">
      <SectionHeader title={title} description={description} />

      <div className="mt-10 flex w-full lg:hidden">
        <Input
          placeholder="Buscar serviço"
          size="lg"
          radius="full"
          variant="bordered"
          color="primary"
          endContent={<Search className="text-2xl text-primary" />}
        />
      </div>

      <div className="hidden lg:block">
        <AlphabetSelector
          selectedLetter={selectedLetter}
          onLetterSelect={setSelectedLetter}
        />
      </div>

      <div className="mt-28 hidden grid-cols-3 gap-[26px] md:grid">
        {filteredHealthServices.map((service) => (
          <Link
            key={service.id}
            href={`/servicos/${service.serviceTitle.replace(/\s+/g, "-").toLowerCase()}`}
            passHref
          >
            <HealthServiceCard
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
          slidesPerView={1}
          loop
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation) {
              // eslint-disable-next-line prettier/prettier
              const navigationParams = swiper.params.navigation as NavigationOptions;
              navigationParams.prevEl = prevRef.current;
              navigationParams.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
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
          {filteredHealthServices.map((service) => (
            <SwiperSlide key={service.id}>
              <Link
                href={`/servicos/${service.serviceTitle
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                passHref
              >
                <div className="cursor-pointer">
                  <HealthServiceCard
                    serviceTitle={service.serviceTitle}
                    serviceDescription={service.serviceDescription}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex justify-center space-x-4">
          <button
            ref={prevRef}
            type="button"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
            aria-label="Previous"
          >
            <IoIosArrowBack
              className="text-primary dark:text-gray-800"
              size={35}
            />
          </button>

          <button
            ref={nextRef}
            type="button"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
            aria-label="Next"
          >
            <IoIosArrowForward
              className="text-primary dark:text-gray-800"
              size={35}
            />
          </button>
        </div>
      </div>

      <Button
        color="primary"
        variant="bordered"
        radius="sm"
        startContent={<TbCodePlus size={24} />}
        className="mt-8 h-[50px] w-[176px] pl-3 text-left text-[18px] font-black leading-[22px] text-primary"
      >
        Ver todos
      </Button>

      <div className="relative mb-10 mt-20 w-full lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation) {
              // eslint-disable-next-line prettier/prettier
              const navigationParams = swiper.params.navigation as NavigationOptions;
              navigationParams.prevEl = prevRef.current;
              navigationParams.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
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
          <button
            ref={prevRef}
            type="button"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
            aria-label="Previous"
          >
            <IoIosArrowBack
              className="text-primary dark:text-gray-800"
              size={35}
            />
          </button>

          <button
            ref={nextRef}
            type="button"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
            aria-label="Next"
          >
            <IoIosArrowForward
              className="text-primary dark:text-gray-800"
              size={35}
            />
          </button>
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
    </section>
  );
}
