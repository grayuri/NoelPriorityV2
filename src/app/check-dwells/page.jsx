"use client"

import { motion } from "framer-motion";

import AnimatedParagraph from "@/components/AnimatedParagraph/AnimatedParagraph";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import { verticalAppearence } from "@/utils/animatedAppearences";
import './CheckDwellsPage.scss'

export default function CheckDwellsPage() {
  return (
    <main className="check-dwells-page">
      <AnimatedTitle type="h2">Checador de <span className="highlight">Dwells</span></AnimatedTitle>
      <motion.section className="informations-container"
        variants={verticalAppearence}
        initial="hidden"
        animate="visible"
      >
        <AnimatedParagraph>Infelizmente essa funcionalidade não pôde existir no momento presente, mas, se tudo der certo, ela pode existir no futuro!</AnimatedParagraph>
      </motion.section>
    </main>
  )
}
