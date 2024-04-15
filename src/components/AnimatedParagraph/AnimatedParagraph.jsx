"use client"

import { motion } from "framer-motion"

import { verticalAppearence } from "@/utils/animatedAppearences";

export default function AnimatedParagraph({ children }) {
  return (
    <motion.p
      variants={verticalAppearence}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      { children }
    </motion.p>
  )
}
