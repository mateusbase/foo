import ServiceCard from "@/components/ServiceCard";

interface Service {
  id: number;
  title: string;
  icon: string;
}

interface ListServiceCardsProps {
  services: Service[];
}
export default function ListServiceCards({
  services,
}: ListServiceCardsProps): JSX.Element {
  return (
    <div className="mt-8 hidden flex-wrap justify-center gap-3 md:flex">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
