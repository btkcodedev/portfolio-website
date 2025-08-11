"use client";
import Footer from "@/components/Footer";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import { useState } from "react";
import { LeftPanelOptions } from "../Types/enum";

export default function MainPage() {
  const [rightPanelCategory, setRightPanelCategory] = useState(
    LeftPanelOptions.ABOUT
  );

  const clickedCategory = (category: LeftPanelOptions) => {
    setRightPanelCategory(category);
  };
  const handleInteraction = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    clickedCategory(LeftPanelOptions.EASTEREGG);
  };

  return (
    <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row max-w-80 max-h-full">
      <LeftPanel
        clickedCategory={clickedCategory}
        handleInteraction={handleInteraction}
      />
      <RightPanel section={rightPanelCategory} />
      <div
        className="flex pb-6 xl:hidden"
        onClick={handleInteraction}
        onTouchStart={handleInteraction}
      >
        <Footer />
      </div>
    </div>
  );
}
