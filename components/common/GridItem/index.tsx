"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const variants = cva(
  "shadow-md rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = { children: React.ReactNode; index: number } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, index, children }: GridItemProps) => {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 330,
        damping: 35,
        delay: 0.5 + index * 0.02,
      }}
      className={twMerge(clsx(
        variants({
          size,
          className:
            "hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out",
        })
      ))}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
