import { AlertProps } from "../Blocks/Alert/types";
import { ButtonLinkGroupProps } from "../Blocks/ButtonLinkGroup/types";
import { CardGridProps } from "../Blocks/CardGrid/types";
import { CTACardProps } from "../Blocks/CTACard/types";
import { FileListPropsBlock } from "../Blocks/FileList/types";
import { GradientBannerProps } from "../Blocks/GradientBanner/types";
import { GradientBannerGridBlockProps } from "../Blocks/GradientBannerGrid/types";
import { ImageCarouselBlock } from "../Blocks/ImageCarousel/types";
import { ButtonLinkBlockProps } from "../Blocks/LinkButton/types";
import { MediasBlockProps } from "../Blocks/Medias/types";
import { RichTextBlock } from "../Blocks/RichText/types";
import { UnitListBlock } from "../Blocks/UnitList/types";

export type BlockDataMap = {
  RICHTEXT: RichTextBlock;
  GRADIENT_BANNER: GradientBannerProps;
  ALERT: AlertProps;
  GRADIENT_BANNER_GRID: GradientBannerGridBlockProps;
  CTA_CARD: CTACardProps;
  CARD_GRID: CardGridProps;
  MEDIAS: MediasBlockProps;
  BUTTON_LINK: ButtonLinkBlockProps;
  FILE_LIST: FileListPropsBlock;
  IMAGE_CAROUSEL: ImageCarouselBlock;
  UNIT_LIST: UnitListBlock;
  BUTTON_LINK_GROUP: ButtonLinkGroupProps;
};

export interface GenericBlock<T extends string = string, D = unknown> {
  type: T;
  id: string;
  data: D;
}

interface MenuItemData {
  id: number;
  name: string;
  slug: string;
}

export interface RenderBlocksProps<TBlock extends GenericBlock> {
  blocks: TBlock[];
  addHeadingShortcut?: boolean;
  addShare?: boolean;
  menuItems?: MenuItemData[];
  sideLinks?: Array<{
    name: string;
    link: {
      external: boolean;
      url?: string;
      path?: string;
      openOnNewTab?: boolean;
    };
  }>;
}

export type ContentBlock = {
  [K in keyof BlockDataMap]: GenericBlock<K, BlockDataMap[K]>;
}[keyof BlockDataMap];
