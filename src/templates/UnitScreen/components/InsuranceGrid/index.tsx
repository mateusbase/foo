import { SearchIcon } from "@/components/Icons";
import BaseInput from "@/components/Input";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const InsuranceGrid = (): JSX.Element => {
  const { prevRef, nextRef, swiperRef, currentIndex } = useSwiperNavigation();

  const insurances = [
    { id: 5, name: "(CNU)" },
    { id: 14, name: "(CNU)" },
    { id: 23, name: "(CNU)" },
    { id: 1, name: "Amil Assistência Médica" },
    { id: 10, name: "Amil Assistência Médica" },
    { id: 19, name: "Amil Assistência Médica" },
    { id: 2, name: "Assim Saúde" },
    { id: 11, name: "Assim Saúde" },
    { id: 20, name: "Assim Saúde" },
    { id: 3, name: "Bradesco Seguros" },
    { id: 12, name: "Bradesco Seguros" },
    { id: 21, name: "Bradesco Seguros" },
    { id: 4, name: "Central Nacional Unimed" },
    { id: 13, name: "Central Nacional Unimed" },
    { id: 22, name: "Central Nacional Unimed" },
    { id: 6, name: "NotreDame Intermédica" },
    { id: 15, name: "NotreDame Intermédica" },
    { id: 24, name: "NotreDame Intermédica" },
    { id: 7, name: "Prevent Sênior" },
    { id: 16, name: "Prevent Sênior" },
    { id: 25, name: "Prevent Sênior" },
    { id: 8, name: "São Francisco Saúde" },
    { id: 17, name: "São Francisco Saúde" },
    { id: 26, name: "São Francisco Saúde" },
    { id: 9, name: "SulAmérica" },
    { id: 18, name: "SulAmérica" },
    { id: 27, name: "SulAmérica" },
  ];

  function chunkArray<T>(
    array: T[],
    chunkSize: number,
  ): { id: string; items: T[] }[] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push({
        id: `group-${i / chunkSize}`,
        items: array.slice(i, i + chunkSize),
      });
    }
    return result;
  }

  const groupedInsurances = chunkArray(insurances, 8);

  return (
    <div className="lg:mt-72">
      <div className="mt-20 flex flex-col justify-between gap-6 md:mt-32 lg:flex-row">
        <h2 className="text-2xl text-primary md:text-3xl md:leading-[50px]">
          Convênios atendidos nesta unidade
        </h2>

        <div className="flex h-[50px] w-full md:w-[350px]">
          <BaseInput
            color="primary"
            placeholder="Buscar convênio"
            placeholderColor="primary"
            size="lg"
            radius="full"
            variant="bordered"
            className="h-[50px] w-full md:w-[350px]"
            endContent={<SearchIcon className="text-primary" />}
          />
        </div>
      </div>

      <div className="relative mt-10 lg:w-9/12">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1025: {
              slidesPerView: 3,
            },
          }}
        >
          {groupedInsurances.map((group) => (
            <SwiperSlide key={group.id}>
              <div className="gap-4">
                {group.items.map((plan) => (
                  <div
                    key={plan.id}
                    className="mt-2 text-left text-lg text-darkGray"
                  >
                    {plan.name}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex justify-center md:justify-end lg:hidden">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            showSwiperPagination
            currentIndex={currentIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default InsuranceGrid;
