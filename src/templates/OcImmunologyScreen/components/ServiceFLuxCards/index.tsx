import { ServiceFluxDataProps } from "../../data/serviceFluxData";

const ServiceFLuxCards = ({
  services,
}: {
  services: ServiceFluxDataProps;
}): JSX.Element => {
  return (
    <div className="flex min-h-[418px] flex-col items-center justify-center gap-5 rounded-[20px] border border-lightGray p-6 md:flex-row md:py-[10.5px] md:pl-6 md:pr-10">
      <span className="md:py-[10.5px]">{services.image}</span>
      <p className="flex items-center justify-center text-center align-middle text-xl text-gray-600 md:text-left">
        {services.description}
      </p>
    </div>
  );
};

export default ServiceFLuxCards;
