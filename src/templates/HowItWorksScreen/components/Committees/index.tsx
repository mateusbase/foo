import InvitedMedicCard from "@/templates/EventScreen/components/InvitedMedicCard";
import { listMedics } from "@/templates/EventScreen/medicsMock";

export default function Committees(): JSX.Element {
  return (
    <div className="w-full">
      <div>
        <h2 className="text-[40px] text-primary">
          Comitê nacional de pesquisa clínica
        </h2>
        {listMedics.map((medic) => (
          <InvitedMedicCard
            key={medic.id}
            name={medic.name}
            crm={medic.crm}
            positions={medic.positions}
            avatar={medic.avatar}
          />
        ))}
      </div>
      <div className="mt-32">
        <h2 className="text-[40px] text-primary">
          Equipe de abrangência nacional
        </h2>
        {listMedics.map((medic) => (
          <InvitedMedicCard
            key={medic.id}
            name={medic.name}
            crm={medic.crm}
            positions={medic.positions}
            avatar={medic.avatar}
          />
        ))}
      </div>
    </div>
  );
}
