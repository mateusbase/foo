import { IoIosCalendar } from "react-icons/io";
import { FaUser, FaMapMarkerAlt, FaFile } from "react-icons/fa";
import SearchInput from "./components/SearchInput";
import MainOptionsActions from "@/components/MainOptionsActions";
import NearbyUnits from "@/components/NearbyUnits";
import ServicesSection from "@/components/ServicesSection";

export default function HomeScreen(): JSX.Element {
  const options = [
    { title: "Agende uma consulta ou exame", icon: IoIosCalendar },
    { title: "Encontre uma unidade", icon: FaMapMarkerAlt },
    { title: "Encontre um médico", icon: FaUser },
    { title: "Resultado de Exames", icon: FaFile },
  ];

  return (
    <main className="flex flex-col gap-4 w-full">
      <section className="w-full relative">
        <img
          src="https://placehold.co/1920x600/000000/FFF"
          alt=""
          className="h-auto w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <SearchInput />
        </div>

        <div className="absolute inset-0 flex items-end justify-center bottom-[-56.5px]">
          <MainOptionsActions options={options} />
        </div>
      </section>

      <section className="mt-10">
        <ServicesSection />
        <NearbyUnits />
      </section>
    </main>
  );
}
