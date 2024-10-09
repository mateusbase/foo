import { ReactNode } from "react";

export interface GradientBannerProps {
  image: string;
  children: ReactNode;
  backgroundType?: "gradient" | "darkGray";
}
