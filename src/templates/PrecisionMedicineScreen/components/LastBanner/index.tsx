import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";

const LastBanner = (): JSX.Element => {
  const {
    nextRef: mobileBannerNextRef,
    prevRef: mobileBannerPrevRef,
    swiperRef: mobileBannerSwiperRef,
    onBeforeInit: mobileBannerOnBeforeInit,
  } = useSwiperNavigation();

  const {
    nextRef: lastBannerNextRef,
    prevRef: lastBannerPrevRef,
    swiperRef: lastBannerSwiperRef,
    onBeforeInit: lastBannerOnBeforeInit,
  } = useSwiperNavigation();

  return (
    <>
      {/* Telas pequenas */}
      <div className="full-bleed my-11 md:hidden">
        <Swiper
          loop
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onBeforeInit={(swiper) => mobileBannerOnBeforeInit(swiper)}
        >
          <SwiperSlide>
            <img
              src="/assets/images/precisionmedicinelast.png"
              alt="Foto banner Programa de suporte ao paciente"
              className="w-full"
            />
            <div className="flex flex-col bg-custom-gradient-dark p-6 font-lato-regular">
              <h1 className="mb-4 mt-7 w-[90%] text-base font-normal text-white">
                Teste genético ajuda a guiar tratamento contra câncer e evitar
                novos tumores
              </h1>
              <p className="mb-6 w-4/5 text-sm font-light text-white">
                Para garantir o tratamento personalizado e de precisão, é
                importante assegurar aos nossos pacientes acesso à jornada
                molecular de testes.
              </p>
              <div className="flex justify-start">
                <SliderArrows
                  nextRef={mobileBannerNextRef}
                  prevRef={mobileBannerPrevRef}
                  swiperRef={mobileBannerSwiperRef}
                  color="text-white"
                  size={0.9}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Telas médias/grandes */}
      <div className="mt-14 hidden md:flex">
        <Swiper
          loop
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onBeforeInit={(swiper) => lastBannerOnBeforeInit(swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row-reverse">
              <img
                src="/assets/images/precisionmedicinelast.png"
                alt="Foto banner Programa de suporte ao paciente"
                className="w-full md:w-1/2"
              />
              <div className="flex w-full flex-col rounded-bl-[60px] bg-custom-gradient-dark p-6 font-lato-regular md:w-1/2">
                <h1 className="mb-8 w-4/5 text-3xl font-normal text-white">
                  Teste genético ajuda a guiar tratamento contra câncer e evitar
                  novos tumores
                </h1>
                <p className="mb-6 h-[130px] w-4/5 text-base font-medium text-white">
                  Para garantir o tratamento personalizado e de precisão, é
                  importante assegurar aos nossos pacientes acesso à jornada
                  molecular de testes.
                </p>

                <div className="mb-4 flex justify-start">
                  <SliderArrows
                    nextRef={lastBannerNextRef}
                    prevRef={lastBannerPrevRef}
                    swiperRef={lastBannerSwiperRef}
                    color="text-white"
                    size={0.9}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default LastBanner;
