"use client";
import { MotionStyle, motion } from "framer-motion";
import { ReactElement } from "react";

const RippleButton = ({element, buttonText, style, href}: {element: ReactElement, buttonText: string, style: MotionStyle, href:string}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="shadow-md flex min-w-0 items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
      style={style}
    >
      <span className="shrink-0">{element}</span>
      <span className="min-w-0 truncate">{buttonText}</span>
    </motion.a>
  );
};

export default RippleButton;
