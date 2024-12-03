import PageLayout from "@/components/PageLayout";
import PurpleBanner from "@/components/PurpleBanner";
import { PrecisionMedicineScreenProps } from "./type";
import BannerWithVideo from "./components/BannerWithVideo";
import RoundedRectangle from "./components/RoundedRectangle";
import { cardElements } from "./components/RoundedRectangle/CardElements";
import PlayStoreContainer from "./components/PlayStoreContainer";
import ValuesAndMissionText from "./components/ValuesAndMIssionText";
import ExamsCard from "./components/ExamsCard";
import { genomicsExams, patologicalExams } from "./exams";

export function PrecisionMedicineScreen({
  media,
}: PrecisionMedicineScreenProps): JSX.Element {
  const isVideo = media ? /\.(mp4|webm|ogg)$/i.test(media) : undefined;

  return (
    <PageLayout title="Medicina de Precisão" showBreadcrumb>
      <div className="lg:hidden">
        <PurpleBanner
          subtitle="Conheça a OC Medicina de Precisão"
          description="A OC Medicina de Precisão engloba os laboratórios de Anatomia Patológica, Genômica e Big data que oferece um portfolio completo e de alta relevância clínica."
        />
        {media && (
          <div className="mb-6 w-full">
            {isVideo ? (
              <video src={media} controls className="w-full rounded-md">
                <track kind="captions" />
              </video>
            ) : (
              <img src={media} alt="Media" className="w-full rounded-md" />
            )}
          </div>
        )}
      </div>
      <div className="hidden lg:flex">
        <BannerWithVideo isVideo={isVideo} media={media} />
      </div>

      <ValuesAndMissionText />

      <RoundedRectangle cardElements={cardElements.cardElements} />

      <PlayStoreContainer />

      <div className="mt-16 text-center">
        <h1 className="mb-11 font-lato-regular text-4xl text-primary-foreground">
          Nossos Exames
        </h1>
        <h4 className="mb-8 font-lato-regular text-3xl text-darkGray">
          Patologia
        </h4>
        <ExamsCard exams={patologicalExams} />

        <h4 className="mb-8 mt-20 font-lato-regular text-3xl text-darkGray">
          Genômica
        </h4>
        <ExamsCard exams={genomicsExams} />
      </div>
    </PageLayout>
  );
}
