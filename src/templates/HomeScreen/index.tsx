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
import SearchInput from "./components/SearchInput";
import SearchInputMobile from "./components/SearchInputMobile";

export default function HomeScreen(): JSX.Element {
  return (
    <main className="flex w-full flex-col">
      <section className="relative w-full">
        <img
          src="https://i.postimg.cc/8kf6xnCK/banner.png"
          alt=""
          className="hidden w-full lg:block"
        />
        <div className="relative inset-0 z-10 flex hidden items-center justify-center md:flex lg:absolute">
          <SearchInput />
        </div>

        <div className="relative inset-0 z-10 flex items-center justify-center md:hidden lg:absolute">
          <SearchInputMobile />
        </div>

        <div className="absolute inset-0 bottom-[-56.5px] hidden items-end justify-center md:flex">
          <BaseContainer>
            <MainOptionsActions options={options} />
          </BaseContainer>
        </div>

        <div className="relative inset-0 bottom-[-56.5px] flex items-end justify-center md:hidden lg:absolute">
          <OptionsActionsCard options={options} rounded="rounded-none" />
        </div>
      </section>

      <BaseContainer className="hidden md:block">
        <ServicesSection />
      </BaseContainer>

      <div className="block md:hidden">
        <ServicesSectionMobile />
      </div>

      <BaseContainer className="hidden md:block">
        <InformationSlider
          title="Pesquisa Clínica Oncoclínicas"
          description="Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil."
          image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
        />

        <NearbyUnits />
      </BaseContainer>

      <InformationSliderMobile image="https://i.postimg.cc/8PkhLkj0/Captura-de-tela-2024-09-25-104009.png" />

      <FaqSection />

      <section>
        <MainOptionsActions options={options} rounded="rounded-none" />
      </section>
    </main>
  );
}
