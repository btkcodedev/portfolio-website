"use client";
import Footer from "@/components/Footer";
import Bio from "./Bio";
import MiniButton from "@/components/common/MiniButton";
import { IconTypes, LeftPanelOptions } from "@/components/Types/enum";
import { LeftPanelProps } from "@/components/Types";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FiMenu, FiX, FiChevronLeft } from "react-icons/fi";

const LeftPanel = ({ clickedCategory, handleInteraction }: LeftPanelProps) => {
  const [clicked, setClicked] = useState(LeftPanelOptions.ABOUT);
  const [isOpen, setIsOpen] = useState(true);
  const [dragProgress, setDragProgress] = useState(0);
  const constraintsRef = useRef(null);

  const menuItems = [
    { text: LeftPanelOptions.ABOUT, icon: IconTypes.SEARCH },
    { text: LeftPanelOptions.EXPERIENCE, icon: IconTypes.ALBUM },
    { text: LeftPanelOptions.ACHIEVEMENTS, icon: IconTypes.MEDAL },
    { text: LeftPanelOptions.PROJECTS, icon: IconTypes.PROJECTS },
  ];

  const handleMenuClick = (item: LeftPanelOptions) => {
    setClicked(item);
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; 
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle drag to close
  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const progress = Math.max(0, Math.min(1, -info.offset.x / 250));
    setDragProgress(progress);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -100 || info.velocity.x < -500) {
      closeMenu();
    }
    setDragProgress(0);
  };

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <motion.div 
        className="xl:hidden flex items-center justify-between p-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Open Menu"
        >
          <FiMenu size={20} />
          <span className="text-sm font-medium">Menu</span>
        </motion.button>
        
        <motion.h1 
          className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {clicked === LeftPanelOptions.ABOUT ? "Portfolio": clicked}
        </motion.h1>
      </motion.div>

      <motion.div 
        className="hidden xl:flex flex-col justify-between py-6 xl:max-w-sm xl:py-8 xl:h-full"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <Bio />
          <div className="border-neutral-100 dark:border-neutral-800">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <MiniButton
                  buttonText={item.text}
                  category={item.icon}
                  href={`#`}
                  clickedCategory={clickedCategory}
                  setClicked={setClicked}
                  clicked={clicked}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="hidden mt-6 xl:flex cursor-pointer relative group"
            onClick={handleInteraction}
            onTouchStart={handleInteraction}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Footer />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Hidden element... SSSHHHHH...🤫
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Overlay Menu - Now from the LEFT */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              transition={{ duration: 0.2 }}
            />
            
            {/* Slide-out Panel */}
            <motion.div
              ref={constraintsRef}
              className="fixed left-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] xl:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.8
              }}
              drag="x"
              dragConstraints={{ left: -250, right: 0 }}
              dragElastic={0.1}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              style={{
                x: dragProgress ? -dragProgress * 250 : 0
              }}
            >
              <div className="h-full bg-white dark:bg-neutral-900 shadow-2xl border-r border-neutral-200 dark:border-neutral-700 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800">
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Profile
                  </h2>
                  <motion.button
                    onClick={closeMenu}
                    className="p-2 rounded-xl bg-white dark:bg-neutral-700 shadow-md hover:shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close Menu"
                  >
                    <FiX size={20} />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Bio />
                  </motion.div>
                  
                  <div className="border-b my-6 border-neutral-200 dark:border-neutral-700" />
                  
                  <div className="flex flex-col gap-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                      >
                        <MiniButton
                          buttonText={item.text}
                          category={item.icon}
                          href={`#`}
                          clickedCategory={clickedCategory}
                          setClicked={() => handleMenuClick(item.text as LeftPanelOptions)}
                          clicked={clicked}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-8 flex cursor-pointer relative group"
                    onClick={handleInteraction}
                    onTouchStart={handleInteraction}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Footer />
                  </motion.div>
                </div>

                {/* Drag Hint */}
                <motion.div 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30 pointer-events-none"
                  animate={{ 
                    x: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <FiChevronLeft size={24} />
                </motion.div>

                <div 
                  className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-full transition-all duration-200"
                  style={{ 
                    opacity: dragProgress,
                    transform: `scaleY(${0.3 + dragProgress * 0.7})`
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeftPanel;
