import Image from "next/image";

interface ValuesCardProps {
  title: string;
  description: string;
  icon: string;
}

const ValuesCard = ({
  title,
  description,
  icon,
}: ValuesCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[677px] w-full flex-col gap-4 rounded-[20px] border border-lightGray p-6 md:min-h-[618px] lg:min-h-[564px]">
      <div className="ml-6 mr-5 flex flex-col items-start gap-8">
        <Image
          src={icon}
          alt="Ícone"
          width={72}
          height={72}
          className="shrink-0"
        />
        <span className="justify-items-center text-xl">{title}</span>
      </div>
      <p className="ml-6 mr-5 mt-1 flex-1 break-words text-lg text-darkGray md:mx-2 lg:ml-6 lg:mr-5 lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default ValuesCard;
