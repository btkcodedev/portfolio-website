import { CombinedInterfaces } from "@/components/Types";
import { motion } from "framer-motion";

const Certificates = ({ item, handleClick }: { item: CombinedInterfaces, handleClick?: () => {} }) => {
  return (
    <motion.div
      className="w-full h-full relative flex items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col w-full h-full overflow-hidden rounded-3xl">
        <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl p-1">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
          <div className="relative z-20 w-full p-4 space-y-3 md:p-8">
            <div className="text-sm font-semibold text-white">{item.title}</div>
            <div className="flex flex-wrap items-center gap-3">
              {item.languages?.map((language, index) => {
                return (
                  <motion.span
                    key={language.link + index}
                    className="relative inline-block"
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* TODO: handleclick to redirection */}
                    <div
                      className="px-2 py-1 text-sm font-medium bg-white rounded-lg dark:bg-neutral-900 cursor-pointer"
                      onClick={handleClick}
                    >
                      {language.title}
                      <motion.span
                        className="absolute top-0 left-0 bg-white rounded-full opacity-50"
                        initial={{ scale: 0 }}
                        animate={{ scale: 2 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.span>
                );
              })}
            </div>
          </div>

          <div className="absolute inset-0 gradient-animation"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
