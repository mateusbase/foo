import MainOptionsActions from "@/components/MainOptionsActions";
import NearbyUnits from "@/components/NearbyUnits";
import ServicesSection from "@/components/ServicesSection";
import { options } from "@/utils/objectUtils";
import InformationSlider from "@/components/InformationSlider";
import SearchInput from "./components/SearchInput";

export default function HomeScreen(): JSX.Element {
  return (
    <main className="flex w-full flex-col gap-4">
      <section>
        <section className="relative w-full">
          <img
            src="https://placehold.co/1920x600/000000/FFF"
            alt=""
            className="h-auto w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <SearchInput />
          </div>

          <div className="absolute inset-0 bottom-[-56.5px] flex items-end justify-center">
            <MainOptionsActions options={options} />
          </div>
        </section>

        <section className="container mt-10">
          <ServicesSection />
          <InformationSlider />
          <NearbyUnits />
        </section>

        <section>
          <MainOptionsActions options={options} rounded="rounded-none" />
        </section>
      </section>
    </main>
  );
}
