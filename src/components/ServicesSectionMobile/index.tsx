import ListServiceCardsMobile from "./components/ListServiceCardsMobile";
import ServiceTextMobile from "./components/ServiceTextMobile";

export default function ServicesSection(): JSX.Element {
  const services = [
    { id: 1, title: "Tratamentos", icon: "/favicon.ico" },
    { id: 2, title: "Diagnósticos", icon: "/favicon.ico" },
    { id: 3, title: "Serviços", icon: "/favicon.ico" },
    { id: 4, title: "Tudo sobre o câncer", icon: "/favicon.ico" },
  ];

  return (
    <section className="mt-10 flex flex-col items-center justify-center px-4 py-2">
      <ServiceTextMobile />

      <ListServiceCardsMobile services={services} />
    </section>
  );
}
