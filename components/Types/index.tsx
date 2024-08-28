import { IconTypes, LeftPanelOptions } from "./enum";

export interface LeftPanelProps {
  clickedCategory: (category: LeftPanelOptions) => void;
  handleInteraction: (event: React.MouseEvent | React.TouchEvent) => void;
}

export interface MiniButtonProps {
  buttonText?: LeftPanelOptions;
  category?: IconTypes;
  href?: string;
  clickedCategory: (category: LeftPanelOptions) => void;
  setClicked: (clicked: LeftPanelOptions) => void;
  clicked: LeftPanelOptions;
}

export interface ButtonType {
  text: string;
  secondaryText?: string;
  color?: string;
}

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // width x height
export type GridItemType = "social" | "language" | "mentor" | "project";
export type AchievementItemType = "lor" | "hackathon" | "certificate" ;
export type LanguageItem = {
  title: string;
  link: string;
  languageImage: string;
};


export interface BaseItemInterface {
  layout: GridItemLayout;
  type: GridItemType | AchievementItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  stars?: number;
  languages?: LanguageItem[];
  image?: string;
  buttonColor?: string;
  intermediateText?: string;
  reach?: string;
}

export interface GridItemInterface extends BaseItemInterface {}
export interface AchievementItemInterface extends BaseItemInterface {}
export interface ProjectItemInterface extends BaseItemInterface {}
export interface ExperienceItemInterface extends BaseItemInterface {}
export type CombinedInterfaces = GridItemInterface | AchievementItemInterface | ExperienceItemInterface | ProjectItemInterface;
