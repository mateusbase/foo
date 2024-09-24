import ServiceCard from "../ServiceCard";
import ServiceText from "./components/ServiceText";
import ServiceTextMobile from "./components/ServiceTextMobile";

export default function ServicesSection(): JSX.Element {
  const services = [
    { id: 1, title: "Tratamentos", icon: "/favicon.ico" },
    { id: 2, title: "Diagnósticos", icon: "/favicon.ico" },
    { id: 3, title: "Serviços", icon: "/favicon.ico" },
    { id: 4, title: "Tudo sobre o câncer", icon: "/favicon.ico" },
  ];

  return (
    <section className="mt-10 flex flex-col items-center justify-center py-8 md:flex-row">
      <ServiceText />

      <ServiceTextMobile />

      <div className="mt-8 hidden flex-wrap justify-center gap-3 md:flex">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <div className="md:hidden">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
