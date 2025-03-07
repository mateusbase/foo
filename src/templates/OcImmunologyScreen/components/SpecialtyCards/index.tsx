import Specialty from "../../data/specialtyDataMock";

const SpecialtyCard = ({
  specialty,
}: {
  specialty: Specialty;
}): JSX.Element => {
  return (
    <div
      key={specialty.id}
      className="flex w-full flex-row items-center gap-6 rounded-[20px] border border-primary py-[30.5px] pl-8 align-middle"
    >
      {specialty.image2}
      <p className="text-xl text-primary">{specialty.name}</p>
    </div>
  );
};

export default SpecialtyCard;
