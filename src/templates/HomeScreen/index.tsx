import MainOptionsActions from "@/components/MainOptionsActions";
import NearbyUnits from "@/components/NearbyUnits";
import ServicesSection from "@/components/ServicesSection";
import { options } from "@/utils/objectUtils";
import InformationSlider from "@/components/InformationSlider";
import FaqSection from "@/components/FaqSection";
import OptionsActionsCard from "@/components/OptionsActionsCard";
import BaseContainer from "@/components/Container";
import ServicesSectionMobile from "@/components/ServicesSectionMobile";
import InformationSliderMobile from "@/components/InformationSliderMobile";
import NearbyUnitsMobile from "@/components/NearbyUnitsMobile";
import SearchInput from "./components/SearchInput";
import SearchInputMobile from "./components/SearchInputMobile";

export default function HomeScreen(): JSX.Element {
  return (
    <main className="flex w-full flex-col">
      <div className="relative w-full">
        <img
          src="https://i.postimg.cc/8kf6xnCK/banner.png"
          alt=""
          className="hidden w-full lg:block"
        />
        <div className="relative inset-0 z-10 flex hidden items-center justify-center lg:absolute lg:flex">
          <SearchInput />
        </div>

        <div className="relative inset-0 z-10 mt-2 flex items-center justify-center lg:absolute lg:hidden">
          <SearchInputMobile />
        </div>

        <div className="absolute inset-0 bottom-[-56.5px] hidden items-end justify-center lg:flex">
          {/* <BaseContainer> */}
          <MainOptionsActions options={options} />
          {/* </BaseContainer> */}
        </div>

        <div className="relative inset-0 bottom-[-56.5px] flex items-end justify-center lg:absolute lg:hidden">
          <OptionsActionsCard options={options} rounded="rounded-none" />
        </div>
      </div>

      <BaseContainer className="flex w-10/12 flex-col py-0 md:py-20">
        <ServicesSection />

        {/* <div className="block md:hidden"> */}
        <ServicesSectionMobile />
        {/* </div> */}

        <div className="justifiy-center block md:hidden">
          <NearbyUnitsMobile />
        </div>

        <div className="hidden lg:block">
          <InformationSlider
            title="Pesquisa Clínica Oncoclínicas"
            description="Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil."
            image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
          />

          <NearbyUnits />
        </div>
      </BaseContainer>

      <div className="block md:hidden">
        <InformationSliderMobile image="https://i.postimg.cc/8PkhLkj0/Captura-de-tela-2024-09-25-104009.png" />
      </div>

      <FaqSection />
      <section>
        <MainOptionsActions options={options} rounded="rounded-none" />
      </section>
    </main>
  );
}
