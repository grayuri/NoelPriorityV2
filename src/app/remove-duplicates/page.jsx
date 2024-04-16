"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AnimatedTitle from '@/components/AnimatedTitle/AnimatedTitle';
import { getNotRedundantValues } from "../../utils/removeDuplicates"
import { verticalAppearence, lateralAppearence } from '@/utils/animatedAppearences';
import './RemoveDuplicatesPage.scss'

export default function RemoveDuplicatesPage() {
  const [redundantValues, setRedundantValues] = useState("")
  const [filteredValues, setFilteredValues] = useState([])
  const [sendButtonMessage, setSendButtonMessage] = useState("Enviar")
  const [copyButtonMessage, setCopyButtonMessage] = useState("Copiar")

  function writeRedundantValues(value) {
    setRedundantValues(value)
    setSendButtonMessage("Enviar")
  }

  function sendRedundantValues() {
    if (redundantValues === "") return
    const values = getNotRedundantValues(redundantValues)
    setFilteredValues(values)
    setSendButtonMessage("Enviados!")
    setCopyButtonMessage("Copiar")
  }

  function copyFilteredValues() {
    let copiedText = ""

    filteredValues.forEach(value => {
      copiedText += `${value}\n`
    })

    navigator.clipboard.writeText(copiedText)

    setCopyButtonMessage("Copiados!")
  }

  return (
    <main className="remove-duplicates-page">
      <AnimatedTitle type="h2">Removedor de <span className="highlight">Duplicatas</span></AnimatedTitle>
      <motion.div className="values-container"
        variants={verticalAppearence}
        initial="hidden"
        animate="visible"
      >
        <div className="redundant-values-container">
          <h3>IDs Redundantes</h3>
          <textarea
            name="redundant-values"
            placeholder='Insira aqui os IDs Escaneáveis armazenados no Rodeo...'
            value={redundantValues}
            onChange={(e) => writeRedundantValues(e.target.value)}
          />
          <button onClick={sendRedundantValues}>{sendButtonMessage}</button>
        </div>
        {
          filteredValues.length > 0 && (
            <motion.section
              className='right-side'
              variants={lateralAppearence}
              initial="hidden"
              animate="visible"
            >
              <ArrowForwardIcon className='arrow' />
              <div className="filtered-values-container">
                <h3>IDs Concisos</h3>
                <div className="values">
                  {
                    filteredValues.map((value, index) => (
                      <motion.div className="value" key={index}
                        variants={lateralAppearence}
                        initial="hidden"
                        animate="visible"
                      >
                        {value}
                      </motion.div>
                    ))
                  }
                </div>
                <button onClick={copyFilteredValues}>{copyButtonMessage}</button>
              </div>
            </motion.section>
          )
        }
      </motion.div>
    </main>
  )
}
