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
    <div className="full-bleed mb-11 bg-custom-gradient-light pb-10 pl-10 pr-7 pt-9 text-white lg:mb-0 lg:w-2/5 lg:pb-[256px] lg:pl-16 lg:pr-24 lg:pt-4 xl:pt-9">
      {title && <span className="text-2xl lg:text-5xl">{title}</span>}
      {Array.isArray(content) ? (
        content.map((paragraph) => (
          <p
            key={paragraph.slice(0, 10)}
            className="mb-3 mt-12 text-2xl lg:text-lg xl:text-2xl"
          >
            {paragraph}
          </p>
        ))
      ) : (
        <p className="mb-3 mt-12 text-2xl">{content}</p>
      )}
      {children}
    </div>
  );
};

export default InfoSection;
