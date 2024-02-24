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

const RightPanel = ({ section }: { section: string }) => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });
  // ANIMATION
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
    <div
      ref={scope}
      className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-2 xl:overflow-y-auto auto-rows-[75px]"
    >
      {section === "About" && (
        <>
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={item.title + item.type + index} size={item.layout}>
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
        </>
      )}
      {section === "Experience" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>Experience</div>
          <Knob/>
        </motion.div>
      )}
      {section === "Achievements" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>Achievements</div>
        </motion.div>
      )}
      {section === "Projects" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>Projects</div>
        </motion.div>
      )}
    </div>
  );
};

export default RightPanel;
