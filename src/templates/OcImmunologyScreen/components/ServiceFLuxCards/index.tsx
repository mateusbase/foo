import { ServiceFluxDataProps } from "../../data/serviceFluxData";

const ServiceFLuxCards = ({
  services,
}: {
  services: ServiceFluxDataProps;
}): JSX.Element => {
  return (
    <div
      key={services.id}
      className="flex min-h-[418px] flex-col items-center justify-center gap-5 rounded-[20px] border border-lightGray p-6 md:h-[103px] md:min-h-[190px] md:flex-row md:py-[10.5px] md:pl-6 md:pr-10 lg:min-h-[280px] lg:w-[493px]"
    >
      <span className="md:py-[10.5px]">{services.image}</span>
      <p className="text-center text-xl leading-tight text-darkGray md:text-left lg:text-sm xl:text-lg">
        {services.description}
      </p>
    </div>
  );
};

export default ServiceFLuxCards;
