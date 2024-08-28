import { ReactElement } from "react";
import { IconTypes } from "../Types/enum";
import { Search, Medal, Album, FolderGit2, Map } from "lucide-react";

export const returnCategory = (category: IconTypes) => {
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