type VideoCardProps = {
  videoId: string;
  description: string;
};

const VideoCard = ({ videoId, description }: VideoCardProps): JSX.Element => {
  return (
    <div className="w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="O vídeo"
        className="h-80 w-full object-cover"
        allowFullScreen
      />
      <div className="rounded-bl-[40px] bg-custom-gradient-dark px-7 py-8 lg:mb-6">
        <p className="text-2xl text-white">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
