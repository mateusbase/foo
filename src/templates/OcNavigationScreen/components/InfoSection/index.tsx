interface InfoSectionProps {
  title?: string;
  content: string | string[];
  children?: React.ReactNode;
}

const InfoSection = ({
  title,
  content,
  children,
}: InfoSectionProps): JSX.Element => {
  return (
    <div className="full-bleed mb-10 bg-custom-gradient-dark pb-10 pl-10 pr-7 pt-9 text-white md:mb-11 md:pt-14 lg:mb-0 lg:w-2/5 lg:pb-[256px] lg:pl-16 lg:pr-24 lg:pt-16">
      {title && (
        <span className="text-2xl md:text-title-lg xl:text-[50px]">
          {title}
        </span>
      )}
      {Array.isArray(content) ? (
        content.map((paragraph) => (
          <p
            key={paragraph.slice(0, 10)}
            className="mb-3 mt-12 text-xl lg:text-lg xl:text-2xl"
          >
            {paragraph}
          </p>
        ))
      ) : (
        <p className="mb-3 mt-12 text-xl">{content}</p>
      )}
      {children}
    </div>
  );
};

export default InfoSection;
