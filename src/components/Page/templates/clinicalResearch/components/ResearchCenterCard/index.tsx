import React from "react";

interface ResearchCenterProps {
  centerName?: string;
  executor: string;
  email: string;
  phone: string;
}

export default function ResearchCenterCard({
  centerName,
  executor,
  email,
  phone,
}: ResearchCenterProps): JSX.Element {
  return (
    <div className="flex flex-col gap-4 rounded-[80px] border border-darkGray p-10 md:flex-row lg:w-1/2">
      <div className="flex flex-col gap-10 md:w-1/2">
        <div>
          <h2 className="text-xl text-primary">Centro</h2>

          <p className="text-base text-gray-700">{centerName}</p>
        </div>

        <div>
          <h2 className="text-xl text-primary">Investigador principal</h2>

          <p className="text-base text-gray-700">{executor}</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:w-1/2">
        <div>
          <h2 className="text-xl text-primary">E-mail</h2>

          <p className="break-words text-base text-gray-700">{email}</p>
        </div>

        <div>
          <h2 className="text-xl text-primary">Telefone</h2>

          <p className="text-base text-gray-700">{phone}</p>
        </div>
      </div>
    </div>
  );
}
