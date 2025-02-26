import React from "react";

const ProjectCard = ({ title, text }: ProjectCardProps): JSX.Element => {
  return (
    <div className="max-h[479px] color-primary my-6 flex-col gap-2 rounded-2xl bg-primary px-4 text-white md:my-10 md:gap-6 md:px-[28px] lg:my-8 lg:px-16">
      <div className="mb-2 mt-[13px] pt-[13px] text-base md:mb-[15px] md:mt-[40px] md:pt-10 md:text-[40px] lg:mb-5">
        {title}
      </div>
      <div className="pb-3 text-sm md:pb-[30px] md:text-2xl">{text}</div>
    </div>
  );
};

export default ProjectCard;
