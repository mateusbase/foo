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

const informationMock = [
  {
    id: 1,
    description:
      "Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil.",
    image:
      "https://i.postimg.cc/8PkhLkj0/Captura-de-tela-2024-09-25-104009.png",
  },
  {
    id: 2,
    description:
      "Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil.",
    image:
      "https://i.postimg.cc/8PkhLkj0/Captura-de-tela-2024-09-25-104009.png",
  },
  {
    id: 3,
    description:
      "Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil.",
    image:
      "https://i.postimg.cc/JhtjVzj7/Captura-de-tela-2024-09-27-161441.png",
  },
];
export default function HomeScreen(): JSX.Element {
  return (
    <main className="flex w-full flex-col">
      <div className="relative w-full">
        <img
          src="https://i.postimg.cc/8kf6xnCK/banner.png"
          alt=""
          className="hidden w-full md:flex"
        />
        <div className="relative inset-0 z-10 hidden items-center justify-center md:absolute md:flex">
          <SearchInput />
        </div>

        <div className="absolute inset-0 bottom-[-56.5px] hidden items-end justify-center lg:flex">
          <MainOptionsActions options={options} />
        </div>
      </div>

      <BaseContainer className="flex w-full flex-col py-0 lg:py-10">
        <SearchInputMobile />

        <OptionsActionsCard options={options} rounded="rounded-none" />

        <ServicesSection />

        <ServicesSectionMobile />

        <NearbyUnitsMobile />

        <div className="hidden lg:block">
          <InformationSlider
            title="Pesquisa Clínica Oncoclínicas"
            description="Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil."
            image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
          />

          <NearbyUnits />
        </div>
      </BaseContainer>

      <div className="block lg:hidden">
        {/* {informationMock.map((information) => ( */}
        <InformationSliderMobile informations={informationMock} />
        {/* ))} */}
      </div>

      <FaqSection />
      <section>
        <MainOptionsActions options={options} rounded="rounded-none" />
      </section>
    </main>
  );
}
