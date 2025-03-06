import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import NewsInformationCard from "@/components/NewsInformationCard";
import PageLayout from "@/components/PageLayout";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { RxHamburgerMenu } from "react-icons/rx";
import BaseSelect from "@/components/Select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { options } from "./optionsMock";

export default function MolecularThursdaysScreen(): JSX.Element {
  const { nextRef, prevRef, onBeforeInit, swiperRef, currentIndex } =
    useSwiperNavigation();
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  return (
    <PageLayout title="Quintas moleculares">
      <div className="full-bleed flex flex-col lg:mt-14 lg:flex-row">
        <div className="overflow-hidden lg:h-[499px] lg:w-5/6">
          <img
            src="/assets/images/molecularFifths/molecular-banner.png"
            alt="Imagem banner de especialidade"
            className="size-full object-cover lg:rounded-bl-[100px]"
          />
        </div>

        <div className="flex max-h-[604px] items-center bg-custom-gradient-dark p-12 lg:w-3/6 lg:p-12">
          <p className="text-center leading-tight text-white md:text-[32px] lg:text-left xl:text-4xl">
            São reuniões Multidisciplinares que ocorrem por videoconferência que
            permitem discussões de casos, a fim de educar a comunidade médica a
            respeito da indicação e interpretação de testes moleculares
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-10 rounded-2xl bg-purpleMedium px-4 py-5 md:px-14 lg:h-56 lg:flex-row">
        <div className="flex flex-col gap-6 text-white lg:w-4/6">
          <p className="text-center text-3xl font-bold lg:text-left">
            Participe das Quintas Moleculares
          </p>
          <p className="text-center text-xl lg:text-left">
            Reuniões Multidisciplinares que ocorrem por videoconferência que
            permitem discussões de casos, a fim de educar a comunidade médica a
            respeito da indicação e interpretação de testes moleculares.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-2/6">
          <BaseInput
            placeholder="Digite aqui o seu melhor e-mail"
            className="rounded-3xl bg-white"
          />
          <BaseButton className="bg-white text-purpleMedium">
            Inscreva-se
          </BaseButton>
        </div>
      </div>

      <div className="mx-6 mt-6 flex justify-center lg:hidden">
        <BaseSelect
          color="primary"
          variant="bordered"
          radius="md"
          size="lg"
          onChange={handleChange}
          label=""
          defaultSelectedKey="1"
          startContent={<RxHamburgerMenu size={20} className="text-primary" />}
          options={[
            { key: 1, value: "1", label: "Mais relevantes" },
            { key: 2, value: "2", label: "Todos os temas" },
          ]}
        />
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <div className="mt-6 hidden size-full h-20 justify-between border-b border-darkGray font-bold lg:flex">
          <div className="flex justify-around gap-10">
            <div className="flex items-center justify-center gap-1 text-primary">
              <RxHamburgerMenu size={20} />
              <span>Todos</span>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-darkGray">
              <span>Prática de Esportes</span>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-darkGray">
              <span>Saúde e Bem-estar</span>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-darkGray">
              <span>Inovação & Oncologia</span>
            </div>
          </div>

          <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-darkGray">
            <SortingFilterDropdown
              options={sortingFilterOptions}
              defaultSelectedKey={sortingFilterOptions[0].value}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="lg:mt-10">
          {options.map((option) => (
            <div className="mt-10" key={option.id}>
              <NewsInformationCard options={option} />
            </div>
          ))}
        </div>

        <div className="mt-14 w-full">
          <BaseButton
            color="primary"
            variant="bordered"
            radius="sm"
            className="h-[50px] w-[228px] items-center justify-center pl-3 text-[23px] text-primary lg:flex"
          >
            [+] Ver mais
          </BaseButton>
        </div>
      </div>

      <div className="flex flex-col lg:hidden">
        <div className="relative mx-auto w-11/12">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onInit={(swiper) => onBeforeInit(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {options.map((option) => (
              <SwiperSlide className="mt-10" key={option.id}>
                <NewsInformationCard options={option} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="my-4 flex items-center justify-center space-x-4 md:justify-between">
            <BaseButton
              color="primary"
              variant="bordered"
              radius="sm"
              className="hidden h-[50px] w-full items-center justify-center pl-3 text-[18px] font-black leading-[22px] text-primary sm:w-3/6 md:flex"
            >
              [+] Ver mais
            </BaseButton>

            <div className="flex items-center space-x-4">
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
      </div>
    </PageLayout>
  );
}
