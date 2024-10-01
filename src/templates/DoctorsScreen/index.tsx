import MainOptionsActions from "@/components/MainOptionsActions";
import ServicesSection from "@/components/ServicesSection";
import UpcomingEventsSection from "@/components/UpcomingEvents";
import { options } from "@/utils/objectUtils";
import FaqSection from "@/components/FaqSection";
import BaseContainer from "@/components/Container";
import OptionsActionsCard from "@/components/OptionsActionsCard";
import ServicesSectionMobile from "@/components/ServicesSectionMobile";
import UpcomingEventsSectionMobile from "@/components/UpcomingEventsMobile";
import InformationSlider from "@/components/InformationSlider";
import SearchInput from "../HomeScreen/components/SearchInput";
import SearchInputMobile from "../HomeScreen/components/SearchInputMobile";

export default function DoctorsScreen(): JSX.Element {
  return (
    <main className="flex w-full flex-col">
      <section className="relative w-full">
        <img
          src="https://i.postimg.cc/SKjfR1hd/DESK-Home-M-dicos-image-1.png"
          alt=""
          className="hidden h-auto w-full md:flex"
        />
        <div className="absolute inset-0 z-10 hidden items-center justify-center md:flex">
          <SearchInput />
        </div>

        <div className="absolute inset-0 bottom-[-56.5px] hidden items-end justify-center lg:flex">
          <MainOptionsActions options={options} />
        </div>
      </section>

      <BaseContainer className="flex w-full flex-col py-0 lg:py-10">
        <SearchInputMobile />

        <OptionsActionsCard options={options} rounded="rounded-none" />

        <ServicesSection />

        <ServicesSectionMobile />

        <div className="hidden lg:block">
          <InformationSlider
            title="Leve a medicina de precisão aos seus pacientes"
            description="Na Oncoclínicas, nos dedicamos ao atendimento integral e multidisciplinar, com foco no tratamento individualizado, seguros e menos invasivos. E tudo isso começa nos diagnósticos precisos."
            image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
            backgroundType="darkGray"
          />
        </div>

        <UpcomingEventsSection />

        <UpcomingEventsSectionMobile />
      </BaseContainer>

      <FaqSection />

      <section>
        <MainOptionsActions options={options} rounded="rounded-none" />
      </section>
    </main>
  );
}
