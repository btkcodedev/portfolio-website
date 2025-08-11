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
          <div className="relative">
            <div className="block xl:hidden">
              <div
                ref={scope}
                className="w-full grid-cols-4 gap-6 py-6 px-2 overflow-y-auto auto-rows-[75px]"
              >
                <div className="mb-4 ml-4 mt-4 flex items-center border-neutral-100 dark:border-neutral-800 cursor-pointer">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <div className="shadow-md text-center justify-center w-full px-4 py-2 text-sm font-medium border border-neutral-100 dark:border-neutral-800 flex items-center gap-1 rounded-lg p-1">
                      {returnCategory(IconTypes.ALBUM)}
                      {LeftPanelOptions.EXPERIENCE}
                    </div>
                  </motion.div>
                </div>
                <div className="w-full grid-cols-4 gap-6 py-4 px-2 overflow-y-auto auto-rows-[75px]">
                  {siteConfig.experienceItems.map((item, index) => (
                    <div className="mb-8" key={item.title + item.type + index}>
                      <GridItem
                        key={item.title + item.type + index}
                        size={item.layout}
                      >
                        {item.type === "certificate" ? (
                          <Certificates item={item} />
                        ) : (
                          <div>Need to create new component type.</div>
                        )}
                      </GridItem>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden xl:block w-full overflow-y-auto max-h-[calc(100vh-20px)] pt-10 relative">
              <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-neutral-800 z-0" style={{ height: "110vh" }}></div>
              <div className="space-y-20 px-8">
                <div className="ml-4 mt-2 flex items-center border-neutral-100 dark:border-neutral-800 cursor-pointer" style={{ marginBottom: "-4rem" }}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <div className="shadow-md text-center justify-center w-full px-4 py-2 text-sm font-medium border border-neutral-100 dark:border-neutral-800 flex items-center gap-1 rounded-lg p-1">
                      {returnCategory(IconTypes.ALBUM)}
                      {LeftPanelOptions.EXPERIENCE}
                    </div>
                  </motion.div>
                </div>
                {siteConfig.experienceItems.map((item, index) => (
                  <div
                    key={item.title + item.type + index}
                    className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"
                      }`}
                  >
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-2 rounded-full bg-transparent border-4 border-blue-500 z-10 ${index % 2 === 0 ? "top-1/2" : "bottom-1/2"
                        }`}
                      style={{
                        boxShadow: `0 0 10px rgba(59, 130, 246, 0.6)`,
                      }}
                    ></div>
                    <div
                      className={`relative w-1/2 ${index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"
                        }`}
                      style={{
                        marginLeft: index % 2 === 0 ? "-2rem" : "2rem",
                        marginRight: index % 2 === 0 ? "2rem" : "-2rem",
                        marginBottom: "-9rem"
                      }}
                    >
                      <motion.div>
                        <div className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-md border border-neutral-100 dark:border-neutral-800">
                          {item.type === "certificate" ? (
                            <Certificates item={item} />
                          ) : (
                            <div>Need to create new component type.</div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                    {/* <div
                      className={`relative w-1/2 ${
                        index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"
                      }`}
                      style={{
                        marginLeft: index % 2 === 0 ? "2rem" : "0rem",
                        marginRight: index % 2 === 0 ? "0rem" : "0rem",
                      }} // side margins
                    >
                      <motion.div>
                        <div className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-md border border-neutral-100 dark:border-neutral-800">
                          {item.type === "certificate" ? (
                            <Certificates item={item} />
                          ) : (
                            <div>Need to create new component type.</div>
                          )}
                        </div>
                      </motion.div>
                    </div> */}
                  </div>
                ))}
              </div>
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
            <div className="w-full flex flex-wrap justify-between gap-6 xl:gap-8 xl:py-6 py-4 xl:px-2 xl:overflow-y-auto">
              {siteConfig.achievementItems.map((item, index) => (
                <div className="w-full md:w-[48%]" key={item.title + item.type + index}>
                  <GridItem key={item.title + item.type + index} size={item.layout}>
                    {item.type === "certificate" ? (
                      <Certificates item={item} />
                    ) : (
                      <div>Need to create new component type.</div>
                    )}
                  </GridItem>
                </div>
              ))}
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
                    <motion.a
                      href={item.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GridItem key={item.title + item.type + index} size={item.layout}>
                        {item.type === "certificate" ? (
                          <Certificates item={item} />
                        ) : (
                          <div>Need to create new component type.</div>
                        )}
                      </GridItem>
                    </motion.a>
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
              <motion.div whileHover={{ scale: 1.03 }}>
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
