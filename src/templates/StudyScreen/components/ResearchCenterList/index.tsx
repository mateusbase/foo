import React from "react";

interface ResearchCenter {
  id: number;
  center: string;
  principalInvestigator: string;
  email: string;
  phone: string;
}

interface ResearchCenterProps {
  center: ResearchCenter;
}

export default function ResearchCenterCard({
  center,
}: ResearchCenterProps): JSX.Element {
  return (
    <div className="flex flex-col gap-4 rounded-[80px] border border-darkGray p-10 md:flex-row lg:w-1/2">
      <div className="flex w-1/2 flex-col gap-10">
        <div>
          <h2 className="text-xl text-primary">Centro</h2>
          <p className="text-base text-gray-700">{center.center}</p>
        </div>
        <div>
          <h2 className="text-xl text-primary">Investigador principal</h2>
          <p className="text-base text-gray-700">
            {center.principalInvestigator}
          </p>
        </div>
      </div>

      <div className="flex w-1/2 flex-col gap-10">
        <div>
          <h2 className="text-xl text-primary">E-mail</h2>
          <p className="text-base text-gray-700">{center.email}</p>
        </div>
        <div>
          <h2 className="text-xl text-primary">Telefone</h2>
          <p className="text-base text-gray-700">{center.phone}</p>
        </div>
      </div>
    </div>
  );
}
