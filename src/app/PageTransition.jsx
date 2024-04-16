"use client"

import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { verticalAppearence } from "@/utils/animatedAppearences";

function FrozenRouter({ children }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="popLayout"> 
      <motion.div
        key={pathname}
        variants={verticalAppearence}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <FrozenRouter>
          {children}
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}