"use client"

import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"

import Tooltip from "../Tooltip/Tooltip";
import "./Navbar.scss"

export default function Navbar() {
  const headerVariants = {
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

  const pathname = usePathname()

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="logo">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={193.75}
            height={54}
            alt="Noel Priority Logo"
          />
        </Link>
      </div>
      <ul className="navlist">
        <li className={pathname === "/remove-duplicates" ? "actual-route" : ""}>
          <Link href="/remove-duplicates">
            <Image
              src="/icons/remove-duplicates-icon.svg"
              width={27.64}
              height={32}
              alt="Remove Duplicates Icon"
            />
          </Link>
          <Tooltip>
            Removedor de Duplicatas
          </Tooltip>
        </li>
        <li className={pathname === "/check-priorities" ? "actual-route" : ""}>
          <Link href="check-priorities">
            <Image
              src="/icons/check-priorities-icon.svg"
              width={29.72}
              height={32}
              alt="Priority Checker Icon"
            />
          </Link>
          <Tooltip>
            Checador de Prioridades
          </Tooltip>
        </li>
        <li className={pathname === "/check-dwells" ? "actual-route" : ""}>
          <Link href="/check-dwells">
            <Image
              src="/icons/check-dwell-icon.svg"
              width={17.14}
              height={20}
              alt="Dwell Checker Icon"
            />
          </Link>
          <Tooltip>
            Checador de Dwells
          </Tooltip>
        </li>
      </ul>
    </motion.header>
  )
}
