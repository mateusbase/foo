import Specialty from "../../data/specialtyDataMock";

const SpecialtyCard = ({
  specialty,
}: {
  specialty: Specialty;
}): JSX.Element => {
  return (
    <div
      key={specialty.id}
      className="mt-8 flex flex-row items-center gap-6 rounded-[20px] border border-primary py-[30.5px] pl-8 md:w-1/2"
    >
      {specialty.image}
      <p className="text-2xl text-primary">{specialty.name}</p>
    </div>
  );
};

export default SpecialtyCard;
