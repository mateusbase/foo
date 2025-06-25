import { CardDoctorProps } from "./types";

export function CardDoctor({
  doctor,
  width = "w-[352px]",
  onClick,
}: CardDoctorProps): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={`flex h-[552px] cursor-pointer ${width} w-full flex-col items-start rounded-bl-[30px] border border-lightGray lg:max-w-[400px]`}
    >
      <img
        src={doctor.imgSrc || "/assets/images/avatar.png"}
        alt={`Foto de ${doctor.name}`}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-[24px] font-bold text-primary">{doctor.name}</h3>
        <p className="mt-1 font-bold text-darkGray">CRM: {doctor.crm}</p>
        {doctor.specialty && doctor.specialty.length > 0 && (
          <p className="mt-2 text-darkGray">{doctor.specialty.join(", ")}</p>
        )}
        <p className="mt-4 font-bold text-primary">RQE</p>
        <p className="mt-1 text-darkGray">{doctor.rqe}</p>
        <p className="mt-4 font-bold text-primary">Local de Atendimento</p>
        <p className="mt-1 text-darkGray">{doctor.location}</p>
      </div>
    </div>
  );
}
