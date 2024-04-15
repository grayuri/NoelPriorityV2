"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import AnimatedImage from "@/components/AnimatedImage/AnimatedImage";
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
        <AnimatedParagraph>Infelizmente essa funcionalidade não pode existir no momento presente, mas, se tudo der certo, ela pode existir no futuro!</AnimatedParagraph>
        <AnimatedParagraph>Se quiser visualizar como pode ser esse futuro, fique à vontade para visualizar o protótipo abaixo.</AnimatedParagraph>
        <div className="link-out">
            <AnimatedImage className="icon">
              <Image
                src="/icons/figma-icon.svg"
                width={25}
                height={32}
                alt='Figma Icon'
              />
            </AnimatedImage>
            <Link href="https://www.figma.com/file/x0Cv4XRb3KHZeHKk0tpiXg/Noel-Priority?type=design&node-id=1%3A5&mode=design&t=Vly5mrVjw19PX7aq-1" target="_blank">
              <AnimatedParagraph>
                Assim será Checador de Dwells
              </AnimatedParagraph>
            </Link>
          </div>
      </motion.section>
    </main>
  )
}
