type VideoCardProps = {
  src: string;
  description: string;
};

const VideoCard = ({ src, description }: VideoCardProps): JSX.Element => {
  return (
    <div className="mb-[54px] w-full md:mb-[52px] lg:mb-[79px] lg:w-[95%]">
      <iframe src={src} title="OC vídeo" className="h-80 w-full object-cover" />
      <div className="rounded-bl-[40px] bg-custom-gradient-dark px-7 py-8">
        <p className="text-2xl text-white">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
