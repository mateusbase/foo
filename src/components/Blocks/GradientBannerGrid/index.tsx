import React from "react";
import clsx from "clsx";
import BaseSwiper from "@/components/BaseSwiper";
import GradientBanner from "../GradientBanner";
import { GradientBannerGridBlockProps } from "./types";

const columnClassMap: Record<string, string> = {
  "1": "grid-cols-1",
  "2": "grid-cols-2",
  "3": "grid-cols-3",
};

export default function GradientBannerGrid({
  title,
  description,
  columns = "3",
  banners,
}: GradientBannerGridBlockProps): JSX.Element {
  const showSwiper = banners.length > 1;

  const bannersWithId = banners.map((banner, idx) => ({
    ...banner,
    id: `${banner.title}-${banner.media?.data?.data?.url ?? idx}`,
  }));

  return (
    <div className="w-full">
      <div className="mb-12 text-center">
        {title && (
          <h1 className="text-left text-3xl text-primary md:text-[50px]">
            {title}
          </h1>
        )}

        {description && (
          <p className="mb-8 mt-4 text-left text-2xl text-darkGray">
            {description}
          </p>
        )}
      </div>

      <div
        className={clsx("hidden gap-6 lg:grid", {
          [`lg:${columnClassMap[columns]}`]: columns in columnClassMap,
        })}
      >
        {banners.map((banner) => (
          <GradientBanner
            key={`${banner.title}-${banner.media?.data?.data?.url}`}
            {...banner}
          />
        ))}
      </div>

      <div className="block lg:hidden">
        <BaseSwiper
          data={bannersWithId}
          hasArrows={showSwiper}
          renderItem={(banner) => (
            <GradientBanner {...banner} isSwiper roundCorner="bottom-left" />
          )}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="[&_.swiper-slide]:!h-auto [&_.swiper-wrapper]:items-stretch"
        />
      </div>
    </div>
  );
}
