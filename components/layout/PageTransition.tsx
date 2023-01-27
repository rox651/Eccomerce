import { ReactElement } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const pagesTransitions = {
   initialState: {
      opacity: 0,
   },
   animateState: {
      opacity: 1,
      clipPath: "circle(70.7% at 50% 50%)",
   },
   exitState: {
      opacity: 0,
      clipPath: "circle(0% at 50% 50%)",
   },
};
const PageTransition = ({ children }: { children: ReactElement }) => {
   return (
      <motion.main
         initial="initialState"
         animate="animateState"
         exit="exitState"
         transition={{ duration: 0.65 }}
         variants={pagesTransitions}
      >
         {children}
      </motion.main>
   );
};

export default PageTransition;
