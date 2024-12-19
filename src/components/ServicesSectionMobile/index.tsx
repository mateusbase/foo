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
      path: "/servicos/#tratamentos",
    },
    {
      id: 2,
      title: "Diagnósticos",
      icon: <MicroscopeIcon />,
      path: "/servicos/#diagnósticos",
    },
    { id: 3, title: "Serviços", icon: <ServiceIcon />, path: "/servicos" },
    {
      id: 4,
      title: "Tudo sobre o câncer",
      icon: <AllOfCancerIcon />,
      path: "/tudo-sobre-o-cancer",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center lg:hidden">
      <ServiceTextMobile />

      <ListServiceCardsMobile services={services} />
    </section>
  );
}
