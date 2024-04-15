"use client"

import { motion } from "framer-motion"

export default function AnimatedImage({ children }) {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.64
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.32,
        delay: 0.12,
        ease: "linear"
      }
    }
  }

  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      { children }
    </motion.div>
  )
}
