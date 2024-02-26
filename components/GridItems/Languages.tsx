import { GridItemInterface, LanguageItem } from "@/components/types";
import { LanguageCode, LanguageTitle } from "@/components/types/enum";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Languages = ({ item }: { item: GridItemInterface }) => {
  const [image, setImage] = useState(item.image);
  const [gradient, setGradient] = useState(true);
  
  const setTheImage = (imageItem: LanguageItem | string) => {
    if (typeof imageItem === "object") {
      const title = imageItem.title;
      const languageImage = imageItem.languageImage;
      
      if (Object.values(LanguageTitle).includes(title as LanguageTitle)) {
        setImage(languageImage);
      } else {
        setImage(item.image);
      }
    } else {
      setImage(item.image);
    }
  };

  const [displayText, setDisplayText] = useState("");
  const setCode = (language: LanguageItem) => {
    let codeText = "";
    switch (language.title) {
      case LanguageTitle.Javascript:
        codeText = LanguageCode.JavascriptHelloWorld;
        break;
      case LanguageTitle.Django:
        codeText = LanguageCode.DjangoHelloWorld;
        break;
      case LanguageTitle.Nodejs:
        codeText = LanguageCode.NodejsHelloWorld;
        break;
      case LanguageTitle.Python:
        codeText = LanguageCode.PythonHelloWorld;
        break;
      case LanguageTitle.YAML:
        codeText = LanguageCode.YAMLHelloWorld;
        break;
      default:
        codeText = "Hello World";
    }
    console.log(codeText, language)
    return codeText;
  };

  const handleInteractionStart = (language: LanguageItem) => {
    setGradient(false);
    setDisplayText(setCode(language));
    setTheImage(language);
  };

  const handleInteractionEnd = () => {
    setGradient(true);
    setDisplayText("");
    setTheImage("");
  };

  return (
    <motion.div
      className="w-full h-full relative flex items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col w-full h-full overflow-hidden rounded-3xl">
        {displayText.length > 0 && (
          <div className="flex items-center w-full h-full overflow-hidden p-8 justify-center align-center">
            <motion.div
              className="z-10 bg-white dark:bg-neutral-900 flex items-start p-8 text-sm font-medium text-black dark:text-white h-full rounded-lg w-full"
              initial={{ opacity: 0.5 }} // Initial opacity set to 0
              animate={{ opacity: 0.9 }} // Fade in animation
              style={{ whiteSpace: 'pre' }}
            >
              <motion.span
                className="typing-text"
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  transition: {
                    duration: 2,
                    times: [0, 0.25, 0.5, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  },
                }}
              >
                {displayText}
              </motion.span>
            </motion.div>
          </div>
        )}
        <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl p-1">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
          {/* Image */}
          <Image
            className={`z-0 object-cover object-center w-full h-full`}
            src={image ?? ""}
            alt="languages"
            fill
          />

          {/* Content */}
          <div className="relative z-20 w-full p-4 space-y-3 md:p-8">
            <div className="text-sm font-medium text-white">{item.title}</div>
            <div className="flex flex-wrap items-center gap-3">
              {item.languages?.map((language, index) => {
                return (
                  <motion.span
                    key={language.link + index}
                    className="relative inline-block"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className="px-2 py-1 text-sm font-medium bg-white rounded-lg dark:bg-neutral-900 cursor-pointer"
                      onMouseEnter={() => handleInteractionStart(language)}
                      onMouseLeave={handleInteractionEnd}
                      onTouchStart={() => handleInteractionStart(language)}
                      onTouchEnd={handleInteractionEnd}
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
          {gradient && (
            <div className="absolute inset-0 gradient-animation"></div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Languages;
