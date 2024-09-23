import MainOptionsActions from "@/components/MainOptionsActions";
import NearbyUnits from "@/components/NearbyUnits";
import ServicesSection from "@/components/ServicesSection";
import { options } from "@/utils/objectUtils";
import InformationSlider from "@/components/InformationSlider";
import FaqSection from "@/components/FaqSection";
import { useDeviceType } from "@/hooks/useDeviceType";
import { DeviceType } from "@/utils/enums";
import OptionsActionsCard from "@/components/OptionsActionsCard";
import SearchInput from "./components/SearchInput";
import SearchInputMobile from "./components/SearchInputMobile";

export default function HomeScreen(): JSX.Element {
  const deviceType = useDeviceType();

  return (
    <main className="flex w-full flex-col">
      <section className="relative w-full">
        <img
          src="https://i.postimg.cc/8kf6xnCK/banner.png"
          alt=""
          className="hidden w-full lg:block"
        />

        {/* Para desktop */}
        <div className="relative inset-0 z-10 flex hidden items-center justify-center md:flex lg:absolute">
          <SearchInput />
        </div>

        {/* Para mobile */}
        <div className="relative inset-0 z-10 flex items-center justify-center md:hidden lg:absolute">
          <SearchInputMobile />
        </div>

        {/* Para desktop */}
        <div className="relative inset-0 bottom-[-56.5px] hidden items-end justify-center md:flex lg:absolute">
          <MainOptionsActions options={options} />
        </div>

        {/* Para mobile */}
        <div className="relative inset-0 bottom-[-56.5px] flex items-end justify-center md:hidden lg:absolute">
          <OptionsActionsCard options={options} rounded="rounded-none" />
        </div>
      </section>

      <section className="container mt-10">
        <ServicesSection />

        <InformationSlider />

        <NearbyUnits />
      </section>
      <FaqSection />

      <section>
        <MainOptionsActions options={options} rounded="rounded-none" />
      </section>
    </main>
  );
}
