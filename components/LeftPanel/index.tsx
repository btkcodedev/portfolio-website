"use client";
import Footer from "@/components/Footer";
import Bio from "./Bio";
import MiniButton from "@/components/common/MiniButton";
import { IconTypes, LeftPanelOptions } from "@/components/Types/enum";
import { LeftPanelProps } from "@/components/Types";
import { useState } from "react";

const LeftPanel = ({ clickedCategory, handleInteraction }: LeftPanelProps) => {
  const [clicked, setClicked] = useState(LeftPanelOptions.ABOUT);

  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      <div>
        <Bio />
        <div className="border-b xl:mb-8 xl:mt-8 m:mt-1 mt-8" />

        <div className="border-neutral-100 dark:border-neutral-800">
          <MiniButton
            buttonText={LeftPanelOptions.ABOUT}
            category={IconTypes.SEARCH}
            href={`#${LeftPanelOptions.ABOUT}`}
            clickedCategory={clickedCategory}
            setClicked={setClicked}
            clicked={clicked}
          />
          <MiniButton
            buttonText={LeftPanelOptions.EXPERIENCE}
            category={IconTypes.ALBUM}
            href={`#${LeftPanelOptions.EXPERIENCE}`}
            clickedCategory={clickedCategory}
            setClicked={setClicked}
            clicked={clicked}
          />
          <MiniButton
            buttonText={LeftPanelOptions.ACHIEVEMENTS}
            category={IconTypes.MEDAL}
            href={`#${LeftPanelOptions.ACHIEVEMENTS}`}
            clickedCategory={clickedCategory}
            setClicked={setClicked}
            clicked={clicked}
          />
          <MiniButton
            buttonText={LeftPanelOptions.PROJECTS}
            category={IconTypes.PROJECTS}
            href={`#${LeftPanelOptions.PROJECTS}`}
            clickedCategory={clickedCategory}
            setClicked={setClicked}
            clicked={clicked}
          />
        </div>

        <div
          className="hidden mt-6 xl:flex"
          onClick={handleInteraction}
          onTouchStart={handleInteraction}
        >
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
