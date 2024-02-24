"use client";
import Footer from "@/components/Footer";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import { useState } from "react";

export default function MainPage() {
  const [rightPanelCategory, setRightPanelCategory] = useState("About"); //default: About page

  const clickedCategory = (category: string) => {
    setRightPanelCategory(category);
  };

  return (
    <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
      {/* Left Panel */}
      <LeftPanel clickedCategory={clickedCategory} />
      {/* Right Panel */}
      <RightPanel section={rightPanelCategory} />
      {/* Footer for Mobile */}
      <div className="flex pb-6 xl:hidden">
        <Footer />
      </div>
    </div>
  );
}
