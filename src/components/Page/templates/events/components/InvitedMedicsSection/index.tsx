import React from "react";
import InvitedMedicCard from "../InvitedMedicCard";
import { InvitedMedicsSectionProps } from "./types";

export default function InvitedMedicsSection({
  physicians,
}: InvitedMedicsSectionProps): JSX.Element {
  return (
    <section>
      <h1 className="text-2xl text-primary lg:text-title-lg">
        Médicos convidados
      </h1>
      <div className="flex flex-wrap gap-4">
        {physicians?.map((medic) => (
          <InvitedMedicCard
            key={medic.name}
            name={medic.name}
            crm={medic.crm}
            positions={medic.attributions.map((position) => position)}
            avatar={medic.image}
          />
        ))}
      </div>
    </section>
  );
}
