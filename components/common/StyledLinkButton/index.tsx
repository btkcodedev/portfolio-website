"use client";
import { siteConfig } from "@/config/site-config";
import { MotionStyle, motion } from "framer-motion";
import { ReactElement } from "react";

const RippleButton = ({element, buttonText, style, href}: {element: ReactElement, buttonText: string, style: MotionStyle, href:string}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`${siteConfig.locationLink}`}
      className="shadow-md flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
      style={style}
    >
      {element}
      {buttonText}
    </motion.a>
  );
};

export default RippleButton;
