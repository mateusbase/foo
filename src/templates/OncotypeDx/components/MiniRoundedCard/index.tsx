interface MiniRoundedCardProps {
  text: string;
  image: string;
}

const MiniRoundedCard = ({
  text,
  image,
}: MiniRoundedCardProps): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="h-[306px] w-full bg-cover bg-center md:h-[325px]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="md:h- h-[190px] w-full rounded-bl-[100px] bg-custom-gradient-dark p-7 md:h-[214px] lg:pt-9">
        <p className="text-2xl text-white">{text}</p>
      </div>
    </div>
  );
};

export default MiniRoundedCard;
