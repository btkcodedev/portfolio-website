"use client";
import { siteConfig } from "@/config/site-config";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import GridItem from "@/components/common/GridItem";
import Languages from "@/components/GridItems/Languages";
import Mentor from "@/components/GridItems/Mentor";
import Project from "@/components/GridItems/Project";
import Social from "@/components/GridItems/Social";
import Knob from "../common/Knob";
import { IconTypes, LeftPanelOptions } from "@/components/Types/enum";
import { returnCategory } from "../Helpers";
import Certificates from "@/components/GridItems/Certificate";

const RightPanel = ({ section }: { section: string }) => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
  }, [scope, animate, staggerGridItems]);

  return (
    <>
      {section === LeftPanelOptions.ABOUT && (
        <>
          <div
            ref={scope}
            className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-2 xl:overflow-y-auto auto-rows-[75px]"
          >
            {siteConfig.aboutItems.map((item, index) => {
              return (
                <GridItem
                  key={item.title + item.type + index}
                  size={item.layout}
                >
                  {item.type === "social" ? (
                    <Social item={item} />
                  ) : item.type === "mentor" ? (
                    <Mentor item={item} />
                  ) : item.type === "project" ? (
                    <Project item={item} />
                  ) : item.type === "language" ? (
                    <Languages item={item} />
                  ) : (
                    <div>Need to create new component type.</div>
                  )}
                </GridItem>
              );
            })}
          </div>
        </>
      )}
      {section === LeftPanelOptions.EXPERIENCE && (
        <>
          <div
            ref={scope}
            className="w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-2 xl:overflow-y-auto auto-rows-[75px]"
          >
            <div className="mb-4 ml-4 mt-4 flex items-center border-neutral-100 dark:border-neutral-800 cursor-pointer">
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="shadow-md text-center justify-center w-full px-4 py-2 text-sm font-medium border border-neutral-100 dark:border-neutral-800 flex items-center gap-1 rounded-lg p-1">
                  {returnCategory(IconTypes.ALBUM)}
                  {LeftPanelOptions.EXPERIENCE}
                </div>
              </motion.div>
            </div>
            <div className="w-full grid-cols-4 xl:gap-8 gap-6 xl:py-6 py-4 xl:px-2 xl:overflow-y-auto auto-rows-[75px]">
              {siteConfig.experienceItems.map((item, index) => {
                return (
                  <div className="mb-8" key={item.title + item.type + index}>
                    <GridItem
                      key={item.title + item.type + index}
                      size={item.layout}
                    >
                      {item.type === "lor" ? (
                        <Social item={item} />
                      ) : item.type === "hackathon" ? (
                        <Mentor item={item} />
                      ) : item.type === "certificate" ? (
                        <Certificates item={item} />
                      ) : (
                        <div>Need to create new component type.</div>
                      )}
                    </GridItem>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {section === LeftPanelOptions.ACHIEVEMENTS && (
        <>
          <div
            ref={scope}
            className="w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-2 xl:overflow-y-auto auto-rows-[75px]"
          >
            <div className="mb-4 ml-4 mt-4 flex items-center border-neutral-100 dark:border-neutral-800 cursor-pointer">
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="shadow-md text-center justify-center w-full px-4 py-2 text-sm font-medium border border-neutral-100 dark:border-neutral-800 flex items-center gap-1 rounded-lg p-1">
                  {returnCategory(IconTypes.MEDAL)}
                  {LeftPanelOptions.ACHIEVEMENTS}
                </div>
              </motion.div>
            </div>
            <div className="w-full grid-cols-4 xl:gap-8 gap-6 xl:py-6 py-4 xl:px-2 xl:overflow-y-auto auto-rows-[75px]">
              {siteConfig.achievementItems.map((item, index) => {
                return (
                  <div className="mb-8" key={item.title + item.type + index}>
                    <GridItem
                      key={item.title + item.type + index}
                      size={item.layout}
                    >
                      {item.type === "lor" ? (
                        <Social item={item} />
                      ) : item.type === "hackathon" ? (
                        <Mentor item={item} />
                      ) : item.type === "certificate" ? (
                        <Certificates item={item} />
                      ) : (
                        <div>Need to create new component type.</div>
                      )}
                    </GridItem>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {section === LeftPanelOptions.PROJECTS && (
        <>
          <div
            ref={scope}
            className="w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-2 xl:overflow-y-auto auto-rows-[75px]"
          >
            <div className="mb-4 ml-4 mt-4 flex items-center border-neutral-100 dark:border-neutral-800 cursor-pointer">
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="shadow-md text-center justify-center w-full px-4 py-2 text-sm font-medium border border-neutral-100 dark:border-neutral-800 flex items-center gap-1 rounded-lg p-1">
                  {returnCategory(IconTypes.PROJECTS)}
                  {LeftPanelOptions.PROJECTS}
                </div>
              </motion.div>
            </div>
            <div className="w-full grid-cols-4 xl:gap-8 gap-6 xl:py-6 py-4 xl:px-2 xl:overflow-y-auto auto-rows-[75px]">
              {siteConfig.projectItems.map((item, index) => {
                return (
                  <div className="mb-8" key={item.title + item.type + index}>
                    <GridItem
                      key={item.title + item.type + index}
                      size={item.layout}
                    >
                      {item.type === "lor" ? (
                        <Social item={item} />
                      ) : item.type === "hackathon" ? (
                        <Mentor item={item} />
                      ) : item.type === "certificate" ? (
                        <Certificates item={item} />
                      ) : (
                        <div>Need to create new component type.</div>
                      )}
                    </GridItem>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {section === LeftPanelOptions.EASTEREGG && (
        <>
          <div
            ref={scope}
            className="w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-2 xl:overflow-y-auto auto-rows-[75px]"
          >
            <div className="mb-4 ml-4 mt-4 flex items-center border-neutral-100 dark:border-neutral-800 cursor-pointer">
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="shadow-md text-center justify-center w-full px-4 py-2 text-sm font-medium border border-neutral-100 dark:border-neutral-800 flex items-center gap-1 rounded-lg p-1">
                  {returnCategory(IconTypes.SEARCH)}
                  {LeftPanelOptions.EASTEREGG}
                </div>
              </motion.div>
            </div>
            <Knob />
          </div>
        </>
      )}

    </>
  );
};

export default RightPanel;
