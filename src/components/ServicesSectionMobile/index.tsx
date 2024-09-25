import ListServiceCardsMobile from "./components/ListServiceCardsMobile";
import ServiceTextMobile from "./components/ServiceTextMobile";

export default function ServicesSectionMobile(): JSX.Element {
  const services = [
    { id: 1, title: "Tratamentos", icon: "/favicon.ico" },
    { id: 2, title: "Diagnósticos", icon: "/favicon.ico" },
    { id: 3, title: "Serviços", icon: "/favicon.ico" },
    { id: 4, title: "Tudo sobre o câncer", icon: "/favicon.ico" },
    { id: 5, title: "Medicina de precisão", icon: "/favicon.ico" },
  ];

  return (
    <section className="flex flex-col items-center justify-center lg:hidden">
      <ServiceTextMobile />

      <ListServiceCardsMobile services={services} />
    </section>
  );
}
