import React, {  useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface AnimatedSectionProps {
  children: ReactNode;
}


const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      // variants={variants}
      className="w-full my-8 flex justify-center"
    >
      <div className="w-full max-w-6xl">{children}</div>
    </motion.div>
  );
};

export default AnimatedSection; 