import { useEffect, useState } from "react";
import clsx from "clsx";

import MenuItem from "@/components/MenuItem";

import { RichText } from "@/components/Blocks/RichText";
import GradientBanner from "@/components/Blocks/GradientBanner";
import AlertComponent from "@/components/Blocks/Alert";
import GradientBannerGrid from "@/components/Blocks/GradientBannerGrid";

import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import { BlockDataMap, GenericBlock, RenderBlocksProps } from "./types";
import CardGrid from "../Blocks/CardGrid";
import { extractMenuItems } from "./helpers";
import { RichTextBlock } from "../Blocks/RichText/types";
import Medias from "../Blocks/Medias";
import ShareOptions from "../Blocks/ShareOptions";
import socialNetwork from "../Blocks/ShareOptions/socialNetwork";
import ButtonLinkBlock from "../Blocks/LinkButton";
import FileListBlock from "../Blocks/FileList";
import ImageCarousel from "../Blocks/ImageCarousel";
import MenuHeadingLink from "./components/MenuHeadingLink";
import UnitList from "../Blocks/UnitList";
import CTACardGrid from "../Blocks/CTACardGrid";
import BaseSelect from "../Select";
import ButtonLinkGroup from "../Blocks/ButtonLinkGroup";

const blockComponentMap = {
  RICHTEXT: RichText,
  GRADIENT_BANNER: GradientBanner,
  ALERT: AlertComponent,
  GRADIENT_BANNER_GRID: GradientBannerGrid,
  CTA_CARD: CTACardGrid,
  CARD_GRID: CardGrid,
  MEDIAS: Medias,
  BUTTON_LINK: ButtonLinkBlock,
  BUTTON_LINK_GROUP: ButtonLinkGroup,
  FILE_LIST: FileListBlock,
  IMAGE_CAROUSEL: ImageCarousel,
  UNIT_LIST: UnitList,
} as const;

const SCROLL_OFFSET = -100;

type BlockType = keyof typeof blockComponentMap;

export function RenderBlocks<TBlock extends GenericBlock>({
  blocks,
  addHeadingShortcut = false,
  addShare = false,
  sideLinks,
}: RenderBlocksProps<TBlock>): JSX.Element {
  const router = useRouter();

  const [activeItem, setActiveItem] = useState<string>("0");

  const [selectedValue, setSelectedValue] = useState<string>("");

  const richTextBlocks = blocks.filter(
    (block) => block.type === "RICHTEXT",
  ) as RichTextBlock[];

  const menuItems = extractMenuItems(richTextBlocks);

  useEffect(() => {
    if (menuItems.length > 0) {
      setActiveItem(menuItems[0].id);
    }
  }, [menuItems]);

  const handleClick = (id: string, targetId: string): void => {
    setActiveItem(id);

    const el = document.getElementById(targetId);

    if (el) {
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + SCROLL_OFFSET;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-10 flex flex-col lg:flex-row">
      {addHeadingShortcut && (
        <div className="mt-6 flex w-full flex-col gap-4 lg:hidden">
          {!Array.isArray(sideLinks) && menuItems.length > 0 && (
            <BaseSelect
              size="lg"
              className="h-[54px] w-full border-primary text-primary"
              options={menuItems.map((item) => ({
                value: item.slug,
                label: item.name,
              }))}
              startContent={
                <RxHamburgerMenu size={20} className="text-primary" />
              }
              onChange={(selectedValueOption: string | number) => {
                const value = selectedValueOption.toString();

                setSelectedValue(value);

                const el = document.getElementById(value);

                if (el) {
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    SCROLL_OFFSET;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            />
          )}

          {Array.isArray(sideLinks) && sideLinks.length > 0 && (
            <BaseSelect
              size="lg"
              value={selectedValue}
              className="h-[54px] w-full border-primary text-primary"
              options={sideLinks.map((item) => ({
                value: item.link.external
                  ? item.link.url!
                  : `/${item.link.path}`,
                label: item.name,
              }))}
              startContent={
                <RxHamburgerMenu size={20} className="text-primary" />
              }
              onChange={(newValue: string | number) => {
                const value = newValue.toString();

                setSelectedValue(value);

                if (value.startsWith("http")) {
                  window.location.href = value;
                } else {
                  router.push(value);
                }
              }}
            />
          )}
        </div>
      )}

      {addHeadingShortcut &&
        !Array.isArray(sideLinks) &&
        menuItems.length > 0 && (
          <div className="hidden w-[398px] overflow-hidden rounded-xl text-white lg:block">
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                isActive={activeItem === item.id}
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
                targetId={item.slug}
                onClick={handleClick}
              />
            ))}
          </div>
        )}

      {addHeadingShortcut &&
        Array.isArray(sideLinks) &&
        sideLinks.length > 0 && (
          <div className="hidden w-[398px] overflow-hidden rounded-xl text-white lg:block">
            {sideLinks.map((item, index) => (
              <MenuHeadingLink
                key={item.link.url || item.name}
                name={item.name}
                link={item.link}
                isFirst={index === 0}
                isLast={index === sideLinks.length - 1}
              />
            ))}
          </div>
        )}

      <div
        className={clsx(
          "flex-1",
          addHeadingShortcut &&
            ((Array.isArray(sideLinks) && sideLinks.length > 0) ||
              menuItems.length > 0) &&
            "lg:ml-16",
        )}
      >
        {blocks.map((block, index) => {
          const blockType = block.type as BlockType;

          const Component = blockComponentMap[blockType] as React.ComponentType<
            BlockDataMap[typeof blockType]
          >;

          if (!Component) return null;

          const isFirst = index === 0;

          const isGradientBanner = block.type === "GRADIENT_BANNER";

          const className = clsx({
            "my-16": !isFirst,
            "lg:my-0 my-16": isFirst && !isGradientBanner,
            "lg:my-0 my-0": isFirst && isGradientBanner,
          });

          return (
            <div key={block.id} className={className}>
              <Component {...(block.data as BlockDataMap[typeof blockType])} />
            </div>
          );
        })}

        {addShare && (
          <div className="mt-10">
            <ShareOptions options={socialNetwork} />
          </div>
        )}
      </div>
    </div>
  );
}
