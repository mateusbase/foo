import Image from "next/image";

interface NewsCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const NewsCard = ({
  image,
  title,
  subtitle,
  description,
}: NewsCardProps): JSX.Element => {
  return (
    <section className="flex flex-col gap-2">
      <Image
        src={image}
        alt={title}
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="flex w-full flex-col gap-2">
        <h1 className="break-words text-xl text-primary">{title}</h1>
        <h2 className="break-words text-sm text-primary-foreground lg:text-xs">
          {subtitle}
        </h2>
        <p className="text-darkgray break-words text-sm lg:text-xs">
          {description}
        </p>
      </div>
    </section>
  );
};

export default NewsCard;
