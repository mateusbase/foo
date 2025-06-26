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
    <div className="full-bleed mb-10 bg-custom-gradient-dark pb-10 pl-10 pr-7 pt-9 text-white md:mb-11 md:pt-14 lg:mb-0 lg:w-[523px] lg:pl-16 lg:pr-24 lg:pt-16">
      {title && (
        <div className="mb-6 text-3xl leading-[45px] md:text-title-lg xl:text-[50px]">
          {title}
        </div>
      )}

      {Array.isArray(content) ? (
        content.map((paragraph) => (
          <div
            key={paragraph}
            className="mb-3 mt-4 text-xl lg:text-lg xl:text-2xl"
          >
            {paragraph}
          </div>
        ))
      ) : (
        <div className="mb-3 mt-4 text-xl">{content}</div>
      )}

      {children}
    </div>
  );
};

export default InfoSection;
