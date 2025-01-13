import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  className?: string;
};

export default function ({ className }: Props) {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-2">
        <motion.div
          className="w-4 h-4 bg-primary rounded-full"
          animate={{ y: [-10, 0, -10] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-4 h-4 bg-primary rounded-full"
          animate={{ y: [-10, 0, -10] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-4 h-4 bg-primary rounded-full"
          animate={{ y: [-10, 0, -10] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </div>
    </motion.div>
  );
}
