"use client"

import { motion } from "framer-motion"

export default function AnimatedTitle({ children, type }) {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 4
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        delay: 0.12,
        ease: "linear"
      }
    }
  }

  if (type === "h1") return (
    <motion.h1
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.h1>
  )
  else if (type === "h2") return (
    <motion.h2
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  )
  else if (type === "h3") return (
    <motion.h3
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.h3>
  )
  else if (type === "h4") return (
    <motion.h4
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.h4>
  )
  else if (type === "h5") return (
    <motion.h5
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.h5>
  )
  else {
    <motion.p
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  }
}