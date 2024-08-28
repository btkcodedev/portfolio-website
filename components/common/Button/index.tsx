import { ButtonType } from "@/components/Types";
import { motion } from "framer-motion";

const Button = ({ text, secondaryText, color = "#070707" }: ButtonType) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        backgroundColor: color,
      }}
      className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white rounded-lg max-w-fit"
    >
      <span>{text}</span>
      {secondaryText ? (
        <span className="font-light text-neutral-200">{secondaryText}</span>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Button;
