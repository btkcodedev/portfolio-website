"use client";
import Footer from "@/components/Footer";
import Bio from "./Bio";
import MiniButton from "@/components/common/MiniButton"
import { IconTypes } from "@/components/types/enum";
import { LeftPanelProps } from "@/components/types";

const LeftPanel = ({
  clickedCategory,
}: LeftPanelProps) => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}
      <div>
        {/* TODO: Enhancement 0.2.0 Extra left panels */}

        {/* <div className="flex items-center gap-3 mb-3">
          <MiniButton buttonText="About" category={IconTypes.SEARCH} href="#"/>
          <MiniButton buttonText="Experience" category={IconTypes.ALBUM} href="#"/>
          <MiniButton buttonText="Achievements" category={IconTypes.MEDAL} href="#"/>
        </div>
        <div className="border-b mb-5" /> */}
        <Bio />
        {/* <div className="border-t mt-6 border-neutral-100 dark:border-neutral-800">
          <MiniButton
            buttonText="About"
            category={IconTypes.SEARCH}
            href="#"
            clickedCategory={clickedCategory}
          />
          <MiniButton
            buttonText="Experience"
            category={IconTypes.ALBUM}
            href="#"
            clickedCategory={clickedCategory}
          />
          <MiniButton
            buttonText="Achievements"
            category={IconTypes.MEDAL}
            href="#"
            clickedCategory={clickedCategory}
          />
          <MiniButton
            buttonText="Projects"
            category={IconTypes.PROJECTS}
            href="#"
            clickedCategory={clickedCategory}
          />
        </div> */}

        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
