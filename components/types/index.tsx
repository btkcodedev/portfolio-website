import { IconTypes } from "./enum";

export interface ClickedCategory {
  (category: string): void;
}

export interface LeftPanelProps {
  clickedCategory: ClickedCategory;
}

export interface MiniButtonProps {
  buttonText?: string;
  category?: IconTypes;
  href?: string;
  clickedCategory: ClickedCategory;
}

export interface ButtonType {
  text: string;
  secondaryText?: string;
  color?: string;
}

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // wxh
export type GridItemType = "social" | "language" | "mentor" | "project";
export type LanguageItem = {
  title: string;
  link: string;
  languageImage: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  languages?: LanguageItem[];
  image?: string;
  buttonColor?: string;
  intermediateText?: string;
}