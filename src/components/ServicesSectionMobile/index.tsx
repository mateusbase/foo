import {
  TreatmentsIcon,
  MicroscopeIcon,
  ServiceIcon,
  AllOfCancerIcon,
} from "@/components/Icons";
import ListServiceCardsMobile from "./components/ListServiceCardsMobile";
import ServiceTextMobile from "./components/ServiceTextMobile";

export default function ServicesSectionMobile(): JSX.Element {
  const services = [
    {
      id: 1,
      title: "Tratamentos",
      icon: <TreatmentsIcon />,
    },
    { id: 2, title: "Diagnósticos", icon: <MicroscopeIcon /> },
    { id: 3, title: "Serviços", icon: <ServiceIcon /> },
    { id: 4, title: "Tudo sobre o câncer", icon: <AllOfCancerIcon /> },
  ];
  return (
    <section className="flex flex-col items-center justify-center lg:hidden">
      <ServiceTextMobile />

      <ListServiceCardsMobile services={services} />
    </section>
  );
}
