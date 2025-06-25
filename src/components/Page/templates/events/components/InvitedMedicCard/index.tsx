import Image from "next/image";
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
        <Image
          className="h-28 w-32 object-cover"
          src={avatar?.url || ""}
          alt={avatar?.alt || ""}
          width={avatar?.width || 0}
          height={avatar?.height || 0}
          loading="lazy"
        />
      </div>
      <div className="ml-6">
        <h2 className="text-primary lg:text-2xl">{name}</h2>
        <p className="text-darkGray lg:text-lg">{crm}</p>
        {positions?.map((position) => (
          <ul className="list-outside list-disc text-sm font-medium text-darkGray md:ml-3 lg:text-lg">
            <li>{position}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
