type VideoCardProps = {
  src: string;
  description: string;
};

const VideoCard = ({ src, description }: VideoCardProps): JSX.Element => {
  return (
    <>
      <iframe src={src} title="OC vídeo" className="h-80 w-full object-cover" />
      <div className="rounded-bl-[40px] bg-custom-gradient-light px-7 py-8 lg:mb-6">
        <p className="text-2xl text-white">{description}</p>
      </div>
    </>
  );
};

export default VideoCard;
