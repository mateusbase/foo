import { InvitedMedicalCardProps } from "./types";

export default function InvitedMedicalCard({
  name,
  crm,
  positions,
  avatar,
}: InvitedMedicalCardProps): JSX.Element {
  return (
    <div className="my-6 flex">
      <div>
        <img className="h-28 w-32" src={avatar} alt="Avatar Médico" />
      </div>
      <div className="ml-6">
        <h2 className="text-2xl text-primary">{name}</h2>
        <p className="text-lg text-darkGray">{crm}</p>
        {positions?.map((position) => (
          <ul className="list-inside list-disc text-lg font-medium text-darkGray">
            <li>{position}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
