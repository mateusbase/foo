import { Image } from "@heroui/react";

interface Project {
  id: number;
  image: string;
  title: string;
  text: string;
}

interface ProjectCardsProps {
  projects: Project[];
}

const ProjectCards = ({ projects }: ProjectCardsProps): JSX.Element => {
  return (
    <div className="mt-3 flex flex-col items-center gap-6 md:mt-10 lg:flex-row lg:justify-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex h-[105px] w-full flex-row items-center gap-6 rounded-[20px] border border-lightGray py-8 pl-8 md:h-[201px] md:w-[420px] md:py-12"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="size-[70.5px] shrink-0 md:size-[108px]"
          />
          <div>
            <h3 className="text-2xl md:text-4xl">{project.title}</h3>
            <p className="mr-8 text-lg md:text-2xl">{project.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
