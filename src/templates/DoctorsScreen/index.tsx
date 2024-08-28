import MainOptionsActions from "@/components/MainOptionsActions";
import ServicesSection from "@/components/ServicesSection";
import NearbyUnits from "@/components/NearbyUnits";
import { IoIosCalendar } from "react-icons/io";
import { FaFile, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import UpcomingEventsSection from "@/components/UpcomingEvents";
import SearchInput from "../HomeScreen/components/SearchInput";

export default function DoctorsScreen(): JSX.Element {
  const options = [
    { title: "Agende uma consulta ou exame", icon: IoIosCalendar },
    { title: "Encontre uma unidade", icon: FaMapMarkerAlt },
    { title: "Encontre um médico", icon: FaUser },
    { title: "Resultado de Exames", icon: FaFile },
  ];

  return (
    // <main>
    //   <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-50">
    //     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //       <h1>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
    //     </div>
    //   </div>
    // </main>

    <main className="flex w-full flex-col gap-4">
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

      <section className="mt-10">
        <ServicesSection />
        <UpcomingEventsSection />
      </section>
    </main>
  );
}
