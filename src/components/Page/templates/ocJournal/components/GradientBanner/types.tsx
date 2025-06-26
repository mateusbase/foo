import { ReactNode } from "react";

export interface GradientBannerProps {
  image: string;
  sideImage?: string;
  children: ReactNode;
  backgroundType?: "gradient" | "darkGray";
}
