import BaseContainer from "@/components/Container";
import NewsInformationCard from "@/components/NewsInformationCard";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import { FaRunning } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { GiFlowerStar } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import BaseSelect from "@/components/Select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { options } from "./optionsMock";

export default function NewsScreen(): JSX.Element {
  const { nextRef, prevRef, onBeforeInit, swiperRef, currentIndex } =
    useSwiperNavigation();
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  return (
    <BaseContainer className="px-0">
      <div className="flex flex-col md:h-[223px] md:flex-row lg:h-[536px]">
        <div className="flex h-full flex-col items-start justify-center bg-gradient-to-br from-primary via-primary-foreground to-secondary-foreground p-8 md:w-1/2 md:pl-[65px]">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<Plus />}
            className="border-white pl-3 text-left font-normal leading-[60px] text-white md:text-sm lg:mt-8 lg:h-[71px] lg:w-[297px] lg:text-2xl"
          >
            Prática de Esportes
          </Button>

          <h1 className="mt-4 text-left text-3xl leading-[60px] text-white md:text-2xl md:font-normal lg:text-6xl">
            Benefícios da corrida
          </h1>
          <p className="mt-4 max-w-[625px] text-left font-bold text-white md:text-sm md:font-bold lg:text-2xl">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>

          <div className="mt-4 hidden lg:flex">
            <IoArrowForwardCircleOutline size={30} color="white" />
          </div>
        </div>
        <div className="h-56 md:h-full md:w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado direito"
            className="size-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:h-[223px] md:flex-row lg:h-[536px]">
        <div className="h-56 md:h-full md:w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado esquerdo"
            className="size-full object-cover"
          />
        </div>
        <div className="flex h-full flex-col items-start justify-center bg-gradient-to-br from-secondary via-secondary to-secondary-foreground p-8 md:w-1/2 md:pl-[65px]">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<Plus />}
            className="border-white pl-3 text-left font-normal leading-[60px] text-white md:text-sm lg:mt-8 lg:h-[71px] lg:w-[297px] lg:text-2xl"
          >
            Saúde e Bem-Estar
          </Button>
          <h1 className="mt-4 text-left text-3xl font-bold leading-[60px] text-white md:text-2xl md:font-normal lg:text-6xl">
            Meditação Guiada
          </h1>
          <p className="mt-4 max-w-[625px] text-left font-bold text-white md:text-sm md:font-bold lg:text-2xl">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>

          <div className="mt-4 hidden lg:flex">
            <IoArrowForwardCircleOutline size={30} color="white" />
          </div>
        </div>
      </div>

      <div className="mb-10 flex flex-col md:h-[223px] md:flex-row lg:h-[536px]">
        <div className="flex h-full flex-col items-start justify-center bg-darkGray p-8 md:w-1/2 md:pl-[65px] lg:rounded-bl-[80px]">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<LuArrowUpRight />}
            className="border-white pl-3 text-left font-normal leading-[60px] text-white md:text-sm lg:mt-8 lg:h-[71px] lg:w-[297px] lg:text-2xl"
          >
            Inovação & Oncologia
          </Button>
          <h1 className="mt-4 text-left text-3xl font-bold leading-[60px] text-white md:text-2xl md:font-normal lg:text-6xl">
            Uso de IA na medicina
          </h1>
          <p className="mt-4 max-w-[625px] text-left font-bold text-white md:text-sm md:font-bold lg:text-2xl">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>

          <div className="mt-4 hidden lg:flex">
            <IoArrowForwardCircleOutline size={30} color="white" />
          </div>
        </div>
        <div className="h-56 md:h-full md:w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado direito"
            className="size-full object-cover"
          />
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <div className="flex size-full justify-between font-bold">
          <div className="flex justify-around gap-10">
            <div className="flex items-center justify-center gap-1 text-primary">
              <RxHamburgerMenu size={20} />
              <span>Todos</span>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-darkGray">
              <FaRunning size={20} />
              <span>Prática de Esportes</span>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-darkGray">
              <GiFlowerStar size={20} />
              <span>Saúde e Bem-estar</span>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-darkGray">
              <MdArrowOutward size={20} />
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

        <div className="mt-10">
          {options.map((option) => (
            <div className="mt-10" key={option.id}>
              <NewsInformationCard options={option} />
            </div>
          ))}
        </div>

        <div className="mt-14 w-full">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            className="h-[50px] w-[228px] items-center justify-center pl-3 text-[23px] text-primary lg:flex"
          >
            [+] Ver mais
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:hidden">
        <div className="mx-6 flex justify-center">
          <BaseSelect
            color="primary"
            variant="bordered"
            radius="md"
            size="lg"
            onChange={handleChange}
            label=""
            defaultSelectedKey="1"
            startContent={
              <RxHamburgerMenu size={20} className="text-primary" />
            }
            options={[
              { key: 1, value: "1", label: "Mais relevantes" },
              { key: 2, value: "2", label: "Todos os temas" },
            ]}
          />
        </div>
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

          <div className="mt-4 flex items-center justify-center space-x-4 md:justify-between">
            <Button
              color="primary"
              variant="bordered"
              radius="sm"
              className="hidden h-[50px] w-full items-center justify-center pl-3 text-[18px] font-black leading-[22px] text-primary sm:w-3/6 md:flex"
            >
              [+] Ver mais
            </Button>

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
    </BaseContainer>
  );
}
