"use client";
import { MiniButtonProps } from "@/components/types";
import { IconTypes } from "@/components/types/enum";
import { Map, Search, Medal, Album, FolderGit2 } from "lucide-react";
import { ReactElement } from "react";

const MiniButton: React.FC<MiniButtonProps> = ({
  buttonText,
  category,
  href,
  clickedCategory,
}) => {
  const returnCategory = () => {
    let element: ReactElement = <></>;
    switch (category) {
      case IconTypes.SEARCH:
        element = <Search size="14" />;
        break;
      case IconTypes.MAP:
        element = <Map size="14" />;
        break;
      case IconTypes.MEDAL:
        element = <Medal size="14" />;
        break;
      case IconTypes.ALBUM:
        element = <Album size="14" />;
        break;
      case IconTypes.PROJECTS:
        element = <FolderGit2 size="14" />;
        break;
      default:
        element = <Search size="14" />;
    }
    return element;
  };
  return (
    <div className="flex items-center gap-3 mt-6">
      <a
        href={href ? href : "#"}
        onClick={() => clickedCategory(buttonText || "")}
        className="shadow-md flex items-center text-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
      >
        {category ? returnCategory() : null}
        {buttonText ? buttonText : ""}
      </a>
    </div>
  );
};

export default MiniButton;
