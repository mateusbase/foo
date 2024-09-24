import MainOptionsActions from "@/components/MainOptionsActions";
import NearbyUnits from "@/components/NearbyUnits";
import ServicesSection from "@/components/ServicesSection";
import { options } from "@/utils/objectUtils";
import InformationSlider from "@/components/InformationSlider";
import FaqSection from "@/components/FaqSection";
import SearchInput from "./components/SearchInput";

export default function HomeScreen(): JSX.Element {
  return (
    <main className="flex w-full flex-col">
      <section className="relative w-full">
        <img
          src="https://i.postimg.cc/8kf6xnCK/banner.png"
          alt=""
          className="w-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <SearchInput />
        </div>

        <div className="absolute inset-0 bottom-[-56.5px] flex items-end justify-center">
          <MainOptionsActions options={options} />
        </div>
      </section>

      <section className="container mt-10">
        <ServicesSection />

        <InformationSlider
          title="Pesquisa Clínica Oncoclínicas"
          description="Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil."
          image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
        />

        <NearbyUnits />
      </section>
      <FaqSection />

      <section>
        <MainOptionsActions options={options} rounded="rounded-none" />
      </section>
    </main>
  );
}
