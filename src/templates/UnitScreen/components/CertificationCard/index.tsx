import Image from "next/image";

interface CertificationCardProps {
  name: string;
  imageSrc: string;
  shouldShowMore?: boolean;
}
const CertificationCard = ({
  name,
  imageSrc,
  shouldShowMore,
}: CertificationCardProps): JSX.Element => {
  return (
    <div>
      <Image src={imageSrc} alt={name} width={100} height={100} />
      <p className="mb-1 text-xl text-primary">{name}</p>
      {shouldShowMore && <p className="text-primary">Saiba mais</p>}
    </div>
  );
};

export default CertificationCard;
