import React from "react";
import Image from "next/image";
import MainOptionsActions from "@/components/MainOptionsActions";
import SearchInput from "../SearchInput";
import { BannerWithSearchAndOptionsProps } from "./types";

export default function BannerWithSearchAndOptions({
  data,
}: BannerWithSearchAndOptionsProps): JSX.Element {
  const actions = data.actions?.map((action, index) => ({
    id: index,
    text: action.text,
    icon: action.icon,
    link: action.link,
  }));

  return (
    <div className="relative hidden w-full md:block">
      <div className="aspect-[1920/660] w-full overflow-hidden">
        <Image
          src={data.search?.backgroundImage.url}
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <SearchInput data={data.search} />
      </div>

      <div className="absolute inset-x-0 -bottom-3 z-20 hidden translate-y-1/2 items-end justify-center lg:flex">
        <MainOptionsActions options={actions} />
      </div>
    </div>
  );
}
