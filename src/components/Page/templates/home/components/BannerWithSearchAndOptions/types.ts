import { PhysicianHomeRootProps } from "../../../physicianHome/types";
import { HomeRootProps } from "../../types";

export interface BannerWithSearchAndOptionsProps {
  data: HomeRootProps["data"] | PhysicianHomeRootProps["data"];
}
