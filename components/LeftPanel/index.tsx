"use client";
// import { Search } from "lucide-react";
import Footer from "@/components/Footer";
import Bio from "./Bio";
// import MiniButton, { IconTypes } from "@/common/MiniButton";

const LeftPanel = () => {
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
          <MiniButton buttonText="About" category={IconTypes.SEARCH} href="#"/>
          <MiniButton buttonText="About" category={IconTypes.SEARCH} href="#"/>
          <MiniButton buttonText="About" category={IconTypes.SEARCH} href="#"/>
        </div>
        <div className="border-b mb-5" /> */}
        <Bio />
        {/* <div className="border-t mt-6">
          <MiniButton buttonText="About" category={IconTypes.SEARCH} />
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
