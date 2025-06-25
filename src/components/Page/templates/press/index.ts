import { ClippingRoot } from "./clipping";
import { ReleasesRoot } from "./releases";
import { PressRoot } from "./root";
import { SingleClippingRoot } from "./singleClipping";

export const pressTemplates = {
  OC_PRESS: PressRoot,
};

export const releasesTemplates = {
  PRESS_RELEASES: ReleasesRoot,
};

export const clippingTemplates = {
  PRESS_ARTICLES: ClippingRoot,
};

export const singleClippingTemplates = {
  SINGLE_PRESS_ARTICLE: SingleClippingRoot,
};
