export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps): JSX.Element {
  return (
    <div className="mt-20 flex justify-center">
      <div className="text-center">
        <h2 className="font-lato text-[62px] font-black leading-[74px] text-primary">
          {title}
        </h2>
        <p className="font-lato mt-4 text-[26px] font-medium leading-[32px] text-darkGray">
          {description}
        </p>
      </div>
    </div>
  );
}
