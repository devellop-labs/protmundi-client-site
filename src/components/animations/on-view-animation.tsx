import React from "react";
import { motion, useInView } from "framer-motion";

type OnViewSlideInAnimationProps = {
  children: React.ReactNode;
  initialX?: number;
  finalX?: number;
  initialY?: number;
  finalY?: number;
  delay?: number;
  duration?: number;
  elastic?: boolean; // Add elastic prop
  className?: string;
};

const OnViewSlideInAnimation: React.FC<OnViewSlideInAnimationProps> = ({
  className,
  children,
  initialX, // Default to slide in from the left
  finalX, // Ends in the default position (centered)
  initialY,
  finalY,
  delay,
  duration = 0.5,
  elastic = false, // Default to no elastic effect
}) => {
  // Reference to the element
  const ref = React.useRef(null);

  // Hook to determine if the component is in view
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }} // Starts from initialX (offscreen)
      animate={
        isInView
          ? { opacity: 1, x: finalX, y: finalY }
          : { opacity: 0, x: initialX }
      } // Animate in and out
      transition={{
        delay,
        duration,
        type: elastic ? "spring" : "tween", // Use spring for elastic effect
        stiffness: elastic ? 100 : undefined, // Adjust stiffness for elastic effect
        damping: elastic ? 20 : undefined, // Adjust damping to control smoothness
      }} // Transition settings
    >
      {children}
    </motion.div>
  );
};

export default OnViewSlideInAnimation;
