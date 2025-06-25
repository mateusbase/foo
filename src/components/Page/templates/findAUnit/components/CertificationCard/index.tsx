import Image from "next/image";
import { CertificationCardProps } from "./types";

const CertificationCard = ({
  name,
  image,
}: CertificationCardProps): JSX.Element => {
  return (
    <div className="flex h-full flex-col items-start">
      <div className="flex w-full flex-1 items-center">
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>

      <p className="mt-1 w-full text-left text-xl text-primary">{name}</p>
    </div>
  );
};

export default CertificationCard;
