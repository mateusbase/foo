import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { VideosGalleryRootProps } from "./types";
import SelectButtons from "./components/SelectButtons";
import VideoCardSection from "./components/VideoCardsSection";
import { menuOptions } from "./helpers";

export function VideoGalleryRoot({
  breadcrumbs,
  data,
}: VideosGalleryRootProps): JSX.Element {
  const { content, playlists } = data;
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <main>
      <PageLayout
        breadcrumbs={breadcrumbs}
        title={data.header.title}
        subtitle={data.header.description}
      >
        <h1 className="mt-8 text-2xl text-primary lg:mt-0 lg:text-4xl">
          {content.playlistTitle}
        </h1>

        <div className="mb-16 mt-6 md:mb-14">
          <BaseSelect
            value={selectedOption}
            startContent={
              <RxHamburgerMenu size={25} className="mr-4 text-primary" />
            }
            options={menuOptions.map((option) => ({
              label: option.label,
              value: option.id,
            }))}
            className="md:w-[321px] lg:hidden"
            onChange={setSelectedOption}
          />

          <div className="mt-12 hidden lg:flex lg:flex-wrap lg:gap-4">
            {menuOptions.map((option) => (
              <SelectButtons
                key={option.id}
                text={option.label}
                isSelected={selectedOption === option.id}
                handleClick={() => setSelectedOption(option.id)}
                width={option.width}
              />
            ))}
          </div>
        </div>

        {playlists?.map((playlist) => (
          <VideoCardSection
            key={playlist.id}
            title={playlist.name}
            subtitle={playlist.description}
            buttonText={content.viewMoreButton}
            videos={playlist.videos}
          />
        ))}
      </PageLayout>
    </main>
  );
}
