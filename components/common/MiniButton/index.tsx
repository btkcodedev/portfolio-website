"use client";
import { Map, Search } from "lucide-react";
import { ReactElement } from "react";

export enum IconTypes {
  SEARCH = "search",
  MAP = "map",
}

interface MiniButtonProps {
  buttonText?: string;
  category?: IconTypes;
  href?: string
}

const MiniButton:React.FC<MiniButtonProps> = ({
  buttonText,
  category,
  href
}) => {
  const returnCategory = () => {
    let element: ReactElement = <></>;
    switch (category) {
      case "search":
        element = <Search size="14" />;
        break;
      case "map":
        element = <Map size="14" />;
        break;
      default:
        element = <Search size="14" />;
    }
    return element;
  };
  return(
    <div className="flex items-center gap-3 mt-6">
      <a
        href={href ? href: "#"}
        className="shadow-md flex items-center text-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
      >
        {category ? returnCategory() : null}
        {buttonText ? buttonText : ""}
      </a>
    </div>
  );
};

export default MiniButton;
