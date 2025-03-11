import { Image } from "@heroui/react";

interface Project {
  icon: string;
  title: string;
  description: string;
}

const ProjectsDescriptionCards = ({
  title,
  description,
  icon,
}: Project): JSX.Element => {
  return (
    <div className="flex h-[350px] w-full flex-row items-center gap-6 rounded-[20px] border border-lightGray px-9 py-7 text-darkGray md:h-[285px] lg:h-[290px]">
      <div className="mb-9 mt-7 flex flex-col">
        <div className="flex flex-row items-center gap-5">
          <Image src={icon} alt={title} className="size-[88px] shrink-0" />
          <h3 className="text-2xl">{title}</h3>
        </div>
        <p className="mt-6 text-center text-lg md:w-4/5 md:text-left lg:w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsDescriptionCards;
