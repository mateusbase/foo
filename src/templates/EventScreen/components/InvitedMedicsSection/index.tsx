import React from "react";
import { listMedics } from "../../medicsMock";
import InvitedMedicCard from "../InvitedMedicCard";

export default function InvitedMedicsSection(): JSX.Element {
  return (
    <div>
      <h1 className="text-2xl text-primary lg:text-[40px]">
        Médicos convidados
      </h1>
      <div className="flex flex-wrap gap-4">
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
