import { IoIosCalendar } from "react-icons/io";
import { FaUser, FaMapMarkerAlt, FaFile } from "react-icons/fa";
import SearchInput from "./components/SearchInput";
import MainOptionsActions from "@/components/MainOptionsActions";
import NearbyUnits from "@/components/NearbyUnits";

export default function HomeScreen(): JSX.Element {
  const options = [
    { title: "Agende uma consulta ou exame", icon: IoIosCalendar },
    { title: "Encontre uma unidade", icon: FaMapMarkerAlt },
    { title: "Encontre um médico", icon: FaUser },
    { title: "Resultado de Exames", icon: FaFile },
  ];

  return (
    <main className="relative flex flex-wrap gap-4">
      <div className="w-full">
        <img
          src="https://placehold.co/1920x600/000000/FFF"
          alt=""
          className="h-auto w-full"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <SearchInput />
        </div>

        {/* <div className="inset-0 flex items-end justify-center">
          <MainOptionsActions options={options} />
        </div> */}
      </div>
      <NearbyUnits />
    </main>
  );
}
